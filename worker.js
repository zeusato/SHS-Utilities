import {
    CheerioWebBaseLoader
} from "langchain/document_loaders/web/cheerio";
import * as cheerio from "cheerio";

const cache = new Map(); // key -> {data, exp}

async function getFx(from, to) {
    const base = from.trim().toUpperCase();
    const quote = to.trim().toUpperCase();
    const key = `FX:${base}-${quote}`;
    const now = Math.floor(Date.now() / 1000);

    const cached = cache.get(key);
    if (cached && cached.exp > now) return cached.data;

    const url = `https://www.google.com/finance/quote/${base}-${quote}?hl=en`;
    const headers = {
        "User-Agent": "Mozilla/5.0",
        "Accept-Language": "en-US,en;q=0.9"
    };

    let html;
    for (let i = 0; i < 3; i++) {
        try {
            const response = await fetch(url, {
                headers
            });
            if (response.ok) {
                html = await response.text();
                break;
            }
        } catch {
            await new Promise(r => setTimeout(r, 300 * 2 ** i));
        }
    }
    if (!html) return {
        error: "fetch_failed",
        provider: "google-finance"
    };

    const $ = cheerio.load(html);
    let price = $('[data-last-price]').attr('data-last-price');

    if (!price) {
        $('script').each((_, el) => {
            const t = $(el).html() || "";
            const m = t.match(/"regularMarketPrice"\s*:\s*{[^}]*"raw"\s*:\s*([\d.]+)/);
            if (m) price = m;
        });
    }

    if (!price) return {
        error: "parse_failed",
        provider: "google-finance"
    };

    const data = {
        rate: Number(price),
        ts: now
    };
    cache.set(key, {
        data,
        exp: now + 300
    });
    return data;
}

export default {
    async fetch(request, env, ctx) {
        const {
            searchParams
        } = new URL(request.url);
        const from = searchParams.get('from');
        const to = searchParams.get('to');

        if (!from || !to) {
            return new Response(JSON.stringify({
                error: 'Missing "from" or "to" query parameters'
            }), {
                status: 400,
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                }
            });
        }

        const data = await getFx(from, to);

        return new Response(JSON.stringify(data), {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        });
    },
};
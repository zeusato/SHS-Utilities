# Office Utilities - Tiện ích Văn phòng

Một bộ sưu tập các công cụ tiện ích dành cho văn phòng, được thiết kế với giao diện hiện đại và thân thiện với người dùng.

## 🌟 Tính năng chính

### 1. Landing Page
- **Giao diện hiện đại**: Thiết kế responsive với gradient đẹp mắt
- **Chào hỏi cá nhân hóa**: Nhập và lưu tên người dùng với khả năng chỉnh sửa
- **Thông tin thời gian thực**: Hiển thị ngày tháng và thời tiết hiện tại
- **Menu điều hướng**: Header với các liên kết chính

### 2. Markdown to HTML Converter
- **Chuyển đổi Markdown**: Chuyển file Markdown sang HTML với giao diện ChatGPT
- **Syntax highlighting**: Hỗ trợ đầy đủ các tính năng định dạng
- **Giao diện đẹp**: Thiết kế giống ChatGPT với màu sắc và layout chuyên nghiệp

### 3. CCCD Reader
- **Đọc QR Code**: Tự động đọc thông tin từ QR code CCCD Việt Nam
- **OCR Fallback**: Sử dụng Tesseract.js để đọc text khi không có QR
- **Batch Upload**: Hỗ trợ upload nhiều ảnh cùng lúc
- **Export Excel**: Xuất kết quả ra file Excel với đầy đủ thông tin

## 🚀 Cách sử dụng

### Landing Page
1. Mở file `index.html` trong trình duyệt
2. Nhập tên của bạn vào ô textbox (sẽ được lưu vào localStorage)
3. Xem thông tin thời gian và thời tiết hiện tại
4. Click vào các tính năng để truy cập

### Markdown Converter
1. Từ landing page, click vào "Markdown to HTML Converter"
2. Hoặc truy cập trực tiếp file `converter.html`
3. Upload file Markdown hoặc paste nội dung
4. Xem kết quả HTML được format đẹp

### CCCD Reader
1. Từ landing page, click vào "CCCD Reader"
2. Hoặc truy cập trực tiếp file `cccd-reader.html`
3. Upload ảnh CCCD (hỗ trợ nhiều file)
4. Hệ thống tự động đọc QR code hoặc dùng OCR
5. Export kết quả ra Excel

## 📁 Cấu trúc dự án

```
utilities/
├── index.html          # Landing page chính
├── converter.html      # Markdown to HTML converter
├── cccd-reader.html    # CCCD Reader tool
├── README.md          # Hướng dẫn sử dụng
└── temp.html          # File tạm thời
```

## 🛠️ Công nghệ sử dụng

- **HTML5**: Cấu trúc semantic
- **CSS3**: Styling hiện đại với Flexbox và Grid
- **JavaScript ES6+**: Tương tác và logic
- **LocalStorage**: Lưu trữ dữ liệu người dùng
- **Geolocation API**: Lấy vị trí cho thông tin thời tiết
- **OpenWeatherMap API**: Dữ liệu thời tiết (cần đăng ký API key)
- **jsQR**: Đọc QR code từ ảnh
- **Tesseract.js**: OCR để đọc text từ ảnh
- **SheetJS**: Xuất dữ liệu ra Excel

## 🔧 Cài đặt thời tiết

Để sử dụng tính năng thời tiết:
1. Đăng ký tài khoản tại [OpenWeatherMap](https://openweathermap.org/)
2. Lấy API key miễn phí
3. Thay thế `'YOUR_API_KEY'` trong file `index.html` với API key của bạn

## 📱 Responsive Design

Website được thiết kế responsive và hoạt động tốt trên:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (< 768px)

## 🎨 Tính năng UI/UX

- **Gradient backgrounds**: Tạo hiệu ứng đẹp mắt
- **Hover effects**: Tương tác mượt mà
- **Smooth transitions**: Chuyển động tự nhiên
- **Modern typography**: Font system hiện đại
- **Card-based layout**: Thiết kế card cho các tính năng

## 🔮 Tính năng tương lai

Dự án được thiết kế để dễ dàng mở rộng với các tính năng mới:
- PDF Converter
- Image Editor
- Document Scanner
- File Manager
- Calendar Integration

## 📄 License

MIT License - Tự do sử dụng và chỉnh sửa.

## 🤝 Đóng góp

Mọi đóng góp đều được chào đón! Hãy tạo issue hoặc pull request để cải thiện dự án.

---

**Lưu ý**: Đây là phiên bản beta. Một số tính năng có thể cần cải thiện thêm. 
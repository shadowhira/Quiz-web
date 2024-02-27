// Kiểm tra tính hợp lệ của thông tin đăng ký

const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const username = form.querySelector("input[name='username']").value;
    const email = form.querySelector("input[name='email']").value;
    const password = form.querySelector("input[name='password']").value;
    const confirmPassword = form.querySelector("input[name='confirm_password']").value;

    // Kiểm tra username, email, password và confirm password
    // Hiển thị thông báo lỗi nếu không hợp lệ

    if (username === "" || email === "" || password === "" || confirmPassword === "") {
        alert("Vui lòng nhập đầy đủ thông tin!");
        return;
    }

    if (password !== confirmPassword) {
        alert("Mật khẩu xác nhận không khớp!");
        return;
    }

    // Gửi dữ liệu đăng ký đến server (demo chưa cần)

    // Xử lý kết quả đăng ký
    // Hiển thị thông báo đăng ký thành công và chuyển hướng đến trang chủ

});

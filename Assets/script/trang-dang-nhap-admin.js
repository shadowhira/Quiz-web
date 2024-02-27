const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const username = form.querySelector("input[name='username']").value;
    const password = form.querySelector("input[name='password']").value;

    // Kiểm tra username và password
    // Hiển thị thông báo lỗi nếu không hợp lệ

    if (username === "" || password === "") {
        alert("Vui lòng nhập đầy đủ thông tin!");
        return;
    }

    // Gửi dữ liệu đăng nhập đến server (xuly-dangnhap.php)

    form.submit();
});

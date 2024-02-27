const menuItems = document.querySelectorAll(".sidebar li a");

menuItems.forEach((item) => {
    item.addEventListener("click", (event) => {
        event.preventDefault();

        const contentElement = document.querySelector(".content");

        // Xóa nội dung hiện tại
        contentElement.innerHTML = "";

        // Hiển thị nội dung tương ứng
        const content = getContent(item.textContent);
        contentElement.appendChild(content);
    });
});

function getContent(title) {
    // Lấy dữ liệu từ server dựa trên title
    // Ví dụ: sử dụng Ajax

    const content = document.createElement("div");
    content.textContent = title;

    return content;
}

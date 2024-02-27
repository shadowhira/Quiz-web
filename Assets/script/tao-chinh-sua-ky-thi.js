// Bổ sung chức năng JavaScript cho trang

const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    // Lấy dữ liệu từ form
    const id = form.querySelector("input[name='id']").value;
    const name = form.querySelector("input[name='name']").value;
    const description = form.querySelector("textarea[name='description']").value;
    const startTime = form.querySelector("input[name='start_time']").value;
    const endTime = form.querySelector("input[name='end_time']").value;
    const duration = form.querySelector("input[name='duration']").value;
    const type = form.querySelector("select[name='type']").value;
    const numberOfQuestions = form.querySelector("input[name='number_of_questions']").value;
    const difficulty = form.querySelector("select[name='difficulty']").value;

    // Kiểm tra dữ liệu

    if (name === "" || description === "" || startTime === "" || endTime === "" || duration === "" || type === "" || numberOfQuestions === "" || difficulty === "") {
        alert("Vui lòng nhập đầy đủ thông tin!");
        return;
    }

    // Gửi dữ liệu đến server để xử lý (xuly-taokithi.php)

    form.submit();
});

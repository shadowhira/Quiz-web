// Xử lý bộ đếm thời gian

const timeLeftElement = document.getElementById("time-left");
const timeLeft = 120 * 60; // 120 phút

let interval = setInterval(() => {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    timeLeftElement.textContent = `<span class="math-inline">\{minutes\}\:</span>{seconds}`;

    timeLeft--;

    if (timeLeft === 0) {
        clearInterval(interval);

        // Hiển thị thông báo hết giờ và gửi bài thi

        alert("Hết giờ!");
    }
}, 1000);

// Xử lý chức năng nộp bài

const btnSubmit = document.getElementById("btn-submit");

btnSubmit.addEventListener("click", () => {
    // Lấy danh sách câu hỏi và câu trả lời của người dùng
    const questions = document.querySelectorAll(".list-questions li");
    const answers = [];

    for (let question of questions) {
        const selectedAnswer = question.querySelector("input[type='radio']:checked");
        if (!selectedAnswer) {
            alert("Bạn chưa chọn câu trả lời cho câu hỏi " + question.dataset.id);
            return;
        }

        answers.push(selectedAnswer.value);
    }

    // Gửi dữ liệu bài thi đến server (demo chưa cần)

    // Hiển thị thông báo nộp bài thành công

    alert("Nộp bài thành công!");

    // Chuyển hướng đến trang kết quả

    window.location.href = "ket-qua.html";
});

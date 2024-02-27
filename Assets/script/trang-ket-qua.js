// Hiển thị số câu trả lời đúng và điểm

const correctAnswersElement = document.getElementById("correct-answers");
const scoreElement = document.getElementById("score");

// Lấy dữ liệu kết quả từ server (demo chưa cần)

// Cập nhật số câu trả lời đúng và điểm

correctAnswersElement.textContent = 45;
scoreElement.textContent = 90;

// Hiển thị đáp án đúng và sai

const questions = document.querySelectorAll(".list-questions li");

for (let question of questions) {
    const selectedAnswer = question.querySelector("input[type='radio']:checked");
    const correctAnswer = question.querySelector(".correct-answer");

    if (selectedAnswer.value === correctAnswer.value) {
        question.classList.add("correct-answer");
    } else {
        question.classList.add("wrong-answer");
    }
}

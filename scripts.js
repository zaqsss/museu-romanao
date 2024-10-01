function toggleDescription(descId) {
    const description = document.getElementById(descId);
    description.style.display = description.style.display === 'none' ? 'block' : 'none';
}

function showcuriosidade() {
    document.getElementById('curiosidadePopup').style.display = 'block';
}

function closeCuriosidadePopup() {
    document.getElementById('curiosidadePopup').style.display = 'none';
}


function showQuizPopup() {
    document.getElementById('quizPopup').style.display = 'block';
}

function closeQuizPopup() {
    document.getElementById('quizPopup').style.display = 'none';
}

function checkAnswer(answer) {
    const feedback = document.getElementById('quizFeedback');
    if (answer === 'Augusto') {
        feedback.textContent = 'Correto! Augusto foi o primeiro imperador romano.';
        feedback.style.color = 'green';
    } else {
        feedback.textContent = 'Errado. A resposta correta é Augusto.';
        feedback.style.color = 'red';
    }
}


function showExitPopup() {
    document.getElementById('exitPopup').style.display = 'block';
}

function closeExitPopup() {
    document.getElementById('exitPopup').style.display = 'none';
}

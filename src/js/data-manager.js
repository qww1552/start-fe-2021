
async function loadClassData() {
    const response = await fetch("class.json");
    return await response.json();
}

async function loadQuizData() {
    const response = await fetch("quiz.json");
    return await response.json();
}

export {loadClassData,loadQuizData}
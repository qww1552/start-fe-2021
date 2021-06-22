let classRowList = [];

async function loadClassData() {
    const response = await fetch("class.json");
    let index = 1;
    for (const classRow of await response.json()) {
        classRowList.push({
            week : index++, 
            title: classRow.title,
            docUrl : classRow.docUrl,
            links : classRow.links,
            gitUrl : classRow.gitUrl,
            date : classRow.date
        })
    }
    return classRowList;
}

async function loadQuizData() {
    const response = await fetch("quiz.json");
    return await response.json();
}

export {loadClassData,loadQuizData}
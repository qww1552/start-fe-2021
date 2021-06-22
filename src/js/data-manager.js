let classRowList = [];
let quizRowList = [];

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
        });
    }
    return classRowList;
}

async function loadQuizData() {
    const response = await fetch("quiz.json");
    quizRowList = await response.json();
    return quizRowList;
}

function classFilter(keyword) {
    switch(keyword) {
        case "모두":
            return classRowList;
        case "도움링크":
            return linkFilter(classRowList);
        case "git" :
            return gitFilter(classRowList);
        case "최신순" :
            return recentFilter(classRowList);
    }
}

function quizFilter(keyword) {
    switch(keyword) {
        case "모두":
            return quizRowList;
        case "git" :
            return gitFilter(quizRowList);
    }
}

function linkFilter(items) {
    let result = [];
    for (const item of items) {
        if (item.links.length > 0) {
            result.push(item);
        }
    }
    return result;
}

function gitFilter(items) {
    let result = [];
    for (const item of items) {
        if (item.gitUrl) {
            result.push(item);
        }
    }
    return result;
}

function recentFilter(items) {
    items.sort((a,b)=>{
        return a.date > b.date ? -1 : a.date < b.date ? 1:0;
    })
    return items;
}

export {loadClassData,loadQuizData, classFilter, quizFilter}
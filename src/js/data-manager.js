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

function classFilter(keyword) {
    switch(keyword) {
        case "모두":
            return classRowList;
        case "도움링크":
            return linkFilter();
        case "git" :
            return gitFilter(classRowList);
        case "최신순" :
            return null;
    }
}

function linkFilter() {
    let result = [];
    for (const classRow of classRowList) {
        if (classRow.links.length > 0) {
            result.push(classRow);
        }
    }
    return result;
}

function gitFilter(list) {
    let result = [];
    for (const row of list) {
        if (row.gitUrl) {
            result.push(row);
        }
    }
    return result;
}

async function loadQuizData() {
    const response = await fetch("quiz.json");
    return await response.json();
}

export {loadClassData,loadQuizData, classFilter}
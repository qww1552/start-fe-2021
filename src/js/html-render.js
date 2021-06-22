import * as DomManager from './dom-manager';
import * as DataManager from './data-manager';

const $classTable = document.querySelectorAll("tbody")[0];
const $quizTable = document.querySelectorAll("tbody")[1];

const $classLoading = document.querySelectorAll(".spinner-border")[0];
const $quizLoading = document.querySelectorAll(".spinner-border")[1];

function init() {
    renderClassTable();
    renderQuizTable();
}

async function renderClassTable() {
    $classLoading.classList.remove("invisible");
    const classData = await DataManager.loadClassData();
    $classLoading.classList.add("invisible");

    $classTable.innerHTML = DomManager.createClassTable(classData);
}

function changeClassTable(data) {
    $classTable.innerHTML = DomManager.createClassTable(data);
}

async function renderQuizTable() {
    $quizLoading.classList.remove("invisible");
    const quizData = await DataManager.loadQuizData();
    $quizLoading.classList.add("invisible");

    $quizTable.innerHTML = DomManager.createQuizTable(quizData);
}

function changeQuizTable(data) {
    $quizTable.innerHTML = DomManager.createQuizTable(data);
}

export {init,renderClassTable,renderQuizTable,changeClassTable,changeQuizTable};
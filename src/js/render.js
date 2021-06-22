import * as DomManager from './dom-manager';
import * as DataManager from './data-manager';


async function render() {
    const classData = await DataManager.loadClassData();
    DomManager.drawClassTable(classData);
    const quizData = await DataManager.loadQuizData();
    DomManager.drawQuizTable(quizData);
}

export {render};
import * as DomManager from './dom-manager';
import * as DataManager from './data-manager';


function render() {

    const data = DataManager.loadClassData();
    console.log(data);
}

export {render};
'use strict';

function findParentElByClass(currentElement, parentClassName) {
    if(currentElement === null) return null;

    if(currentElement.classList.contains(parentClassName)) {
        return currentElement
    }

    return findParentElByClass(currentElement.parentElement, parentClassName);


}

(function (){
    let controllerInstance = controller(view, model);
    view.init(controllerInstance);
    model.init(controllerInstance);
})()

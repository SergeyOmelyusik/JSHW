let DomElement = function() {

    this.create = function(tagName) {
        if(!tagName) return;
        let element = document.createElement(tagName);
        console.log(element);
    }

    this.addClass = function(element,className) {
        let elem = document.querySelector(element);
        elem.classList.add(className);
    }

    this.removeClass = function(element,className) {
        let elem = document.querySelector(element);
        elem.classList.remove(className);
    }

    this.toggleClass = function(element,className) {
        let elem = document.querySelector(element);
        elem.classList.toggle(className);
    }

    this.hasClass = function(element,className) {
        let elem = document.querySelector(element);
        if(elem.classList.contains(className)) {
            console.log(true);
            } else console.log(false);
    }

    this.search = function(element,selector) {
        let elem = document.querySelector(element);
        return console.log(elem.querySelectorAll(selector));
    }

    this.html = function(element, value) {
        let elem = document.querySelector(element);
        let content = elem.innerHTML;
        if (!value) {
            return console.log(elem.innerHTML);
        } else {
             elem.innerHTML = content + value;
        }
    };

    this.attr = function(element,name,value) {
        let elem = document.querySelector(element);
        if (!value) {
            let param = elem.getAttribute(name);
            console.log(param);
                if(param == null) {
                    console.log('Empty attribute');
                }
        } else {
            elem.setAttribute(name, value);
            console.log(elem)
        } 
    }

    this.append = function(element,newElement,beforeElement) {
        let elem = document.querySelector(element);
            newElement = document.createElement(newElement);
            beforeElement = document.querySelector(beforeElement)
        if(!beforeElement) {
            elem.append(newElement);
        } else {
            beforeElement.before(newElement);
        }
    }

    this.on = function(element, eventName, functionName) {
        let elem = document.querySelector(element);
        elem.addEventListener(eventName, functionName);
    };
};

const showMessage = function(event) {
    console.log(this);
    console.log(event.target);
}

let elem = new DomElement(),
    newElement;

elem.create('p');

//elem.addClass('.list','list1');
//elem.removeClass('.list','list1');

elem.toggleClass('button', 'btn_class');
//elem.toggleClass('button', 'btn_class');

elem.hasClass('button', 'btn_class');

elem.search('ul', 'li');

elem.html('.container');
elem.html('p', '<h1> Added title </h1>');

elem.attr('p', 'id');
elem.attr('p', 'id','foto');


elem.append('ul','p')
elem.append('ul','img','li');

elem.on('.btn_click', 'click', showMessage);











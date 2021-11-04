let html = document.querySelector('html');
html.setAttribute('lang', 'en');

let metaUtf8 = document.createElement('meta');
metaUtf8.setAttribute('charset', 'UTF-8');
document.head.appendChild(metaUtf8);

let meta = document.createElement('meta');
meta.setAttribute('name', 'viewport');
meta.setAttribute('content', 'width=device-width, , initial-scale=1.0');
document.head.appendChild(meta);

let linkFonts = document.createElement('link');
linkFonts.setAttribute('href', 'https://fonts.googleapis.com/css2?family=Arvo&family=Montserrat:wght@400;700&display=swap');
linkFonts.setAttribute('rel', 'stylesheet');
document.head.appendChild(linkFonts);

let title = document.createElement('title');
title.innerHTML = 'JS8';
document.head.appendChild(title);

let container = document.createElement('div');
container.classList.add('container');
document.body.appendChild(container);

let pageTitle = document.createElement('h1');
pageTitle.innerHTML = 'Choose Your Option';
pageTitle.classList.add('title');
container.appendChild(pageTitle);

let subTitle = document.createElement('p');
subTitle.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing ';
subTitle.classList.add('subtitle');
container.appendChild(subTitle);

let itemsContainer = document.createElement('div');
itemsContainer.classList.add('item_container');
container.appendChild(itemsContainer);

let item = document.createElement('div');
item.classList.add('item');
itemsContainer.appendChild(item);

let itemTitle = document.createElement('h3');
itemTitle.classList.add('item_title');
itemTitle.innerHTML = 'Freelancer';
item.appendChild(itemTitle);

let itemText = document.createElement('h2');
itemText.classList.add('item_text');
itemText.innerHTML = 'Initially designed to';
item.appendChild(itemText);

let itemReview = document.createElement('p');
itemReview.classList.add('item_review');
itemReview.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing ';
item.appendChild(itemReview);

let start = document.createElement('a');
start.classList.add('start');
start.innerHTML = 'Start here';
start.setAttribute('href', '#');
item.appendChild(start);

let itemClone = item.cloneNode(true);
itemClone.classList.add('item2')
itemsContainer.appendChild(itemClone);

let style = document.createElement('style');
document.head.appendChild(style);
style.innerHTML = `

    * {
        margin: 0;
        padding: 0;
    }
    
    body {
        font-family: 'Arvo', serif;
    }

    .container {
        display: flex;
        align-items: center;
        flex-direction: column;
        padding-top: 80px;
    }

    .title {
        font-size: 36px;
        line-height: 48px;
        color: #212121;
        padding-bottom:15px;
    }

    .subtitle {
        font-size: 18px;
        line-height: 24px;
        color: #9FA3A7;
    }

    .item_container {
        margin-top: 60px;
        border: 1px solid #eee;
        display: flex;
        width: 60%;
        border-radius: 5px;
    }

    .item {
        padding-top: 60px;
        padding-bottom: 75px;
        padding-right: 95px;
        padding-left: 95px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .item_title {
        font-weight: bold;
        text-transform: uppercase;
        font-size: 14px;
        letter-spacing: 2.5px;
        line-height: 15px;
        color:#9FA3A7;
        font-family: 'Montserrat', sans-serif;
        margin-bottom: 20px;
    }

    .item_text {
        font-size: 36px;
        line-height: 48px;
        color: #212121;
        text-align: center;
        margin-bottom: 25px;
    }

    .item_review {
        font-size: 16px;
        line-height: 24px;
        color: #9FA3A7;
        margin-bottom: 55px;
    }

    .start {
        display: block;
        padding-top: 10px;
        padding-bottom: 10px;
        padding-left: 25px;
        padding-right: 25px;
        border:  3px solid #FFC80A;
        border-radius: 30px;
        text-decoration: none;
        text-transform: uppercase;
        color: #212121;
        font-size: 12px;
        font-family: 'Montserrat', sans-serif;
        font-weight: 700;
        letter-spacing: 2.5px;
    }

    .item:hover{
        background-color: #8F75BE;
        transition: 0.5s;
        
    }

    .item:hover .item_title {
        color: #FFC80A;
    }

    .item:hover .item_text,
    .item:hover .item_review,
    .item:hover .start {
        color: #fff;
    } `














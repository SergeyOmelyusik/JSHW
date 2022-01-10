const gallery = function() {
    const list = document.querySelectorAll('.gallery__thumbs');

    if(!list) return;

    const show = function(event) {

        let thumbnail = event.target.closest('a');
        event.preventDefault();
        if(!thumbnail) return;

        const href = thumbnail.href;

        const popupElem = document.createElement('div');
        popupElem.classList.add('popup');

        const modalPopup = document.createElement('div');
        modalPopup.classList.add('popup__modal');

        const closePopup = document.createElement('div');
        closePopup.classList.add('popup__close');
        closePopup.textContent = 'X';

        const contentPopup = document.createElement('div');
        contentPopup.classList.add('popup__content');

        popupElem.append(modalPopup);
        modalPopup.append(closePopup,contentPopup);
        contentPopup.innerHTML = `<img class="image" src="${href}" alt="">`;

        document.body.append(popupElem);

        const img = contentPopup.querySelector('img'); 

        if (img) img.onload = function(event) {

            let wHeight = window.innerHeight;
            let iHeight = event.target.offsetHeight;
            
            if (iHeight > (wHeight * 0.7)) {
                event.target.style.height = (wHeight * 0.7) + 'px';
            }
        }

        const close = function(event) {

            if(!event.target.classList.contains('popup') && !event.target.classList.contains('popup__close')
            ) return;
    
            const popupEl = document.querySelector('.popup');
            popupEl.remove();
        }

        popupElem.addEventListener('click', close);
 
    }

    list.forEach( (item) =>  item.addEventListener('click', show))
}
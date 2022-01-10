const slider = function() {
    const init = function(slider) {

        const sliderList = slider.querySelector('ul');

        if(!sliderList) return;

        const sliderItems = sliderList.querySelectorAll('li');

        if (sliderItems <= 1) return;

        const btnPrev = slider.querySelector('.slider__btn.prev');
        const btnNext = slider.querySelector('.slider__btn.next');

        function prevNext(event) {

            const dir = event.target.classList.contains('prev') ? 'prev' : 'next';
            
            let x = sliderList.style.transform || '0';

            x = x.replace('translateX(', '');
            x = x.replace(')', '');
            x = Math.abs(parseInt(x));

            const item = sliderList.querySelector('li');
            const listWidth = document.querySelector('.slider').offsetWidth;
            const itemWidth = (item.offsetWidth) + ((parseInt(getComputedStyle(item).margin)*2));

           // console.log(itemWidth, listWidth)

            if (dir == 'next' && x < ((itemWidth*(sliderItems.length - (listWidth/itemWidth))))) x += itemWidth;
            if (dir == 'prev' && x > 0) x -= itemWidth;

            sliderList.style.transform = `translateX(-${x}px)`;

        }

        btnPrev.addEventListener('click', prevNext);
        btnNext.addEventListener('click', prevNext);
        
    }

    const elems = document.querySelectorAll('.slider');

    elems.forEach(function(elem) {
        init(elem);
    });
    
}();
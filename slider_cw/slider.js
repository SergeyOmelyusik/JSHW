const slider = function(){
    const init = function(slider) {
        const list = slider.querySelector('ul');

        if (!list) return;

        // let listStyle = window.getComputedStyle(list);

        const items = list.querySelectorAll('li');

        if (items <= 1) return;

        const btnPrev = slider.querySelector('.slider__prev');
        const btnNext = slider.querySelector('.slider__next');

        // const prev = function() {
        //     let x = list.style.transform || '0';

        //     x = x.replace('translateX(', '');
        //     x = x.replace(')', '');
        //     x = Math.abs(parseInt(x));

        //     if (x > 0) x -= 100;

        //     list.style.transform = `translateX(-${x}%)`;
        // }
    
        // const next = function() {
        //     // let matrix = new WebKitCSSMatrix(listStyle.transform);
        //     // let x = matrix.m41; // px

        //     let x = list.style.transform || '0';

        //     x = x.replace('translateX(', '');
        //     x = x.replace(')', '');
        //     x = Math.abs(parseInt(x));

        //     if (x < ((items.length*100)-100)) x += 100;

        //     list.style.transform = `translateX(-${x}%)`;
        // }

        const prevNext = function(event) {
            const dir = event.target.classList.contains('slider__prev') ? 'prev' : 'next';

            let x = list.style.transform || '0';

            x = x.replace('translateX(', '');
            x = x.replace(')', '');
            x = Math.abs(parseInt(x));

            // доработать функцию для листания элементов с большим кол-вом в листе
            // функция должна работать автоматически, если меняется ширина каждого сладай в CSS
            // нужно в функции при каждом клике получать ширину первого слайда
            
            // code
            const item = list.querySelector('li');
            const listWidth = document.querySelector('.slider').offsetWidth;
            const itemWidth = (item.offsetWidth) + ((parseInt(getComputedStyle(item).margin)*2));

           // console.log(itemWidth, listWidth)

            if (dir == 'next' && x < ((itemWidth*(items.length - (listWidth/itemWidth))))) x += itemWidth;
            if (dir == 'prev' && x > 0) x -= itemWidth;

            list.style.transform = `translateX(-${x}px)`;
        }

        if (!btnPrev || !btnNext) return;

        // btnPrev.addEventListener('click', prev);
        // btnNext.addEventListener('click', next);

        btnPrev.addEventListener('click', prevNext);
        btnNext.addEventListener('click', prevNext);
    };
    
    const elems = document.querySelectorAll('.slider');

    elems.forEach(function(elem) {
        init(elem);
    });

}();
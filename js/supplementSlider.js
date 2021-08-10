let toggleItems = document.querySelectorAll('.supplement__item');
let rightItems = document.querySelectorAll('.supplement__right-item');

for (let key in toggleItems) {
    toggleItems[key].onclick = () => {
        rightItems.forEach(el => {
            el.classList.remove('supplement__right-item_active');
            
            setTimeout(() => {
                rightItems[key].classList.add('supplement__right-item_active');
            }, 300);
        });

        toggleItems.forEach(el => {
            el.classList.remove('supplement__item_active');
            toggleItems[key].classList.add('supplement__item_active');
        });
    };
};
document.addEventListener('DOMContentLoaded', function(event) {
    alert('ready');

    const countElements = 4;
    let currentValue = 1;

    const changeContent = (value) => {
        let content = document.querySelector('.content');
        content.innerText = value;
    };

    let pagination = document.querySelector('.pagination');

    let paginationItemCurrent = document.querySelector('.pagination-current>input');
    paginationItemCurrent.value = currentValue;

    paginationItemCurrent.addEventListener('custom-event', function(event) {
        console.log(event.type);
        console.log(event);
        if (event.detail <= countElements & event.detail >= 1) {
            currentValue = event.detail;
            event.currentTarget.value = currentValue;
            //event.currentTarget.dispatchEvent('change');
            console.log(event.currentTarget.value);
            changeContent(currentValue);
        }
    });

    let paginationItemPrevious = document.querySelector('.pagination-previous');
    paginationItemPrevious.addEventListener('click', function(event) {
        console.log(event.currentTarget);
        if (currentValue <= countElements && currentValue > 1) {
            currentValue -= 1;

            let event = new CustomEvent('custom-event', 
            {
                detail: currentValue
            });
            paginationItemCurrent.dispatchEvent(event);
        }
    });

    let paginationItemNext = document.querySelector('.pagination-next');
    paginationItemNext.addEventListener('click', function(event) {
        console.log(event.currentTarget);
        if (currentValue <= countElements - 1 && currentValue >= 1) {
            currentValue += 1;

            let event = new CustomEvent('custom-event', 
            {
                detail: currentValue
            });
            paginationItemCurrent.dispatchEvent(event);
        }
    });
});
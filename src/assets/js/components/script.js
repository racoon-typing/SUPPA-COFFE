
const spolerListNode = document.querySelector('.services__list');
const servicesList = document.querySelectorAll('.services__item');
const bodyList = document.querySelectorAll('.services__item-body');

// services__item-body-open
function handleSpoler(evt) {
    const bodyId = evt.target.closest('.services__item').id;
    servicesList[bodyId].classList.toggle('services__item-open');
}

spolerListNode.addEventListener('click', handleSpoler)

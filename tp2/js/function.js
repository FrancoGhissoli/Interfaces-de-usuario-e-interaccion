const card = document.getElementsByClassName(cardContainer);
const der = document.getElementById(right);
const izq = document.getElementById(left);

der.addEventListener('click', () => {
    for (const cardContainer of cardContainers) {
        card.style.transform = 'translate(-20px, 0px)';
    }
});

function slideDer(){
    document.getElementsByClassName(cardContainer).style.left=positionx -20;
};
function slideIzq(){
    document.getElementsByClassName(cardContainer).style.transform = 'translateX(-100px)';
};

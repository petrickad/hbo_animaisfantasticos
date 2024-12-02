document.addEventListener('DOMContentLoaded', function(){
    const heroSection = document.querySelector('.hero');
    const alturaHeader = heroSection.clientHeight;

    //Esconde e mostra os elementos header
    window.addEventListener('scroll', function(){
        const currentPossition = window.scrollY;

        if (currentPossition < alturaHeader){
            hideHeaderElements();
        }
        else{
            showHeaderElements();
        }
    })
})

function hideHeaderElements(){
    const header = document.querySelector('header');

    header.classList.add('header--is-hiden');
}

function showHeaderElements(){
    const header = document.querySelector('header');

    header.classList.remove('header--is-hiden')
}
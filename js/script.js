


// const txtElements = document.getElementsByClassName("TextWelcome");
// const txtElement = txtElements[0];

// window.addEventListener('scroll', () => {
//     const { scrollTop, clientHeight } = document.documentElement;
//     const rect = txtElement.getBoundingClientRect().top;
//     if (scrollTop > (scrollTop + rect).toFixed() - clientHeight * 2) //modif pour mobile 0.80
//     {
//         txtElements[0].classList.add('active');
//     }
// });

// const collectionCards = document.getElementsByClassName("collectionCard");

// window.addEventListener('scroll', () => {
//     const { scrollTop, clientHeight } = document.documentElement;

//     Array.from(collectionCards).forEach(card => {
//         const rect = card.getBoundingClientRect().top;
//         if (scrollTop > (scrollTop + rect).toFixed() - clientHeight * 0.50) {
//             card.classList.add('active');
//         }
//     });
// });


// function openNav() {
//     alert('test');
// }
const txtElements = document.getElementsByClassName("TextWelcome");
const txtElement = txtElements[0];

window.addEventListener('scroll', () => {
    const { scrollTop, clientHeight } = document.documentElement;
    const rect = txtElement.getBoundingClientRect().top;
    if (scrollTop > (scrollTop + rect).toFixed() - clientHeight * 2) //modif pour mobile 0.80
    {
        txtElements[0].classList.add('active');
    }
});

const collectionCards = document.getElementsByClassName("collectionCard");

window.addEventListener('scroll', () => {
    const { scrollTop, clientHeight } = document.documentElement;

    Array.from(collectionCards).forEach(card => {
        const rect = card.getBoundingClientRect().top;
        if (scrollTop > (scrollTop + rect).toFixed() - clientHeight * 0.50) {
            card.classList.add('active');
        }
    });
});






function toggleMenu() {
    const  menu = document.getElementById("menu");
    menu.classList.toggle("menu-visible");

    const buttonNav = document.getElementById("buttonNav");
    buttonNav.classList.toggle("button-active");
}

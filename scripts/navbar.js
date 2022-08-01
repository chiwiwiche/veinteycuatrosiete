//     const burger = document.querySelector('.burger');
//     const nav = document.querySelector('.nav-links');
//     const navLinks = document.querySelectorAll('.nav-links li');
    


// function myFunctions() {
//     if (burger.addEventListener('click', funt)) {
//         nav.classList.toggle('nav-active');
//     } else {
        
//     }
// }

// myFunctions();


const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    


    burger.addEventListener('click', () => {
        //Toggle nav
        nav.classList.toggle('nav-active');
        


        //Animate links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
                
                
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
                
            }
        });

        burger.classList.toggle('toggle');
        

    });

    nav.addEventListener('click', () => {
        //Toggle nav
        nav.classList.toggle('nav-active');

        //Animate links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
                
                
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
                
            }
        });

        burger.classList.toggle('toggle');
        

    });

    
    
    
}


navSlide();
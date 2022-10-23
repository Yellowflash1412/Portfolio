const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
});

let star1 = document.querySelectorAll('.star1')
   for (let x= 0; x <= 5; x++){
    star1[x].starval = x + 1
    star1[x].addEventListener('click', function (e) {
        for (let y = 0; y <= x; y++){
            star1[y].classList.add('color')
        }
    })
   }



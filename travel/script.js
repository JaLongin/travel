console.log("Ваша оценка - 95 баллов \nОтзыв по пунктам ТЗ:\nНе выполненные/не засчитанные пункты:\n1) на десктоп варианте при клике на урезанную картинку слева или справа изображение меняется по принципу карусели(например если нажать правую картинку та что была в центре на уезжает налево, а та что была видна наполовину оказывается справа) \n2) Анимации плавного перемещения для слайдера \n\nВыполненные пункты:\n1) Три точки внизу отображают \"номер слайда\", то есть каждому слайду соответствует свой кружочек, который становится активным при нахождении соответствующего ему слайда в центре. На мобильном варианте картинка одна, но поверх нее появляются стрелочки навигации (можно сделать как карусель или же затемнять кнопку если слайдер достиг края) \n2) логин попап соответствует верстке его закрытие происходит при клике вне попапа \n3) логин попап имеет 2 инпута (логин и пароль) при нажатии на кнопку Sign In показывается браузерный алерт с введенными данными (для реализации можно использовать тег) \n4) Нажатие на кнопку Register на Login попапе меняет разметку попапа на разметку Sign Up попапа согласно макету (То есть нажатие не закрывает модал а просто меняет его наполнение) ");
let burger = document.querySelector('.burger');
let cls = document.querySelector('.close');
let burgerMenu = document.querySelector('.burger-menu');
let darkWrap = document.querySelector('.dark-wrap');
let burgerLinks = document.querySelectorAll('.menu-list li');
burger.addEventListener('click', function(){
	burgerMenu.classList.toggle('active');
    darkWrap.classList.toggle('active');
});
cls.addEventListener('click', function(){
	burgerMenu.classList.toggle('active');
    darkWrap.classList.toggle('active');
});

burgerLinks.forEach(link => link.addEventListener('click', function(){
        burgerMenu.classList.toggle('active');
        darkWrap.classList.toggle('active');
    }))
let slides = document.getElementsByClassName("destinations-item");
let navlinks = document.querySelectorAll(".eclipses-item")
let arrows = document.querySelectorAll(".arrow");
let currentSlide = 1;
function changeSlide(moveTo){
    if (moveTo == 0){
    for(let i = 0; i < 3; i++)
        navlinks[i].classList.remove("active");
    navlinks[0].classList.add("active");
    slides[0].style.order = 2;
    slides[1].style.order = 3;
    slides[2].style.order = 1;
    arrows[0].classList.remove("active");
    arrows[1].classList.add("active");
    currentSlide = 0;
    }
    if (moveTo == 1){
        for(let i = 0; i < 3; i++)
            navlinks[i].classList.remove("active");
    navlinks[1].classList.add("active");
    slides[0].style.order = 1;
    slides[1].style.order = 2;
    slides[2].style.order = 3;
    arrows[0].classList.add("active");
    arrows[1].classList.add("active");
    currentSlide = 1;
        }
    if (moveTo == 2){
        for(let i = 0; i < 3; i++)
            navlinks[i].classList.remove("active");
    navlinks[2].classList.add("active");
    slides[0].style.order = 3;
    slides[1].style.order = 1;
    slides[2].style.order = 2;
    arrows[0].classList.add("active");
    arrows[1].classList.remove("active");
    currentSlide = 2;
        }
}
arrows[0].addEventListener('click', function(){
    if (arrows[0].classList.contains('active'))
        changeSlide(currentSlide-1);
});
arrows[1].addEventListener('click', function(){
    if (arrows[1].classList.contains('active'))
        changeSlide(currentSlide+1);
});
for(let i = 0; i < 3; i++)
    navlinks[i].addEventListener('click',function() {changeSlide(i)});
if (window.innerWidth < 391)
    changeSlide(0);
let logInLink = document.querySelector('.log-in a');
let registerLink = document.querySelector(".register a");
let popUp = document.querySelector(".pop-up");
let logInOnly = document.querySelectorAll(".log-in-only");
let signUpOnly = document.querySelectorAll(".sign-up-only");
console.log(logInLink);
logInLink.addEventListener('click', function(){
    popUp.classList.remove("sign-up");
    signUpOnly.forEach(item => item.classList.add("hidden"));
    logInOnly.forEach(item => item.classList.remove("hidden"));
});
registerLink.addEventListener('click', function(){
    popUp.classList.add("sign-up");
    signUpOnly.forEach(item => item.classList.remove("hidden"));
    logInOnly.forEach(item => item.classList.add    ("hidden"));
});
document.getElementById("login").addEventListener('click', function(){
    popUp.classList.remove("sign-up");
    signUpOnly.forEach(item => item.classList.add("hidden"));
    logInOnly.forEach(item => item.classList.remove("hidden"));
    popUp.classList.remove("hidden");
    darkWrap.classList.toggle('active');
});
darkWrap.addEventListener('click', function(){
    burgerMenu.classList.remove('active');
    darkWrap.classList.remove('active');
    popUp.classList.add('hidden');
});
input = document.querySelectorAll('.input');
console.log(input);
submtits = document.querySelectorAll('.submit');
submtits.forEach(item => item.addEventListener('click', function(){
 alert(`email:${input[0].value}\npassword:${input[1].value}`);   
}
));
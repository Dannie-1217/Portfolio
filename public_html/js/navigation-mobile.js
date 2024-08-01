"use-strict"

const hamburger = document.querySelector('.hamburger-icon');

const mobile = document.querySelector('.mobile-menu');

const logo =document.querySelector('.logo');


hamburger.addEventListener(
    'click', function(){
        mobile.classList.toggle('active');
    }
)

window.addEventListener(
    'resize',function(){
        if(window.innerWidth>768){
            mobile.className='mobile-menu';
        }
    })



document.getElementById('hb').addEventListener('click', function(){
    document.querySelector('nav').classList.toggle('open');
});

document.getElementById('contact-navbar').addEventListener('click', function(){
    document.querySelector('nav').classList.toggle('open');
});


//Typing Effect
const text = ['student at central peel s.s']
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type() {

    if(count === text.length){
        count = 0;
    }

    currentText = text[count];
    letter = currentText.slice(0, ++index);

    document.querySelector('.typing').textContent = letter;
    if(letter.length === currentText.length){ 
        stop
    }
    setTimeout(type, 150);
}())
//End of Typing Effect







    
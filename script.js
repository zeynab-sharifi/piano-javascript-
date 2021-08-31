const note = document.querySelector('.textarea');
const keys = document.querySelectorAll('.key');

window.addEventListener('keydown' ,function(e){
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);


    if (! key) return;
    const keyNote = key.getAttribute('data-note');

    key.classList.add('playing');
    note.innerHTML= keyNote;
    audio.currentTime = 0;
    audio.play();
    
})

function removeTransition(){
    this.classList.remove('playing');   
}
keys.forEach(key => key.addEventListener('transitionend',removeTransition))
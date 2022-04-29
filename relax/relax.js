const container = document.getElementById('container');
const text = document.getElementById('text');
const container2 = document.getElementById('container2');



// toplam nefes alma ve tutma alanı hesaplama 1.
const totalTime = 7500;
const breathTime = (totalTime/5)*2;
const holdTime = totalTime / 5;




breathAnimation ();



//ekrana yazdırılacak yazıların zaman dilimlerinin ayarlanması ve ekranda gösterilmesi 
function breathAnimation () {
    text.innerText= 'Breathe In!';
    container.className ='container grow'

    setTimeout( () => {
        text.innerText ='Hold';

        setTimeout( () => {
            text.innerText='Breathe Out!';
            container.className='container shrink';
        },holdTime);
    },breathTime);
}

setInterval(breathAnimation,totalTime);


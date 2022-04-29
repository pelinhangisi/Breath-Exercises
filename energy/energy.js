const container3 = document.getElementById('container3');
const text3 = document.getElementById('text3');


// toplam nefes alma ve tutma alanı hesaplama 2.
const totalTime3 = 6000;
const breathTime3 = (totalTime3/6)*4;
const breatOut = totalTime3 / 3;



breathAnimation3();


function breathAnimation3 () {
    text3.innerText="Breathe In!";
    container3.className = 'container3 grow';

    setTimeout( () => {
        text3.innerText = "Breathe Out!";
        container3.className ='container3 shrink';
        
    }, breathTime3);

}


setInterval(breathAnimation3,totalTime3);
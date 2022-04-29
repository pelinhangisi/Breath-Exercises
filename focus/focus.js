const container2 = document.getElementById('container2');
const text2 = document.getElementById('text2');


// toplam nefes alma ve tutma alanı hesaplama 2.
const totalTime2 = 16000;
const breathTime2 = (totalTime2/8)*2;
const holdTime2 = (totalTime2 / 8)*2;



breathAnimation2();


function breathAnimation2 () {
    text2.innerText="Breathe In!";
    container2.className = 'container2 grow';

    setTimeout( () => {
        text2.innerText = "Hold";

        setTimeout ( () => {
            text2.innerText = "Breathe Out!";
            container2.className = 'container2 shrink';

            setTimeout( () => {
                text2.innerText ="Hold";
            }, breathTime2);
        },holdTime2);
    }, breathTime2);

}


setInterval(breathAnimation2,totalTime2);
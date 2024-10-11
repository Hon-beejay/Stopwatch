const hrs = document.getElementById('hrs');
const mins = document.getElementById('mins');
const secs = document.getElementById('secs');
const hr = document.getElementById('hr');
const min = document.getElementById('min');
const sec = document.getElementById('sec');
const icon = document.getElementById('icon');
const rst = document.getElementById('rst');
const str = document.getElementById('str');
const pauseBtn = document.querySelector('#pau');

icon.addEventListener('click',function(){
    if(hrs.value <= 9 && hrs.value.toString().length > 1 && hrs.value <=24){
        hr.innerHTML= hrs.value;
    }
    else if(hrs.value >= 10 && hrs.value.toString().length > 1 && hrs.value <=24){
        hr.innerHTML= hrs.value;
    }    
    else if(hrs.value <= 9 && hrs.value.toString().length <= 1 && hrs.value <=24){
        hr.innerHTML= '0' + hrs.value;
    }
    else{
        hr.innerHTML= 'error'
    }


    if(mins.value <= 9 && mins.value.toString().length > 1 && mins.value <=60){
        min.innerHTML= mins.value;
    }
    else if(mins.value >= 10 && mins.value.toString().length > 1 && mins.value <=60){
        min.innerHTML= mins.value;
    } 
    else if(mins.value <= 9 && mins.value.toString().length <= 1 && mins.value <=60){
        min.innerHTML= '0' + mins.value;
    }
    else{
        min.innerHTML= 'error'
    }


    if(secs.value <= 9 && secs.value.toString().length > 1 && secs.value <=60){
        sec.innerHTML= secs.value;
    }
    else if(secs.value >= 10 && secs.value.toString().length > 1 && secs.value <=60){
        sec.innerHTML= secs.value;
    } 
    else if(secs.value <= 9 && secs.value.toString().length <= 1 && secs.value <=60){
        sec.innerHTML= '0' + secs.value;
    }
    else{
        sec.innerHTML= 'error'
    }

    hrs.value=' '
    mins.value=' '
    secs.value=' '
    str.style.display = 'inline'

    let intervalId;
    let isPaused = false;
    let hrTimer = 0;
    let minTimer = 0;
    let secTimer = 0;

    str.addEventListener('click', function() {
        hrTimer = parseInt(hr.innerHTML, 10);
        minTimer = parseInt(min.innerHTML, 10);
        secTimer = parseInt(sec.innerHTML, 10);

        startTimer();
    });

    function startTimer() {
        clearInterval(intervalId);
        
        intervalId = setInterval(() => {
            if (!isPaused) {
                if (secTimer > 0) {
                    secTimer -= 1;
                } else if (minTimer > 0) {
                    minTimer -= 1;
                    secTimer = 59;
                } else if (hrTimer > 0) {
                    hrTimer -= 1;
                    minTimer = 59;
                    secTimer = 59;
                } else {
                    clearInterval(intervalId); 
                }

                sec.innerHTML = secTimer < 10 ? '0' + secTimer : secTimer;
                min.innerHTML = minTimer < 10 ? '0' + minTimer : minTimer;
                hr.innerHTML = hrTimer < 10 ? '0' + hrTimer : hrTimer;
            }
        }, 1000);
    }

    pauseBtn.addEventListener('click', function() {
        if (isPaused) {
            isPaused = false;
            pauseBtn.innerHTML = 'Pause';
            startTimer(); 
        } else {
            isPaused = true;
            pauseBtn.innerHTML = 'Play';
            clearInterval(intervalId);
        }
    });

    rst.addEventListener('click', function() {
        hr.innerHTML = '00';
        min.innerHTML = '00';
        sec.innerHTML = '00';
        clearInterval(intervalId);
        isPaused = false;
        pauseBtn.innerHTML = 'Pause';
        str.style.display = 'none'
    });

});


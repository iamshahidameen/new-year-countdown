const 
days = document.getElementById('days'),
hours = document.getElementById('hours'),
minutes = document.getElementById('minutes'),
seconds = document.getElementById('seconds'),
countdown = document.getElementById('countdown'),
year = document.getElementById('year'),
loading = document.getElementById('loading');

const currentYear = new Date().getFullYear();

const newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`);

function updateNewYearCounter(){
    const
    currentTime = new Date(),
    diff = newYearTime - currentTime;

    const 
    d = Math.floor(diff / 1000 / 60 / 60 / 24),
    h = Math.floor(diff / 1000 / 60 / 60) % 24,
    m = Math.floor(diff / 1000 / 60) % 60,
    s = Math.floor(diff / 1000) % 60;

    days.innerHTML = d;
    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
    
}

setInterval(updateNewYearCounter, 1000)
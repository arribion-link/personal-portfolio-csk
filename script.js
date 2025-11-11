// alert('script connected')

// digital clock
let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
setInterval(() => {
    let current_time = new Date();
    hrs.innerText = current_time.getHours();
    min.innerText = current_time.getMinutes();
    sec.innerText = current_time.getSeconds();
}, 1000);

// navbar toggle

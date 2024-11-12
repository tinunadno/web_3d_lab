document.addEventListener("DOMContentLoaded", function () {
    let clock = document.getElementById('clock');

    function time() {

        let date = new Date();

        let data  = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();

        let month = date.getMonth() < 10 ? '0' + date.getMonth() : date.getMonth();


        let year = date.getFullYear();
        let hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
        let minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
        let seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();



        clock.innerHTML = `${data}.${month}.${year}\n${hours}:${minutes}:${seconds}`;
    }

    setInterval(time, 1000);
    time();
});
window.onload = function() {
    document.getElementById('miModal').classList.add('mostrar');
    
    setTimeout(function() {
        document.getElementById('miModal').classList.remove('mostrar');
    }, 4000); 
};

document.getElementById('cerrarModal').addEventListener('click', function() {
    document.getElementById('miModal').classList.remove('mostrar');
});

let cuentaRegresiva = document.getElementById('cuenta-regresiva');
let horas = 9; 
let minutos = 12;
let segundos = 18;
let interval;

function actualizarCuentaRegresiva() {
    if (horas === 0 && minutos === 0 && segundos === 0) {
        clearInterval(interval);
    } else {
        if (segundos === 0) {
            if (minutos === 0) {
                horas--;
                minutos = 59;
                segundos = 59;
            } else {
                minutos--;
                segundos = 59;
            }
        } else {
            segundos--;
        }

        cuentaRegresiva.innerText = `${horas}:${minutos < 10 ? '0' + minutos : minutos}:${segundos < 10 ? '0' + segundos : segundos}`;
    }
}

cuentaRegresiva.innerText = `${horas}:${minutos < 10 ? '0' + minutos : minutos}:${segundos < 10 ? '0' + segundos : segundos}`;

interval = setInterval(actualizarCuentaRegresiva, 1000); 


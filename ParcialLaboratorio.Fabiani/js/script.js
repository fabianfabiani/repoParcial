// obtener los elementos del dom
const changeBtn = document.getElementById('changeBtn');

const dollarValue = document.getElementById('dollarValue');

const changeBody = document.getElementById('changeBody');

const darkModeToggle = document.getElementById('darkModeToggle');

const clockDiv = document.getElementById('clock');

//Funcion para mostrar el alerta de cambios
const showAlert = () => {
    Swal.fire({
        icon: "info",
        title: "Hubo cambios en el dolar",
        showConfirmButton: false,
        timer: 5000
    });
}

//Función para actualizar el reloj

const updateClock = () => {
    // Obtenemos con el métood Date la fecha y hora actual de Argentina
    const now = new Date();

    //Obtener la hora que es a partir de la variable
    const hours = now.getHours();

    //Obtener los minutos
    const minutes = now.getMinutes();

    //Obtener los segundos
    const seconds = now.getSeconds();

    clockDiv.textContent = `${hours}:${minutes}:${seconds}`;
}

//Actualizar reloj cada segundo
setInterval(updateClock, 1000);

// Función para cambiar a dark mode
const toggleDarkMode = () => {
    document.body.classList.toggle('dark-mode');
    darkModeToggle.classList.toggle('botonDark')
    if (darkModeToggle.textContent == "Activa Dark Mode") {
        darkModeToggle.textContent = "Activar vista normal"
    } else {
        darkModeToggle.textContent = "Activa Dark Mode"
    }
}

const inputPesos = document.getElementById("pesos")
const btnConvertir = document.getElementById("convertir")
const parrafoDolares = document.getElementById("dolares")

//Escuchador de eventos
darkModeToggle.addEventListener('click', toggleDarkMode);

// Mostrar el valor del dolar
function convertirPesosADolar() {
    fetch("https://dolarapi.com/v1/dolares/blue")
        .then(response => response.json())
        .then(data => {
            dollarValue.textContent = `$${data.compra} (Compra) - $${data.venta} (Venta)`
            const cantPesos = inputPesos.value
            const result = (cantPesos / data.venta).toFixed(2)
            parrafoDolares.textContent = `dolares $` + result
        })
        .catch(error => {
            console.error('Error al obtener el valor del dolar', error)
        })
}

btnConvertir.addEventListener("click", convertirPesosADolar)


// Mostrar cambios en modal

// changeBtn.addEventListener('click', () => {
//     changeBody.textContent = `Compra anterior: $${jsonData.compra} - Venta anterior: $${jsonData.venta}`
//     // $('#changeModal').modal('show');

//     //Simular alertas de cambio 
//     showAlert();
// })

// function convertirPesosADolar(dat) {
//     const cantPesos = inputPesos.value
//     const result = dolarCompra / cantPesos
//     return result
// }

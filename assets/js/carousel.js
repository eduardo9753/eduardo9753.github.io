let html = document.querySelector(".reloj");

function cargarReloj() {
    setInterval(() => {
        let tiempo = new Date();
        
    
        let dia = tiempo.getDate();
        let mesActual = new Intl.DateTimeFormat('es-ES', { month: 'long'}).format(new Date());
        let anio = tiempo.getFullYear();
        let horas = tiempo.getHours();
        let minutos = tiempo.getMinutes();
        let segundos = tiempo.getSeconds();

        if(segundos < 10){
            segundos = "0"+segundos;
        }

        if(horas == '0'){
            horas = "12";
        }

        if(minutos < 10){
            minutos = "0"+minutos;  
        }

        html.innerHTML = horas+" : "+minutos+" : "+segundos+"   .   "+dia+" de "+mesActual+ " del "+anio 

        
        console.log(mesActual) 
    }, 1000);
}

cargarReloj();
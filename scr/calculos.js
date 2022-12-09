var desc = 0,
    dias=0,
    td;

function MensajeTipoSeguro(){
    var indice = seguro.selectedIndex;
    
    if(indice==0){
        alert("Cubre daños al vehículo rentado y daños a vehículos terceros involucrados en un accidente de tránsito."+
        "\n"+"Costo de alquiler diario: $ 5.45 por día.");
    }
    else{
        if (indice==1) {
            alert("Cubre la Protección Básica Obligatoria (PBO) más daños a propiedades de terceros, incendio e inundaciones."+
            "\n"+"Costo de alquiler diario: $ 9.50 por día.");
        } else {
            alert("Cubre la Protección Extendida de Daños(PED) más gastos médicos para los ocupantes del vehículo."+
            "\n"+"Costo de alquiler diario: $ 11.25 por día.");
        }
    }
}

function CalcularDias(){
    let fechaR = new Date(document.getElementsByClassName("fechas")[0].value).getTime();
    let fechaD = new Date(document.getElementsByClassName("fechas")[1].value).getTime();

    dias= fechaD-fechaR;
    dias = Math.round(dias / (1000 * 60 * 60 * 24));

    document.getElementsByClassName('resultados')[0].value = dias;
}

function CalcularTarifa(){
    var tdv = Number(document.getElementById("tipoVehiculo").value);
    var tds = Number(document.getElementById("seguro").value);
    td = tdv + tds;
    var totalTD = 0;
    /*Dias ya lo había calculado anteriormente*/ 

    if (dias > 30 && dias < 120) {
        totalTD = td - 0.15;
    } else {
        if (dias >= 120 && dias <= 360) {
            totalTD = td - 0.25;
        }else{
            if (dias<3) {
                alert("La cantidad de días no son correctos");
            } 
            else{
                totalTD = td;
            }
        }
    }

    document.getElementsByClassName('resultados')[1].value = "$"+totalTD;
}

function ObtenerRegion(cca3) {
    var url = `https://restcountries.com/v3.1/alpha?codes=${cca3}`;
    $.get(url, function (data) {
        Pais.Region = data[0].region;
        if (Pais.Region === "Americas" && Pais.Region === "Europe") {
            desc = 0.10;
        } else {
            if (Pais.Region === "Africa") {
                desc = 0.05;
            }
        }
    })
};

function CalcularTP(){
    let total=td * dias -((td * dias) * desc)
    document.getElementsByClassName('resultados')[2].value = "$"+ Math.round((total + Number.EPSILON) * 100) / 100;
    
}
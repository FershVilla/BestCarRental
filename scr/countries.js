/*var nombreRegion="";
var listaCCA3 = [];
var listaRegiones=[];*/

$(document).ready(function(){
    /*function CargarPaises(){
        $.getJSON("https://restcountries.com/v3.1/all", function(data) {
            var listaPaises = [];
            
            for(var i=0; i<Object.keys(data).length; i++){
                listaPaises.push(data[i].name.common)
                /* listaCCA3.push(data[i].cca3)
                /*listaRegiones.push(data[i].region)
            }
            
           listaPaises.forEach(element => {
                var pais=$("<option></option>").val(element).text(element)
                $("#nacionalidad").append(pais)
            })

            listaCCA3.forEach(element => {
                var cca=$("<option></option>").val(element).text(element)
                $("#nacionalidad").value(cca)
            })

            for(var i=0; i<listaCCA3.length; i++){
                if(nacionalidad.selectedIndex==i){
                   nacionalidad.value=listaCCA3[i]
                }
            }
        })
    }*/
    
    function CargarCombo() {
        $.getJSON("https://restcountries.com/v3.1/all", function (data) {
            for (var i = 0; i < Object.keys(data).length; i++)
                $("#nacionalidad").append(`<option value=${data[i].cca3}>${data[i].name.common}</option>`);
        })
    }
    CargarCombo()
})

/*function ObtenerRegion(cca3){
   alert(listaCCA3[0])

    for(var i=0; i<listaRegiones.length; i++){
        if(i==nacionalidad.selectedIndex){
            nombreRegion=listaRegiones[i];
        }
    }
    alert(nombreRegion);
    var url = "https://restcountries.com/v3.1/alpha?codes=[cca3]"

    $.get(url.replace("[cca3]", cca3), function(data){
        nombreRegion=data[0].region
    })

    /*alert(nombreRegion)
};*/
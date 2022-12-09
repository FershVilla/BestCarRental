function Guardar() {
  // PASO 1: Obtener los datos digitados
  let fechaR = document.getElementsByClassName("fechas")[0].value;
  let fechaD = document.getElementsByClassName("fechas")[1].value;
  let pais = nacionalidad.options[nacionalidad.selectedIndex].text;
  let tipoV = tipoVehiculo.options[tipoVehiculo.selectedIndex].text;
  let seguroV = seguro.options[seguro.selectedIndex].text;
  let dias = document.getElementsByClassName("resultados")[0].value;
  let tarifaD = document.getElementsByClassName("resultados")[1].value;
  let tarifaT = document.getElementsByClassName("resultados")[2].value;

  // PASO 2: Validar arreglo de vehiculo
  let vehiculoDb = JSON.parse(localStorage.getItem("vehiculos"));
  if (!vehiculoDb) {
    vehiculoDb = [];
  }

  // PASO 3: Instanciar el objeto
  const oVehiculo = {
    fechaR: fechaR,
    fechaD: fechaD,
    pais: pais,
    tipoV: tipoV,
    seguroV: seguroV,
    dias: dias,
    tarifaD: tarifaD,
    tarifaT: tarifaT,
  };

  vehiculoDb.push(oVehiculo);

  // PASO 4: Guardarlo en el navegador
  localStorage.setItem("vehiculos", JSON.stringify(vehiculoDb));
  alert("Vehiculo guardado exitosamente");
}

// function CargarVehiculo() {
//   const vehiculos = JSON.parse(localStorage.getItem("vehiculos"));

//   if (vehiculos) {
//     let tarifa = "";
//     vehiculos.forEach((vehiculo) => {
//       tarifa = `<option>${vehiculo.tarifaD}</option>`;
//     });

//     document.getElementsByClassName("resultados")[1].innerHTML  = tarifa;
//   }
// }

// CargarVehiculo();

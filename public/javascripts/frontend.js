//global variable
var graficaData;

//Change grafica dropdown display to selected item
$(document).ready(function(){
  $('#graficas_drop a').click(function(){
    $('#selectedGrafica').text($(this).text());
    graficaData = $(this).data();
    });
});

//Change criptomoneda dropdown display to selected item
$(document).ready(function(){
  $('#cripto_drop a').click(function(){
    $('#selectedCripto').text($(this).text());
    });
});

//Set costoKw to placeholder when value is 0
function func(e) {
  if(e.target.value==e.target.getAttribute("min")){
    e.target.value="";
  }
}
document.getElementById("costoKW").addEventListener('click', func);
document.getElementById("costoKW").addEventListener('keyup', function(e){e.target.click()});


/*Gráfico start*/
    var xyValues = [89,24,65,45,NaN,NaN];
    var xyValues2 = [NaN,NaN,NaN,45,24,46];
    var labels= []
    for (i=0;i<6;i++){
      labels[i]=i-3+' dias';
    }
    const ctx = document.getElementById("myChart").getContext("2d")
    
    const myChart = new Chart(ctx, {
      type: "line",
      data: {
        datasets: [
          {
            pointRadius: 4,
            pointBackgroundColor: "rgb(0,0,255)",
            data: xyValues,
          },
        ],
        labels: labels,
        datasets: [{
          label: 'Precio Pasado',
          data: xyValues,
          fill: true,
          borderColor: 'rgb(255, 35, 1)',
          tension: 0.1
        },{
          label: 'Precio Futuro',
          data: xyValues2,
          fill: true,
          borderColor: 'rgb(1, 35, 1)',
          tension: 0.1
        }],
      },
      options: {
        responsive:true,
        legend: { display: false },
        scales: {
          xAxes: [{ ticks: { min: 40, max: 160 } }],
          yAxes: [{ ticks: { min: 6, max: 16 } }],
          xAxes: [{ ticks: { min: -10, max: 120 } }],
          yAxes: [{ ticks: { min: 0, max: 90 } }],
        },
      },
    });
/*Grafico End*/

/*$(document).ready(function (){
  $('#simular').click(function(){
    /*var graficaId = $('#graficas_drop option:selected').data('id');
    var graficaHasheo = $('#graficas_drop option:selected').data('frecuenciaDeHasheo');
    var graficaPrecio = $('#graficas_drop option:selected').data('precio');
    var graficaConsumo = $('#graficas_drop option:selected').data('consumo');
    var graficaData= $('#graficas_drop option:selected').data();
	
    console.log(graficaData);
    
    console.log(graficaData.id);
    console.log(graficaData.frecuenciaDeHasheo);
    console.log(graficaData.precio); 
    console.log(graficaData.consumo);
    var cantidad = $('#grafica_cantidad').val();
    //console.log('%d, %d, %d, %d, %d', graficaId, graficaHasheo, graficaPrecio, graficaConsumo, cantidad);
    var precio = graficaPrecio * cantidad;
    var consumo = graficaConsumo * cantidad;
    var hasheo = graficaHasheo * cantidad;
    $('#consumo_res').text(consumo);    
    $('#hasheo_res').text(hasheo);
  });
});*/

$(document).ready(function (){
  $('#simular').click(function(){
   
	  var graficaNombre = $('#selectedGrafica').text();  
	  
   console.log(graficaData);
   
   //console.log(graficaData.id);
   //console.log(graficaData.frecuenciadehasheo);
   //console.log(graficaData.precio);
   //console.log(graficaData.consumo);
   
   var cantidad = parseInt($('#grafica_cantidad').val());
   
   console.log(cantidad);
   
    var precio = graficaData.precio * cantidad;
    var consumo = graficaData.consumo * cantidad;
    var hasheo = graficaData.frecuenciadehasheo * cantidad;
    
    $('#consumo_res').text(consumo);    
    $('#hasheo_res').text(hasheo);
  
	
  });
});

    

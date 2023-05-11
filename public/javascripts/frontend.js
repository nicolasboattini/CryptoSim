//Declaramos las variables básicas
var graficaData;
var criptoValue;

//Cambia el valor mostrado en el dropdown 'gráfica'
$(document).ready(function(){
  $('#graficas_drop a').click(function(){
    $('#selectedGrafica').text($(this).text());
    graficaData = $(this).data();
    });
});

//Cambia el valor mostrado en el dropdown 'criptomoneda'
$(document).ready(function(){
  $('#cripto_drop a').click(function(){
    $('#selectedCripto').text($(this).text());
    criptoValue = $(this).data();
    });
});


//La siguiente función se activa en cuanto se apriete 'Simular'
$(document).ready(function (){
  $('#simular').click(function(){
   
    var graficaNombre = $('#selectedGrafica').text();   
    var cantidad = parseInt($('#grafica_cantidad').val());
    var precio = graficaData.precio * cantidad;
    var consumo = graficaData.consumo * cantidad;
    var hasheo = graficaData.frecuenciadehasheo * cantidad;
    var costokwh = parseFloat($('#costoKW').val()).toFixed(4);
    var costeenergetico = consumo * costokwh;
    var valuecripto = (criptoValue.value).toString();

    data = predict(datex);
    addData(data);    
    $('#consumo_res').text(costeenergetico.toFixed(4)+' USD/H');    
    $('#hasheo_res').text(hasheo+' MH/s');
    $('#precio_res').text(precio+' $');
    $('#watt_res').text((consumo*1000).toFixed(1)+' W');
    $('#res_meses').text(calcular_meses(data,consumo, parseFloat(costokwh),hasheo, precio,valuecripto));
  });
});

    

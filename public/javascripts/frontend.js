//global variable
var graficaData;
var criptoValue;
//ARREGLAZO
datos = [3128.640780542462,
  2881.613122162859,
  2792.3038477186237,
  2768.9716520348597,
  2632.49139911745,
  2574.513383778016,
  2644.153655546016,
  2594.700959110155,
  2599.9335696870216,
  2771.890509646429,
  2785.3389569017427,
  2629.48312082149,
  2919.294962425658,
  2977.276039756805,
  2953.315776286441,
  2836.9063366005576,
  2619.356137634489,
  2668.70597865687,
  2558.359874049847,
  2498.658864965217,
  2576.6271539947625,
  2731.037685293996,
  2611.4647225047097,
  2562.8323535359655,
  2579.4581356883637,
  2518.492845270615,
  2591.5420409591425,
  2620.363852420936,
  2771.759457292368,
  2817.401074966818,
  2945.7459101862714,
  2947.226158224087,
  2860.641960901919,
  2896.5869324317464,
  2969.78498365825,
  3028.8352577107285,
  3106.657023584939,
  3106.072054158695,
  3140.8757105064406,
  3285.1730967305425,
  3328.9341246867148,
  3401.184431040135,
  3383.7887617814154,
  3283.3028425717257,
  3451.1960908672754,
  3440.3362384891684,
  3521.5847247785246,
  3520.9671175043636,
  3422.9698837547116,
  3171.371104498954,
  3232.834988999582,
  3192.0250912893603,
  3265.938067729151,
  3219.159553453764,
  2992.7021064252435,
  3038.209421996366,
  3121.399823462041,
  3023.417211885316,
  3045.42807480128,
  3066.3580141449797,
  2995.719421019825,
  3061.8905711469047,
  3104.688447526111,
  3079.6764776018495,
  2987.4888760341605,
  2967.085285238213,
  2940.6879777714407,
  2922.901865199808,
  3008.3363470853,
  2806.748835957046,
  2889.5922230230817,
  2932.455083612903,
  2817.4898821916195,
  2738.1741359527714,
  2832.513106895354,
  2861.3723755560436,
  2786.0472478011084,
  2942.052313122658,
  2753.936566546688,
  2699.7072470893745,
  2641.229106940243,
  2517.8299224886478,
  2249.8909622207443,
  2344.797715643986,
  2080.910243657776,
  1966.6991711336661,
  2010.214051125259,
  2064.229357512243,
  2147.047447880575,
  2025.8886983912162,
  2095.178884796724,
  1915.1771232664505,
  2023.8482593608173,
  1963.9909395294865,
  1978.1471325624789,
  2046.6463496545232,
  1974.5811944790914,
  1979.770545006472,
  1944.8428445072448,
  1807.9694742881136,
  1724.8757340323443,
  1798.6948545788846,
  1814.9831598025937,
  1995.9364841552344,
  1944.078766836179,
  1828.8926546074292,
  1833.089840845753,
  1776.979907458187,
  1804.2616695112486,
  1805.3313949894373,
  1860.1813068416047,
  1818.3877119829308,
  1794.539625671828,
  1788.4182866616045,
  1663.844367412088,
  1530.0386174317211,
  1454.6867601728409,
  1205.5952855404787,
  1214.8662649132034,
  1230.3643353556051];

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
    criptoValue = $(this).value();
    });
});

//Set costoKw to placeholder when value is 0
/*function func(e) {
  if(e.target.value==e.target.getAttribute("min")){
    e.target.value="";
  }
}
document.getElementById("costoKW").addEventListener('click', func);
document.getElementById("costoKW").addEventListener('keyup', function(e){e.target.click()});*/
//---------------------------------------------
function addData(datos) {
  var data1=[];var data2 = [];
  for (var k=0;k<120;k++){
    data1[k]=datos[k];
    data2[k]= NaN;
  }
  for (var m=120;m<240;m++){
    data1[m]=NaN;
    data2[m]= datos[m];
  }
  myChart.data.datasets[0].data = data1;
  myChart.data.datasets[1].data = data2;
  myChart.update();
}
//---------------------------------------------
function predict(datos){
  let sts = statistics(datos);
  for (var k = 120; k < 240; k++) {
    if(datos[k-2]>datos[k-1]){
      datos[k]= datos[k-1] -(datos[k-1]-sts[0])*0.03+((Math.random())*100-50);
    }else{
      datos[k]= datos[k-1]+(sts[1]-datos[k-1])*0.03+((Math.random())*100-50);
    }
  } 
 return datos;
};
//---------------------------------------------
function statistics(data){
  let max = -1; let min = Number.MAX_VALUE; let total = 0;
  for (var i = 0; i < data.length; i++) {
    if (data[i]>max) {max = data[i]};
    if (data[i]<min) {min = data[i]};
    total += data[i];
 }
 const ret=[min,max,total/data.length]
 return ret
}
//---------------------------------------------
function calcular_meses(datos,tarjeta_consumo,costokwh,tarjeta_hasheo, tarjeta_costo, cmoneda){  
  var cdiario = tarjeta_consumo*costokwh*24;//costo diario de la electricidad
  var d = 0; var datavg = 0;var ganancia = -tarjeta_costo;
  if (cmoneda =='bitcoin'){
      q=tarjeta_hasheo/240963855400;
  }else{
      q=tarjeta_hasheo/67476.3833;
  }
  
  for(var k=120;k<240;k++){
    datavg = datavg + datos[k];
  }
  datavg = datavg/120;
  do{
    d++;
    if (d<120){
      ganancia = ganancia +((q*datos[d+120])-cdiario);
    }else{
      ganancia = ganancia +(q*datavg-cdiario);
    }
  }while(ganancia<0 && d < 3600);
  if (d<3600){
    return (d/30).toFixed(2)+' meses';
  }else{
    return 'No rentable'
  }
}
//---------------------------------------------
$(document).ready(function (){
  $('#simular').click(function(){
   
    var graficaNombre = $('#selectedGrafica').text();   
    var cantidad = parseInt($('#grafica_cantidad').val());
    var precio = graficaData.precio * cantidad;
    var consumo = graficaData.consumo * cantidad;
    var hasheo = graficaData.frecuenciadehasheo * cantidad;
    //falta una forma de extraer los kwh, y la moneda elegida, y arreglar el tema de la api
    var costokwh = parseFloat($('#costoKW').val()).toFixed(4);
    var costeenergetico = consumo * costokwh;
    data = predict(datos);
    addData(data);    
    $('#consumo_res').text(costeenergetico.toFixed(4)+' USD/H');    
    $('#hasheo_res').text(hasheo+' MH/s');
    $('#precio_res').text(precio+' $');
    $('#watt_res').text((consumo*1000).toFixed(1)+' W');
    $('#res_meses').text(calcular_meses(data,consumo, 0.05,hasheo, precio,'ethereum'));
  });
});

    

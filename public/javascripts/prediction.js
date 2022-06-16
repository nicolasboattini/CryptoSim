//1. Import coingecko-api
const CoinGecko = require('coingecko-api');

//2. Initiate the CoinGecko API Client
const CoinGeckoClient = new CoinGecko();

//3. Make calls
async function predict(cmoneda){
  const datos =[]
  const Objeto = {
    days: '120',
    vs_currency: 'usd'
  }
  let data2 = await CoinGeckoClient.coins.fetchMarketChart(cmoneda, Objeto);
  for (var i = 0; i < 120; i++) {
    datos[i]= data2.data.prices[i][1];
 }
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

async function calcular_meses(datos,tarjeta_consumo,costokwh,tarjeta_hasheo, tarjeta_costo, cmoneda){  
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
      return d/30+' meses';
    }else{
      return 'No rentable'
    }
}

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

async function main(){
  data3 = await predict('ethereum');
  console.log(data3);
  console.log(await calcular_meses(data3, 0.409, 0.05,120, 2000,'ethereum'));//calcula el tiempo en meses que tarda
  //El consumo esta en kw
  //Costo kwh corrientes: 6,2905 = 0.05 usd
  //Costo por hora = consumo*costokwh
  //Costo por mes = chora*24*30 (asumiendo meses de 30 días)

}

main();
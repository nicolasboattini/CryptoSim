//1. Import coingecko-api
const CoinGecko = require('coingecko-api');

//2. Initiate the CoinGecko API Client
const CoinGeckoClient = new CoinGecko();

//3. Make calls
var predict = async() => {
  const datos =[]
  const Objeto = {
    days: '120',
    vs_currency: 'usd'
  }
  let data2 = await CoinGeckoClient.coins.fetchMarketChart('bitcoin', Objeto);
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

async function calcular_meses(datos,tarjeta_consumo,costokwh,tarjeta_hasheo){





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
  console.log(await predict());
  //console.log(await calcular_meses(datos, tarjeta.consumo, costokwh,tarjeta.hasheo));//calcula el tiempo en meses que tarda

}

main();


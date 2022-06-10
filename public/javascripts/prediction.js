//1. Import coingecko-api
const CoinGecko = require('coingecko-api');

//2. Initiate the CoinGecko API Client
const CoinGeckoClient = new CoinGecko();

//3. Make calls
var predict = async() => {
  let data = await CoinGeckoClient.ping();
  const datos =[]
  const Objeto = {
    days: '120',
    vs_currency: 'usd'
  }
  let data2 = await CoinGeckoClient.coins.fetchMarketChart('bitcoin', Objeto);
  console.log("Textazo");
  for (var i = 0; i < 10; i++) {
    datos[i]= data2.data.prices[i][1];
 }
 let sts = statistics(datos);
 /*for (var i = 10; i < 20; i++) {
  if(datos[i-2]>datos[i-1]){
    datos[i]= 1 -()+random
  }else
}*/
  
  console.log(datos);
  

};

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

predict();


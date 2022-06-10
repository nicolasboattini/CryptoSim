//1. Import coingecko-api
const CoinGecko = require('coingecko-api');

//2. Initiate the CoinGecko API Client
const CoinGeckoClient = new CoinGecko();

//3. Make calls
var predict = async() => {
  let data = await CoinGeckoClient.ping();
  let data2 = await CoinGeckoClient.coins.fetchMarketChart('bitcoin');
  let hola = data2.data;
  console.log(hola)
};

predict();


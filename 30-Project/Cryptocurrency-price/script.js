let btn = document.getElementById("bitcoin");
let eth = document.getElementById("ethereum");
let doge = document.getElementById("dogcoin");

var settings = {
    "async" : true,
    "scrossDomain" : true,
    "url" : "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd",
    "method" : "GET",
    "headers" : {}
}
$.ajax(settings).done(function(response){
 //  console.log(response);
 // first step 
 btn.innerHTML = response.bitcoin.usd;
 eth.innerHTML = response.ethereum.usd;
 doge.innerHTML = response.dogecoin.usd;
});
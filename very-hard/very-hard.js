function greedyAlg(coins, total){
    var coinsGiven = coins.sort(function(a,b){return b-a});
    var totalMoney = total;
    var totalCoins = 0;
     
       for(let x =0; x<coinsGiven.length;x++){
            if(totalMoney%coinsGiven[x]>=0 && totalMoney/coinsGiven[x]>=1){
          totalMoney-=coinsGiven[x];
          totalCoins+=1
          x-=1
            }
        }
        if( totalMoney == 0){
            return totalCoins;
        } else return-1;
    }

let i1 = [1,2,5];
let a1 = 11;
let i2 = [2];
let a2 = 3;

console.log(greedyAlg(i1,a1));
console.log(greedyAlg(i2,a2));


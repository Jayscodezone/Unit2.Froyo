const input = prompt ("Froyo Flavors");
const flavors =input.split (",");
console.log (flavors);

function froyoFlavors(flavorList){
    let sum = {};
    for (const flavor of flavorList){
        if (!sum[flavor]){
            sum[flavor] = 0;
        }
        sum[flavor]++;
    }
    return sum;
  }

  console.table(froyoFlavors(flavors));

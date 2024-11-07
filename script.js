const input = prompt ("Froyo Flavors");// prompt for the flavors 
const flavors =input.split (",");
console.log (flavors);
// creating of the four loop with a return value +1 
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

  console.table(froyoFlavors(flavors));// table for flavors

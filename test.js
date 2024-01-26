const tab = [5, 9, 3, 99, 7, 66, 10];
let max = tab[0];
// for (let i = 1; i < tab.length; i++) {
//   if (tab[i] > max) {
//     max = tab[i];
//   }
// }
console.log(Math.max(...tab));

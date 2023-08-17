// function run(n) {
//    let array = [];

//    for (let i = 1; i <= n; i++) {
//       if (i % 2 === 0) {
//          if (i === 2) {
//             array.push(2);
//          } else {
//             array.push(array[i - 3] * 2);
//          }
//       } else {
//          if (i === 1) {
//             array.push(3)
//          } else {
//             array.push(array[i - 3] + 6);
//          }
//       }
//    }


//    return array[n - 1];
//  }

//  console.log(run(18));

/**
 * Tentukan nilai array berdarkan inputan n
 * Lakukan looping sebanyak n
 * Berdasarkan setiap iterasi nya di cek kalai iterasi bernilai ganjil di tambah satu berdarkan dari array yang seebelumnya
 * Klaug genap ditambah 3 berdasarkan array seebelum nya array[i - array yang bernilai genap dari yang sebelumnya];
 * kalau sudah tinggan di terun kan nilai array nya
 */

function run(n) {
   let array = [];

   for(let i = 1; i <= n; i++) {
      if (i % 2 === 0) {
         if (i === 2) {
            array.push(3);
         } else {
            array.push(array[i - 3] + 3);
         }
      } else {
         if (i === 1) {
            array.push(1);
         } else {
            array.push(array[i - 3] + 1);
         }
      }
   }

   return array;
}

console.log(run(5));
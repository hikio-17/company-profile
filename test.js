function run(n) {
   let array = [];

   for (let i = 1; i <= n; i++) {
      if (i % 2 === 0) {
         if (i === 2) {
            array.push(2);
         } else {
            array.push(array[i - 3] * 2);
         }
      } else {
         if (i === 1) {
            array.push(3)
         } else {
            array.push(array[i - 3] + 6);
         }
      }
   }


   return array[n - 1];
 }

 console.log(run(18));

/*
   // Example 1: an immediately resolved promise
   var p1 = Promise.resolve('i got my iphone X ')

   p1.then(res => console.log(res))


   // Example 2: promise constructor

   var p1 = new Promise(
      (resolve,reject) => resolve('i got my iphone X')
      )
*/
  var p1 = new Promise(
      (resolve,reject) => reject("i did not get my iphoneX")
      )

   p1.then(res => console.log(res),
           rej => console.log(rej))

/*
   //Example 3:

   const keeppromise = true;

    var p1 = new Promise(
        (resolve,reject) => {
          if(keeppromise) {
            resolve('i got my phone')
            }
          else {
            reject('i dont have my phone')
            }
          }
        )

    p1.then(res => console.log(res),
            rej => console.log(rej)
*/

	//Async
	
	   function getSum(n1, n2) {   
      var isAnyNegative = function() {   
         return n1 < 0 || n2 < 0;   
          }   
      var promise = new Promise(function(resolve, reject) {   
         if (isAnyNegative()) {   
            reject(Error("Negatives not supported"));   
         }   
         resolve(n1 + n2)
         });   
      return promise;   
      } 

      getSum(5, 6)   
         .then(function (result) {   
             console.log(result);   
         },   
         function (error) {   
            console.log(error);   
         });
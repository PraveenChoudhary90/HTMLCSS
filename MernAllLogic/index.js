// Promise logic
// let promise = new Promise(function(resolve, reject) {
//   let success = true;

//   if (success) {
//     resolve("✅ Operation was successful!");
//   } else {
//     reject("❌ Something went wrong.");
//   }
// });

// promise
//   .then(function(result) {
//     console.log(result); // ✅ Operation was successful!
//   })
//   .catch(function(error) {
//     console.log(error); // ❌ Something went wrong.
//   });

const promise = new Promise(function(resolve, reject){
    let success  =true;

    if(success){
        resolve("okk done")
    }
    else{
        reject("not done")
    }
})

promise

.then(function(result){
    console.log(result)
})


.catch(function(error){
    console.log(error)
})




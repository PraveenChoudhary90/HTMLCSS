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


function fetchData() {
  return new Promise(function(resolve, reject) {
    setTimeout(() => {
      const data = { id: 1, name: "Alice" };
      resolve(data);
    }, 2000); // Simulates 2 second delay
  });
}

fetchData()
  .then(function(user) {
    console.log("User data:", user);
  })
  .catch(function(error) {
    console.error("Error:", error);
  });



  function fetchData() {
  return new Promise(function(resolve, reject) {
    setTimeout(() => {
      const data = { id: 1, name: "Alice" };
      resolve(data);
    }, 2000);
  });
}

async function displayData() {
  try {
    const result = await fetchData();
    console.log("Fetched:", result);
  } catch (err) {
    console.error("Error:", err);
  }
}

displayData();





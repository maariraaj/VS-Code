// async function boardingBus(){
//   try{
//     function boardBusAt10() {
//       return new Promise((resolve, reject) => {
//         setTimeout(() => {
//           const busArrivesAt10 = Math.random() > 0.5;
//           if (busArrivesAt10) {
//             resolve("Board the bus");
//           } else {
//             reject("Error: Bus is late.");
//           }
//         }, 3000);
//       });
//     }
//     const step1= await boardBusAt10();
//     console.log(step1);
//   }
//   catch(error){
//     console.log(error);
//   }
// }

// boardingBus(); 



// async function picnicDecision(){
//   try{
//     function checkWeather() {
//       return new Promise((resolve, reject) => {
//         setTimeout(() => {
//           const isSunny = Math.random() > 0.5;
//           if (isSunny) {
//             resolve("Let us go for picnic");
//           } else {
//             reject("Error: It is cloudy");
//           }
//         }, 3000);
//       });
//     }
//     const step1= await checkWeather();
//     console.log(step1);
//   }
//   catch(error){
//     console.log(error);
//   }
// }

// picnicDecision();


// async function happyMeal(){
//   try{
//     function orderPizza() {
//       return new Promise((resolve, reject) => {
//         setTimeout(() => {
//           const pizzaDelivered = Math.random() > 0.5;
//           if (pizzaDelivered) {
//             resolve("Pizza has been delivered!");
//           } else {
//             reject("Pizza delivery failed.");
//           }
//         }, 2000);
//       });
//     }
//     function orderDessert() {
//       return new Promise((resolve, reject) => {
//         setTimeout(() => {
//           const dessertDelivered = Math.random() > 0.5;
//           if (dessertDelivered) {
//             resolve("Dessert has been delivered!");
//           } else {
//             reject("Dessert delivery failed.");
//           }
//         }, 1000);
//       });
//     }
//     const step1= await orderPizza();
//     console.log(step1);
//     const step2= await orderDessert();
//     console.log(step2);
//   }
//   catch(error){
//     console.log(error);
//   }
// }

// happyMeal();



async function picnicReady(){
  try{
    function checkCar() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const carReady = Math.random() > 0.5;
          if (carReady) {
            resolve("Car is ready");
          } else {
            reject("Error: Car needs maintenance");
          }
        }, 2000);
      });
    }
    function packForPicnic() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const itemsPacked = Math.random() > 0.5;
          if (itemsPacked) {
            resolve("Packed everything for picnic");
          } else {
            reject("Error: Not have some essentials");
          }
        }, 1000);
      });
    }
    const step1= await checkCar();
    console.log(step1);
    const step2= await packForPicnic();
    console.log(step2);
  }
  catch(error){
    console.log(error);
  }
}

picnicReady();
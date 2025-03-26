// const promiseOne = new Promise(function (resolve , reject) {
//     setTimeout(() => {
//         console.log("Task one complete");
//         resolve({name: "Abhinav", RollNo: 2300320140006});
        
//     }, 1000); 
// })

// promiseOne
// .then((user)=>{
//     console.log(user)
// })


function userLogin() {
    return new Promise(function (resolve, reject) {
        let speed = true;
        if (speed) {
            setTimeout(() => {
                resolve({
                    userId: "Abhinav_Srivastava",
                    password: 26112808,
                    "E-mail": "abhinavsrivastava2611@gmail.com"
                });
            }, 1000);
        } else {
            reject("Task rejected");
        }
    });
}

function userOrders() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve(["order1", "order2"]);
        }, 1000);
    });
}

function userCart() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve(["toy car", "bag"]);
        }, 1000);
    });
}

// Calling the functions and handling the promises
userLogin()
    .then((user) => {
        console.log("User logged in successfully:", user);
        return userOrders();
    })
    .then((orders) => {
        console.log("User orders:", orders);
        return userCart();
    })
    .then((cartItems) => {
        console.log("User cart items:", cartItems);
    })
    .catch((error) => {
        console.log("Error:", error);
    });

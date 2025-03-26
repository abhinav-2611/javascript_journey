let todayDate= new Date();

console.log(todayDate.toDateString()); // output :  Sun Nov 24 2024
console.log(todayDate.toTimeString()); //output : 11:13:15 GMT+0530 (India Standard Time)
console.log(todayDate.toLocaleString());//output : 24/11/2024, 11:13:15 am
console.log(todayDate.toISOString());// output : 2024-11-24T05:43:15.423Z

//++++++++++ if you want a specific date and time ++++++++++++++++++++++++++++++++++++++

let date= new Date("2024-11-24T10:00:00"); 
console.log(date.toLocaleString()); //output : 24/11/2024, 10:00:00 am

//+++++++++++ if you want to find the timestamp +++++++++++++++++++++++++++++++++++++++++

const timestamp = Date.now();
console.log(timestamp.toString()); // output : 1732431406940


//Alternatively:
let currentTimestamp= new Date("2024-10-24T10:00:00").getTime()
console.log(currentTimestamp); //output : 1729744200000

//++++++++ if you want date and time according to yourself +++++++++++++++++++++++++++++++++

const currentDate = new Date();
console.log(currentDate.toLocaleString("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "2-digit",
  minute: "2-digit",
}));

 

    
    
    // sequence control
    function  dataDisplay(data1){
    console.log(data1);
}

function firstData(){
    dataDisplay("info to dispaly");
}
function secondData(){
    dataDisplay("Thanks & regard");
}
firstData();
secondData();

//calback function
function bike1 (sap) {
    console.log(sap);
}

function BikeCalculate(num1, num2, myCallback) {
 let sum = num1 + num2;

myCallback(sum);

}

BikeCalculate(5, 6, bike1);

// promises

function movie(sap1){
console.log(sap1);
}
let mypromise = new Promise(function(myReslove,myReject){
    let y= 0;
    if(y == 0){
        myReslove("Accepted");
    }else{
        myReject("Error");
    }
});
mypromise .then(
function(value) {movie(value);},
function(value) {movie(value);}
);


//Async/await

function genre(sap2){
    console.log(sap2);
}

async function genrename(){
    return "action";

} 

genrename.then(
    function(value) {genre(value);},
    function(error) {genre(error);}

);

//await
async function infoDisplay(){
    let dataPromise = new Promise(function(resolve, reject) {
             resolve("full stack developer")
    });
    console.log(await dataPromise);
}
infoDisplay();
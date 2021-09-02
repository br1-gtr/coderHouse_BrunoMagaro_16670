console.log("holiiiii");

let btnLevel1 = document.getElementById("btnLevel1");
let btnLevel2 = document.getElementById("btnLevel2");
let btnLevel3 = document.getElementById("btnLevel3");

let infoLevel1 = document.getElementById("lvl1");
let infoLevel2 = document.getElementById("lvl2");
let infoLevel3 = document.getElementById("lvl3");

infoLevel2.style.display ="none";
infoLevel3.style.display ="none";

btnLevel1.addEventListener('click',() => {
    showHide(btnLevel1);
});
btnLevel2.addEventListener('click',() => {
    showHide(btnLevel2);
});
btnLevel3.addEventListener('click',() => {
    showHide(btnLevel3);
});
function showHide(a){
    if(a === btnLevel1){
        infoLevel1.style.display ="block";
        infoLevel2.style.display ="none";
        infoLevel3.style.display ="none";
    }else if(a === btnLevel2){
        infoLevel2.style.display ="block";
        infoLevel1.style.display ="none";
        infoLevel3.style.display ="none";
    }else{
        infoLevel3.style.display ="block";
        infoLevel1.style.display ="none";
        infoLevel2.style.display ="none";
    }
};


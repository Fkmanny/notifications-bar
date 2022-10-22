const cardEl = document.getElementById("card");
const markEl = document.getElementById("mark");
const marKDot = document.getElementById("mark-red-dot");
markEl.style.setProperty("--colur", "rgb(247, 250, 253)");
    function markjs(){
        markEl.style.setProperty("--colur", "none");
        marKDot.style.setProperty("--none", "none");
    };

   

const angelaEl = document.getElementById("angela");
const angelaDot = document.getElementById("angela-red-dot");
angelaEl.style.setProperty("--colur", "rgb(247, 250, 253)");
    function angelajs(){
        angelaEl.style.setProperty("--colur", "none");
        angelaDot.style.setProperty("--none", "none");
    };

const jacobEl = document.getElementById("jacob");
const jacobDot = document.getElementById("jacob-red-dot");
jacobEl.style.setProperty("--colur", "rgb(247, 250, 253)");
    function jacobjs(){
        jacobEl.style.setProperty("--colur", "none");
        jacobDot.style.setProperty("--none", "none");
    };

const rizkyEl = document.getElementById("rizky");
const rizkyDot = document.getElementById("rizky-red-dot");
const messageEl = document.getElementById("message");
rizkyEl.style.setProperty("--colur", "rgb(247, 250, 253)");
messageEl.style.setProperty("--visible", "none");
    function rizkyjs(){
        rizkyEl.style.setProperty("--colur", "none");
        rizkyDot.style.setProperty("--none", "none");
        messageEl.style.setProperty("--visible", "block");
    };

const kimberlyEl = document.getElementById("kimberly");
const kimberlyDot = document.getElementById("kimberly-red-dot");
kimberlyEl.style.setProperty("--colur", "rgb(247, 250, 253)");
    function kimberlyjs(){
        kimberlyEl.style.setProperty("--colur", "none");
        kimberlyDot.style.setProperty("--none", "none");
    };

const nathanEl = document.getElementById("nathan");
const nathanDot = document.getElementById("nathan-red-dot");
nathanEl.style.setProperty("--colur", "rgb(247, 250, 253)");
    function nathanjs(){
        nathanEl.style.setProperty("--colur", "none");
        nathanDot.style.setProperty("--none", "none");
    };

const annaEl = document.getElementById("anna");
const annaDot = document.getElementById("anna-red-dot");
annaEl.style.setProperty("--colur", "rgb(247, 250, 253)");
    function annajs(){
        annaEl.style.setProperty("--colur", "none");
        annaDot.style.setProperty("--none", "none");
    };


function readjs(){
    location.reload();
}

const no3El = document.getElementById("no3");

let value = 7;

markEl.addEventListener('click', (event) => {
    value--;
    no3El.innerText = `${value}` 
  }, {once : true});

angelaEl.addEventListener('click', (event) => {
    value--;
    no3El.innerText = `${value}` 
}, {once : true});

jacobEl.addEventListener('click', (event) => {
    value--;
    no3El.innerText = `${value}` 
  }, {once : true});

rizkyEl.addEventListener('click', (event) => {
    value--;
    no3El.innerText = `${value}` 
}, {once : true});

kimberlyEl.addEventListener('click', (event) => {
    value--;
    no3El.innerText = `${value}` 
}, {once : true});

nathanEl.addEventListener('click', (event) => {
    value--;
    no3El.innerText = `${value}` 
}, {once : true});

annaEl.addEventListener('click', (event) => {
    value--;
    no3El.innerText = `${value}` 
}, {once : true});
  
  
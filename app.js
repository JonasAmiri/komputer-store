const laptopsElement = document.getElementById("laptops");
const featuresElement = document.getElementById("Features")
const descriptionElement = document.getElementById("description")
const priceElement = document.getElementById("price")
const titleElement = document.getElementById("title")
const imageElement = document.getElementById("image")
const btnWorkElement = document.getElementById("btnWork")
const showWorkElement = document.getElementById("show")
const showBankElement = document.getElementById("Output")
const btnBankBalance = document.getElementById("btnBank")
const btnLoanElement = document.getElementById("btnLoan");




let laptops = [];


fetch("https://hickory-quilled-actress.glitch.me/computers")
    .then(response => response.json())
    .then(data => laptops = data)
    .then(laptops => addLaptopsToMenu(laptops));

const addLaptopsToMenu = (laptops) => {
    laptops.forEach(x => addLaptopToMenu(x));
}

const addLaptopToMenu = (laptop) => {
    const laptopElement = document.createElement("option");
    laptopElement.value = laptop.id;
    laptopElement.appendChild(document.createTextNode(laptop.title));
    laptopsElement.appendChild(laptopElement);
}

const handleLaptopMenuChange = e=> {
    const selectedLaptop = laptops[e.target.selectedIndex];
    featuresElement.innerText = selectedLaptop.specs;
}

laptopsElement.addEventListener("change", handleLaptopMenuChange );




const descriptionLaptopMenuChange = e => {
    const selectedLaptop = laptops[e.target.selectedIndex];
    descriptionElement.innerText = selectedLaptop.description;
}

laptopsElement.addEventListener("change", descriptionLaptopMenuChange);



const priceLaptopMenuChange = e => {
    const selectedLaptop = laptops[e.target.selectedIndex];
    priceElement.innerText = `Price is ${selectedLaptop.price} dk`;
}

laptopsElement.addEventListener("change", priceLaptopMenuChange);

const titleLaptopMenuChange = e => {
    const selectedLaptop = laptops[e.target.selectedIndex];
    titleElement.innerText = selectedLaptop.title;
}

laptopsElement.addEventListener("change", titleLaptopMenuChange);


const imageLaptopMenuChange = e => {
    const selectedLaptop = laptops[e.target.selectedIndex];
    Element.innerText = selectedLaptop.title;
}

laptopsElement.addEventListener("change", titleLaptopMenuChange);


showWorkElement.innerText = "0";

btnWorkElement.addEventListener("click", function(){

    showWorkElement.innerText=parseInt(showWorkElement.innerText)+100;

   
    

});

let activeLoan = false;

btnBankBalance.addEventListener("click", function(){
    if(!activeLoan){
        showBankElement.innerText = parseInt(showWorkElement.innerText) + parseInt(showBankElement.innerText);
        showWorkElement.innerText = 0;
    }
    else{

    }
})

btnLoanElement.addEventListener("click", function(){
    let loanTemp = prompt("how much would u like to Loan?");
    console.log(sign);
    if(!activeLoan){
        
    }

    if(loanTemp>= parseInt(showBankElement.innerText*2)){
        console.log("you cant not take a loan")
    } 



})













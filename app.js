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
const showResLoanElement = document.getElementById("OwnOutput");
const showBuyButtonElement = document.getElementById("btnbuy");
const showAcceptedlabelElement = document.getElementById("Accept");





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


const InformationhandleLaptopMenuChange = e => {
    const selectedLaptop = laptops[e.target.selectedIndex];
    informationElement.innerText = selectedLaptop.description;
}

laptopsElement.addEventListener("change", InformationhandleLaptopMenuChange);

const pricehandleLaptopMenuChange = e => {
    const selectedLaptop = laptops[e.target.selectedIndex];
    priceElement.innerText = selectedLaptop.price;
}

laptopsElement.addEventListener("change", pricehandleLaptopMenuChange);

const imagehandleLaptopMenuChange = e => {
    const selectedLaptop = laptops[e.target.selectedIndex];
    imageElement.innerText = selectedLaptop.image;
}

laptopsElement.addEventListener("change", imagehandleLaptopMenuChange);



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
        //deposit(Number(showBankElement.innerText), activeLoan);
        
    // }
    // else{

    // }
}

// function deposit(amount, loanStatus){
//     if(loanStatus){
//         console.log("hej hej")
//        showBankElement.innerText = Number(showBankElement.innerText) + amount * 0.9;
//        showResLoanElement.innerText = Number(showResLoanElement.innerText) - amount * 0.1;     
//     }
//     else
//     {
//         showBankElement.innerText = Number(showBankElement.innerText) + amount
//         console.log("ja ja ")
//     }
// }

function buyLaptop(){
    if(Number(priceElement.innerText)<= Number(showBankElement)){
        showAcceptedlabelElement.innerText = "tillykke du har købt mig";
        priceElement.innerText - showBankElement;
    }
    else{
        showAcceptedlabelElement.innerText = "rejected";
    }
}


let hasActiveLoan = false;

btnLoanElement.addEventListener("click", function(){
    let loanTemp =Number(prompt("how much would u like to Loan?"));
    


    console.log(loanTemp);

    
    if(hasActiveLoan){


        deposit(Number(showBankElement.innerText), hasActiveLoan);
        
      
     } 
     else 
     {
        if (loanTemp <= parseInt(showBankElement.innerText * 2))
        {

            showBankElement.innerText = Number(showBankElement.innerText) + loanTemp;
            showResLoanElement.innerText = loanTemp;
            hasActiveLoan=true;
        }

     }
}
)
}
)

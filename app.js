const laptopsElement = document.getElementById("laptops");
const featuresElement = document.getElementById("Features");
const informationElement = document.getElementById("information");
const priceElement = document.getElementById("price");
const imageElement = document.getElementById("image");




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













const laptopsElement = document.getElementById("laptops");
const featuresElement = document.getElementById("Features")


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














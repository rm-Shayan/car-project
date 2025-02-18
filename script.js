window.addEventListener('DOMContentLoaded', function () {

  let dropDownOfBrand = document.getElementById("brand");
  let dropDownOfModel = document.getElementById("model");

  let car = {
    tesla: {
      model3: { model: "Tesla Model 3", price: "RS 350,000", img: "modelx_76 (1).avif" },
      modely: { model: "Tesla Model Y", price: "RS 450,000", img: "tesla-model-y-13.avif" },
      models: { model: "Tesla Model S", price: "RS 500,000", img: "tesla-model-s-7.avif" },
      cybertruck: { model: "Tesla Cybertruck", price: "RS 600,000", img: "cybertruck-image-official.avif" } 
    },
    rolls_royce: { 
      phantom: { model: "Rolls Royce Phantom", price: "RS 1.5B", img: "R (7).jpeg" },
      ghost: { model: "Rolls Royce Ghost", price: "RS 3.5B", img: "download (2).jpeg" }
    },
    honda: {
      civic: { model: 'Civic 2024', price: "Rs. 3,000,000", img: "OIP (13).jpeg" },
      city: { model: 'City 2024', price: "Rs. 2,500,000", img: "R (5).jpeg" },
      hondabrv: { model: 'Honda BRV 2024', price: "Rs. 6,299,000", img: "R (6).jpeg" }, // Lowercased key
      hondaaccord: { model: "Honda Accord 2024", price: "Rs. 2.5cr", img: "OIP (14).jpeg" } // Lowercased key
    }
  };

 dropDownOfBrand.innerHTML=`<option >Select brand</option>`;
  for (let key in car) {
    dropDownOfBrand.innerHTML += `<option value="${key}">${key}</option>`;
}
dropDownOfModel.innerHTML = `<option>Select Model</option>`; 

let selectedBrand ;

function populateModels(event) {
     selectedBrand = event.target.value;
    dropDownOfModel.innerHTML = `<option>Select Model</option>`; 
    if (car[selectedBrand]) {
        dropDownOfModel.innerHTML = "";

        for (let key in car[selectedBrand]) {
            let opt = document.createElement("option");
            opt.value = key;
            opt.innerText = car[selectedBrand][key].model;

            dropDownOfModel.appendChild(opt); 
        }
    }
}



let inputBrand=document.getElementById("search-for-car");
let inputModel=document.getElementById("model-name");


dropDownOfModel.addEventListener("change", function() {
  let selectedModelKey = this.value; 
  inputBrand.value="";
  inputModel.value="";
    showDetail(selectedModelKey)
});


let aboutUI = document.getElementById("About-container");
let cardContainerUI = document.getElementById("card-container");

function showDetail(selectedModelKey) {
  
  if (aboutUI) aboutUI.style.display = "none";
  if (cardContainerUI) cardContainerUI.style.display = "none";

  let specificCardUi = document.getElementById("specific");
  specificCardUi.style.display="block"
  specificCardUi.setAttribute("class","col-6  d-flex flex-column justify-content-center align-items-center mt-4");

  if (!specificCardUi) {
    console.error("Error: Element with ID 'specific-card' not found.");
    return;
  }

  specificCardUi.innerHTML = ""; 
  let img = document.createElement("img");
  img.width = 300;
  img.height = 300;

  if (!car || !selectedBrand || !car[selectedBrand]) {
    console.error("Error: Invalid car data or selectedBrand is undefined.");
    return;
  }

  if (!car[selectedBrand][selectedModelKey]) {
    console.error("Error: selectedModelKey not found in the selected brand.");
    return;
  }

  let modelData = car[selectedBrand][selectedModelKey];

  for (let key in modelData) {
    switch (key) {
      case "model":
        specificCardUi.innerHTML += `<h1>Model: ${modelData[key]}</h1>`;
        break;
      case "price":
        specificCardUi.innerHTML += `<h2>Price: ${modelData[key]}</h2>`;
        break;
      case "img":
        img.src = modelData[key]; 
        specificCardUi.appendChild(img);
        break;
      default:
        break;
    }
  }
}

  






  dropDownOfBrand.addEventListener("change", populateModels);

  // Menu Toggle Logic (No Changes)
  let toggle = document.querySelectorAll(".menu-toggle");

  toggle.forEach(button => {
    button.addEventListener("click", function () {
      let toggleList = document.querySelectorAll(".menu-list");

      toggleList.forEach(menu => {
        let currentDisplay = window.getComputedStyle(menu).display;

        if (currentDisplay === "block") {
          menu.style.display = "none";
        } else {
          menu.style.display = "block";
        }
      });
    });
  });




 


inputBrand.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    let brand = inputBrand.value.toLowerCase();
   
    let specificCardUi = document.getElementById("specific");


    if (aboutUI) aboutUI.style.display = "none";
    if (cardContainerUI) cardContainerUI.style.display = "none";
    if (specificCardUi) specificCardUi.style.display = "none";
    
    if (brand === "cars") {
      if (cardContainerUI) cardContainerUI.style.display = "block";
      if (specificCardUi) specificCardUi.style.display = "none";
    } 
    else if (brand === "tesla") {
      if (!specificCardUi) {
        console.error("Element with id 'specific' not found.");
        return;
      }

      specificCardUi.style.display = "block";
      specificCardUi.setAttribute("class","d-flex flex-wrap ")
      specificCardUi.innerHTML = ""; 


      if (!car[brand]) {
        console.error("No data found for Tesla.");
        return;
      }


      Object.keys(car[brand]).forEach((modelKey) => {
        let modelData = car[brand][modelKey];

        let div = document.createElement("div");
        div.classList.add("col-5","offset-1", "d-flex", "flex-column", "div",);

        let image = document.createElement("img");
        image.src = modelData.img;
        image.alt = modelData.model;

        div.innerHTML = `
          <h1>Model: ${modelData.model}</h1>
          <h2>Price: ${modelData.price}</h2>
        `;

        div.appendChild(image);
        specificCardUi.appendChild(div);
      });
    }
    else if (brand === "honda") {
      if (!specificCardUi) {
        console.error("Element with id 'specific' not found.");
        return;
      }

      specificCardUi.style.display = "block";
      specificCardUi.setAttribute("class","d-flex flex-wrap ")
      specificCardUi.innerHTML = ""; 


      if (!car[brand]) {
        console.error("No data found for Tesla.");
        return;
      }


      Object.keys(car[brand]).forEach((modelKey) => {
        let modelData = car[brand][modelKey];

        let div = document.createElement("div");
        div.classList.add("col-5","offset-1", "d-flex", "flex-column", "div",);

        let image = document.createElement("img");
        image.src = modelData.img;
        image.alt = modelData.model;

        div.innerHTML = `
          <h1>Model: ${modelData.model}</h1>
          <h2>Price: ${modelData.price}</h2>
        `;

        div.appendChild(image);
        specificCardUi.appendChild(div);
      });
    }  else if (brand === "rolls_royce" ||brand==" rolls royce") {
      if (!specificCardUi) {
        console.error("Element with id 'specific' not found.");
        return;
      }

      specificCardUi.style.display = "block";
      specificCardUi.setAttribute("class","d-flex flex-wrap ")
      specificCardUi.innerHTML = ""; 


      if (!car[brand]) {
        console.error("No data found for Tesla.");
        return;
      }


      Object.keys(car[brand]).forEach((modelKey) => {
        let modelData = car[brand][modelKey];

        let div = document.createElement("div");
        div.classList.add("col-5","offset-1", "d-flex", "flex-column", "div",);

        let image = document.createElement("img");
        image.src = modelData.img;
        image.alt = modelData.model;

        div.innerHTML = `
          <h1>Model: ${modelData.model}</h1>
          <h2>Price: ${modelData.price}</h2>
        `;

        div.appendChild(image);
        specificCardUi.appendChild(div);
      });
    }else{
      specificCardUi.style.display="block"
    
      specificCardUi.innerHTML=` <h1 class="d-flex justify-content-center"> Search not found </h1>`
    }



    
  }
});




inputModel.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    let modelVal = inputModel.value.toLowerCase(); 
    let brandVal = inputBrand.value.toLowerCase(); 

    let specificCardUi = document.getElementById("specific");
    
    if (aboutUI) aboutUI.style.display = "none";
    if (cardContainerUI) cardContainerUI.style.display = "none";
    if (specificCardUi) specificCardUi.style.display = "none";

  
    if (!brandVal || !car[brandVal]) {
      specificCardUi.style.display = "block"; 
      specificCardUi.innerHTML = `<h1 style="color: red; text-align-center;">Enter a correct brand name</h1>`;
      return; 
    }

    if (car[brandVal] && car[brandVal][modelVal]) {
      specificCardUi.style.display = "block";
      specificCardUi.innerHTML = ""; 

      let modelData = car[brandVal][modelVal];

      let div = document.createElement("div");
      div.classList.add("col-5", "offset-1", "d-flex", "flex-column", "div");

      div.innerHTML += `<h1>Model: ${modelData.model}</h1>`;
      div.innerHTML += `<h2>Price: ${modelData.price}</h2>`;

      let image = document.createElement("img");
      image.src = modelData.img;
      image.alt = modelData.model;
      div.appendChild(image);

      specificCardUi.appendChild(div);
    } 
    else { 
     
      specificCardUi.style.display = "block"; 
      specificCardUi.innerHTML = `<h1 style="color: red; text-align-center;">Sorry, we can't find any information about this model.</h1>`;
    }
  }
});





});


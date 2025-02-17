window.addEventListener('DOMContentLoaded', function () {

  let dropDownOfBrand = document.getElementById("brand");
  let dropDownOfModel = document.getElementById("model");

  let car = {
    tesla: {
      model3: { model: "Tesla Model 3", price: "RS 350,000", img: "modelx_76 (1).avif" },
      modelY: { model: "Tesla Model Y", price: "RS 450,000", img: "tesla-model-y-13.avif" },
      modelS: { model: "Tesla Model S", price: "RS 500,000", img: "tesla-model-s-7.avif" },
      cyberTruck: { model: "Tesla Cybertruck", price: "RS 600,000", img: "cybertruck-image-official.avif" }
    },
    Rolls_Royce: {
      phantom: { model: "Rolls Royce Phantom", price: "RS 1.5B", img: "R (7).jpeg" }
    },
    honda: {
      civic: { model: 'Civic 2024', price: "Rs. 3,000,000", img: "OIP (13).jpeg" },
      city: { model: 'City 2024', price: "Rs. 2,500,000", img: "R (5).jpeg" },
      HondaBRV: { model: 'Honda BRV 2024', price: "Rs. 6,299,000", img: "R (6).jpeg" },
      HondaAccord: { model: "Honda Accord 2024", price: "Rs. 2.5cr", img: "OIP (14).jpeg" }
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


dropDownOfModel.addEventListener("change", function() {
  let selectedModelKey = this.value; 
    showDetail(selectedModelKey)
});
 
function showDetail(selectedModelKey){
  
let aboutUI=document.getElementById("About-container");
let cardContainerUI=document.getElementById("card-container");
aboutUI.style.dipsl``
let specificCardUi=document.getElementById("specific-card")
specificCardUi.setAttribute("class","col-6 d-flex flex-column")
specificCardUi.innerHTML=`<div> ${ car.Rolls_Royce.selectedModelKey} </div>`

 
  
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




 
    



});













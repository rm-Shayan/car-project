window.addEventListener('DOMContentLoaded', function() {
  let dropDownOfBrand = document.getElementById("brand");
  let car = {
      tesla: {
        model3: {
          model: "Tesla Model 3",
          price: "RS 350,000"
        },
        modelY: {
          model: "Tesla Model Y",
          price: "RS 450,000"
        },
        modelS: {
          model: "Tesla Model S",
          price: "RS 500,000"
        },
        cyberTruck: {
          model: "Tesla Cybertruck",
          price: "RS 600,000"
        }
      },
      Rolls_Royce: {},
      honda: {
          civic: {
              model: 'Civic 2024',
              price: "Rs. 3,000,000"
          },
          city: {
              model: 'City 2024',
              price: "Rs. 2,500,000"
          },
          HondaBRV: {
              model: 'Honda BRV 2024',
              price: "Rs. 6,299,000"
          },
          HondaAccord: {
              model: "Honda Accord 2024",
              price: "Rs. 2.5cr"
          }
      },
      BMW: {
        i14: {
          model: "BMW i14",
          price: "Rs. 4.5cr"
        },
        Series2: {
          model: "BMW 2 Series",
          price: "RS 3.2cr"
        },
        i5: {
          model: "BMW i5",
          price: "RS 3.8cr"
        }
      },
      hyundai: {
        H_100: {
          model: "Hyundai H100",
          price: "RS 1.8cr"
        },
        tucson: {
          model: "Hyundai Tucson",
          price: "PKR 80.8 - 87.8 lac"
        },
        sonata: {
          model: "Hyundai Sonata",
          price: "PKR 99 lac - 1.59cr"
        }
      },
      Audi: {
        Q2: {
          model: "Audi Q2",
          price: "RS 72.5 lac"
        },
        Q8_e_tron: {
          model: "Audi Q8 e-tron",
          price: "Rs 5cr"
        },
        e_tron_GT: {
          model: "Audi e-tron GT",
          price: "Rs 7.5cr"
        }
      },
      porsche: {
        cayman: {
          model: "Porsche Cayman 718",
          price: "Rs. 8.5cr"
        },
        Boxter: {
          model: "Porsche Boxster 718",
          price: "RS 789,000"
        },
        cayman_s: {
          model: "Porsche Cayman S",
          price: "Rs. 9.5cr"
        }
      },
      suzuki: {
          swift: {
              model: 'Swift 2024',
              price: "Rs. 4,256,000"
          },
          alto: {
              model: "Alto 2024",
              price: "Rs. 2,251,000"
          },
          Baleno: {
              model: 'Baleno 2024',
              price: "Rs. 1.2 lac"
          },
          cultus: {
              model: "Cultus",
              price: "Rs. 3,718,000"
          }
      },
      toyota: {
          yaris: {
              model: "Yaris",
              price: "Rs. 4,899,000"
          }
      }
  };

  dropDownOfBrand.innerHTML = "<option>Select Brand</option>";

  dropDownOfBrand.addEventListener("click", function() {
      dropDownOfBrand.innerHTML = "<option>Select Brand</option>";
      for (let key in car) {
          dropDownOfBrand.innerHTML += "<option>" + key + "</option>";
      }
  });

 
  });

  
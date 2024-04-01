const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('productId');

// hämtar den specifika produkten genom produktId
fetch(`https://fakestoreapi.com/products/${productId}`)
            .then((response) => response.json())
            .then((product) => {
                renderProduct(product);
            })
            .catch((error) => {
                console.error('Error fetching product details:', error);
            });


// hämtar den specifika produkten genom produktId
function renderProduct(product) {
    const card = document.createElement('div');
    card.classList.add('card');
            
    const cardContent = `
        <img src="${product.image}" class="card-image-top w-25 h-25 mx-auto" alt="${product.title}">
            <div class="card-body">
                <h6 class="card-title text-center">${product.title}</h6>
                <p class="card-title text-center">${product.description}</p>

                     <h5 class="item-price pt-2 text-center">${product.price} $</h5>
            </div>`;
            
    card.innerHTML = cardContent;
    document.getElementById('productDisplay').appendChild(card);
}

// Vi kollar varje input och ser om det är korrekt ifylld
function validateForm(){
    var formNamn = document.getElementById('namn').value;
    var formTelefonNummer = document.getElementById('telefonnr').value;
    var formAdress = document.getElementById('gatuadress').value;
    var formPostNummer = document.getElementById('postnummer').value;
    var formOrt = document.getElementById('ort').value;
    var formEmail = document.getElementById('email').value;
    var formButton = document.getElementById('submitButton');

    var namn_error = document.getElementById('namn_error'); 
    var telefonnr_error = document.getElementById('telefonnr_error');
    var adress_error = document.getElementById('adress_error');
    var postnummer_error = document.getElementById('postnummer_error');
    var ort_error = document.getElementById('ort_error');
    var email_error = document.getElementById('email_error');

    // Denna ifsats låser beställ knappen tills alla fält är korrekt
    if(formNamn.length < 2 || formNamn.length >50){
        formButton.disabled = true;
    } else if(formTelefonNummer.length>50){
        formButton.disabled = true;
    } else if(formAdress.length < 2 || formAdress.length>50){
        formButton.disabled = true;
    } else if(formPostNummer.length != 5){
        formButton.disabled = true;
    } else if(formOrt.length < 2 || formOrt.length>50){
        formButton.disabled = true;
    } else if(formEmail.indexOf('@')== -1 || formEmail.length > 50){
        formButton.disabled = true;
    } else{
        formButton.disabled = false;
    }
    
    
    //Vi validerar varje fält och ser till att det är ifylld korrekt.
    if(formNamn.length > 2 && formNamn.length <50){
        namn_error.innerHTML = "Giltig";
        namn_error.style.color = "green"
    }
    if(formTelefonNummer.length >0 && formTelefonNummer.length<50){
        telefonnr_error.innerHTML = "Giltig";
        telefonnr_error.style.color = "green"    }
    if(formAdress.length > 2 && formAdress.length<50){
        adress_error.innerHTML = "Giltig";
        adress_error.style.color = "green"    }
    if(formPostNummer.length == 5){
        postnummer_error.innerHTML = "Giltig";
        postnummer_error.style.color = "green"    }
    if(formOrt.length > 2 && formOrt.length<50){
        ort_error.innerHTML = "Giltig";
        ort_error.style.color = "green"    }
    if(formEmail.indexOf('@')!= -1 && formEmail.length < 50){
        email_error.innerHTML = "Giltig";
        email_error.style.color = "green"    
    }

}
/* 

2. Validera alla fält i beställningsformuläret
(Måste hanteras via JavaScript. Visa lämpliga felmeddelanden)
a. Namnet är minst 2 tecken och max 50 tecken 
b. E-postadressen måste innehålla @ och max 50 tecken
c. Telefonnummer får innehålla siffror, bindestreck och parenteser. Max 50 tecken. 
d. Leveransadress enligt svensk standard:
i. Gatuadress: Min 2 tecken och Max 50 tecken 
ii. Postnummer: Exakt 5 siffror 
iii. Ort: Min 2 tecken och Max 50 tecken 

*/
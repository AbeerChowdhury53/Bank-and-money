// function for set zero 
function setZero(passId,passPrice){
    const extraRam = document.getElementById(passId)
    const extraRamValue= extraRam.innerText;
    extraRam.innerText = passPrice;
    
}

// function for button click
function clickEvent(passBtnId, passFildID, passPrice){
document.getElementById(passBtnId).addEventListener('click', function(){
    setZero(passFildID, passPrice);     // call function for Zero value 
     totalPrice();                      //call totol Price Function
})
}

// Functioon for Total Price
function totalPrice(){
 const ProductPrice = document.getElementById('best-price').innerText;          //best price value
 const extraRamPrice= document.getElementById('ext-memory').innerText;          //extra ram value
 const extraStoragePrice= document.getElementById('ext-storage').innerText;     //extra storage value
 const extraDeliveryPrice= document.getElementById('del-charge').innerText;     //first delivery charge value 

//  get total price fild value 
 const priceTotal= document.getElementById('total-price');
 const priceTotalforBonus= document.getElementById('totalBonus');

//  set total price fild value 
 priceTotal.innerText= parseInt(ProductPrice) + parseInt(extraRamPrice)+parseInt(extraStoragePrice)+parseInt(extraDeliveryPrice) ;
 priceTotalforBonus.innerText= parseInt(ProductPrice) + parseInt(extraRamPrice)+parseInt(extraStoragePrice)+parseInt(extraDeliveryPrice) ;
}

// promo code apply
document.getElementById('promobtn').addEventListener('click', function(){
    const promoFildValue =document.getElementById('promoFild').value;       // get promo code fild value
    const priceBonus= document.getElementById('totalBonus').innerText;      // get promo code total fild value
    const promoApply = priceBonus-(priceBonus*0.2)                          //promo code discount value
    
    // apply stevekaku promo code
    if (promoFildValue=='stevekaku'){
        document.getElementById('totalBonus').innerText=promoApply;
        document.getElementById('promoFild').value ='';
        document.getElementById('promobtn').disabled = true;
    }
})



// call function for set price 
clickEvent('RAM8GB','ext-memory',0);
clickEvent('SSD256GB','ext-storage',0);
clickEvent('FREEDEL','del-charge', 0);
clickEvent('RAM16GB','ext-memory', 180);
clickEvent('SSD512GB','ext-storage', 100);
clickEvent('SSD1TB','ext-storage', 180);
clickEvent('DEL20','del-charge', 20);




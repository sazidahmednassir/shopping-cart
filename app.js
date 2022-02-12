 function updateProductNumber(product, price,  isIncreasing){
    const productInput=document.getElementById( product + '-number');
    let productNumber=productInput.value;
    if(isIncreasing){
        productNumber=parseInt(productNumber)+ 1;
    }
    else if(productNumber > 0){
        productNumber=parseInt(productNumber) - 1;
    }
    productInput.value=productNumber;
    //UPDATE CASE TOTAL
    const producttotal=document.getElementById(product +'-total');
    producttotal.innerText=productNumber*price;
}

document.getElementById('phone-plus').addEventListener('click', function(){
    updateProductNumber('phone', 1219, true)
})

document.getElementById('phone-minus').addEventListener('click', function(){
    updateProductNumber('phone', 1219)
})

document.getElementById('case-plus').addEventListener('click', function(){
    updateProductNumber('case', 59, true)
}
)
document.getElementById('case-minus').addEventListener('click', function(){

    
    updateProductNumber('case', 59)
    
    
})
const navBar = document.querySelector(".navbar");
const scrollThresHold = 20;

window.addEventListener("scroll", ()=>{
    if (window.scrollY > scrollThresHold) {
        navBar.classList.add('shadow-lg'); 
    } else {
        navBar.classList.remove('shadow-lg'); 
    }
});


const productBox = document.querySelector(".L-product-box");
const product = document.querySelector(".L-product");

productBox.addEventListener("mouseover", ()=>{
    product.src = '../src/images/Products/p1_220x240_crop_center.jpg'
})
productBox.addEventListener("mouseout", ()=>{
    product.src= '../src/images/Products/13_220x240_crop_center.jpg'
})



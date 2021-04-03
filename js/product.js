const getProducts = async()=>{
    const res = await fetch("product.json");
    const data = await res.json();
    const products = data.products;
    return products;
}
getProducts();


//displaying all the products from the json file and maping them
const displayProducts = (products, center)=>{
    let display = products.map(({title, price, image})=>`<div class="product">
    <div class="product-header">
        <img src=${image} alt="pic1">
    </div>
    <div class="product-footer">
        <h3>${title}</h3>
    </div>
    <div class="rating">
       <i class="fas fa-star"></i>
       <i class="fas fa-star"></i>
       <i class="fas fa-star"></i>
       <i class="fas fa-star"></i> 
    </div>
    <div class="product-price"><h4>$${price}</h4>
   </div>
   <ul>
       <li>
           <a href="#"><i class="far fa-eye"></i></a>
       </li>
       <li>
           <a href="#"><i class="far fa-heart"></i></a>
       </li>
       <li>
           <a href="#"><i class="fas fa-sync-alt"></i></a>
       </li>
   </ul>
</div>`);
display = display.join("");
center.innerHTML = display;
};
//filtering

const catContainer = document.querySelector(".sort-category");
const productCenter = document.querySelector(".product-center");
const filterBtns = [...document.querySelectorAll(".filter-btn")];
console.log(filterBtns)
 if(catContainer)
catContainer.addEventListener("click", async e=>{
    const target = e.target.closest(".section-title");
    if(!target) return;
    const id = target.dataset.id;
   // console.log(id)
    const products = await getProducts();

     if(id)
    filterBtns.forEach(btn=>{
        btn.classList.remove("active");
    });
    target.classList.add("active");
    const menucart = products.filter(product=> product.category===id);
   // console.log(menucart);
   // this adds the animation to the products by using animates.js links
   productCenter.classList.add("animate__animated", "animate__backInUp");
   setTimeout(()=>{
       // after 1sec this will remove this effect so that we can resue to the other options
    productCenter.classList.remove("animate__animated", "animate__backInUp"); 
   },1000);
   displayProducts(menucart, productCenter);
});
//this filters the all products and displays only the required products
const filterArray = async type=>{
    const products = await getProducts();
    return products.filter(product=> product.category === type);
    console.log(products)
};
 const shopCenter = document.querySelector(".shop-center");
 const latestCenter = document.querySelector(".latest-center");
 const recentCenter = document.querySelector(".recent-center");
window.addEventListener("DOMContentLoaded", async ()=>{
    const products = await getProducts();
    const defaultProduct = await filterArray("trend");
    const latestProduct = await filterArray("latest");
    const recentProduct = await filterArray("recent");
    displayProducts(defaultProduct, productCenter);
    displayProducts(products, shopCenter);
    displayProducts(latestProduct, latestCenter);
    displayProducts(recentProduct, recentCenter);
})
const nav = document.querySelector(".nav-menu");
const navigation = document.querySelector(".navigation");
const openBtn = document.querySelector(".hamburger");
const closeBtn = document.querySelector(".close");

const navLeft = nav.getBoundingClientRect().left;
//adds the show class to all the html tags
openBtn.addEventListener("click",()=>{
    if(navLeft < 0){
        navigation.classList.add("show");
        nav.classList.add("show");
        document.body.classList.add("show");
    }
})
//removes hte shoe class from all the html tags
closeBtn.addEventListener("click",()=>{
    if(navLeft < 0){
        navigation.classList.remove("show");
        nav.classList.remove("show");
        document.body.classList.remove("show");
    }
})


//fixing the navbar to remain at constant height

// const navbar = document.querySelector(".navigation");
// const navheight = navbar.getBoundingClientRect().height;
// //console.log(navheight);
// window.addEventListener("scroll",()=>{
//     const scrollheight = window.pageYOffset;
//     if(scrollheight > navheight){
//         navbar.classList.add("fix-nav")
//     }else{
//         navbar.classList.remove("fix-nav")

//     }
// })

//popup

const popup = document.querySelector(".popup");
const closepopup = document.querySelector(".popup-close");
closepopup.addEventListener("click", ()=>{
    popup.classList.remove("show")
});
window.addEventListener("load",()=>{
    setTimeout(()=>{
        popup.classList.add("show")  
    },5000);
});

//loader
const loader = document.getElementById("preloader");
window.addEventListener("load", ()=>{
    setTimeout(()=>{
        loader.classList.add("hide");
    },3000);
});
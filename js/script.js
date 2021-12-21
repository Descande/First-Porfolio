window.onload =() =>{
    setTimeout(() => {
        document.querySelector('body').classList.add('display');
    },5000);
}

document.querySelector('.burger-menu').addEventListener('click',() =>{
    document.querySelector(".container").classList.toggle("change");
});

document.querySelector('.side-bar').addEventListener('click',() =>{
    document.querySelector(".container").classList.toggle("change");
});

document.querySelector('.scroll-btn').addEventListener("click",()=>{
    document.querySelector("html").style.scrollBehavior="smooth";
    setTimeout(()=> {
        document.querySelector("html").style.scrollBehavior="unset";
    }, 1000)
});

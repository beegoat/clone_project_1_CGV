const navOverMenu = document.querySelector(".nav-over");


navOverMenu.addEventListener("mousemove", (event)=>{
    const overMenu = document.querySelector(".nav-overmenu");
    overMenu.style.display = 'block';
    
});

navOverMenu.addEventListener("mouseout", (event)=>{
    const overMenu = document.querySelector(".nav-overmenu");
    overMenu.style.display = 'none';
})


console.log(navOverMenu)
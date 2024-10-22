const mainMenuItem = document.querySelectorAll(".nav-menu > ul > li");

// console.log(mainMenuItem);

mainMenuItem.forEach(item =>{
    const link = item.querySelector('a');
    console.log(link)
});

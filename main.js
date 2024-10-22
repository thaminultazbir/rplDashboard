const mainMenuItem = document.querySelectorAll(".nav-menu > ul > li");
function hideAllSubMenu(){
    mainMenuItem.forEach(item =>{
        item.classList.remove('active');
        const subMenu = item.querySelector('.sub-menu');
        if(subMenu){
            subMenu.style.display = 'none';
        }
    });
}

mainMenuItem.forEach(item => {
    const link = item.querySelector('a');
    link.addEventListener('click', function(e){
        e.preventDefault();
        const subMenu = item.querySelector('.sub-menu');

        if(subMenu){
            if(subMenu.style.display === 'block'){
                subMenu.style.display = 'none';
                item.classList.remove('active');
            }
            else{
                hideAllSubMenu();
                subMenu.style.display = 'block';
                item.classList.add('active');
            }
        }
    });
});

window.addEventListener('load', () => {
    bird1.style.position = 'absolute';
    bird1.style.top = 0;
    
});

window.addEventListener("keydown", e => {

    switch(e.key) {
        case "ArrowUp":

            bird1.style.top = parseInt(bird1.style.top) + speed + 'px';
            
            console.log("up");
            break
        case "ArrowDown":



            console.log("down");
            break
                  
    }
})
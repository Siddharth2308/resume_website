let items = document.querySelectorAll('.carousel .carousel-item')

items.forEach((el) => {
    const minPerSlide = 4
    let next = el.nextElementSibling
    for (var i = 1; i < minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
            next = items[0]
        }
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})


function handleContact(){
    window.scrollTo(0, document.body.scrollHeight);
}

function handleTop() {
    window.scrollTo(0, 0);
    // document.body.scrollTop = document.documentElement.scrollTop = 0;
}
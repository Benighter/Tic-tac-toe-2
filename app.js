let cell = document.querySelectorAll('.cell')

cell.forEach(cell => {
    cell.addEventListener('click', function (e) {
        console.log("clicked")
    })
});
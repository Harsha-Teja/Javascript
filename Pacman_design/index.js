const squares = Array.from(document.querySelectorAll('.grid div'))

// We are assigning different set of things in our matrices
const layout = [ 1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
                1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,
                1,0,1,1,1,0,0,0,0,1,1,0,1,1,1,0,1,
                1,0,1,1,1,0,1,0,1,1,1,0,1,1,1,0,1,
                1,0,1,1,1,0,1,0,1,1,1,0,1,1,1,0,1,
                1,0,1,1,1,0,1,2,1,1,1,0,1,1,1,0,1,
                1,0,1,1,1,0,1,0,1,1,1,0,1,1,1,0,1,
                1,0,1,1,1,0,1,0,0,0,0,0,1,1,1,0,1,
                1,0,1,1,1,0,1,0,1,1,1,3,1,1,1,0,1,
                1,0,0,0,0,0,1,0,1,1,1,0,1,1,1,0,1,
                1,3,1,1,1,0,1,3,1,1,1,0,0,0,0,0,1,
                1,0,1,1,1,0,1,0,1,1,1,0,1,1,1,0,1,
                1,0,1,1,1,0,1,0,1,1,1,0,1,1,1,0,1,
                1,0,1,1,1,0,1,0,0,0,0,0,1,1,1,0,1,
                1,0,1,1,1,0,1,1,0,1,1,0,1,1,1,0,1,
                1,0,0,0,0,3,0,0,0,1,1,0,0,0,0,0,1,
                1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,]
                
for ( let i = 0; i < squares.length; i++){
    if (layout[i] === 1){
        squares[i].classList.add("wall")
    } else if (layout[i] === 2){
        squares[i].classList.add("pac")
    } else if ( layout[i] === 3) {
        squares[i].classList.add("ghost")
    } else {
        console.log("ignore")
    }
}
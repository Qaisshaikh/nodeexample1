var rect = {
    perimeter: (x,y) => (2*(x+y)),
    area: (x,y) => (x,y)
};


function solveRect(l,b){
    console.log("Area of rectangle is " + rect.area(l,b));
    console.log("Perimeter of rectangle is " + rect.perimeter(l,b));
}

solveRect(2,3);
// 1. Copy and paste your prototype in here and refactor into class syntax.


class CuboidMaker2 {
    constructor(length, width, height) {
        this.length = length;
        this.width = width;
        this.height = height;
    };

    volume() {
        return (this.length * this.width * this.height);
    };

    surfaceArea() {
        return (2 * (this.length * this.width + this.length * this.height + this.width * this.height));
    };
};



const cuboid2 = new CuboidMaker2(4, 5, 5);
// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid2.volume()); // 100
console.log(cuboid2.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  
// Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  
// Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker2{
    constructor(length, width, height) {
        super(length, width, height);
    }
    
    volume() {
        return (this.length * this.length * this.length);
    };

    surfaceArea() {
        return 6 * (this.length * this.length);
    };
}



const cube = new CubeMaker(4, 4, 4);
//tests
console.log(cube.volume()); //64
console.log(cube.volume); //to see that volume() is overwritten from the method from it's parent that it also received, and therefore so will be surfaceArea
console.log(cube.surfaceArea()); //96
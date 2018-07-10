export class Point {

    constructor(private roll: number, private y: number) {
        console.log('its point constructer');
    }

     draw = () => {
        console.log('draw function');
    }

    getDistance = () => {
        console.log('get distance');
    }

    get Roll() {
        return this.roll;
    }

    set x(x: number) {
        this.x = x;
    }
}



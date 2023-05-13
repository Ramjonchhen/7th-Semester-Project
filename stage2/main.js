const canvas = document.getElementById("myCanvas");
canvas.width = 200;

const ctx = canvas.getContext("2d");
const road = new Road(canvas.width/2,canvas.width*0.9);
const car = new Car(road.getLaneCenter(0),100,30,50);
car.draw(ctx);

animate();

function animate() {
    car.update();
    canvas.height = window.innerHeight;

    // trying to animate the car is moving;
    ctx.save();
    console.log("value of the car.y is: ",car.y);
    console.log("value of the canvas height is: ",canvas.height*0.7);
    console.log("translating the canvas to : ",-car.y+canvas.height*0.7);
    ctx.translate(0,-car.y+canvas.height*0.7);

    road.draw(ctx);
    car.draw(ctx);

    ctx.restore();
    requestAnimationFrame(animate);
}
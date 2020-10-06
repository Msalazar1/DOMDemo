function trip(car) {
    console.log('welcome to the trip function');
    car.drive();
    console.log(car.model);
    console.log('finished with the trip');
}
function testtrip() {
    var honda = {
        model: 'Civic',
        color: 'Red',
        drive: function () {
            console.log('Honda is driving.');
        }
    };
    var schwin = {
        model: 'abc',
        color: 'black',
        wheelsize: 30
    };
    trip(honda);
}
//# sourceMappingURL=app.js.map
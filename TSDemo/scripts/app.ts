interface Car {
    model: String,
    color: String,
    drive(): void
}

function trip(car: Car) {
    console.log('welcome to the trip function');
    car.drive();
    console.log(car.model);
    console.log('finished with the trip');
}

function testtrip() {
    let honda = {
        model: 'Civic',
        color: 'Red',
        drive: function () {
            console.log('Honda is driving.');
        }
    };

    let schwin = {
        model: 'abc',
        color: 'black',
        wheelsize: 30
    };

    trip(honda);
   
}



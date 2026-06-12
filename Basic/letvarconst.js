function testVar(){
    if (true) {
        var num = 10;
    }
    console.log(num); // This will work because var is function-scoped
}
testVar();


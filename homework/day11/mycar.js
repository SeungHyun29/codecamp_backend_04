class Mycar {
    carmodel = "JAGUAR"
    carcolor = "red"
    carpower = 10

    start = () => {
        console.log("출발해여")
    }

    stop = () => {
        console.log("정지해여")
    }

}

const mycar = new Mycar()
mycar.start()
mycar.stop()


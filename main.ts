let Posizione = 0
basic.forever(function () {
    Posizione = input.compassHeading()
    if (Posizione < 45 || Posizione > 315) {
        basic.showString("N")
    } else {
        basic.showString("_")
    }
})

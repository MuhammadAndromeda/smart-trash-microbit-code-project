let Distance = 0
basic.forever(function () {
    Distance = sonar.ping(
    DigitalPin.P3,
    DigitalPin.P4,
    PingUnit.Centimeters
    )
    whaleysans.showNumber(Distance)
    basic.showString("" + (Distance))
    if (Distance > 0 && Distance < 20) {
        pins.servoWritePin(AnalogPin.P0, 90)
        basic.pause(5000)
    } else {
        pins.servoWritePin(AnalogPin.P0, 0)
        basic.pause(500)
    }
    basic.pause(100)
})

function LineTracking () {
    TrackingValues = Rover.LineTracking()
    if (TrackingValues == 2 || TrackingValues == 5) {
        Rover.setALLRGB(Rover.colors(RoverColors.Green))
        Rover.Move(trackingSpeed)
    }
    if (TrackingValues == 4 || TrackingValues == 6) {
        Rover.setALLRGB(Rover.colors(RoverColors.Red))
        Rover.MotorRunDual(SpeedSlowSide, SpeedFastSide)
    }
    if (TrackingValues == 1 || TrackingValues == 3) {
        Rover.setALLRGB(Rover.colors(RoverColors.Blue))
        Rover.MotorRunDual(SpeedSlowSide, SpeedFastSide)
    }
    Rover.setALLRGB(Rover.colors(RoverColors.Black))
    Rover.MotorStopAll(MotorActions.Stop)
}
let TrackingValues = 0
let SpeedFastSide = 0
let SpeedSlowSide = 0
let trackingSpeed = 0
basic.showIcon(IconNames.Happy)
trackingSpeed += 110
SpeedSlowSide = 25
SpeedFastSide = 110
basic.forever(function () {
    LineTracking()
})

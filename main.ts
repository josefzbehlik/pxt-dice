let number = 0;

basic.forever(function () {
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(number += 1)
    if (number > 10)
    {
        basic.showNumber(number -= 10)
    }
    })

input.onButtonPressed(Button.A, function () {
    basic.showNumber(number -= 1)
    if (number < -5) {
        basic.showNumber(number += 6)
    }

})
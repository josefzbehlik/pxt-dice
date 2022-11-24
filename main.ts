let number = 0;

basic.forever(function () {
    if (input.buttonIsPressed(Button.A))
    {
        if (number > 0) { whaleysans.showNumber(number -= 1) }
    }
    whaleysans.showNumber(number)
    if (input.buttonIsPressed(Button.B)) {
        if (number < 100) { whaleysans.showNumber(number += 1) }
    }
    whaleysans.showNumber(number)
    })




//  })
//  input.onButtonPressed(Button.B, function () {
//      basic.showNumber(number += 1)
//       if (number > 10)
//        {
//            basic.showNumber(number -= 10)
//        }
//      })
//
//  input.onButtonPressed(Button.A, function () {
//     basic.showNumber(number -= 1)
//        if (number < -5) {
//            basic.showNumber(number += 6)
//        }
//  
//  })
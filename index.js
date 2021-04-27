function scuberGreetingForFeet(ride){
  // Write your code here!
  let string = ""
  let dollar = 0

  if (ride <= 400){
    string = 'This one is on me!'
  } else if (ride > 2000 && ride < 2500) {
    dollar = 30
    string = 'I will gladly take your thirty bucks.'
  } else {
    string = 'No can do.'
  }
  return string
  
}

let ternaryCheckCity = city => (city === 'NYC') ? 'Ok, sounds good.' : 'No go.'
  // Write your code here!

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch(tip){
    case 'generous':
      return tip = 'Thank you so much.';
      // break;
    case 'not as generous':
      return tip = 'Thank you.';
      // break;
    case 'thanks for everything':
      return tip = 'Bye.';
      // break;
  }

}
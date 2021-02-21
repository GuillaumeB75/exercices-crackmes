
// Vous devez assigner la bonne string à la variable password ci dessous
// Et obtenir le message 'OK' en éxecutant le programme
let password = 'JustASimplePassword'

const crackme9 = (password) => {
  if (password.startsWith('Just') && password.endsWith('Password')) {  // JustPassword
    let tmp1 = password.slice(4).slice(0, -8) //Just + ASimple + Password
    tmp1 = tmp1.split('').reverse().join('')  //elpmiSa# devient aSimple
    if (Number.isNaN(Number(tmp1))) {   // négation du # 
      tmp1 += String.fromCharCode(35)  //#
      if (tmp1 === 'e' + 'l' + 'p' + 'm' + 'iSA#') {  //elpmiSa#
        console.log('OK')
      } else {
        console.log('BAD')
      }
    } else {
      console.log('BAD')
    }
  } else {
    console.log('BAD')
  }
}
crackme9(password)
// Vous devez assigner la bonne string à la variable password ci dessous
// Et obtenir le message 'OK' en éxecutant le programme
let password = '4321drowssap' // appliquer les consignes ci-dessous

const crackme5 = (password) => {
  if (password.split('').reverse().join('') === 'password1234') { // tranforme en tableau puis inverse puis assemble
    console.log('OK')
  } else {
    console.log('BAD')
  }
}

crackme5(password)
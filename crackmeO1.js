
// Vous devez assigner la bonne string à la variable password ci dessous
// Et obtenir le message 'OK' en éxecutant le programme

let password = 'password1234' // renseigner le password ci-dessous

const crackme1 = (password) => {
  if (password === 'password1234') {   // le password est présent à cette ligne
    console.log('GOOD')
  } else {
    console.log('BAD')
  }
}

crackme1(password)
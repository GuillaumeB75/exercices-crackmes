// Vous devez assigner la bonne string à la variable password ci dessous
// Et obtenir le message 'OK' en éxecutant le programme
let password = '1337' //password12345678 comme exemple de correction

const crackme4 = (password) => {
  let tmp1 = 1337
  for (let i = 0; i < password.length; ++i) {
    tmp1 += password.charCodeAt(i)   // addition des code ASCII de chaques lettres du mot password 
  }
  if (tmp1 === 1337) {
    console.log('GOOD')
  } else {
    console.log('BAD')
  }
}

crackme4(password)
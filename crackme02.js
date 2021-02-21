// Vous devez assigner la bonne string à la variable password ci dessous
// Et obtenir le message 'OK' en éxecutant le programme

let password = 'p'  // le 0 est aussi pris en compte comme "GOOD"

const crackme2 = (password) => {     
  if (password.length === 1) {   // se référer à la longueur du password 
    console.log('GOOD')
  } else {
    console.log('BAD')
  }
}

crackme2(password)
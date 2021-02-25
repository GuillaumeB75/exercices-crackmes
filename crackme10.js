// Vous devez assigner la bonne string à la variable password ci dessous
// Et obtenir le message 'OK' en éxecutant le programme
let password = ''
//'azeazeaze'
//['a', 'z', 'e', .....]
// il faut appliquer les commandes dans un terminal afin de tester son raisonnement et les lignes de codes les unes après les autres

const crackme10 = (password) => {
  if (
    password
      .trim()  //enlever les espaces
      .toLowerCase() // mettre en minuscule
      .split('') // on le traduit en tableau
      .filter((elem) => ['a', 'e', 'i', 'o', 'u', 'y'].includes(elem)) // il ne restera plus que les voyelles après filtrage
      .map((elem) => elem.charCodeAt())
      .reduce((a, b) => {
        return a + b
      }, 0) %
    2 !==
    0
  ) {
    console.log('OK')
  } else {
    console.log('BAD')
  }
}

crackme10(password)
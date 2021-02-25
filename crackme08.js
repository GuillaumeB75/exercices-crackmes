// Vous devez assigner la bonne string à la variable password ci dessous
// Et obtenir le message 'OK' en éxecutant le programme
let password = '***42*'

const crackme8 = (password) => {
  // splt [1, 2, 3, 4, 5, 6, 7, 8, 9]
  // slice [7, 8]
  // join: '78'
  let tmp1 = password.split('').slice(-3, -1).join('')  //la recherche de l'index et la découpe se fait en partant de la fin de la chaîne de caractères
  if (Number(tmp1) === 42) {
    console.log('GOOD')
  } else {
    console.log('BAD')
  }
}
crackme8(password)

// [1, 2, 3, 4] slice de (-3, -1)
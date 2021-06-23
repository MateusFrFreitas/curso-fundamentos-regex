const texto = '.$+?-'

console.log(texto.match(/[+.?*$]/g)) // não precisa de escape dentro do conjunto
console.log(texto.match(/[$-?]/g)) // intervalo

// Não é um intervalo
console.log(texto.match(/[$\-?]/g)) // ou -$?
console.log(texto.match(/[-?]/g))

// pode precisa de escape dentro do conjunto: - [ ] ^ 
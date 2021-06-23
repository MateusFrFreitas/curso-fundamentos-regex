const texto = `Lista telefônica:
	- (12) 98756-1212
	- (12)987321234
	- 12998876655
	- 98765-4321
	- 987651234...`

//const regex = /((\(\d{2}\))|\d{2})?\s?\d{4,5}-\d{4}/g
// ou
const regex = /\(?\d{0,2}\)?\s?\d{4,5}-\d{4}/g

console.log(texto.match(regex))
const texto = `CPF dos aprovados:
    - 600.567.890-12
    - 765.998.345-23
    - 265.955.920-10
    - 648.051.150-68 
    - 000000.000-00...`

//const regex = /(\d{3}\.){2}\d{3}-\d{2}/g
// ou 
//const regex = /(\d{3}\.?){3}-\d{2}/g
// ou
const regex = /\d{3}\.\d{3}.\d{3}-\d{2}/g

console.log(texto.match(regex))    
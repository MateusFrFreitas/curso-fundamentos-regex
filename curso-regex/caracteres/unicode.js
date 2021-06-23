// no inicio...
// um byte (8 bits) - 256 caracteres
// símbolos, pontuações, A-Z, a-z, 8-9

// dois bytes (16 bits) - 65500+ caracteres
// +símbolos, +pontuação, A-Z, a-z, 0-9

// unicode
// quantidade de bytes variável
// suporta mais de 1 milhão de caracteres
// atualmente com mais de 100.000 caracteres atribuídos

// https://unicode-table.com/pt/

const texto = 'aʬc௵D'
console.log(texto.match(/\u02AC|\u0BF5/g))
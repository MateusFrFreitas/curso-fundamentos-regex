const texto = 'Bom\nDia'
console.log(texto.match(/.../gi))
console.log(texto.match(/..../gi)) // . não engloba \n

//dotall - algumas linguagens tem uma flag /exp/s, mas JS não
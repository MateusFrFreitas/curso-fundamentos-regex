const texto = `Os e-mails dos convidados são:
    - fulano@cod3r.com.br
    - oi_jorge@empresa.info.br
    - meu.email@dominio.com
    - xico@gmail.com 
    - teste@teste.com.br.teste ...`

//const regex = /\w+\@(\w+\.){0,2}\w+/g

let regex

regex = /[a-zA-Z0-9_]+@[a-zA-Z0-9_]+\.[a-zA-Z0-9_]{2,4}/g
console.log(texto.match(regex))    

regex = /\w+@\w+\.\w{2,4}/g
console.log(texto.match(regex))    

regex = /[\w.]+@\w+\.\w{2,4}/g
console.log(texto.match(regex))    

regex = /[\w.]+@\w+\.\w{2,4}\.?\w{0,2}/g
console.log(texto.match(regex))    
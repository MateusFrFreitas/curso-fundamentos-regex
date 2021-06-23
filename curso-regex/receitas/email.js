const texto = `Os e-mails dos convidados são:
    - fulano@cod3r.com.br
    - oi_jorge@empresa.info.br
    - meu.email@dominio.com
    - xico@gmail.com 
		- teste@teste.com.br.teste 
		- oi-eusoud+@email.com...`

console.log(texto.match(/\S+@\w+\.\w{2,6}(\.\w{2})?/g))
		

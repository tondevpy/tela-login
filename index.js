let usuario = 'teste@gmail.com'
let senhaUsuario = 'qwe123qwe12'
let reportMessage = document.getElementById('reportMessage')

let formulario = document.getElementById('formulario')


formulario.addEventListener('submit', function(ev){
    ev.preventDefault()
    let email = document.getElementById('email').value
    let senha = document.getElementById('senha').value

    if(email && senha){
        if(email === usuario && senha === senhaUsuario){
            reportMessage.innerText = 'Logado com sucesso...!'
            reportMessage.style.color = 'green'
        }else{
            reportMessage.innerText = 'Email ou senha incorreto...!'
            reportMessage.style.color = 'red'
        }
    }else{
        reportMessage.style.color = 'red'
    }
})
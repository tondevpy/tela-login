# tela-login


formulário de login simples usando HTML, CSS e JavaScript puro. Ele permite que os usuários insiram um email e senha e verifica se correspondem às credenciais pré-definidas (no caso, "teste@gmail.com" e "qwe123qwe12").

Quando o usuário envia o formulário, o código JavaScript associado ao evento "submit" é acionado. Ele impede o comportamento padrão de envio do formulário usando ev.preventDefault(), o que significa que a página não será recarregada.

Em seguida, o código obtém os valores inseridos nos campos de email e senha. Se ambos os campos estiverem preenchidos, ele verifica se o email e a senha correspondem aos valores definidos nas variáveis "usuario" e "senhaUsuario". Se forem iguais, exibe uma mensagem de sucesso ("Logado com sucesso...!") em verde. Caso contrário, exibe uma mensagem de erro ("Email ou senha incorreto...!") em vermelho.

Se algum dos campos estiver vazio, o código não exibe uma mensagem de erro específica, mas mantém o estilo de cor vermelha no elemento de mensagem.

var operacao = prompt (" EM QUAL SEMANA DE ESTUDOS VOCÊ ESTA??? Digite 1 para primeira semana, 2 para segunda, 3 para terceira, 4 para quarta, 5 para quinta e 6 para sexta:")

    if(operacao ==1){
        document.write(
        "Você esta em: Lógica de programação I: Os primeiros programas com Javascript e HTML.") 
        document.write( "<ul> <h5>Semana 1 - 08/03/2021 </h5><li>Comece a Programar Hoje</li> <li>Comunique-se com o usuário</li><li>Torne seu programa dinâmico com variáveis</li><li>Crie suas próprias funcionalidades</li><li>Pratique resolvendo problemas do seu dia a dia</li><li>Execute códigos diferentes dependendo da condição</li><li>Repita tarefas</li><li>Interaja de maneira diferente com o usuário</li><li>Trabalhe com muitos dados</li> </ul>")

        } else if (operacao ==2){
        document.write("Você esta em: Lógica de programação II: pratique com desenhos, animações e um jogo")
        document.write("<ul><h5>Semana 2 - 15/03/2021</h5><li>Desenhando gráficos com Canvas</li><li>Extraindo funções</li><li>Interagindo com o usuário</li><li>Movendo elementos: animações simples</li><li>Nosso primeiro jogo</li></ul>")

        } else if (operacao ==3){
        document.write("Você esta em:HTML5 e CSS3 parte 1: A primeira página da Web")
        document.write("<ul><h5>Semana 3 - 22/03/2021</h5><li>Marcação do primeiro texto</li><li>Separando o conteúdo e informações</li><li>Trabalhando com CSS</li><li>Estilizando imagens</li><li>Listas e divisões de conteúdo</li><li>Finalizando a página</li><ul>")
        } else if (operacao ==4){
        document.write("Você esta em:HTML5 e CSS3 parte2: Posicionamento, listas e navegação")
        document.write ("<ul><h5>Semana 4 - 29/03/2021</h5><li>Aprenda a estrutura da página HTML</li><li>Navegue entre páginas web</li><li>Conheça reset.css e o posicionamento pelo CSS</li><li>Entenda a diferença entre inline e block</li><li>Lide com bordas e pseudo-classes CSS</li><ul>")
            }else if (operacao ==5){
        document.write("Você esta em: JavaScript: Programando na linguagem da web")
        document.write ("<ul><h5>Semana 5 - 05/04/2021</h5><li>Entenda mais como funciona esta popular linguagem do mercado</li><li>Aprenda a manipular os elementos de sua página</li><li>Trabalhe bem com eventos do navegador</li><li>Entenda como utilizar e validar formulários</li><li>Conheça boas práticas de organização de código Javascript</li><li>Busque dados em outro servidor com AJAX</li><ul>")
        } else if (operacao ==6){
        document.write("Você esta em: Projeto Oracle ONE Lógica de Programação")
        document.write ("Semana 6 - 12/04/2021 <br><br> PARABÉNS VOCÊ SOBREVIVEU ATÉ AQUI!!! <br><br> Agora é só finalizar o projeto!")
        }else{
            document.write("<h2>Opção Inválida!</h2>")
    }

const perguntas = [
    {
      pergunta: "O que é JavaScript?",
      respostas: [
        "Uma linguagem de programação para estilizar páginas da web",
        "Uma linguagem de programação para criar páginas da web interativas",
        "Um estilo de música popular nos anos 90",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o operador usado para atribuição de valores em JavaScript?",
      respostas: [
        "=",
        "==",
        ":=",
      ],
      correta: 0
    },
    {
      pergunta: "Qual método é usado para imprimir algo no console em JavaScript?",
      respostas: [
        "console.print()",
        "print()",
        "console.log()",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é o símbolo usado para comentários de uma linha em JavaScript?",
      respostas: [
        "//",
        "/* */",
        "--",
      ],
      correta: 0
    },
    {
      pergunta: "Qual função é usada para converter uma string em um número em JavaScript?",
      respostas: [
        "parseInt()",
        "convertToInt()",
        "toNumber()",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o resultado de 10 + '5' em JavaScript?",
      respostas: [
        "15",
        "105",
        "Erro",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a função do operador '==' em JavaScript?",
      respostas: [
        "Comparação estrita de igualdade",
        "Comparação de igualdade",
        "Atribuição de valores",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o resultado de '2' + 2 em JavaScript?",
      respostas: [
        "4",
        "22",
        "Erro",
      ],
      correta: 1
    },
    {
      pergunta: "Qual palavra-chave é usada para declarar variáveis em JavaScript?",
      respostas: [
        "var",
        "let",
        "const",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o operador de negação lógica em JavaScript?",
      respostas: [
        "!",
        "~",
        "-",
      ],
      correta: 0
    },
  ];
  
  const quiz= document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
   const totalDePerguntas = perguntas.length
   const mostrarTotal = document.querySelector('#acertos span')
   mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  //loop ou laço de repetição
  for(const item of perguntas) {
  const quizItem = template.content.cloneNode(true)
  quizItem.querySelector('h3').textContent = item.pergunta
  
  for(let resposta of item.respostas){
  const dt = quizItem.querySelector('dl dt').cloneNode(true)
  dt.querySelector('span').textContent = resposta
  dt.querySelector('input').setAttribute('name','pergunta-'+ perguntas.indexOf(item))
  dt.querySelector('input').value = item.respostas.indexOf(resposta)
  dt.querySelector('input').onchange = (event) => {
      const estaCorreta = event.target.value == item.correta
      
      corretas.delete(item)
      if(estaCorreta) {
    corretas.add(item)
  }
  
    mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas  
  }
  
  
  quizItem.querySelector('dl').appendChild(dt)
  }
  
  
  quizItem.querySelector('dl dt').remove()
  
  //coloca a pergunta na tela
  quiz.appendChild(quizItem)
  }
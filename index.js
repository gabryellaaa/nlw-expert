const perguntas = [
    {
      pergunta: "Qual é a estrela mais próxima da Terra?",
      respostas: [
        "Alfa Centauri",
        "Betelgeuse",
        "Sirius",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o maior planeta do sistema solar?",
      respostas: [
        "Terra",
        "Saturno",
        "Júpiter",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a estrela mais brilhante vista da Terra?",
      respostas: [
        "Sirius",
        "Rigel",
        "Sol",
      ],
      correta: 2
    },
    {
      pergunta: "O que é um cometa?",
      respostas: [
        "Um tipo de estrela",
        "Um planeta anão",
        "Um objeto composto principalmente de gelo e poeira",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é o nome da galáxia onde está localizado o sistema solar?",
      respostas: [
        "Via Láctea",
        "Andrômeda",
        "Centaurus A",
      ],
      correta: 0
    },
    {
      pergunta: "O que é uma supernova?",
      respostas: [
        "Uma estrela recém-nascida",
        "Uma explosão cataclísmica de uma estrela",
        "Um planeta com alta atividade vulcânica",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a maior lua de Júpiter?",
      respostas: [
        "Io",
        "Europa",
        "Ganímedes",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é o nome da primeira missão tripulada a pousar na Lua?",
      respostas: [
        "Apollo 11",
        "Sputnik 1",
        "Vostok 1",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o planeta conhecido como 'planeta vermelho'?",
      respostas: [
        "Terra",
        "Vênus",
        "Marte",
      ],
      correta: 2
    },
    {
      pergunta: "O que é um buraco negro?",
      respostas: [
        "Um tipo de estrela",
        "Um fenômeno atmosférico",
        "Um objeto com gravidade tão forte que nem a luz pode escapar dele",
      ],
      correta: 2
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
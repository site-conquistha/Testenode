const formButtonProx = document.querySelector("#formButtonProx"); //Demais botões do formulário
const formButtonAnt = document.querySelector("#formButtonAnt"); //Demais botões do formulário
const formButtonSubmit = document.querySelector("#formButtonSubmit"); //Botão de envio de formulário
const radioImovel = document.querySelector("#radioimovel"); //Constantes para receberem o valor dos radios
const radioParceiro = document.querySelector("#radioparceiros"); //Constantes para receberem o valor dos radios
let step = 1 //Para que a primeira tela seja a tela 1
let selecaoForm = 'imovel'
document.querySelector("#formButtonAnt").classList.add('hidden') //necessário colocar o hidden
document.querySelector("#formButtonSubmit").classList.add('hidden') //necessário colocar o hidden


//Botão que chama a função de enviar email
// mailButton = document.querySelector("#formButtonSubmit");
// mailButton.classList.add('hidden'); //necessário colocar o hidden
// mailButton.addEventListener("click", onClickSendEmail);


// Varíaveis do HTML
//Constantes para verificar os valores dos radios
const estado1_1 = document.querySelector("#estado1_1")
const estado2_1 = document.querySelector("#estado2_1")
const estado3_1 = document.querySelector("#estado3_1")
const estado4_1 = document.querySelector("#estado4_1")
const estado5_1 = document.querySelector("#estado5_1")

const radiodespesassim = document.querySelector("#radiodespesassim")
const radiodespesasnao = document.querySelector("#radiodespesasnao")

const radiofgtssim = document.querySelector("#fgtssim")
const radiofgtsnao = document.querySelector("#fgtsnao")

// Varíaveis do HTML
//Valores dos radios e checkbox
let radioestadocivil_1 = "Solteiro (a)"
let radioestadocivil_2 = "Casado (a)"
let radiodespesas = " "
let radiofgts = " "

//Variáveis do formulário da parte de parceiro
let ramoimobiliario = ' '
let nomecompleto = ' '
let nomeempresa = ' '
let cidade = ' '
let email = ' '
let whatsapp = ' '
let body = ' '
let body2 = ' '
let body_imovel = ' '

//Variáveis do formulário da parte de financiamento 1
let nomecompleto_1 = ' '
let datadenascimento_1 = ' '
let cpf_1 = ' '
let rg_1 = ' '
let endereco_1 = ' '
let telefone_1 = ' '
let email_1 = ' '
let estado_1 = ' '
let empresaondetrabalha_1 = ' '
let cargoprofissional_1 = ' '
let rendamensal_1 = ' '
let bancos_1 = ' '

//Variáveis do formulário da parte de financiamento 2
let nomecompleto_2 = ' '
let datadenascimento_2 = ' '
let cpf_2 = ' '
let rg_2 = ' '
let endereco_2 = ' '
let telefone_2 = ' '
let email_2 = ' '
let estado_2 = ' '
let empresaondetrabalha_2 = ' '
let cargoprofissional_2 = ' '
let rendamensal_2 = ' '
let bancos_2 = ' '

//Variáveis do formulário da parte de imóvel no financiamento
let valorimovel = ' '
let valorfinanciamento = ' '
let prazo = ' '


//Descobrir o estado civil a partir de um evento de click
estado1_1.addEventListener ('click', event => {
  radioestadocivil_1 = "Solteiro (a)"
})
estado2_1.addEventListener ('click', event => {
  radioestadocivil_1 = "Casado (a)"
})
estado3_1.addEventListener ('click', event => {
  radioestadocivil_1 = "Separado (a)"
})
estado4_1.addEventListener ('click', event => {
  radioestadocivil_1 = "Divorciado (a)"
})
estado5_1.addEventListener ('click', event => {
  radioestadocivil_1 = "Viúvo (a)"
})

//Descobrir os valores dos radios a partir de eventos de click
radiodespesassim.addEventListener ('click', event => {
  radiodespesas = "Sim"
})
radiodespesasnao.addEventListener ('click', event => {
  radiodespesas = "Não"
})

radiofgtssim.addEventListener ('click', event => {
  radiofgts = "Sim"
})
radiofgtsnao.addEventListener ('click', event => {
  radiofgts = "Não"
})

//Descobrir o valor do radio que determina qual formulário o cliente recebe a partir de eventos de click
radioImovel.addEventListener('click', event => {
  selecaoForm = 'imovel';
})
radioParceiro.addEventListener('click', event => {
  selecaoForm = 'parceiro';
})


//Esses dois eventos atrelados aos botões são responsáveis por selecionar qual tela do formulário o cliente recebe
formButtonProx.addEventListener('click', event => {
  event.preventDefault();
  step += 1;
  
  if(step == 1) {
    document.querySelector('#passo1').classList.remove('hidden')
    document.querySelector('#passoParceiro').classList.add('hidden')
    document.querySelector('#passoPessoaFisica').classList.add('hidden')
    document.querySelector("#formButtonAnt").classList.add('hidden')
    document.querySelector("#formButtonProx").classList.remove('hidden')
    document.querySelector('#selecioneuma').classList.remove('hidden')
    document.querySelector("#formButtonSubmit").classList.add('hidden')
  } else if ((step == 2) && (selecaoForm == 'parceiro')) {
    document.querySelector('#passo1').classList.add('hidden')
    document.querySelector('#passoParceiro').classList.remove('hidden')
    document.querySelector('#passoPessoaFisica').classList.add('hidden')
    document.querySelector("#formButtonAnt").classList.remove('hidden')
    document.querySelector("#formButtonProx").classList.add('hidden')
    document.querySelector('#selecioneuma').classList.add('hidden')
    document.querySelector("#formButtonSubmit").classList.remove('hidden')
  } else if ((step == 2) && (selecaoForm == 'imovel')) {
    document.querySelector('#passo1').classList.add('hidden')
    document.querySelector('#passoParceiro').classList.add('hidden')
    document.querySelector('#passoPessoaFisica').classList.remove('hidden')
    document.querySelector("#formButtonAnt").classList.remove('hidden')
    document.querySelector("#formButtonProx").classList.add('hidden')
    document.querySelector('#selecioneuma').classList.add('hidden')
    document.querySelector("#formButtonSubmit").classList.remove('hidden')
  }
})
//Mesma função do evento anterior porém para botão de "Anterior"
formButtonAnt.addEventListener('click', event => {
  event.preventDefault();
  step -= 1;
  if(step == 1) {
    document.querySelector('#passo1').classList.remove('hidden')
    document.querySelector('#passoParceiro').classList.add('hidden')
    document.querySelector('#passoPessoaFisica').classList.add('hidden')
    document.querySelector("#formButtonAnt").classList.add('hidden')
    document.querySelector("#formButtonProx").classList.remove('hidden')
    document.querySelector('#selecioneuma').classList.remove('hidden')
    document.querySelector("#formButtonSubmit").classList.add('hidden')
  } else if ((step == 2) && (selecaoForm == 'parceiro')) {
    document.querySelector('#passo1').classList.add('hidden')
    document.querySelector('#passoParceiro').classList.remove('hidden')
    document.querySelector('#passoPessoaFisica').classList.add('hidden')
    document.querySelector("#formButtonAnt").classList.remove('hidden')
    document.querySelector("#formButtonProx").classList.add('hidden')
    document.querySelector('#selecioneuma').classList.add('hidden')
    document.querySelector("#formButtonSubmit").classList.remove('hidden')
  } else if ((step == 2) && (selecaoForm == 'imovel')) {
    document.querySelector('#passo1').classList.add('hidden')
    document.querySelector('#passoParceiro').classList.add('hidden')
    document.querySelector('#passoPessoaFisica').classList.remove('hidden')
    document.querySelector("#formButtonAnt").classList.remove('hidden')
    document.querySelector("#formButtonProx").classList.add('hidden')
    document.querySelector('#selecioneuma').classList.add('hidden')
    document.querySelector("#formButtonSubmit").classList.remove('hidden')
  }
})




formButtonSubmit.addEventListener('click', event => {
  event.preventDefault();
  //Iniciando a variável text_send
  let text_send = ''
  //Verifica se o cliente está mesmo no segundo passo e qual é o formulário (parceiro ou financiamento)
  if((step == 2) && (selecaoForm == 'parceiro')) {
    //Pega os valores do formulário enviados pelo cliente
    ramoimobiliario = document.querySelector("#ramoimobiliario")
    nomecompleto = document.querySelector("#nomecompleto")
    nomeempresa = document.querySelector("#nomeempresa")
    cidade = document.querySelector("#cidade")
    email = document.querySelector("#email")
    whatsapp = document.querySelector("#whatsapp")
    
    //Variável que recebe todos os valores do form e formata em um texto
    text_send = `
    Respostas do formulário:

    Quero ser um parceiro!
    

    - Ramo imobiliário: ${ramoimobiliario.value}

    - Nome completo: ${nomecompleto.value} 

    - Nome da empresa: ${nomeempresa.value}

    - Cidade: ${cidade.value}

    - Email: ${email.value} 

    - Whatsapp: ${whatsapp.value} 
    `
    //console.log(text_send) //Teste para saber se os valores estão corretos

    //Esse fetch é responsável por procurar a porta cujo o servidor está rodando  
  fetch("https://testenode-liart.vercel.app/api", {
    method: "POST",
    mode: 'no-cors',
    headers: {
      "Content-Type": "application/json",
      'Origin': 'https://testenode-cliente.vercel.app/',
    },
    body: JSON.stringify({
      name: 'Formulário Site Conquistha',
      subject: "Envio de respostas do formulário",
      text: text_send,
      }),
   })
    .then((response) => { //Apresenta um alerta pro cliente informando se o email foi enviado ou não
      if (response.ok) {
        alert("Respostas enviadas");
        } else {
        alert("Houve algum problema no envio das respostas");
      }
    })
    .catch((error) => {
      console.error(error.message);
    })

    //Verifica se o cliente está mesmo no passo 2 e qual é o formulário (parceiro ou financiamento(imóvel))
  } else if ((step == 2) && (selecaoForm == 'imovel')){
    //Pega os valores do formulário enviados pelo cliente
    //Os primeiros valores são pra Pessoa Física 1
    nomecompleto_1 = document.querySelector("#nomecompleto_1")
    datadenascimento_1 = document.querySelector("#datadenascimento_1")
    cpf_1 = document.querySelector("#cpf_1")
    rg_1 = document.querySelector("#rg_1")
    endereco_1 = document.querySelector("#endereco_1")
    telefone_1 = document.querySelector("#telefone_1")
    email_1 = document.querySelector("#email_1")
    empresaondetrabalha_1 = document.querySelector("#empresaondetrabalha_1")
    cargoprofissional_1 = document.querySelector("#cargoprofissional_1")
    rendamensal_1 = document.querySelector("#rendamensal_1")
    bancos_1 = document.querySelector("#bancos_1")
    //Estes valores são para Pessoa Física 2
    nomecompleto_2 = document.querySelector("#nomecompleto_2")
    datadenascimento_2 = document.querySelector("#datadenascimento_2")
    cpf_2 = document.querySelector("#cpf_2")
    rg_2 = document.querySelector("#rg_2")
    endereco_2 = document.querySelector("#endereco_2")
    telefone_2 = document.querySelector("#telefone_2")
    email_2 = document.querySelector("#email_2")
    empresaondetrabalha_2 = document.querySelector("#empresaondetrabalha_2")
    cargoprofissional_2 = document.querySelector("#cargoprofissional_2")
    rendamensal_2 = document.querySelector("#rendamensal_2")
    bancos_2 = document.querySelector("#bancos_2")
    //Valores do imóvel preenchidos pelo cliente
    valorimovel = document.querySelector("#valorimovel")
    valorfinanciamento = document.querySelector("#valorfinanciamento")
    prazo = document.querySelector("#prazo")

    //Iniciando duas variáveis de body
    let body1 = ''
    let body_imovel = ''
    
    //Varíavel text recebe os valores do formulário preenchidos pelo cliente para Pessoa Física 1
    body1 = `
    Respostas do formulário:

    Quero solicitar um financiamento!


    Dados 1* proponente:

    - Nome completo: ${nomecompleto_1.value}

    - Data nascimento: ${datadenascimento_1.value} 

    - CPF: ${cpf_1.value}

    - RG: ${rg_1.value} 

    - Endereço: ${endereco_1.value}

    - Telefone: ${telefone_1.value}

    - E-mail: ${email_1.value}

    - Estado civil: ${radioestadocivil_1} 

    - Empresa onde trabalha: ${empresaondetrabalha_1.value} 

    - Cargo profissional: ${cargoprofissional_1.value}

    - Renda mensal: ${rendamensal_1.value} 

    - Bancos nos quais possui relacionamento: ${bancos_1.value} 
    `

    //Precisa desse espaço no começo para juntar os texts depois
    body_imovel = `
    

    Dados do imóvel:

    - Valor do imóvel: ${valorimovel.value} R$

    - Valor do financiamento: ${valorfinanciamento.value} R$

    - Prazo: ${prazo.value}

    - Incluir despesas: ${radiodespesas}

    - Pretende utilizar FGTS: ${radiofgts}
    ` 

    //body_imovel = "\n\n\n\n Dados do imóvel: \n\n\n - Valor do imóvel: " + valorimovel.value + " R$\n\n - Valor do financiamento: " + valorfinanciamento.value + " R$\n\n - Prazo: " + prazo.value + "\n\n - Incluir despesas: " + radiodespesas + "\n\n - Pretende utilizar FGTS: " + radiofgts + ""


     if (radioestadocivil_1 == "Casado (a)") {
      //Iniciando a variável body2 caso exista um segundo proponente
      let body2 = ''
      body2 = `
      
      
      Dados 2* proponente:

      - Nome completo: ${nomecompleto_2.value}

      - Data nascimento: ${datadenascimento_2.value}

      - CPF: ${cpf_2.value}

      - RG: ${rg_2.value} 

      - Endereço: ${endereco_2.value}

      - Telefone: ${telefone_2.value}

      - E-mail: ${email_2.value}

      - Estado civil: ${radioestadocivil_2} 

      - Empresa onde trabalha: ${empresaondetrabalha_2.value} 

      - Cargo profissional: ${cargoprofissional_2.value}

      - Renda mensal: ${rendamensal_2.value} 

      - Bancos nos quais possui relacionamento: ${bancos_2.value} 
      `

      //body2 = "\n\n\n\n Dados 2* proponente: \n\n\n - Nome completo: " + nomecompleto_2.value + "\n\n - Data nascimento: " + datadenascimento_2.value + "\n\n - CPF: " + cpf_2.value + "\n\n - RG: " + rg_2.value + "\n\n - Endereço: " + endereco_2.value + "\n\n - Telefone: " + telefone_2.value + "\n\n - E-mail: " + email_2.value + "\n\n - Estado civil: " + radioestadocivil_2 + "\n\n - Empresa onde trabalha: " + empresaondetrabalha_2.value + "\n\n - Cargo profissional: " + cargoprofissional_2.value + "\n\n - Renda mensal: " + rendamensal_2.value + "\n\n - Bancos nos quais possui relacionamento: " + bancos_2.value + "" 

      text_send = (body1 + body2 + body_imovel);
      console.log(text_send);

      //Esse aqui é pro primeiro if, ou seja, com 2 proponentes
      fetch("https://testenode-liart.vercel.app/api", {
        method: "POST",
        mode: 'no-cors',
        headers: {
          "Content-Type": "application/json",
          'Origin': 'https://testenode-cliente.vercel.app/',
      },
      body: JSON.stringify({
        name: 'Formulário Site Conquistha',
        subject: "Envio de respostas do formulário",
        text: text_send,
      }),
      })
      .then((response) => { //Apresenta um alerta pro cliente informando se o email foi enviado ou não
        if (response.ok) {
          alert("Respostas enviadas");
          } else {
            alert("Houve algum problema no envio das respostas");
        }
      })
      .catch((error) => {
        console.error(error.message);
      })
      //console.log(body + body2 + body_imovel)



      
      } else { //Somente 1 proponente
        text_send = (body1 + body_imovel);
        //console.log(text_send)

        fetch("https://testenode-liart.vercel.app/api", {
          method: "POST",
          mode: 'no-cors',
          headers: {
            "Content-Type": "application/json",
            'Origin': 'https://testenode-cliente.vercel.app/',
        },
        body: JSON.stringify({
          name: 'Formulário Site Conquistha',
          subject: "Envio de respostas do formulário",
          text: text_send,
        }),
      })
        .then((response) => { //Apresenta um alerta pro cliente informando se o email foi enviado ou não
          if (response.ok) {
            alert("Respostas enviadas");
          } else {
            alert("Houve algum problema no envio das respostas");
        }
      })
      .catch((error) => {
        console.error(error.message);
      })
        
      }}
  })  





//   //Esse fetch é responsável por procurar a porta cujo o servidor está rodando  
//   fetch("http://localhost:3000", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//         name: nomecompleto_1.value,
//         subject: "Envio de respostas do formulário Site Conquistha",
//         text: text_send,
//       }),
//   })
//     .then((response) => { //Apresenta um alerta pro cliente informando se o email foi enviado ou não
//       if (response.ok) {
//         alert("Email ENVIADO");
//       } else {
//         alert("Deu merda amigo");
//       }
//     })
//     .catch((error) => {
//       console.error(error.message);
//     });
// }}
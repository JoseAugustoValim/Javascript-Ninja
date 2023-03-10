// Declarar uma variável qualquer, que receba um objeto vazio.
var qualquer = {};

/*
Declarar uma variável `pessoa`, que receba suas informações pessoais.
As propriedades e tipos de valores para cada propriedade desse objeto devem ser:
- `nome` - String
- `sobrenome` - String
- `sexo` - String
- `idade` - Number
- `altura` - Number
- `peso` - Number
- `andando` - Boolean - recebe "falso" por padrão
- `caminhouQuantosMetros` - Number - recebe "zero" por padrão
*/
var pessoa = {
  nome: 'Jose',
  sobrenome: 'Valim',
  sexo: 'Masculino',
  idade: '29',
  altura: '1,80',
  peso: '136,8',
  andando: false,
  caminhouQuantosMetros: '0',
};
/*
Adicione um método ao objeto `pessoa` chamado `fazerAniversario`. O método deve
alterar o valor da propriedade `idade` dessa pessoa, somando `1` a cada vez que
for chamado.
*/
var pessoa = {
  nome: 'Jose',
  sobrenome: 'Valim',
  sexo: 'Masculino',
  idade: '29',
  altura: '1,80',
  peso: '136,8',
  andando: false,
  caminhouQuantosMetros: '0',
  fazerAniversário: function () {
    idade += 1;
  },
};
/*
Adicione um método ao objeto `pessoa` chamado `andar`, que terá as seguintes
características:
- Esse método deve receber por parâmetro um valor que representará a quantidade
de metros caminhados;
- Ele deve alterar o valor da propriedade `caminhouQuantosMetros`, somando ao
valor dessa propriedade a quantidade passada por parâmetro;
- Ele deverá modificar o valor da propriedade `andando` para o valor
booleano que representa "verdadeiro";
*/
var pessoa = {
  nome: 'Jose',
  sobrenome: 'Valim',
  sexo: 'Masculino',
  idade: '29',
  altura: '1,80',
  peso: '136,8',
  andando: false,
  caminhouQuantosMetros: '0',
  fazerAniversário: function () {
    this.idade++;
  },
  andar: function (metrosAndados) {
    caminhouQuantosMetros += metrosAndados;
    andando = true;
  },
};
/*
Adicione um método ao objeto `pessoa` chamado `parar`, que irá modificar o valor
da propriedade `andando` para o valor booleano que representa "falso".
*/
var pessoa = {
  nome: 'Jose',
  sobrenome: 'Valim',
  sexo: 'Masculino',
  idade: '29',
  altura: 1.8,
  peso: 136.8,
  andando: false,
  caminhouQuantosMetros: 0,
  fazerAniversário: function () {
    this.idade++;
  },
  andar: function (metrosAndados) {
    this.caminhouQuantosMetros = metrosAndados;
    this.andando = true;
  },
};
/*
Crie um método chamado `nomeCompleto`, que retorne a frase:
- "Olá! Meu nome é [NOME] [SOBRENOME]!"
*/
var pessoa = {
  nome: 'Jose',
  sobrenome: 'Valim',
  sexo: 'Masculino',
  idade: '29',
  altura: 1.8,
  peso: 136.8,
  andando: false,
  caminhouQuantosMetros: 0,
  andar: function (metrosAndados) {
    this.caminhouQuantosMetros = metrosAndados;
    this.andando = true;
  },
  fazerAniversário: function () {
    this.idade++;
  },
  nomeCompleto: function () {
    return this.nome + ' ' + this.sobrenome;
  },
};
/*
Crie um método chamado `mostrarIdade`, que retorne a frase:
- "Olá, eu tenho [IDADE] anos!"
*/
var pessoa = {
  nome: 'Jose',
  sobrenome: 'Valim',
  sexo: 'Masculino',
  idade: 29,
  altura: 1.8,
  peso: 136.8,
  andando: false,
  caminhouQuantosMetros: 0,
  andar: function (metrosAndados) {
    this.caminhouQuantosMetros = metrosAndados;
    this.andando = true;
  },
  fazerAniversário: function () {
    this.idade++;
  },
  mostrarIdade: function () {
    return 'Olá eu tenho ' + pessoa.idade + 'anos!';
  },
  nomeCompleto: function () {
    return this.nome + ' ' + this.sobrenome;
  },
};
/*
Crie um método chamado `mostrarPeso`, que retorne a frase:
- "Eu peso [PESO]Kg."
*/
var pessoa = {
  nome: 'Jose',
  sobrenome: 'Valim',
  sexo: 'Masculino',
  idade: 29,
  altura: 1.8,
  peso: 136.8,
  andando: false,
  caminhouQuantosMetros: 0,
  andar: function (metrosAndados) {
    this.caminhouQuantosMetros = metrosAndados;
    this.andando = true;
  },
  fazerAniversário: function () {
    this.idade++;
  },
  mostrarIdade: function () {
    return 'Olá eu tenho ' + pessoa.idade + 'anos!';
  },
  mostrarPeso: function () {
    return 'Eu peso ' + this.peso + 'Kg';
  },
  nomeCompleto: function () {
    return this.nome + ' ' + this.sobrenome;
  },
};
/*
Crie um método chamado `mostrarAltura` que retorne a frase:
- "Minha altura é [ALTURA]m."
*/
var pessoa = {
  nome: 'Jose',
  sobrenome: 'Valim',
  sexo: 'Masculino',
  idade: 29,
  altura: 1.8,
  peso: 136.8,
  andando: false,
  caminhouQuantosMetros: 0,
  andar: function (metrosAndados) {
    this.caminhouQuantosMetros = metrosAndados;
    this.andando = true;
  },
  fazerAniversário: function () {
    this.idade++;
  },
  mostrarAltura: function () {
    return 'Minha altura é ' + pessoa.altura + 'm';
  },
  mostrarIdade: function () {
    return 'Olá eu tenho ' + pessoa.idade + 'anos!';
  },
  mostrarPeso: function () {
    return 'Eu peso ' + this.peso + 'Kg';
  },
  nomeCompleto: function () {
    return this.nome + ' ' + this.sobrenome;
  },
  parar: function () {
    pessoa.andando = false;
  },
};
/*
Agora vamos brincar um pouco com o objeto criado:
Qual o nome completo da pessoa  (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/

/*
Qual a idade da pessoa  (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/

/*
Qual o peso da pessoa  (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/

/*
Qual a altura da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/

/*
Faça a `pessoa` fazer 3 aniversários.
*/

/*
Quantos anos a `pessoa` tem agora? (Use a instrução para responder e
comentários inline ao lado da instrução para mostrar qual foi a resposta
retornada)
*/

/*
Agora, faça a `pessoa` caminhar alguns metros, invocando o método `andar` 3x,
com metragens diferentes passadas por parâmetro.
*/

/*
A pessoa ainda está andando? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/

/*
Se a pessoa ainda está andando, faça-a parar.
*/

/*
E agora: a pessoa ainda está andando? (Use uma instrução para responder e
comentários inline ao lado da instrução para mostrar a resposta retornada)
*/

/*
Quantos metros a pessoa andou? (Use uma instrução para responder e comentários
inline ao lado da instrução para mostrar a resposta retornada)
*/

/*
Agora vamos deixar a brincadeira um pouco mais divertida! :D
Crie um método para o objeto `pessoa` chamado `apresentacao`. Esse método deve
retornar a string:
- "Olá, eu sou o [NOME COMPLETO], tenho [IDADE] anos, [ALTURA], meu peso é [PESO] e, só hoje, eu já caminhei [CAMINHOU QUANTOS METROS] metros!"

Só que, antes de retornar a string, você vai fazer algumas validações:
- Se o `sexo` de `pessoa` for "Feminino", a frase acima, no início da
apresentação, onde diz "eu sou o", deve mostrar "a" no lugar do "o";
- Se a idade for `1`, a frase acima, na parte que fala da idade, vai mostrar a
palavra "ano" ao invés de "anos", pois é singular;
- Se a quantidade de metros caminhados for igual a `1`, então a palavra que
deve conter no retorno da frase acima é "metro" no lugar de "metros".
- Para cada validação, você irá declarar uma variável localmente (dentro do
método), que será concatenada com a frase de retorno, mostrando a resposta
correta, de acordo com os dados inseridos no objeto.
*/

var pessoa = {
  nome: 'Jose',
  sobrenome: 'Valim',
  sexo: 'Masculino',
  idade: 29,
  altura: 1.8,
  peso: 136.8,
  andando: false,
  caminhouQuantosMetros: 0,
  apresentacao: function () {
    var ano, quantidadeMetroCaminhado, sexo;
    if (pessoa.idade === 1) {
      ano = ' ano';
    } else {
      ano = ' anos';
    }

    if (pessoa.caminhouQuantosMetros === 1) {
      quantidadeMetroCaminhado = ' metro';
    } else {
      quantidadeMetroCaminhado = ' metros';
    }

    if (pessoa.sexo !== 'Masculino') {
      sexo = 'a';
    } else {
      sexo = 'o';
    }

    return (
      'Olá, eu sou ' +
      sexo +
      ', tenho ' +
      pessoa.idade +
      ano +
      ', ' +
      pessoa.idade +
      ', meu peso é' +
      pessoa.peso +
      'e, só hoje, eu já caminhei ' +
      pessoa.caminhouQuantosMetros +
      quantidadeMetroCaminhado +
      '!'
    );
  },
  andar: function (metrosAndados) {
    this.caminhouQuantosMetros = metrosAndados;
    this.andando = true;
  },
  fazerAniversário: function () {
    this.idade++;
  },
  mostrarAltura: function () {
    return 'Minha altura é ' + pessoa.altura + 'm';
  },
  mostrarIdade: function () {
    return 'Olá eu tenho ' + pessoa.idade + 'anos!';
  },
  mostrarPeso: function () {
    return 'Eu peso ' + this.peso + 'Kg';
  },
  nomeCompleto: function () {
    return this.nome + ' ' + this.sobrenome;
  },
  parar: function () {
    pessoa.andando = false;
  },
};

// Agora, apresente-se ;)

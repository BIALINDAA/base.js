 //Alguns erros comuns

 //const numero; 1° erro: Não declarar uma constante;


const minhaVar = "oi" // 2° Erro: Não declarar uma variavel e chamar no código;
console.log(minhaVar); // exemplo, chamara minhavar com V minúsculo;

console.error("Isso está errado") // 3° "Erro": Você pode declarar um erro com o console.error;

// Condicional abreviada if(){}

let idadeMinima = 18;
let idadeCliente = 17;

if(idadeCliente >= idadeMinima){
    console.log("Cerveja")
} else {
    console.log("Nescau")
}

//Valor ternário
console.log(idadeCliente >= idadeMinima ? "cerveja" : "suco")
// modo ternário, utilizando a estrutura ___ >= ___ ? ____ : ____
// modo ternário, utilizando a estrutura ___ <= ___ ? ____ : ____
// modo ternário, utilizando a estrutura ___ == ___ ? ____ : ____

//Template string

const nome = "Beatriz";
const idade = 17;
const cidadeNatal = "Barra do Garças"

const apresentacao = "Meu nome é " + nome + ", minha idade é" + idade + " e nasci em" + cidadeNatal;

console.log(apresentacao)

//template string
const apresentacao2 = `Meu nome é ${nome}, minha idade é ${idade} e minha cidade natal é ${cidadeNatala}`
console.log(apresentacao2)
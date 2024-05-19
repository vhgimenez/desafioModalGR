const readline = require('readline-sync');

const nomes = [];

function letraMaiuscula(nome) {
    const conectores = ['da', 'das', 'do', 'dos', 'de', 'e'];
    return nome.split(' ').map((palavra, index) => {
        // Verifica se a palavra é um conector e não é a primeira palavra
        if (conectores.includes(palavra.toLowerCase()) && index !== 0) {
            return palavra.toLowerCase();
        } else {
            return palavra.charAt(0).toUpperCase() + palavra.slice(1).toLowerCase();
        }
    }).join(' ');
}

function nomeCracha(nome) {
    const palavras = nome.split(' ');
    const ultimoNome = palavras.pop().toUpperCase();
    const conectores = ['de', 'da', 'das', 'do', 'dos', 'e'];
    const iniciais = palavras
        .filter(palavra => !conectores.includes(palavra.toLowerCase()))
        .map(palavra => palavra.charAt(0).toUpperCase())
        .join('. ') + '.';
    return `${ultimoNome}, ${iniciais}`;
}

function adicionarFuncionario() {
    let nome = readline.question('Digite o nome completo do funcionário: ');
    nome = letraMaiuscula(nome);
    nomes.push(nome);
    console.log('Funcionário adicionada com sucesso!');
}

function listarFuncionarios() {
    console.log('Funcionários:');
    nomes.forEach((nome, index) => {
        console.log(`${index + 1} ${nome}`);
    });
    console.log('Funcionários com seus crachás:')
    nomes.forEach((nome, index) => {
        const nomeFormatado = nomeCracha(nome);
        console.log(`${index + 1} ${nomeFormatado}`);
    });
}

function removerFuncionario() {
    listarFuncionarios();
    const index = parseInt(readline.question('Digite o número do funcionário a ser removido: ')) - 1;
    if (!isNaN(index) && index >= 0 && index < nomes.length) {
        nomes.splice(index, 1);
        console.log('Funcionário removido com sucesso!');
    } else {
        console.log('Número de funcionário inválido.');
    }
}

function main() {
    while (true) {
        console.log('\nMenu:');
        console.log('1. Adicionar Funcionário');
        console.log('2. Listar Funcionários');
        console.log('3. Remover Funcionário');
        console.log('4. Sair');

        const opcao = parseInt(readline.question('\nEscolha uma opção: '));

        switch (opcao) {
            case 1:
                adicionarFuncionario();
                break;
            case 2:
                listarFuncionarios();
                break;
            case 3:
                removerFuncionario();
                break;
            case 4:
                console.log('Saindo do programa.');
                return;
            default:
                console.log('Opção inválida.');
        }
    }
}

main();
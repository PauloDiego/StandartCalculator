let screen = document.calculator.screen;

// Função que insere o caractere na tela
function insertCaractere(digitedValue) {
    // Verifica se o valor digitado é um Operador e se o ultimo é um operador
    // Dai ele não digita um novo operador
    if (true) {
        if (isOperator(digitedValue) && isOperator(screen.value[screen.value.length - 1])) {
            return
        }
    }

    screen.value += digitedValue;
}

// Função para verificar se o valor que digitar é um operador (+, - , * e /)
function isOperator(charOperator) {
    return ['*', '/', '-', '+'].includes(charOperator);
}

// Função que deleta o valor que está na tela por unidade
function deleteValue() {
    return screen.value = screen.value.slice(0, -1);
}

// Função que limpa o valor que está na tela por inteiro
function cleanScreen() {
    screen.value = '';
}

// Função que realiza o cálculo que ta na tela. 
// Se o cálculo não for válido, ele da um erro na tela.
function calculateTotal() {
    const expression = screen.value;

    if (expression && !isOperator(screen.value[screen.value.length - 1])) {
        let calculate = calculateExpression(expression);
        screen.value = calculate;
    } else {
        screen.value = 'Error';
    }
}

// Função que transforma a expressão que está como String em
// uma expressão matemática e retorna o valor da expressão.
function calculateExpression(expression) {
    return eval(expression);
}
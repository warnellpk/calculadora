let display = document.getElementById('display');
let operando1 = '';
let operando2 = '';
let operacion = '';

function appendNumber(num) {
  display.value += num;
}

// Cuando el usuario presiona +, -, * o /
function setOperacion(op) {
  operando1 = display.value;
  operacion = op;
  display.value = ''; // Limpia para escribir el segundo número
}

function calculate() {
  operando2 = display.value;
  let resultado = 0;

  // Convierte los operandos a número
  const num1 = parseFloat(operando1);
  const num2 = parseFloat(operando2);

  // Según la operación seleccionada, hace el cálculo
  switch (operacion) {
    case '+':
      resultado = sumar(num1, num2);
      break;
    case '-':
      resultado = restar(num1, num2);
      break;
    case '*':
      resultado = multiplicar(num1, num2);
      break;
    case '/':
      resultado = dividir(num1, num2);
      break;
    default:
      resultado = 'Error';
      break;
  }

  display.value = resultado;
}

// Funciones individuales de cada operación

function sumar(a, b) {
  return a + b;
}

function restar(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  if (b === 0) {
    return '∞'; // Evita la división por cero
  } else {
    return a / b;
  }
}

// Limpieza de pantalla
function clearOne() {
  display.value = display.value.slice(0, -1);
}

function clearAll() {
  display.value = '';
  operando1 = '';
  operando2 = '';
  operacion = '';
}



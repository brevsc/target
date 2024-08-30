function pertenceFibonacci(numero) {
    if (numero < 0) return false;
  
    let a = 0;
    let b = 1;
  
    if (numero === a || numero === b) return true;
  
    let proximoNumero = a + b;
    while (proximoNumero <= numero) {
      if (proximoNumero === numero) return true; 
      a = b;
      b = proximoNumero;
      proximoNumero = a + b;
    }
  
    return false; 
  }
  
  const numero = 21; 
  
  if (pertenceFibonacci(numero)) {
    console.log(`O número ${numero} pertence à sequência de Fibonacci.`);
  } else {
    console.log(`O número ${numero} não pertence à sequência de Fibonacci.`);
  }
  
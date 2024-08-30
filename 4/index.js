function proximoElementoA(sequencia) {
    const ultimoNumero = sequencia[sequencia.length - 1];
    return ultimoNumero + 2;
  }
  
  function proximoElementoB(sequencia) {
    const ultimoNumero = sequencia[sequencia.length - 1];
    return ultimoNumero * 2;
  }
  
  function proximoElementoC(sequencia) {
    const n = sequencia.length; 
    return n * n;
  }
  
  function proximoElementoD(sequencia) {
    const n = (sequencia.length + 1) * 2; 
    return n * n;
  }
  
  function proximoElementoE(sequencia) {
    const ultimo = sequencia[sequencia.length - 1];
    const penultimo = sequencia[sequencia.length - 2];
    return ultimo + penultimo;
  }
  
  function proximoElementoF(sequencia) {
    const ultimoNumero = sequencia[sequencia.length - 1];
    let proximo = ultimoNumero + 1;
  
    while (!proximo.toString().startsWith("2")) {
      proximo++;
    }
  
    return proximo;
  }
  
  const sequenciaA = [1, 3, 5, 7];
  const sequenciaB = [2, 4, 8, 16, 32, 64];
  const sequenciaC = [0, 1, 4, 9, 16, 25, 36];
  const sequenciaD = [4, 16, 36, 64];
  const sequenciaE = [1, 1, 2, 3, 5, 8];
  const sequenciaF = [2, 10, 12, 16, 17, 18, 19];
  
  console.log("a) Próximo elemento:", proximoElementoA(sequenciaA));
  console.log("b) Próximo elemento:", proximoElementoB(sequenciaB));
  console.log("c) Próximo elemento:", proximoElementoC(sequenciaC));
  console.log("d) Próximo elemento:", proximoElementoD(sequenciaD));
  console.log("e) Próximo elemento:", proximoElementoE(sequenciaE));
  console.log("f) Próximo elemento:", proximoElementoF(sequenciaF));
  
function contarLetraA(texto) {
    const textoMinusculo = texto.toLowerCase();
    
    let contador = 0;
  
    for (let i = 0; i < textoMinusculo.length; i++) {
      if (textoMinusculo[i] === 'a') {
        contador++;
      }
    }
  
    return contador;
  }
  
  const texto = "A importância da análise da API";
  
  const quantidade = contarLetraA(texto);
  
  if (quantidade > 0) {
    console.log(`A letra 'a' aparece ${quantidade} vezes na string.`);
  } else {
    console.log("A letra 'a' não aparece na string.");
  }
  
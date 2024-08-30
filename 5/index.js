//usando calor das lampadas pra identificar
let lampadas = [
    { nome: 'Lâmpada 1', estado: 'apagada', quente: false }, 
    { nome: 'Lâmpada 2', estado: 'apagada', quente: false }, 
    { nome: 'Lâmpada 3', estado: 'apagada', quente: false }  
  ];
  
  function ligarInterruptorA() {
    lampadas[0].estado = 'acesa';
    lampadas[0].quente = true;
  }
  
  function desligarInterruptorA() {
    lampadas[0].estado = 'apagada';
  }
  
  function ligarInterruptorB() {
    lampadas[1].estado = 'acesa';
  }
  
  function desligarInterruptorB() {
    lampadas[1].estado = 'apagada';
  }
  
  function identificarLampadas() {
    for (let lampada of lampadas) {
      if (lampada.estado === 'acesa') {
        console.log(`${lampada.nome} está acesa, controlada pelo interruptor B.`);
      } else if (lampada.estado === 'apagada' && lampada.quente) {
        console.log(`${lampada.nome} está apagada, mas quente, controlada pelo interruptor A.`);
      } else {
        console.log(`${lampada.nome} está apagada e fria, controlada pelo interruptor C.`);
      }
    }
  }
  
  
  ligarInterruptorA();
  
  desligarInterruptorA();
  
  ligarInterruptorB();

  
  identificarLampadas();
  
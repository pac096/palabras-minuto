document.getElementById('button').addEventListener('click', function() {
    document.getElementById('portada').style.display = 'none';
    document.getElementById('lectura').style.display = 'block';
    
    // Iniciar el temporizador
    iniciarTemporizador();
  });
  
  document.getElementById('terminar').addEventListener('click', function() {
    document.getElementById('lectura').style.display = 'none';
    document.getElementById('resultado').style.display = 'block';
    
    // Detener el temporizador y calcular WPM
    detenerTemporizador();
  });
  document.getElementById('reiniciar').addEventListener('click', ()=>{
    document.getElementById('resultado').style.display = 'none';
    document.getElementById('portada').style.display = 'block';


  })
   
  let inicioTiempo;
  function iniciarTemporizador() {
    inicioTiempo = new Date();
    
    // Mostrar el botón terminar después de que el texto es visible
    document.getElementById('terminar').style.display = 'block';
  }
  
  function detenerTemporizador() {
    let finTiempo = new Date();
    let tiempoTranscurrido = (finTiempo - inicioTiempo) / 60000; // Convertir a minutos
    
    let textoElemento = document.getElementById('texto');
    let palabrasTexto = textoElemento.innerText.split(' ').length;
    
    let wpm = Math.round(palabrasTexto / tiempoTranscurrido);
    
    document.getElementById('wpm').innerText = wpm;
    
    // Aquí deberías agregar la lógica para calcular el % de comprensión
  }
  
  let ola = document.getElementById('click',()=>{
    
    

  })
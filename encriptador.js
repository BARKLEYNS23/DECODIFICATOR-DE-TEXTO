function encriptar() {
    var texto = document.getElementById("texto").value;
    var resultado = "";
    for (var i = 0; i < texto.length; i++) {
      var letra = texto.charAt(i);
      if (letra == "z") {
        resultado += "a";
      } else if (letra == "Z") {
        resultado += "A";
      } else if (letra.match(/[a-yA-Y]/)) {
        resultado += String.fromCharCode(letra.charCodeAt(0) + 1);
      } else {
        resultado += letra;
      }
    }
    document.getElementById("resultado-imagen").style.display = "none";
    document.getElementById("resultado-texto").style.display = "block";
    document.getElementById("resultado-texto").textContent = resultado;
  }
  
  function desencriptar() {
    var texto = document.getElementById("texto").value;
    var resultado = "";
    for (var i = 0; i < texto.length; i++) {
      var letra = texto.charAt(i);
      if (letra == "a") {
        resultado += "z";
      } else if (letra == "A") {
        resultado += "Z";
      } else if (letra.match(/[b-zB-Z]/)) {
        resultado += String.fromCharCode(letra.charCodeAt(0) - 1);
      } else {
        resultado += letra;
      }
    }
    document.getElementById("resultado-texto").style.display = "none";
    document.getElementById("resultado-imagen").style.display = "block";
    document.getElementById("resultado-imagen").src = "https://via.placeholder.com/350x150?text=" + resultado;
  }
  
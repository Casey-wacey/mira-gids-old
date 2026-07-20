document.addEventListener("DOMContentLoaded", function() {
  nummer = ""
  nummerGecorrigeert = 0
  document
    .getElementById("nr1")
    .addEventListener("click", function() {
      nummer +=1;
      nummer = nummer.substr(-2);
      document.getElementById("titelVoor").innerHTML = nummer;
    })
  document
    .getElementById("nr2")
    .addEventListener("click", function() {
      nummer += 2;
      nummer = nummer.substr(-2);
      document.getElementById("titelVoor").innerHTML = nummer;
    })
  document
    .getElementById("nr3")
    .addEventListener("click", function() {
      nummer += 3;
      nummer = nummer.substr(-2);
      document.getElementById("titelVoor").innerHTML = nummer;
    })
  document
    .getElementById("nr4")
    .addEventListener("click", function() {
      nummer += 4;
      nummer = nummer.substr(-2);
      document.getElementById("titelVoor").innerHTML = nummer;
    })
  document
    .getElementById("nr5")
    .addEventListener("click", function() {
      nummer += 5;
      nummer = nummer.substr(-2);
      document.getElementById("titelVoor").innerHTML = nummer;
    })
  document
    .getElementById("nr6")
    .addEventListener("click", function() {
      nummer += 6;
      nummer = nummer.substr(-2);
      document.getElementById("titelVoor").innerHTML = nummer;
    })
  document
    .getElementById("nr7")
    .addEventListener("click", function() {
      nummer += 7;
      nummer = nummer.substr(-2);
      document.getElementById("titelVoor").innerHTML = nummer;
    })
  document
    .getElementById("nr8")
    .addEventListener("click", function() {
      nummer += 8;
      nummer = nummer.substr(-2);
      document.getElementById("titelVoor").innerHTML = nummer;
    })
  document
    .getElementById("nr9")
    .addEventListener("click", function() {
      nummer += 9;
      nummer = nummer.substr(-2);
      document.getElementById("titelVoor").innerHTML = nummer;
    })
  document
    .getElementById("nr0")
    .addEventListener("click", function() {
      nummer += 0;
      nummer = nummer.substr(-2);
      document.getElementById("titelVoor").innerHTML = nummer;
    })
  document
    .getElementById("stop")
    .addEventListener("click", function() {
      nummer = ""
      document.getElementById("titelVoor").innerHTML = "Welkom bij <br> Volksterrenwacht Mira";
    })
  document
    .getElementById("goTo")
    .addEventListener("click", function() {
      nummerGecorrigeert = Number(nummer);
      if (nummerGecorrigeert >= 70) {
        nummerGecorrigeert -= 7
      }  else if (nummerGecorrigeert >= 66) {
        nummerGecorrigeert -= 5
      } else if (nummerGecorrigeert >= 65) {
        nummerGecorrigeert -= 4
      } else if (nummerGecorrigeert >= 56) {
        nummerGecorrigeert -= 3
      }
      else if (nummerGecorrigeert >= 37) {
        nummerGecorrigeert -= 2
      }
      else if (nummerGecorrigeert >= 21) {
        nummerGecorrigeert -= 1
      }
        location.href = 'paginas/pagina.html?nummer=' + nummerGecorrigeert;
    })
  document
    .getElementById("aarde")
    .addEventListener("click", function() {
        location.href = 'paginas/trajecten/de_aarde.html';
    })
  document
    .getElementById("maan")
    .addEventListener("click", function() {
        location.href = 'paginas/trajecten/de_maan.html';
    }) 
    document
    .getElementById("kaart")
    .addEventListener("click", function() {
        location.href = 'paginas/kaart/grond/Gelijkvloers.html';
    }) 
})
    function calcola() {
            let eta = document.getElementById("eta").value;
            let settore = document.getElementById("settore").value;
            let prezzo = 20;

            if (settore == "Tribuna") {
                prezzo = 50;
            }

            let risultato = document.getElementById("risultatoPrezzo");

            if (eta < 14) {
                prezzo = prezzo - 10;
                risultato.style.color = "green";
            } else {
                risultato.style.color = "black"
        }
        risultato.innerHTML = "Prezzo finale: " + prezzo + "€";
    }
 function verificaTessera() {
            let codice = document.getElementById("codice");
            let risultato = document.getElementById("risultatoTessera");
            if (codice.value === "VIP2024") {
                risultato.innerHTML = "Accesso Area Lounge";
                risultato.style.backgroundColor = "gold";
            } 
             else if (codice.value === "") {
                codice.style.border = "solid red";
                risultato.innerHTML = "Tessera Standard";}
                
          
        }
 
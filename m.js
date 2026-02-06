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
    }

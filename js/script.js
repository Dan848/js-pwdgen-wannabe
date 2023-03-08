const nomeUtente = prompt ("Qual è il tuo Nome?")
const cognomeUtente = prompt ("Qual è il tuo Cognome?")
const coloreUtente = prompt ("Qual è il tuo Colore preferito?")

document.getElementById ("perfectPassword").innerHTML = `${nomeUtente}${cognomeUtente}${coloreUtente}21`
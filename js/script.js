/*Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito21*/

const nomeUtente = prompt("Qual è il tuo Nome?");
const cognomeUtente = prompt("Qual è il tuo Cognome?");
const coloreUtente = prompt("Qual è il tuo Colore preferito?");

document.getElementById ("perfectPassword").innerHTML = `${nomeUtente}${cognomeUtente}${coloreUtente}21`;
let utente = {
    "nome": "Alberto",
    "cognome": "Amort"
}
let chiavi= Object.keys(utente);

for(let i=0; i<chiavi.length; i++)
{
    console.log(`Chiave = ${chiavi[i]}`)
}
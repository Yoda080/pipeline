

window.salvaRisultatoInLocalStorage = (risultato) => {

    let risultati = localStorage.getItem('risultatiRiso');
    risultati = risultati ? JSON.parse(risultati) : [];
    
    
    risultati.push(risultato);

   
    localStorage.setItem('risultatiRiso', JSON.stringify(risultati));
};
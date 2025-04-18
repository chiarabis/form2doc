document.getElementById("form").addEventListener("submit", async function(e) {
    e.preventDefault();

    function capitalize(text) {
        return text.toLowerCase().replace(/\b\w/g, l => l.toUpperCase());
    }
    function uppercase(text) {
        return text.toUpperCase();
    }
    function formatDate(dataNascita) {
        const [year, month, day] = dataNascita.split("-");
        return `${day}-${month}-${year}`;
    }

    const form = e.target;
    const dati = {
        nomeAzienda: capitalize(form.nomeAzienda.value) || "_________________",
        città: capitalize(form.città.value) || "_________________",
        provincia: uppercase(form.provincia.value) || "_______",
        indirizzo: capitalize(form.indirizzo.value) || "_________________",
        partitaIva: form.partitaIva.value || "_________________",
        pec: form.pec.value || "_________________",
        nomeRappresentante: capitalize(form.nomeRappresentante.value) || "_________________",
        cognomeRappresentante: capitalize(form.cognomeRappresentante.value) || "_________________",
        cfRappresentante: uppercase(form.cfRappresentante.value) || "_________________",
        dataNascita: formatDate(form.dataNascita.value) || "_________________",
        cittàNascita: capitalize(form.cittàNascita.value) || "_________________",
        provinciaNascita: uppercase(form.provinciaNascita.value) || "_______",
        indirizzoResidenza: capitalize(form.indirizzoResidenza.value) || "_________________",
        cittàResidenza: capitalize(form.cittàResidenza.value) || "_________________",
        provinciaResidenza: uppercase(form.provinciaResidenza.value) || "_______",
    };
    
    function onlyAlphanumeric(value) {
        return /^[a-zA-Z0-9]{16}$/u.test(value)
    }
    function onlyAlphabet(value) {
        return /^[A-Za-zÀ-ÖØ-öø-ÿ]+$/u.test(value);
    }
    function onlyText(value) {
        return /^[A-Za-zÀ-ÖØ-öø-ÿ\s\-']+$/u.test(value);
    }
    if(!onlyAlphanumeric(form.cfRappresentante.value)) {
        alert("Il campo del CF deve contenere solo caratteri alfanumerici")
        return;
    }
    if(!onlyAlphabet(form.provincia.value) || !onlyAlphabet(form.provinciaNascita.value)) {
        alert("Il campo della provincia deve contenere solo lettere");
        return;
    }
    const inputText = [
        { name: "città", value: form.città.value },
        { name: "nome Rappresentante", value: form.nomeRappresentante.value },
        { name: "nognome Rappresentante", value: form.cognomeRappresentante.value },
        { name: "città di nascita", value: form.cittàNascita.value },
        { name: "città di residenza", value: form.cittàResidenza.value }
    ];
    for (const input of inputText) {
        if (!onlyText(input.value)) {
            alert(`Il campo "${input.name}" deve contenere solo lettere`);
            return;
        }
    }

    const fileInput = document.getElementById("modelloFile");
    const file = fileInput.files[0];
    if (!file) {
        alert("Carica un file modello .docx");
        return;
    }

    const arrayBuffer = await file.arrayBuffer();
    const zip = new window.PizZip(arrayBuffer);
    const doc = new window.docxtemplater().loadZip(zip);
    
    doc.setData(dati);

    try {
        doc.render();
    } catch (error) {
        console.error(error);
        alert("Errore nella generazione del documento.");
        return;
    }

    const out = doc.getZip().generate({ type: "blob" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(out);
    link.download = "documento_compilato.docx";
    link.click();
})
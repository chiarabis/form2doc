# Form2Doc
Tool per trasformare facilmente i dati di un form in documenti Word (.docx).

---
## Stack
Vanilla Javascript + HTML + CSS
Librerie:
- [Pizzip](https://www.npmjs.com/package/pizzip): per creare, leggere, editare file _.zip_ con Javascript
- [Docxtemplater](https://www.npmjs.com/package/docxtemplater): per generare documenti _.docx_ a partire da un template e dai campi "segnaposto" (es. `{tag_da_inserire}`)

---
## Requirements
> [!NOTE]
> Gli input tag nel modello del documento devono essere scritti tra parentesi graffe `{tag_da_inserire}`:
- Nome dell'azienda: __{nomeAzienda}__
- Città sede dell'azienda: __{città}__
- Sigla provincia: __{provincia}__
- Indirizzo dell'azienda (via e numero civico): __{indirizzo}__
- Partita IVA: __{partitaIva}__
- PEC: __{pec}__
- I dati del Legale Rappresentante:
  - Nome: __{nomeRappresentante}__
  - Cognome: __{cognomeRappresentante}__
  - Codice Fiscale: __{cfRappresentante}__
  - Data di nascita: __{dataNascita}__
  - Città di nascita: __{cittàNascita}__
  - Sigla provincia di nascita: __{provinciaNascita}__
  - Indirizzo di residenza (via e numero civico): __{indirizzoResidenza}__
  - Città di residenza: __{cittàResidenza}__
  - Sigla provincia di residenza: __{provinciaResidenza}__

---
## Document model (.docx)
![Screenshot (6)](https://github.com/user-attachments/assets/479db0ba-c817-440c-b8c2-bef13f0672ff)

---
## Try it!
[Form2Doc](https://form2doc.netlify.app/)

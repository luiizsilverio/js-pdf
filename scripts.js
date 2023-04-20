const button = document.querySelector("#generate-pdf");

button.addEventListener("click", () => {

    // Conteúdo do PDF
    const content = document.querySelector("#content");

    // Configuração do arquivo final do PDF
    const options = {
        margin: [10, 10, 10, 10],
        filename: "saida.pdf",
        html2canvas: {scale: 2},
        jsPDF: {unit: "mm", format: "a4", orientation: "portrait"}
    }

    // Gerar e baixar o PDF
    html2pdf().set(options).from(content).save();
    
})
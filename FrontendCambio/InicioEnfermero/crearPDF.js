function crearPDF()
{
    var element = document.getElementById("contenedorPDF")
    html2pdf(element, {
        margin:       10,
        filename:     'myfile.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2, logging: true, dpi: 192, letterRendering: true },
        jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
      });
}
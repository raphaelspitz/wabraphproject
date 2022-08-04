import React from 'react'

const PdfDownloader = () => {

  const donwloadPdf = () => {
    console.log('====================================');
    console.log('====================================');
    let urlToDownload = "https://unec.edu.az/application/uploads/2014/12/pdf-sample.pdf";
    fetch(urlToDownload, {
            method: 'GET',
            headers: new Headers({
                // "Authorization": "Bearer " + token
                'Access-Control-Allow-Origin': '*'
            }),
            mode: 'no-cors', 

//            header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');

        })
        .then(response => response.blob())
        .then(blob => {
            var url = window.URL.createObjectURL(blob);
            var a = document.createElement('a');
            a.href = url;
            a.download = "filename.pdf";
            document.body.appendChild(a); // we need to append the element to the dom -> otherwise it will not work in firefox
            a.click();    
            a.remove();  //afterwards we remove the element again         
        });
  }

  return (
    <div>
      <button onClick={donwloadPdf}>Download a PDF</button>
    </div>
  )
}

export default PdfDownloader

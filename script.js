function generateCertificate() {
    const institute = document.getElementById('institute').value;
    const participant = document.getElementById('participant').value;
    const grade = document.getElementById('grade').value;
    const certificateNumber = Math.floor(Math.random() * 1000000);

    const certificateContent = `
        <h1>Certificate of Achievement</h1>
        <p>This is to certify that</p>
        <h2>${participant}</h2>
        <p>has successfully completed the course at</p>
        <h3>${institute}</h3>
        <p>with a grade of <strong>${grade}</strong></p>
        <p>Given this day, ${new Date().toLocaleDateString()}</p>
        <p>Certificate Number: ${certificateNumber}</p>
        <p>Best wishes for your future endeavors!</p>
    `;

    const qrCodeDiv = document.createElement('div');
    new QRCode(qrCodeDiv, {
        text: 'https://example.com/certificate/' + certificateNumber,
        width: 100,
        height: 100
    });

    const qrCodeImage = qrCodeDiv.firstChild.toDataURL('image/png');

    const printWindow = window.open('', '_blank');
    printWindow.document.open();
    printWindow.document.write(`
        <html>
        <head>
            <title>Certificate</title>
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet">
            <style>
                body {
                    font-family: 'Montserrat', sans-serif;
                    margin: 0;
                    padding: 0;
                    background-color: transparent;
                }
                #certificate {
                    width: 800px;
                    margin: 20px auto;
                    background-image: url('https://png.pngtree.com/png-vector/20221206/ourmid/pngtree-golden-blue-certificate-border-folio-f4-size-transparent-png-image_6514169.png');
                    background-size: cover;
                    padding: 100px;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                    position: relative;
                }
                #certificate h1, h2, h3 {
                    text-align: center;
                    color: #b80257;
                }
                #certificate p {
                    text-align: center;
                    color: #233142;
                }
                #certificate strong {
                    color: #f95959;
                }
                #seal {
                    position: absolute;
                    top: 20px;
                    right: 20px;
                    color: #b80257;
                    font-size: 36px;
                }
                #qr-code {
                    position: absolute;
                    bottom: 20px;
                    left: 20px;
                }
            </style>
        </head>
        <body>
            <div id="certificate">${certificateContent}</div>
            <div id="seal">
                <i class="fas fa-seal"></i>
            </div>
            <div id="qr-code">
                <img src="${qrCodeImage}" alt="QR Code">
            </div>
        </body>
        </html>
    `);
    printWindow.document.close();
    printWindow.print();
}

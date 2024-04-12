import('inquirer').then(inquirerModule => {
    const inquirer = inquirerModule.default;
    import('qr-image').then(qr => {
        import('fs').then(fs => {
            function generateQRCode(url) {
                const qr_png = qr.imageSync(url, { type: 'png' });
                fs.writeFileSync('qrcode.png', qr_png);
                console.log('QR Code generated');
            }

            inquirer
                .prompt([
                    {
                        type: 'input',
                        name: 'url',
                        message: 'Enter the URL to generate QR code:'
                    }
                ])
                .then(answers => {
                    const { url } = answers;
                    generateQRCode(url);

                    fs.writeFileSync('userInput.txt', url);
                    console.log('Saved to userInput.txt');
                })
                .catch(error => {
                    console.error(error);
                });
        });
    });
});

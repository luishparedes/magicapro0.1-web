document.addEventListener('DOMContentLoaded', function () {
  const codeReader = new ZXing.BrowserBarcodeReader();
  const previewElem = document.getElementById('preview');
  const barcodeElem = document.getElementById('barcode');
  
  // Iniciar la cámara y el escaneo
  codeReader.decodeFromVideoDevice(null, 'preview', (result, err) => {
    if (result) {
      barcodeElem.value = result.text;
    }
    if (err && !(err instanceof ZXing.NotFoundException)) {
      console.error(err);
    }
  });
  
  // Agregar producto
  document.getElementById('add-product').addEventListener('click', () => {
    const barcode = document.getElementById('barcode').value;
    const productName = document.getElementById('product-name').value;
    const productPrice = document.getElementById('product-price').value;

    if (barcode && productName && productPrice) {
      console.log(`Producto agregado: ${barcode}, ${productName}, ${productPrice}`);
      alert(`Producto agregado: ${productName}`);
    } else {
      alert('Por favor, completa todos los campos.');
    }
  });
});

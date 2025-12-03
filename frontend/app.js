 import QrCreator from 'qr-creator';
 
  QrCreator.render({
    text: 'some text',
    radius: 0.5, // 0.0 to 0.5
    ecLevel: 'H', // L, M, Q, H
    fill: '#536DFE', // foreground color
    background: null, // color or null for transparent
    size: 128 // in pixels
  }, document.querySelector('urlInput'));
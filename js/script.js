
let img = document.getElementById('img');
let conteudo = document.getElementById('conteudo');
let btn_qrcode = document.getElementById('btn_qrcode');
btn_qrcode.onclick = () => {
    if(conteudo.value == '') return;
    let linkQR = 'https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=';
    img.src = linkQR + '?size=100x100data=' + conteudo.value;
 }
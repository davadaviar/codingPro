let htmlInputCode = CodeMirror.fromTextArea(document.getElementById('html-input__latihan'), {
    mode: 'xml',
    lineNumbers: true,
    tabSize: 4,
    theme: 'dracula',
    autoCloseTags: true,
});

let btnRun = document.querySelector('.btn-check__code');

btnRun.addEventListener('click', checkCode);

function checkCode() {

    let html= htmlInputCode.getValue();

    if (html.includes('<h1>Elemen Untuk Judul</h1>')) {

        const btnNextMateri = document.querySelector('.btn-next__materi');
        btnNextMateri.classList.remove('disabled');
        
    } else {
        
        const btnFailed = document.querySelector('.btn-failed__latihan');
        btnFailed.classList.remove('d-none');
    }
}
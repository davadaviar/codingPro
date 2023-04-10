let htmlEditorLatihan = CodeMirror.fromTextArea(document.getElementById('html-input__latihan'), {
    mode: 'xml',
    lineNumbers: true,
    tabSize: 4,
    theme: 'dracula',
    autoCloseTags: true,
});

let cssEditorLatihan = CodeMirror.fromTextArea(document.getElementById('css-input__latihan'), {
    mode: 'css',
    lineNumbers: true,
    tabSize: 4,
    theme: 'dracula',
    autoCloseTags: true,
});

let jsEditorLatihan = CodeMirror.fromTextArea(document.getElementById('js-input__latihan'), {
    mode: 'javascript',
    lineNumbers: true,
    tabSize: 4,
    theme: 'dracula',
    autoCloseTags: true,
});

let btnRunLatihan = document.querySelector('.btn-run__latihan');
btnRunLatihan.addEventListener('click', runCodeLatihanHandler);

function runCodeLatihanHandler() {

    let htmlLatihan = htmlEditorLatihan.getValue();
    let cssLatihan = `<style> ${cssEditorLatihan.getValue()} </style>`;
    let jsLatihan = `<script> ${jsEditorLatihan.getValue()} </script>`;

    outputLatihan = document.querySelector('#output-latihan');
    let outputLatihanPreview = outputLatihan.contentWindow.document;
    outputLatihanPreview.open();
    outputLatihanPreview.write(`${htmlLatihan} ${cssLatihan} ${jsLatihan}`);
    outputLatihanPreview.close();

}



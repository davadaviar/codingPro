let htmlEditor = CodeMirror.fromTextArea(document.getElementById('html-input'), {
    mode: 'xml',
    lineNumbers: true,
    tabSize: 4,
    theme: 'dracula',
    autoCloseTags: true,
});

let cssEditor = CodeMirror.fromTextArea(document.getElementById('css-input'), {
    mode: 'css',
    lineNumbers: true,
    tabSize: 4,
    theme: 'dracula',
    autoCloseTags: true,
});

let jsEditor = CodeMirror.fromTextArea(document.getElementById('js-input'), {
    mode: 'javascript',
    lineNumbers: true,
    tabSize: 4,
    theme: 'dracula',
    autoCloseTags: true,
});


let btnRun = document.querySelector('.btn-run');

btnRun.addEventListener('click', runCodeHandler);

function runCodeHandler() {
    let htmlCode = htmlEditor.getValue();
    let cssCode = `<style> ${cssEditor.getValue()} </style>`;
    let jsCode = `<script> ${jsEditor.getValue()} </script>`;

    let output = document.querySelector('#output');
    let outputPreview = output.contentWindow.document;
    outputPreview.open();
    outputPreview.write(htmlCode+cssCode+jsCode);
    outputPreview.close();
}


// function run() {
    
//     let output = document.getElementById('output');

//     output.contentDocument.body.innerHTML =`${htmlCode.getValue()} <style> ${cssCode.getValue()} </style>`;
//     output.contentWindow.eval(jsCode.getValue());
// }
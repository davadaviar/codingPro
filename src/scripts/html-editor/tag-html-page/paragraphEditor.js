let htmlEditorTagPage2 = CodeMirror.fromTextArea(document.getElementById('html-input-2'), {
    mode: 'xml',
    lineNumbers: true,
    tabSize: 4,
    theme: 'dracula',
    autoCloseTags: true,
});

let btnRun = document.querySelector('.btn-run');

btnRun.addEventListener('click', runCodeHandler);

function runCodeHandler() {
    let htmlCode = htmlEditorTagPage2.getValue();

    let output = document.querySelector('#output');
    let outputPreview = output.contentWindow.document;
    outputPreview.open();
    outputPreview.write(`${htmlCode}`);
    outputPreview.close();
}

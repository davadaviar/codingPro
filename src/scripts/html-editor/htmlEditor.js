let htmlInput = CodeMirror.fromTextArea(document.getElementById('html-input'), {
    mode: 'xml',
    lineNumbers: true,
    tabSize: 4,
    theme: 'dracula',
    autoCloseTags: true,
});

let btnRun = document.querySelector('.btn-run');

btnRun.addEventListener('click', runCodeHandler);

function runCodeHandler() {
    let html= htmlInput.getValue();

    let output = document.querySelector('#output');
    let outputPreview = output.contentWindow.document;
    outputPreview.open();
    outputPreview.write(`${html}`);
    outputPreview.close();
}
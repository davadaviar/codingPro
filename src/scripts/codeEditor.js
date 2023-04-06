let htmlCode = CodeMirror.fromTextArea(document.getElementById('html-input'), {
    mode: 'xml',
    lineNumbers: true,
    tabSize: 4,
    theme: 'dracula',
    autoCloseTags: true,
});

let cssCode = CodeMirror.fromTextArea(document.getElementById('css-input'), {
    mode: 'css',
    lineNumbers: true,
    tabSize: 4,
    theme: 'dracula',
    autoCloseTags: true,
});

let jsCode = CodeMirror.fromTextArea(document.getElementById('js-input'), {
    mode: 'javascript',
    lineNumbers: true,
    tabSize: 4,
    theme: 'dracula',
    autoCloseTags: true,
});




// function run() {

//     let cssCode = document.getElementById('css-input').value;
//     let jsCode = document.getElementById('js-input').value;
//     let output = document.getElementById('output');

//     output.contentDocument.body.innerHTML = htmlCode + '<style>' + cssCode + '</style>';
//     output.contentWindow.eval(jsCode);
// }
function run() {

    let htmlCode = document.getElementById('html-input').value;
    let cssCode = document.getElementById('css-input').value;
    let jsCode = document.getElementById('js-input').value;
    let output = document.getElementById('output');

    output.contentDocument.body.innerHTML = htmlCode + '<style>' + cssCode + '</style>';
    output.contentWindow.eval(jsCode);
}
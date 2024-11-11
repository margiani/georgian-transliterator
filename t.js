// Mapping of Georgian symbols to replacements
const replacements = {
    'ქ': 'kʰ', 'წ': 'ʨ', 'ჭ': 'ʧ', 'ე': 'e', 'რ': 'r', 'ღ': 'ğ', 
    'ტ': 't', 'თ': 'tʰ', 'ყ': 'ҟ', 'უ': 'u', 'ი': 'i', 'ო': 'o', 
    'პ': 'p', 'ა': 'a', 'ს': 's', 'შ': 'š', 'დ': 'd', 'ფ': 'pʰ', 
    'გ': 'g', 'ჰ': 'h', 'ჯ': 'ǰ', 'ჟ': 'ž', 'კ': 'k', 'ლ': 'l', 
    'ზ': 'z', 'ძ': 'ʣ', 'ხ': 'х', 'ც': 'ʦ', 'ჩ': 'č', 'ვ': 'v', 
    'ბ': 'b', 'ნ': 'n', 'მ': 'm'
};

// Function to replace symbols
function replaceSymbols(text) {
    return text.split('').map(char => replacements[char] || char).join('');
}

// Auto-resize function
function autoResize(textarea) {
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
}

// Function to replace symbols
    function replaceSymbols(text) {
    return text.split('').map(char => replacements[char] || char).join('');
}

// Event listener to update result text in real-time and adjust the textarea size
document.getElementById('sourceText').addEventListener('input', function() {
    const sourceText = this.value;
    const resultText = replaceSymbols(sourceText);
    const resultTextArea = document.getElementById('resultText');
    resultTextArea.value = resultText;
    autoResize(this);  // Auto resize source text area
    autoResize(resultTextArea);  // Auto resize result text area
});

// Function to copy result text to clipboard
function copyText() {
    const resultText = document.getElementById('resultText');
    resultText.select();
    document.execCommand('copy');
    alert('Copied to clipboard!');
}
// Modal  dialog script
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('helpModal');
    const btn = document.getElementById('helpButton');
    const span = document.getElementsByClassName('close')[0];
    btn.onclick = function() {
        modal.style.display = "block";
    }
    span.onclick = function() {
        modal.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == modal) {
        modal.style.display = "none";
        }
    }
});

// Initial auto-resize for both text areas
autoResize(sourceText);
autoResize(resultText);
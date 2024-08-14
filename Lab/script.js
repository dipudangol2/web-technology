// Access the paragraph element and buttons
const paragraph = document.getElementById('myParagraph');
const increaseFontBtn = document.getElementById('increaseFontBtn');
const decreaseFontBtn = document.getElementById('decreaseFontBtn');

function getCurrentFontSize() {
    return parseFloat(window.getComputedStyle(paragraph, null).getPropertyValue('font-size'));
}

// Increase font size on button click
increaseFontBtn.addEventListener('click', function() {
    let currentFontSize = getCurrentFontSize();
    paragraph.style.fontSize = (currentFontSize + 2) + 'px';
});

// Decrease font size on button click
decreaseFontBtn.addEventListener('click', function() {
    let currentFontSize = getCurrentFontSize();
    paragraph.style.fontSize = (currentFontSize - 2) + 'px'; 
});

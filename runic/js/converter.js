const runicMap = {
    'a': 'ᚨ', 'b': 'ᛒ', 'c': 'ᚲ', 'd': 'ᛞ', 'e': 'ᛖ', 'f': 'ᚠ', 'g': 'ᚷ', 'h': 'ᚺ', 'i': 'ᛁ', 'j': 'ᛃ',
    'k': 'ᚲ', 'l': 'ᛚ', 'm': 'ᛗ', 'n': 'ᚾ', 'o': 'ᛟ', 'p': 'ᛈ', 'q': 'ᚲ', 'r': 'ᚱ', 's': 'ᛋ', 't': 'ᛏ',
    'u': 'ᚢ', 'v': 'ᚡ', 'w': 'ᚹ', 'x': 'ᚲᛋ', 'y': 'ᛁ', 'z': 'ᛉ'
};

function convertText() {
    const input = document.getElementById('input').value.toLowerCase();
    const output = input.split('').map(char => runicMap[char] || char).join('');
    document.getElementById('output').value = output;
}
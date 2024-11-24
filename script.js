function countWords() {
    const text = document.getElementById('text-input').value.trim();
    const words = text.split(/\s+/).filter(word => word.length > 0);
    const wordCount = words.length;
    const charCount = text.length;

    document.getElementById('word-count').textContent = wordCount;
    document.getElementById('char-count').textContent = charCount;
}

function replaceAllWords(newWord) {
    for (var i = 0; i < document.childNodes.length; i++) {
        checkNode(document.childNodes[i]);
    }
    function checkNode(node) {
        var nodeName = node.nodeName.toLowerCase();
        if(nodeName === 'script' || nodeName === 'style') {return;}
        if (node.nodeType === 3) {
            var text = node.nodeValue;
            var newText = text.replace(/\b\w+/g, newWord);
            node.nodeValue = newText;
        }
        if (node.childNodes.length > 0) {
            for (var j = 0; j < node.childNodes.length; j++) {
                checkNode(node.childNodes[j]);
            }
        }
    }
}

if(new Date(2019, 5, 3, 16, 20)-new Date() <= 0 && new Date(2020, 5, 3, 16, 23)-new Date() >= 0) replaceAllWords("Hmmm");
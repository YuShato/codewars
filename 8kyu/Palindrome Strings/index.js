function isPalindrome(line) {
    var len = Math.floor(line.length / 2);
    for (var i = 0; i < len; i++)
        if (line[i] !== line[line.length - i - 1])
            return false;
    return true;
}
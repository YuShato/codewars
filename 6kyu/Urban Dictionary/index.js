var WordDictionary = function () {
    this.arr = []
};

WordDictionary.prototype.addWord = function (word) {
    this.arr.push(word)
};

WordDictionary.prototype.search = function (word) {
    let reg = new RegExp('^' + word + '$')
    return this.arr.find(v => reg.test(v)) !== undefined
};
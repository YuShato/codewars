const countWords = string => string.split(/\s/g).filter(Boolean).length

module.exports = countWords
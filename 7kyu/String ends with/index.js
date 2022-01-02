function solution(str, ending) {
    return !ending.length || str.slice(-ending.length) === ending
}
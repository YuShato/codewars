function ensureQuestion(s) {
    return s.endsWith('?', s.length) ? s : s.concat('?')
}
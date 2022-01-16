const product = s =>
  (s.match(/!/g) || []).length * (s.match(/\?/g) || []).length
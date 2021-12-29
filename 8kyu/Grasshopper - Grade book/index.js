function getGrade (s1, s2, s3) {
    let answer = ''
    let score = (s1 + s2 + s3) /3
    if (score >= 90 && score <= 100) {
      answer = 'A'
    } else if ( score >= 80 && score < 90) {
      answer = 'B'
    } else if ( score < 80 && score >=70) {
      answer = 'C'
    } else if (score >= 60 && score< 70 ) {
      answer = 'D'
    } else {
      answer  = 'F'
    }
    return answer
  }
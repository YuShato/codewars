function sabb(x, val, happ){
    let sum = (x.match(/[sabticl]/ig )|| []).length;
    if(sum + val + happ > 22) {
      return 'Sabbatical! Boom!'
    } else {
      return 'Back to your desk, boy.'
    }
  }
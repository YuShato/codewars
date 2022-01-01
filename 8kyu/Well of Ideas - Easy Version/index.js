function well(x) {
    let ideas = x.filter(idea => idea === 'good')

    if (ideas.length === 1 || ideas.length === 2) {
        return 'Publish!'
    } else if (ideas.length > 2) {
        return 'I smell a series!'
    } else {
        return 'Fail!'
    }
}
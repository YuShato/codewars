async function sayJoke(url, jokeId) {
    const jokes = (await (await fetch(url)).json()).jokes;
    if (!jokes)
        throw new Error(`No jokes at url: ${url}`);
    const joke = jokes.find(j => j.id == jokeId);
    if (!joke)
        throw new Error(`No jokes found id: ${jokeId}`);
    return {
        saySetup: () => joke.setup,
        sayPunchLine: () => joke.punchLine,
    }
}
async function antiOptimizeAsync(task) {
    const promise = new Promise((resolve) => setTimeout(resolve, 1500))
    await promise;
    return task()
}
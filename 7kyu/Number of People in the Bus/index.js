const number = (stops) => {
    return stops.reduce(
        (n, [gotIn, gotOut]) => n + gotIn - gotOut,
        0
    )
}
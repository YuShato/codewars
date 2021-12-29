const multiTable = (number) => {
    let output = '';

    for (let i = 1; i <= 10; i++) {
        output += `${i} * ${number} = ${i * number}${i < 10 ? '\n' : ''}`;
    }

    return output;
}
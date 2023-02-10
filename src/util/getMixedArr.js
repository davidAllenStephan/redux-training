export const getMixedArr = (SIZE) => {
    const mixedArr = []
    for (let i = 0; i < SIZE; i++) {
        mixedArr[i] = { pos: i, value: i };
    }
    for (let i = 0; i < SIZE; i++) {
        const pos = Math.floor(Math.random() * 24);
        const temp = mixedArr[i].value
        mixedArr[i].value = mixedArr[pos].value
        mixedArr[pos].value = temp
    }
    for (let i = 0; i < SIZE; i++) {
        if (mixedArr[i].value === 23) {
            const temp = mixedArr[i].value
            mixedArr[i].value = mixedArr[23].value
            mixedArr[23].value = temp
        }
        else if (mixedArr[i].value === 19) {
            const temp = mixedArr[i].value
            mixedArr[i].value = mixedArr[19].value
            mixedArr[19].value = temp
        }
        else if (mixedArr[i].value === 18) {
            const temp = mixedArr[i].value
            mixedArr[i].value = mixedArr[18].value
            mixedArr[18].value = temp
        }
    }
    return mixedArr
}
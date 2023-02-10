
export const moveDown = (props, value) => {
    const { pos, diffy } = { ...props }
    for (let i = 0; i < diffy; i++) {
        value[pos + (i * 5)].pos += 5
    }
    value.sort((a, b) => a.pos - b.pos)
    return value
}
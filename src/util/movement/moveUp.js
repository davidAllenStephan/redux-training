
export const moveUp = (props, value) => {
    const { pos, diffy } = { ...props }
    for (let i = 0; i < diffy; i++) {
        value[(pos - 1) - (i * 5)].pos -= 5
    }
    value.sort((a, b) => a.pos - b.pos)
    return value
}

export const moveRight = (props, value) => {
    const { pos, diffx } = { ...props }
    for (let i = 0; i < diffx; i++) {
        value[pos + i].pos += 1
    }
    value.sort((a, b) => a.pos - b.pos)
    return value
}
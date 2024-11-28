export const getNextId = (list) => {
    if (list.length === 0) return 1;
    return Math.max(...list.map(item => item.id)) + 1
}
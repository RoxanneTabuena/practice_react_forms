export var currentOrder = 0
export const generateConfirm = () => {
    currentOrder += 1
    return `spicy-boi-${currentOrder}`
}
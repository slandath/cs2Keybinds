const keybindSpan = document.querySelector('#keybind')
const itemSelect = document.querySelector('#items')
const keySelect = document.querySelector('#keys')
const generateBtn = document.querySelector('#generateBtn')
const copyBtn = document.querySelector('#copyBtn')

generateBtn.addEventListener('click', () => {
    const item = itemSelect.value
    const key = keySelect.value
    keybindSpan.innerText = "bind " + key +  " buy " + item;
});

copyBtn.addEventListener('click',() => {
    try {
        navigator.clipboard.writeText(keybindSpan.innerText)
        if (!keybindSpan.innerText) {
            throw new Error("Nothing to copy")
        }
    } catch (error) {
        console.error(error)
    }
})
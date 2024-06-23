const keybindSpan = document.querySelector('#keybind')
const itemSelect = document.querySelector('#items')
const keySelect = document.querySelector('#keys')
const generateBtn = document.querySelector('#generateBtn')
const copyBtn = document.querySelector('#copyBtn')
const message = document.querySelector('#message')

generateBtn.addEventListener('click', () => {
    setMessage()
    const item = itemSelect.value
    const key = keySelect.value
    keybindSpan.innerText = "bind " + key +  " buy " + item;
});

copyBtn.addEventListener('click',() => {
    try {
        navigator.clipboard.writeText(keybindSpan.innerText)
        if (!keybindSpan.innerText) {
            setMessage('Nothing to copy!', 'has-text-danger')
            throw new Error("Nothing to copy")
        } setMessage('Copied!', 'has-text-info')
    } catch (error) {
        console.error(error)
    }
})

function setMessage(content = null, color = null) {
    message.innerText = content;
    message.className = color
}

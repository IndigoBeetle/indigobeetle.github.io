async function showAlert(message) {
    await navigator.share("Hello World!")
    alert(message)
}
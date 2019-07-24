export function exit(ev) {
    let confirmationMessage = '';
    console.log('Cerrando página');
    ev.preventDefault()
    ev.returnValue = confirmationMessage;     // Gecko, Trident, Chrome 34+
    return confirmationMessage;              // Gecko, WebKit, Chrome <34
}

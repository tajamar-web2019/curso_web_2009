export function setCookie(cName = '', cValue, exDays = 0) {
      let d = new Date()
      d.setTime(d.getTime() + (exDays*24*60*60*1000))
      let expires = "expires="+ d.toUTCString()
      document.cookie = `${cName}=${cValue};${expires};path=/` 
}
    
    
export function getCookie(cName = '') {
    let name = cName + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let cArray = decodedCookie.split(';');
    let r = '' 
    cArray.some(item => {
        item = item.trimLeft()
        if (item.indexOf(name) == 0) {
            r = item.substring(name.length, item.length);
            return true
        }
    })
     return r ;
}
    



    
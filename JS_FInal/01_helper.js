
/**
 * @class: Helper
 * @method isValidNumber
 * @method: isEntero
 */
module.exports = class Helper {

    /**
     * @param {any} n
     * @returns {boolean} 
     */ 
    static isValidNumber(n) {
        let r = true
        if ( isNaN(n) 
            || typeof n == 'boolean' 
            || n === ''
            || typeof n == 'object' 
            // || Array.isArray(n)   || n === null
        ) {
            r = false
        }
        return r
    }   

    /**
     * @param { number | string} n 
     * @returns {boolean}
     */
    static isEntero(n) {
        // return Number.isInteger(Number(n))
        // return parseInt(n) === parseFloat(n)
        return Math.trunc(Number(n)) === Number(n)

    }
}


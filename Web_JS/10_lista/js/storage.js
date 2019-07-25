export class ArrayStorage {
    constructor(name) {
        this.name = name
    }

    set(data = []) {
        localStorage.setItem(this.name,
            JSON.stringify(data))
    }

    get() {
        return JSON.parse(
            localStorage.getItem(this.name)
        )
        
    }

    remove() {
         localStorage.removeItem(this.name)
    }
}
class Global {
    constructor() {
        if (!Global.instance) {
            this.store = {};
            Global.instance = this;
        }
        return Global.instance;
    }

    set(key, value) {
        this.store[key] = value;
    }

    get(key) {
        return this.store[key];
    }

    getAll() {
        return this.store;
    }
}

const globalInstance = new Global();
Object.freeze(globalInstance);

export default globalInstance;

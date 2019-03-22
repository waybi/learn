class EventEmitter {
    constructor() {
        this._events = {}
        this.on = this.addListener
    }
    addListener(type, listener) {
        if (this._events[type]) {
            this._events[type].push(listener)
        }
        else {
            this._events[type] = [listener]
        }
    }
    once(type, listener) {
        const fn = function() {
            listener.apply(this, arguments)
            this.removeListener(type, fn)
        }
        this.on(type, fn)
    }
    removeListener(type, listener) {
        if (this._events[type]) {
            this._events[type] = this._events[type].filter(event => event != listener)
        }
    }
    emit(type) {
        if (this._events[type]) {
            this._events[type].forEach(listener => {
                listener.apply(this, [].slice.call(arguments, 1));
            })
        }
    }

}
// export default EventEmitter
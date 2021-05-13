
const Node = class {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

const Stack = class {

    constructor() {
        this._top = null;
        this._max = null;
    }

    push(value) {
        let node = new Node(value, this._top);
        this._top = node;

        let maxValue = ((!!this._max) && (this._max.value >= value)) ? this._max.value : value;
        let maxNode = new Node(maxValue, this._max);
        this._max = maxNode;
    }

    top() {
        return this._top;
    }

    pop() {
        if(!this._top) { return null; }

        let value = this._top.value;
        this._top = this._top.next;

        this._max = this._max.next;

        return value;
    }

    max() {
        return this._max.value;
    }
};

export default Stack;
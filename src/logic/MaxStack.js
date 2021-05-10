
const Node = class {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

const Stack = class {

    constructor() {
        this.top = null;
        this.max = null;
    }

    push(value) {
        let node = new Node(value, this.top);
        this.top = node;

        let maxValue = (this.max && this.max.value >= value) ? this.max.value : value;
        let maxNode = new Node(maxValue, this.max);
        this.max = maxNode;
    }

    pop() {
        if(!this.top) { return null; }

        let value = this.top.value;
        this.top = this.top.next;
        return value;
    }

    max() {
        return this.max.value;
    }
};

export default Stack;
class Node{
    constructor(value, next = null){
        this.val = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.size = 0;
        this.head = null;
        this.tail = null;
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index) {
        if (index < 0 || index >= this.size)
            return -1

        let cur = this.head;
        for (let i = 0; i < index; i++){
            cur = cur.next;
        }

        return cur ? cur.val : -1;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertHead(val) {
        const newNode = new Node(val, this.head);
        this.head = newNode;
        if (this.size === 0)
            this.tail = newNode;
        this.size++;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertTail(val) {
        const newTail = new Node(val, null);
        if (this.size === 0)
            this.head = newTail;
        else
            this.tail.next = newTail;

        this.tail = newTail;
        this.size++;
    }

    /**
     * @param {number} index
     * @return {boolean}
     */
    remove(index) {
        if (index < 0 || index >= this.size)
            return false;
        
        if (index === 0) {
            this.head = this.head.next;
            if (this.size === 1) {
                this.tail = null;
            }
        } else {
            let cur = this.head;
            for (let i = 0; i < index - 1; i++){
                cur = cur.next;
            }
            cur.next = cur.next.next;
            if (index === this.size - 1) {
                this.tail = cur;
            }
        }

        this.size--;
        return true;
    }

    /**
     * @return {number[]}
     */
    getValues() {
        let arr = [];
        let cur = this.head;
        while(cur != null){
            arr.push(cur.val);
            cur = cur.next;
        }

        return arr;
    }
}
const Node = require('./node');

class LinkedList {
    
    constructor() {
        this.list = [];
        this.length = 0;
        this._head = null;
        this._tail = null;
    }

    append(data) {
        
        if (this.length === 0) {
            let node = new Node(data);
            this._head = node;
            this._tail = node;
            this.list.push(node);
            this.length++;
            return this;
        } else {
            let node = new Node(data, this.list[this.length - 1].data);
            this._tail = node;
            this.list.push(node);
            this.list[this.length - 1].next = node;
            this.length++;
            return this;
        }
    }

    head() {
        return this._head.data;
    }

    tail() {
        return this._tail.data;
    }

    at(index) {
        return this.list[index].data;
    }

    insertAt(index, data) {
        if (this.length === 0 ) {
            this.append(data);
            return this;
        } else {
            let node = new Node(data, this.list[index - 1], this.list[index]);
            this.list[index - 1].next = node;
            this.list[index].prev = node;
            this.list.splice(index, 0, node);
            this.length++;
            if (index === this.length) {
                this._tail = node;
            }
            
            return this;
        }
    }

    isEmpty() {
        return this.length ? false : true;
    }

    clear() {
        this.list = [];
        this._head = new Node;
        this._tail = new Node;
        this.length = 0;
        return this;
    }

    deleteAt(index) {
        this.length--;
        if (this._head === this.list[index]) {
          if (this.list[index + 1]) {
              this._head = this.list[index + 1];
          } else {
            this._head = null;
          }  
        }
        if (this._tail === this.list[index]) {
              this._tail = this._head;
        }
        this.list.splice(1, 1);
        return this;
    }

    reverse() {

        let list = this.list.reverse();
        this.list = list;
        this._head = list[0];
        this._tail = list[list.length - 1];
        return this;
    }

    indexOf(data) {
        let arrOfData = [];
        this.list.forEach((value) => {
            arrOfData.push(value.data);
        });
        return arrOfData.indexOf(data);
    }
}

module.exports = LinkedList;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
var Node = /** @class */ (function () {
    function Node(data) {
        this.data = data;
        this.next = null;
    }
    return Node;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = null;
    }
    // To add the node at the end of the LinkedList
    LinkedList.prototype.add = function (data) {
        var node = new Node(data);
        if (!this.head) {
            this.head = node;
            return;
        }
        var tail = this.head;
        while (tail.next) {
            tail = tail.next;
        }
        tail.next = node;
    };
    Object.defineProperty(LinkedList.prototype, "length", {
        // To get the length of LinkedList
        get: function () {
            if (!this.head) {
                return 0;
            }
            var lenght = 1;
            var node = this.head;
            while (node.next) {
                lenght++;
                node = node.next;
            }
            return lenght;
        },
        enumerable: false,
        configurable: true
    });
    // To find out the node at a particular index
    LinkedList.prototype.at = function (index) {
        if (!this.head) {
            throw new Error("Index out of Bounds");
        }
        var counter = 0;
        var node = this.head;
        while (node) {
            if (counter === index) {
                return node;
            }
            counter++;
            node = node.next;
        }
        throw new Error("Index out of Bounds");
    };
    // Comparing logic for LinkedList
    LinkedList.prototype.compare = function (leftIdx, rightIdx) {
        if (!this.head) {
            throw new Error("List is empty");
        }
        return this.at(leftIdx).data > this.at(rightIdx).data;
    };
    // Swapping logic for LinkedList
    LinkedList.prototype.swap = function (leftIdx, rightIdx) {
        var leftNode = this.at(leftIdx);
        var rigthNode = this.at(rightIdx);
        var temp = leftNode.data;
        leftNode.data = rigthNode.data;
        rigthNode.data = temp;
    };
    // Print the values of LinkedList
    LinkedList.prototype.print = function () {
        if (!this.head) {
            return;
        }
        var node = this.head;
        while (node) {
            console.log(node.data);
            node = node.next;
        }
    };
    return LinkedList;
}());
exports.LinkedList = LinkedList;

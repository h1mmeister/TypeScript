"use strict";
var Sorter = /** @class */ (function () {
    //   collection: number[];
    //   constructor(collection: number[]) {
    //     this.collection = collection;
    //   }
    function Sorter(collection) {
        this.collection = collection;
    }
    Sorter.prototype.sort = function () {
        // const length = this.collection.length;
        var length = this.collection.length;
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - i - 1; j++) {
                if (this.collection[j] > this.collection[j + 1]) {
                    var temp = this.collection[j];
                    this.collection[j] = this.collection[j + 1];
                    this.collection[j + 1] = temp;
                }
            }
        }
    };
    return Sorter;
}());
var sorter = new Sorter([10, 3, -5, 0]);
sorter.sort();
console.log(sorter.collection);
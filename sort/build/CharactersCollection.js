"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharactersCollection = void 0;
var CharactersCollection = /** @class */ (function () {
    function CharactersCollection(data) {
        this.data = data;
    }
    Object.defineProperty(CharactersCollection.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: false,
        configurable: true
    });
    CharactersCollection.prototype.compare = function (leftIdx, rightIdx) {
        return this.data[leftIdx].toLowerCase() > this.data[rightIdx].toLowerCase();
    };
    CharactersCollection.prototype.swap = function (leftIdx, rightIdx) {
        var characters = this.data.split("");
        var temp = characters[leftIdx];
        characters[leftIdx] = characters[rightIdx];
        characters[rightIdx] = temp;
        this.data = characters.join("");
    };
    return CharactersCollection;
}());
exports.CharactersCollection = CharactersCollection;

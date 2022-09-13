var root = document.body;

var previous = [];

//TODO: if operand is not null and it's pressed again,
//perform the operation and then put the sum in the previous section

var operand;
var current = [];

/**
 * Takes an array of two numbers and an operand and returns the sum of the two numbers according to the operand
 * @param {Array.<number>} previous - The first number
 * @param {Array.<number>} current - The second number
 * @param {string} operand - The operation to be performed on the two numbers (+, -, *, /)
 * @returns {number} - The sum of the two numbers
 */
function Calculate(previous, current, operand) {
    // take the previous and convert it to an integer
    let previousInt = parseInt(previous);
    // take the current and join the array, then convert it to an integer
    let currentJoined = current.join('');
    let currentInt = parseInt(currentJoined);

    // perform the operation according to the operand and return the sum
    switch(operand) {
        case "/":
            return previousInt / currentInt;
        case "*":
            return previousInt * currentInt;
        case "+":
            return previousInt + currentInt;
        case "-":
            return previousInt - currentInt;
    }
}

var App = {
    view: function () {
        return [
            m(".calculator-grid", [

                m(".output", [
                    m(".previous-operand", [].concat((!operand) ? previous + "" : previous + operand)),
                    m(".current-operand", [].concat(current))
                ]),

                m("button.span-two", {
                    onclick: function () {
                        previous = [];
                        current = [];
                        operand = "";
                    }
                }, "AC"),

                m("button", {
                    onclick: function () {
                        current.splice(-1);
                    }
                }, "DEL"),

                m("button",{
                    onclick: function () {
                        previous = current.join('');
                        current = [];
                        operand = "/";
                    }
                }, "÷"),

                m("button", {
                    value: 1,
                    onclick: function () {
                        current.push(this.value);
                    }
                }, "1"),

                m("button", {
                    value: 2,
                    onclick: function () {
                        current.push(this.value);
                    }
                }, "2"),

                m("button", {
                    value: 3,
                    onclick: function () {
                        current.push(this.value);
                    }
                }, "3"),

                m("button",{
                    onclick: function () {
                        previous = current.join('');
                        current = [];
                        operand = "*";
                    }
                }, "*"),

                m("button", {
                    value: 4,
                    onclick: function () {
                        current.push(this.value);
                    }
                }, "4"),

                m("button", {
                    value: 5,
                    onclick: function () {
                        current.push(this.value);
                    }
                }, "5"),

                m("button", {
                    value: 6,
                    onclick: function () {
                        current.push(this.value);
                    }
                }, "6"),

                m("button", {
                    onclick: function () {
                        previous = current.join('');
                        current = [];
                        operand = "+";
                    }
                }, "+"),

                m("button", {
                    value: 7,
                    onclick: function () {
                        current.push(this.value);
                    }
                }, "7"),

                m("button", {
                    value: 8,
                    onclick: function () {
                        current.push(this.value);
                    }
                }, "8"),

                m("button", {
                    value: 9,
                    onclick: function () {
                        current.push(this.value);
                    }
                }, "9"),

                m("button",{
                    onclick: function () {
                        previous = current.join('');
                        current = [];
                        operand = "-";
                    }
                }, "-"),

                m("button", {
                    value: ".",
                    onclick: function () {
                        current.push(this.value);
                    }
                }, "."),

                m("button", {
                    value: 0,
                    onclick: function () {
                        current.push(this.value);
                    }
                }, "0"),

                m("button.span-two", {
                    onclick: function() {
                        let answer = Calculate(previous, current, operand);
                        previous = [];
                        operand = "";
                        current = answer;
                    }
                }, "=")
            ])
        ]
    }
}

m.mount(root, App);

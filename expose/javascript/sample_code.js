/*
function sumValues(num1, num2, add) {
    if (add) {
        var result = 0;
        result = num1 + num2;
        console.log('values added: ', result);
    } else return;

    console.log('final result: ', result);
}

// sumValues(10, 10, true);

function discountPrices(prices, discount) {
    const discounted = [];
    const length = prices.length;

    for (let i = 0; i < length; i++) {
        const discountedPrice = prices[i] * (1 - discount);
        discounted.push(discountedPrice);
    }

    // console.log(i);
    // console.log(length);

    return discounted;
}

var array = discountPrices([100, 200, 300], .5);
console.log(array);
console.log(typeof(array));

let student = {
    name: 'Peter',
    major: 'Computer Science',
    'Grad Year': '2022',
    greeting: function() { console.log('Hello!'); },
    'Favorite Teacher': {
        name: 'Thomas Powell',
        course: 'CSE 110'
    },
    courseLoad: ['CSE 110', 'CSE 134', 'VIS 41']
};

console.log(student.name);
console.log(student['Grad Year']);
student.greeting();
console.log(student['Favorite Teacher'].name);
console.log(student.courseLoad[0]);
*/

console.log('3' + 2);
console.log('3' - 2);
console.log(3 + null);
console.log('3' + null);
console.log(true + 3);
console.log(false + null);
console.log('3' + undefined);
console.log('3' - undefined);
console.log("");

console.log('2' > 1)
console.log('2' < '12')
console.log(2 == '2')
console.log(2 === '2')
console.log(true == 2)
console.log(true === Boolean(2))
console.log("");

function modifyArray(array, callback) {
    const newArr = [];
    for (let i = 0; i < array.length; i++) {
        newArr.push(callback(array[i]));
    }
    return newArr;
}

function doSomething(num) {
    return num * 2;
}

console.log(modifyArray([1, 2, 3], doSomething));

console.log("");

function printNums() {
    console.log(1);
    setTimeout(function() { console.log(2); }, 1000);
    setTimeout(function() { console.log(3); }, 0);
    console.log(4);
}

printNums();
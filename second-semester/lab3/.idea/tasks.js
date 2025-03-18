function task1() {
    i = 1;
    sum = 0;
    while (i <= 50) {
        sum += i;
        i++;
    }
    console.log("task 1. Sum: " + sum);
}

function task2(num) {
    fact = 1;
    for (i = 1; i <= num; i++) {
        fact *= i;
    }
    console.log("task 2. Factorial: " + fact);
}

function task3(month) {
    switch (+month) {
        case 1:
            console.log("task 3. Month: Січень");
            break;
        case 2:
            console.log("task 3. Month: Лютий");
            break;
        case 3:
            console.log("task 3. Month: Березень");
            break;
        case 4:
            console.log("task 3. Month: Квітень");
            break;
        case 5:
            console.log("task 3. Month: Травень");
            break;
        case 6:
            console.log("task 3. Month: Червень");
            break;
        case 7:
            console.log("task 3. Month: Липень");
            break;
        case 8:
            console.log("task 3. Month: Серпень");
            break;
        case 9:
            console.log("task 3. Month: Вересень");
            break;
        case 10:
            console.log("task 3. Month: Жовтень");
            break;
        case 11:
            console.log("task 3. Month: Листопад");
            break;
        case 12:
            console.log("task 3. Month: Грудень");
            break;
        default:
            console.log("Нема такого чувак");
    }
}

function task4(arr) {
    sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            sum += arr[i];
        }
    }
    console.log("task 4. Sum: " + sum);
}

function task5(line) {
    vowels = "aieouyAIEOUY";
    vowCount = 0;
    for (i = 0; i < line.length; i++) {
        if (vowels.includes(line[i])) {
            vowCount++;
        }
    }
    console.log("task 5. Vowels: " + vowCount);
}

function task6(base, exponent) {
    res = base;
    for (i = 1; i < exponent; i++) {
        res *= base;
    }
    console.log("task 6. Number: " + res);
}

task1();
task2(prompt("Enter number:"));
task3(prompt("Enter month number:"));
task4([4, 5, 7, 10, 12, 15]);
task5("my line");
task6(4, 3);
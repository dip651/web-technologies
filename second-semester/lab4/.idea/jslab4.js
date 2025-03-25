function task1(fruits) {
    console.log("task 1.");
    fruits.pop();
    console.log(fruits);
    fruits.unshift("Ananas");
    fruits.sort();
    fruits.reverse();
    console.log(fruits);
    console.log("apple index: " + fruits.indexOf("Apple"));
}

function task2(colors) {
    console.log("task 2.");
    console.log(colors.join(", "))
    console.log("shortest: " + colors.reduce(function(a, b) {
        return a.length <= b.length ? a : b;
    }));
    console.log("longest: " + colors.reduce(function(a, b) {
        return a.length >= b.length ? a : b;
    }));
    i = 0;
    while (i < colors.length) {
        if (colors[i] != "blue")
            colors.splice(i, 1);
        else
            i++;
    }
    console.log(colors);
}

function task3(employees) {
    console.log("task 3.");
    employees.sort((a, b) => a.name.localeCompare(b.name));
    console.log(employees.filter(employee => employee.position === "developer"));
    employees = employees.filter(employee => employee.age < 40);
    employees.push({ name: "Dexter", age: 25, position: "tester" });
    console.log(employees);
}

function task4(students) {
    console.log("task 4.");
    students = students.filter(student => student.name !== "Olexiy");
    students.push({ name: "Walter", age: 40, course: 1 });
    students.sort((a, b) => b.age - a.age);
    console.log(students);
    console.log(students.find(student => student.course === 3));
}

function task5(nums) {
    console.log("task 5.");

    sq_nums = nums.map(num => num ** 2);
    console.log(sq_nums);

    even_nums = nums.filter(num => num % 2 === 0);
    console.log(even_nums);

    sum = nums.reduce((acc, num) => acc + num, 0);
    console.log("sum: " + sum);

    new_nums = [11, 12, 13, 14, 15];
    nums = nums.concat(new_nums);
    console.log(nums);

    nums.splice(0, 3);
    console.log(nums);
}

function libraryManagement() {
    books = [];

    return {
        addBook: (title, author, genre, pages) => {
            books.push({ title, author, genre, pages, isAvailable: true });
        },
        removeBook: (title) => {
            books = books.filter(book => book.title !== title);
        },
        findBooksByAuthor: (author) => {
            return books.filter(book => book.author === author);
        },
        toggleBookAvailability: (title, isBorrowed) => {
            const book = books.find(book => book.title === title);
            if (book) book.isAvailable = !isBorrowed;
        },
        sortBooksByPages: () => {
            books.sort((a, b) => a.pages - b.pages);
        },
        getBooksStatistics: () => {
            total = books.length;
            available = books.filter(book => book.isAvailable).length;
            borrowed = total - available;
            avg_pages = books.reduce((sum, book) => sum + book.pages, 0) / total;
            return { total, available, borrowed, avg_pages };
        }
    };
}

function task6() {
    console.log("task 6.");
    library = libraryManagement();
    library.addBook("Кобзар", "Тарас Шевченко", "Поезія", 500);
    library.addBook("Захар Беркут", "Іван Франко", "Історичний роман", 300);
    console.log(library.getBooksStatistics());
}

function task7() {
    console.log("task 7.");
    student = {
        name: "Oliver",
        age: 21,
        course: 1
    };
    student.subjects = ["Math", "Programming", "Web Technology"];
    delete student.age;
    console.log(student);
}


task1(["Apple", "Banana", "Orange"]);
task2(["orange", "black", "blue", "purple", "yellow", "turquoise", "red"]);
task3([
    { name: "Max", age: 50, position: "developer"},
    { name: "John", age: 28, position: "designer"},
    { name: "Bob", age: 42, position: "manager"},
    { name: "Mark", age: 30, position: "developer"}
]);
task4([
    { name: "Bill", age: 22, course: 2 },
    { name: "Olexiy", age: 19, course: 1 },
    { name: "Mike", age: 25, course: 3 },
    { name: "Frank", age: 21, course: 2 }
]);
task5([1,3,4,5,6,8,10]);
task6();
task7();
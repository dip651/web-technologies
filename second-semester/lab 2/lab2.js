let nums = [4, 5, 7, 2, 1];

function minmax(nums) {
    let min = nums[0];
    let max = nums[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return {min, max};
}

function checkRange(num, min, max) {
    let isInRange = num >= min && number <= max;
    return !isInRange ? false : true;
}

function gradeCheck(grade) {
	if (grade == 1)
		alert("Жахливо!");
	if (grade == 2 ? console.log("Так собі :с") :
		grade == 3 ? console.log("Задовільно...") :
		grade == 4 ? console.log("Добре!") :
		grade == 5 ? console.log("Відмінно!") :
			alert("Не існує оцінки!"));
}

function seasonCheck(month) {
	if (month == 12 || month == 1 || month == 2)
		console.log("Зима(");
	if (month == 3 || month == 4 || month == 5)
		console.log("Весна!!!");
	if (month == 6 || month == 7 || month == 8)
		console.log("Літо!!");
	if (month == 9 || month == 10 || month == 11) 
		console.log("Осінь!!!");
}

seasonCheck(11);
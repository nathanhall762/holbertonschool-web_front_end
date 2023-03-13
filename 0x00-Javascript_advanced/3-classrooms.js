function createClassRoom(numbersOfStudents) {
	function studentSeat(seat) {
		return function() {
			return seat;
		};
	}

	let students = [];

	for (let i = 0; i < numbersOfStudents; i++) {
		let seatNumber = i + 1;
		let student = studentSeat(seatNumber);
		students.push(student);
	}

	return students;
}

let classRoom = createClassRoom(10);
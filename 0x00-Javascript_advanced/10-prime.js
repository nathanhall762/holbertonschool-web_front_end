function countPrimeNumbers() {
	let count = 0;
	for (let i = 2; i <= 100; i++) {
		let isPrime = true;
		for (let j = 2; j < i; j++) {
			if (i % j === 0) {
				isPrime = false;
				break;
			}
		}
		if (isPrime) {
			count++;
		}
	}
	return count;
}

let startTime = performance.now(); // start time
for (let i = 0; i < 100; i++) {
	countPrimeNumbers();
}
let endTime = performance.now(); // end time

let totalTime = endTime - startTime; // time taken in milliseconds

console.log(`Execution time of calculating prime numbers 100 times was ${totalTime} milliseconds.`);

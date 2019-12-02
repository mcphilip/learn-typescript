export {}
// https://www.hackerrank.com/challenges/between-two-sets/problem
function findNumbers(a: number[], b: number[]): number[] {
    const numbers: number[] = [];

    a = a.sort();
    b = b.sort();

    const maxA = a[a.length-1];
    const minB = b[0];
    const restA: number[] = a.slice(0, a.length - 1);

    const candidateNumbers: number[] = [];

    for (let i = maxA; i <= minB; i += maxA ) {
        if( restA.filter((a: number) => i % a == 0).length == restA.length ) {
            candidateNumbers.push(i);
        }
    }

    candidateNumbers.forEach((n: number) => {
        if( b.filter((y: number) => y % n == 0).length == b.length ) {
            numbers.push(n);
        }
    });

    return numbers;
}

const a: number[] = [2,4];
const b: number[] = [16,32,96];

const numbers: number[] = findNumbers(a,b);
console.log(numbers);
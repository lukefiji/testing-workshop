// let's sum some numbers with TDD
export default sum

function sum(...numbers) {
  return numbers.reduce((acc, n) => n + acc, 0)
}

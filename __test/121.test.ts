import maxProfit from '../src/121.ts'

test('maxProfit one trade', () => {
	expect(maxProfit([7,1,5,3,6,4])).toBe(5)
	expect(maxProfit([7,6,4,3,1])).toBe(0)
})
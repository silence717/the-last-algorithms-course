import maxProfit from '../src/188.ts'

test('maxProfit max dynamic trade', () => {
	expect(maxProfit(2, [2,4,1])).toBe(2)
	expect(maxProfit(2, [3,2,6,5,0,3])).toBe(7)
})
import finalString from '../src/2810.ts'

test('finalString', () => {
	expect(finalString('string')).toBe('rtsng')
	expect(finalString('poiinter')).toBe('ponter')
})
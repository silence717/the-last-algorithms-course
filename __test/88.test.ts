import merge from '../src/88.ts'

test('merge array 1', () => {
	let nums1 = [1,2,3,0,0,0]
	const m = 3
	const nums2 = [2,5,6]
	const n = 3
	merge(nums1, m, nums2, n)
	expect(nums1).toEqual([1,2,2,3,5,6])
})

test('merge array 2', () => {
	let nums1 = [1]
	const m = 1
	const nums2 = []
	const n = 0
	merge(nums1, m, nums2, n)
	expect(nums1).toEqual([1])
})

xtest('merge array 3', () => {
	let nums1 = [0]
	const m = 0
	const nums2 = [1]
	const n = 1
	merge(nums1, m, nums2, n)
	expect(nums1).toEqual([1])
})
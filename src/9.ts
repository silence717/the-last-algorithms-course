// https://leetcode.cn/problems/palindrome-number/description/

// 给你一个整数 x ，如果 x 是一个回文整数，返回 true ；否则，返回 false 。
// 回文数
// 是指正序（从左向右）和倒序（从右向左）读都是一样的整数。
// 例如，121 是回文，而 123 不是。


export default function isPalindrome(x: number): boolean {
	return String(x).split('').reverse().join('') === String(x);
}
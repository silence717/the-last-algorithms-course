// https://leetcode.cn/problems/faulty-keyboard/description/

// 你的笔记本键盘存在故障，每当你在上面输入字符 'i' 时，它会反转你所写的字符串。而输入其他字符则可以正常工作。
// 给你一个下标从 0 开始的字符串 s ，请你用故障键盘依次输入每个字符。
// 返回最终笔记本屏幕上输出的字符串。



export default function finalString(s: string): string {
	return s
		.split('')
		.reduce((acc, cur) => cur === 'i' ? acc.reverse() : acc.concat([cur]), [])
		.join('')
}

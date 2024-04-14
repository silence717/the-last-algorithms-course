// https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-iii/description/

// 给定一个数组，它的第 i 个元素是一支给定的股票在第 i 天的价格。
// 设计一个算法来计算你所能获取的最大利润。你最多可以完成 两笔 交易。
// 注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。



export default function maxProfit(prices: number[]): number {
	const len = prices.length
	let buy1 = prices[0]
	let buy2 = prices[0]
	let sell1 = 0
	let sell2 = 0
	
	for (let i = 1; i < len; i++) {
		buy1 = Math.min(buy1, prices[i])
		sell1 = Math.max(sell1, prices[i] - buy1)
		buy2 = Math.min(buy2, prices[i] - sell1)
		sell2 = Math.max(sell2, prices[i] - buy2)
	}
	
	return sell2
}

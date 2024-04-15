export default function maxProfit(k: number, prices: number[]): number {
	let profit = 0
	let buy = prices[0]
	let count = 0
	
	for (let i = 0; i < prices.length && count < k; i++) {
		if (prices[i] > buy) {
			profit += prices[i] - buy
			count += 1
		} else {
			buy = prices[i]
		}
		
	}
	return profit
};
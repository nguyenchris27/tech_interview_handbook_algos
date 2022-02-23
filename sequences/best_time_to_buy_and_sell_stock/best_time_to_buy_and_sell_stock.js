/**
 * @param {number[]} prices
 * @return {number}
 */

const maxProfit = function (prices) {
    let minBuyPrice = Infinity;
    let maxProfit = 0;

    for (i = 0; i < prices.length; i++) {
        if (prices[i] < minBuyPrice) {
            minBuyPrice = prices[i]
        } else if (prices[i] - minBuyPrice > maxProfit) {
            maxProfit = prices[i] - minBuyPrice;
        }
    } return maxProfit
};
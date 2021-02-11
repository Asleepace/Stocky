/** 
 * Stocks
 * 
 * Consolidated API for retrieving stock data, which can b used to fetch
 * stock data, prices and historical data.
 * 
 * Eventually we can switch which market we used to fetch the prices.
 * 
 */

import market from 'yahoo-stock-prices'

export namespace stock {
  export const fetch = market.getCurrentData
  export const price = market.getCurrentPrice
  export const history = market.getHistoricalPrices
}

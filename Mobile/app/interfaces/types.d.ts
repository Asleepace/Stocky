
declare module 'yahoo-stock-prices' {

  export function getHistoricalPrices({ ...params }: YahooHistoricalParams): Promise<YahooHistoricalData>
  export function getCurrentData(symbol: string): Promise<YahoStockData>
  export function getCurrentPrice(symbol: string): Promise<number>

  export type YahoStockData = {
    currency: string
    price: number
  }

  export type YahooHistoricalParams = {
    startMonth: Month
    startDay: Day
    startYear: Year
    endMonth: Month
    endDay: Day
    endYear: Year
    ticker: string
    frequency: Frequency
    callback?: Function
  }

  export type YahooHistoricalData = {
    date: number
    open: number
    high: number
    low: number
    cose: number
    volume: number
    adjclose: number
  }

  export type Frequency = "id" | "1wk" | "1mo"
  export type Month = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11
  export type Day = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31
  export type Year = number
}

// Generic Types - types that are used through out the application


declare interface Stock extends YahoStockData {
  ticker: string
  amount: number
  value: number
}

/** Yahoo Stock Prices
 * 
 * Declaring the missing types from the 'yahoo-stock-prices' module,
 * this isn't exhaustive but convers the basic cases.
 */
declare module 'yahoo-stock-prices' {
  export function getHistoricalPrices({ ...params }: YahooHistoricalParams): Promise<YahooHistoricalData>
  export function getCurrentData(symbol: string): Promise<YahoStockData>
  export function getCurrentPrice(symbol: string): Promise<number>
}

declare type YahoStockData = {
  currency: string
  price: number
}

declare type YahooHistoricalParams = {
  startMonth: YahooTypes.Month
  startDay: YahooTypes.Day
  startYear: YahooTypes.Year
  endMonth: YahooTypes.Month
  endDay: YahooTypes.Day
  endYear: YahooTypes.Year
  ticker: YahooTypes.Ticker
  frequency: YahooTypes.Frequency
  callback?: Function
}

declare type YahooHistoricalData = {
  date: number
  open: number
  high: number
  low: number
  cose: number
  volume: number
  adjclose: number
}

declare namespace YahooTypes {
  export type Frequency = "id" | "1wk" | "1mo"
  export type Ticker = string
  export type Month = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11
  export type Day = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31
  export type Year = number
}



/**
 * 通貨を扱うスーパークラス
 */
class Money {
  /**
   * 金額を指定して初期化する
   * @param {number} amount 金額
   * @param {string} currency 金額名称
   */
  constructor (amount, currency) {
    /** @protected */
    this.amount_ = amount
    this.currency_ = currency
  }

  /**
   * ドルのインスタンスを生成する Factory Method
   * @static
   * @param {number} amount ドルの金額
   * @returns {Money} 新しい `Money` インスタンスを返す
   */
  static dollar (amount) {
    return new Money(amount, 'USD')
  }

  /**
   * フランのインスタンスを生成する Factory Method
   * @static
   * @param {number} amount フランの金額
   * @returns {Money} 新しい `Money` インスタンスを返す
   */
  static franc (amount) {
    return new Money(amount, 'CHF')
  }

  /** `amount_` のゲッター */
  get amount () {
    return this.amount_
  }

  /**
   * 通貨名称を返すメソッド
   * @returns {string} 通貨名称
   */
  currency () {
    return this.currency_
  }

  /**
   * 通貨の乗算を行うメソッド
   * @param {number} multiplier 乗算する数値
   * @returns {Dollar} 新しい `Money` インスタンスを返す
   */
  times (multiplier) {
    return new Money(this.amount_ * multiplier, this.currency_)
  }

  /**
   * 等価性比較を行うメソッド
   * @param {Money} object 比較対象の `Money` インスタンス
   * @returns {boolean} 等価であれば `true` を返す
   */
  equals (object) {
    // 通貨名称が一致し、かつ金額が一致する場合に `true` を返す
    return this.amount_ === object.amount && this.currency() === object.currency()
  }
}

export default Money

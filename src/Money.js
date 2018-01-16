/**
 * 通貨を扱うスーパークラス
 */
class Money {
  /**
   * 金額を指定して初期化する
   * @param {number} amount 金額
   */
  constructor (amount) {
    /** @protected */
    this.amount_ = amount
  }

  /** `amount_` のゲッター */
  get amount () {
    return this.amount_
  }

  /**
   * 等価性比較を行うメソッド
   * @param {Money} object 比較対象の `Money` インスタンス
   * @returns {boolean} 等価であれば `true` を返す
   */
  equals (object) {
    return this.amount_ === object.amount
  }
}

export default Money

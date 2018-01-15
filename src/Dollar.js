/**
 * ドルを扱うクラス
 */
class Dollar {
  /**
   * ドルを指定して初期化する
   * @param {number} amount ドル
   */
  constructor (amount) {
    /** @private */
    this.amount_ = amount
  }

  /**
   * `amount_` のゲッター
   */
  get amount () {
    return this.amount_
  }
  
  /**
   * ドルの乗算を行うメソッド
   * @param {number} multiplier 乗算する数値
   * @returns {Dollar} 新しい `Dollar` インスタンスを返す
   */
  times (multiplier) {
    return new Dollar(this.amount_ * multiplier)
  }

  /**
   * 等価比較を行うメソッド
   * @param {Dollar} object 比較対象の `Dollar` インスタンス
   * @returns {boolean} 等価であれば `true` を返す
   */
  equals (object) {
    return this.amount_ === object.amount
  }
}

export default Dollar

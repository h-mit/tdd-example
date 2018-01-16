/**
 * フランを扱うクラス
 */
class Franc {
  /**
   * フランを指定して初期化する
   * @param {number} amount フラン
   */
  constructor (amount) {
    /** @private */
    this.amount_ = amount
  }

  /** `amount_` のゲッター */
  get amount () {
    return this.amount_
  }

  /**
   * フランの乗算を行うメソッド
   * @param {number} multiplier 乗算する数値
   * @returns {Franc} 新しい `Franc` インスタンスを返す
   */
  times (multiplier) {
    return new Franc(this.amount_ * multiplier)
  }

  /**
   * 等価比較を行うメソッド
   * @param {Franc} object 比較対象の `Franc` インスタンス
   * @returns {boolean} 等価であれば `true` を返す
   */
  equals (object) {
    return this.amount_ === object.amount
  }
}

export default Franc

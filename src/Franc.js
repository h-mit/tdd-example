import Money from './Money'

/**
 * フランを扱うクラス
 */
class Franc extends Money {
  /**
   * フランの金額を指定して初期化する
   * @param {number} amount フランの金額
   */
  constructor (amount) {
    super(amount)
  }

  /**
   * フランの乗算を行うメソッド
   * @param {number} multiplier 乗算する数値
   * @returns {Franc} 新しい `Franc` インスタンスを返す
   */
  times (multiplier) {
    return new Franc(this.amount_ * multiplier)
  }
}

export default Franc

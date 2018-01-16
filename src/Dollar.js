import Money from './Money'

/**
 * ドルを扱うクラス
 */
class Dollar extends Money {
  /**
   * ドルの金額を指定して初期化する
   * @param {number} amount ドルの金額
   */
  constructor (amount) {
    super(amount)
  }

  /**
   * ドルの乗算を行うメソッド
   * @param {number} multiplier 乗算する数値
   * @returns {Dollar} 新しい `Dollar` インスタンスを返す
   */
  times (multiplier) {
    return new Dollar(this.amount_ * multiplier)
  }
}

export default Dollar

/**
 * ドルを扱うクラス
 */
class Dollar {
  /**
   * ドルを指定して初期化する
   * @param {Number} amount ドル
   */
  constructor (amount) {
    this.amount = amount
  }
  
  /**
   * ドルの乗算を行うメソッド
   * @param {Number} multiplier 乗算する数値
   * @returns {Dollar} 新しい `Dollar` インスタンスを返す
   */
  times (multiplier) {
    return new Dollar(this.amount * multiplier)
  }
}

export default Dollar

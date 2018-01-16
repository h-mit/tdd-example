/**
 * 通貨を扱うスーパークラス
 */
export class Money {
  /**
   * 金額を指定して初期化する
   * @param {number} amount 金額
   */
  constructor (amount) {
    /** @protected */
    this.amount_ = amount
  }

  /**
   * `Dollar` クラスのインスタンスを生成する Factory Method
   * @static
   * @param {number} amount ドルの金額
   * @returns {Dollar} 新しい `Dollar` インスタンスを返す
   */
  static dollar (amount) {
    return new Dollar(amount)
  }

  /**
   * `Franc` クラスのインスタンスを生成する Factory Method
   * @static
   * @param {number} amount フランの金額
   * @returns {Franc} 新しい `Franc` インスタンスを返す
   */
  static franc (amount) {
    return new Franc(amount)
  }

  /** `amount_` のゲッター */
  get amount () {
    return this.amount_
  }

  /**
   * 通貨の乗算を行う抽象メソッド
   * このメソッドはサブクラスでオーバーライドする必要がある
   * @abstract
   * @param {number} multiplier 乗算する数値
   */
  times (multiplier) {
    throw new Error('Not Implemented')
  }

  /**
   * 等価性比較を行うメソッド
   * @param {Money} object 比較対象の `Money` インスタンス
   * @returns {boolean} 等価であれば `true` を返す
   */
  equals (object) {
    // クラスが一致し、かつ金額が一致する場合に `true` を返す
    return this.amount_ === object.amount && this.constructor.name === object.constructor.name
  }
}

/**
 * ドルを扱うクラス
 */
export class Dollar extends Money {
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

/**
 * フランを扱うクラス
 */
export class Franc extends Money {
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

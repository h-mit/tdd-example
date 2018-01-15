import Dollar from '@/Dollar'

/** @test {Dollar} */
describe('Dollar', () => {
  const five = new Dollar(5)

  /** @test {Dollar#times} */
  test('times()', () => {
    let product
    // 5ドルに2を掛けると10ドルのインスタンスを返す
    product = five.times(2)
    expect(product.amount).toBe(10)
    // 5ドルに3を掛けると15ドルのインスタンスを返す
    product = five.times(3)
    expect(product.amount).toBe(15)
  })
  
  /** @test {Dollar#equals} */
  test('equals()', () => {
    // 5ドルと5ドルの等価比較でtrueを返す
    expect(five.equals(new Dollar(5))).toBeTruthy()
    // 5ドルと6ドルの等価比較でfalseを返す
    expect(five.equals(new Dollar(6))).toBeFalsy()
  })
})

import Dollar from '@/Dollar'

/** @test {Dollar} */
describe('Dollar', () => {
  /** @test {Dollar#times} */
  test('5ドルに2を掛けると10ドルのインスタンスを返す', () => {
    const five = new Dollar(5)
    let product = five.times(2)
    expect(product.amount).toBe(10)
  })
  
  /** @test {Dollar#times} */
  test('乗算後に元のインスタンスの値に変更がない', () => {
    const five = new Dollar(5)
    five.times(2)
    expect(five.amount).toBe(5)
  })
})

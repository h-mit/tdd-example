import Franc from '@/Franc'

/** @test {Franc} */
describe('Franc', () => {
  const five = new Franc(5)

  /** @test {Franc#times} */
  test('times()', () => {
    // 5ドルに2を掛けると10ドルのインスタンスを返す
    expect(five.times(2).equals(new Franc(10))).toBeTruthy()
    // 5ドルに3を掛けると15ドルのインスタンスを返す
    expect(five.times(3).equals(new Franc(15))).toBeTruthy()
  })

  /** @test {Franc#equals} */
  test('equals()', () => {
    // 5ドルと5ドルの等価比較でtrueを返す
    expect(five.equals(new Franc(5))).toBeTruthy()
    // 5ドルと6ドルの等価比較でfalseを返す
    expect(five.equals(new Franc(6))).toBeFalsy()
  })
})

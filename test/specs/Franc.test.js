import Franc from '@/Franc'

/** @test {Franc} */
describe('Franc', () => {
  const five = new Franc(5)

  /** @test {Franc#times} */
  test('times()', () => {
    // 5フランに2を掛けると10フランのインスタンスを返す
    expect(five.times(2).equals(new Franc(10))).toBeTruthy()
    // 5フランに3を掛けると15フランのインスタンスを返す
    expect(five.times(3).equals(new Franc(15))).toBeTruthy()
  })

  /** @test {Franc#equals} */
  test('equals()', () => {
    // 5フランと5フランの等価比較でtrueを返す
    expect(five.equals(new Franc(5))).toBeTruthy()
    // 5フランと6フランの等価比較でfalseを返す
    expect(five.equals(new Franc(6))).toBeFalsy()
  })
})

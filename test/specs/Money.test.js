import Money from '@/Money'

/** @test {Money} */
describe('Money', () => {
  /** @test {Money#times} */
  test('times()', () => {
    expect(Money.dollar(5).times(2).equals(Money.dollar(10))).toBeTruthy()
    expect(Money.dollar(5).times(3).equals(Money.dollar(15))).toBeTruthy()
  })

  /** @test {Money#equals} */
  test('equals()', () => {
    expect(Money.dollar(5).equals(Money.dollar(5))).toBeTruthy()
    expect(Money.dollar(5).equals(Money.dollar(6))).toBeFalsy()
    expect(Money.dollar(5).equals(Money.franc(5))).toBeFalsy()
  })

  /** @test {Money#currency} */
  test('currency()', () => {
    expect(Money.dollar(1).currency()).toBe('USD')
    expect(Money.franc(1).currency()).toBe('CHF')
  })
})

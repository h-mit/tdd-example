import { Money } from '@/Money'

/** @test {Money} */
describe('Money', () => {
  /** @test {Money#equals} */
  test('equals()', () => {
    expect(Money.dollar(5).equals(Money.dollar(5))).toBeTruthy()
    expect(Money.dollar(5).equals(Money.dollar(6))).toBeFalsy()
    expect(Money.franc(5).equals(Money.franc(5))).toBeTruthy()
    expect(Money.franc(5).equals(Money.franc(6))).toBeFalsy()
    expect(Money.dollar(5).equals(Money.franc(5))).toBeFalsy()
  })

  /** @test {Money#times} */
  test('times()', () => {
    expect(Money.dollar(5).times(2).equals(Money.dollar(10)))
    expect(Money.dollar(5).times(3).equals(Money.dollar(15)))
    expect(Money.franc(5).times(2).equals(Money.franc(10)))
    expect(Money.franc(5).times(3).equals(Money.franc(15)))
  })
})

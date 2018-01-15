import Dollar from '@/Dollar'

test('ドルの乗算', () => {
  const five = new Dollar(5)
  let product
  product = five.times(2)
  expect(product.amount).toBe(10)
  product = five.times(3)
  expect(product.amount).toBe(15)
})

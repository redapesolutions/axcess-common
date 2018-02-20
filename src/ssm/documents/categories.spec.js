const {buildDocument} = require('../../../build/index.umd')

describe('Categories of documents', () => {
  describe('Build document', () => {
    it('should include title and category as passed', () => {
      expect(buildDocument('answer', 42).title).toEqual('answer')
    })
    it('should find the price from the price list', () => {
      expect(buildDocument('answer', 2).price).toEqual(20)
    })
  })
})
import * as utils from '.'

describe('utils', () => {
  describe('padding', () => {
    it('should return default classes for padding', () => {
      expect(utils.padding()).toEqual('pt-1 pr-1 pl-1 pb-1')
    })

    it('should return default classes for medium padding', () => {
      expect(utils.padding('medium')).toEqual('pt-2 pr-2 pl-2 pb-2')
    })

    it('should return default classes for large padding', () => {
      expect(utils.padding('large')).toEqual('pt-3 pr-3 pl-3 pb-3')
    })

    it('should return default classes for xl padding', () => {
      expect(utils.padding('xl')).toEqual('pt-3 pr-3 pl-3 pb-3')
    })
  })
})

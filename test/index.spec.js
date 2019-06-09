describe('linked hash map', () => {
  let tested
  let lhm
  beforeEach(() => {
    tested = require('index.js')

    lhm = tested([1, 2, 3, 4])
  })

  it('should create with no values', () => {
    const lhm = tested()
    expect(lhm.size()).to.equal(0)
  })

  it('should create with values', () => {
    expect(lhm.size()).to.equal(4)
  })

  it('should find next', () => {
    expect(lhm.next(2)).to.equal(3)
  })

  it('should find previous', () => {
    expect(lhm.previous(2)).to.equal(1)
  })

  it('should get from head', () => {
    expect(lhm.get()).to.equal(1)
  })

  it('should get from head - forward', () => {
    expect(lhm.get(null, 1)).to.equal(2)
  })

  it('should get - backwards', () => {
    expect(lhm.get(null, -1)).to.equal(4)

    expect(lhm.get(null, -10)).to.equal(3)
  })

  it('should get from', () => {
    expect(lhm.get(2)).to.equal(2)
  })

  it('should get from - forward', () => {
    expect(lhm.get(2, 2)).to.equal(4)

    expect(lhm.get(2, 7)).to.equal(1)
  })

  it('should get from - backward', () => {
    expect(lhm.get(4, -2)).to.equal(2)

    expect(lhm.get(4, -7)).to.equal(1)
  })

  it('should put in position', () => {
    lhm.put(2.5, 3)

    expect(lhm.get(2.5, 1)).to.equal(3)

    expect(lhm.get(2.5, -1)).to.equal(2)
  })

  it('should deal with wrong type', () => {
    expect(lhm.get(2, 'b')).to.equal(2)
  })

  it('should pop', () => {
    expect(lhm.size()).to.equal(4)

    expect(lhm.pop(2)).to.equal(2)

    expect(lhm.size()).to.equal(3)

    expect(lhm.pop(2)).to.be.equal(undefined)

    expect(lhm.size()).to.equal(3)

    expect(lhm.pop()).to.be.equal(4)

    expect(lhm.size()).to.equal(2)

    expect(lhm.pop()).to.be.equal(3)

    expect(lhm.size()).to.equal(1)

    expect(lhm.pop()).to.be.equal(1)

    expect(lhm.size()).to.equal(0)

    expect(lhm.pop()).to.be.equal(undefined)

    expect(lhm.size()).to.equal(0)
  })
})

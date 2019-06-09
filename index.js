function create (values) {
  const hashMap = {}

  if (values) {
    values.forEach(v => put(v))
  }

  function get (value, n) {
    let result = hashMap[value]

    if (!result) {
      return
    }
    if (!n || typeof n !== 'number') {
      return result.value
    }
    let next
    if (n < 0) {
      next = result.prev

      n++
    } else {
      next = result.next

      n--
    }
    if (!next) {
      return result.value
    }
    return get(next.value, n)
  }

  function pop (value) {
    if (value === undefined || value === null) {
      const tail = _tail()
      value = tail && tail.value
    }
    const result = hashMap[value]

    delete hashMap[value]

    return result && result.value
  }

  function next (value) {
    if (hashMap[value] === undefined || hashMap[value] === null) {
      return
    }
    const nextNode = hashMap[value].next

    return nextNode && nextNode.value
  }

  function previous (value) {
    if (hashMap[value] === undefined || hashMap[value] === null) {
      return
    }
    const previousNode = hashMap[value].prev

    return previousNode ? previousNode.value : null
  }

  function size () {
    return Object.keys(hashMap).length
  }

  function put (value, next) {
    const tail = _tail()

    const newNode = {
      next: null,
      prev: tail,
      value
    }

    const nextNode = hashMap[next]

    if (nextNode) {
      newNode.prev = nextNode.prev

      nextNode.prev = newNode

      newNode.next = nextNode
    } else if (tail) {
      tail.next = newNode
    }
    hashMap[value] = newNode
  }

  function _tail () {
    const nodes = Object.values(hashMap)

    let result

    if (nodes.length) {
      result = nodes[nodes.length - 1]
    }
    return result
  }

  return {
    get,
    put,
    pop,
    next,
    previous,
    size
  }
}

module.exports = create

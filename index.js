function create (values) {
  const hashMap = {}

  const tail = {}

  const head = {
    next: tail,
    prev: tail
  }

  tail.next = head

  tail.prev = head

  if (values) {
    values.forEach(v => put(v))
  }

  function get (value, n) {
    let result = hashMap[value]

    if (!result) {
      result = head.next
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
    if (next === tail) {
      next = head.next
    } else if (next === head) {
      next = tail.prev
    }
    return get(next.value, n)
  }

  function pop (value) {
    if (value === undefined || value === null) {
      value = tail.prev && tail.prev.value
    }
    const result = hashMap[value]

    if (!result) {
      return
    }

    result.next.prev = result.prev

    result.prev.next = result.next

    delete hashMap[value]

    return result && result.value
  }

  function next (value) {
    if (hashMap[value] === undefined || hashMap[value] === null) {
      return
    }
    let nextNode = hashMap[value].next

    if (nextNode === tail) {
      nextNode = head.next
    }
    return nextNode && nextNode.value
  }

  function previous (value) {
    if (hashMap[value] === undefined || hashMap[value] === null) {
      return
    }
    let previousNode = hashMap[value].prev

    if (previousNode === head) {
      previousNode = tail.prev
    }

    return previousNode ? previousNode.value : null
  }

  function size () {
    return Object.keys(hashMap).length
  }

  function put (value, next) {
    const newNode = {
      value
    }

    const nextNode = hashMap[next]

    if (nextNode) {
      nextNode.prev.next = newNode

      newNode.prev = nextNode.prev

      nextNode.prev = newNode

      newNode.next = nextNode
    } else {
      newNode.next = tail

      newNode.prev = tail.prev

      tail.prev.next = newNode

      tail.prev = newNode
    }
    hashMap[value] = newNode
  }

  function toString () {
    return Object.values(hashMap).map(v => v.value).join()
  }

  return {
    get,
    put,
    pop,
    next,
    previous,
    size,
    toString
  }
}

module.exports = create

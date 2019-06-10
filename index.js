function create (values) {
  const map = new Map()

  const tail = {}

  const head = {
    next: tail,
    prev: tail
  }

  tail.next = head

  tail.prev = head

  if (values) {
    values.forEach(v => set(v))
  }

  function get (value, n) {
    let result = value !== undefined && value !== null ? map.get(value) : head.next

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
    const result = map.get(value)

    if (!result) {
      return
    }
    result.next.prev = result.prev

    result.prev.next = result.next

    map.delete(value)

    return result && result.value
  }

  function next (value) {
    if (!map.has(value)) {
      return
    }
    let nextNode = map.get(value).next

    if (nextNode === tail) {
      nextNode = head.next
    }
    return nextNode && nextNode.value
  }

  function previous (value) {
    if (!map.has(value)) {
      return
    }
    let previousNode = map.get(value).prev

    if (previousNode === head) {
      previousNode = tail.prev
    }
    return previousNode ? previousNode.value : null
  }

  function size () {
    return map.size
  }

  function set (value, next) {
    const newNode = {
      value
    }
    const nextNode = map.get(next)

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
    map.set(value, newNode)
  }

  function toString () {
    return map.toString()
  }

  function clear () {
    map.clear()
    tail.next = head
    tail.prev = head
    head.next = tail
    head.prev = tail
  }

  return {
    get,
    set,
    pop,
    next,
    previous,
    size,
    toString,
    clear
  }
}

module.exports = create

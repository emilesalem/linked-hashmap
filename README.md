# linked hashmap
exports a function to create a linked hashmap. The creator function accepts an optional array argument holding the values to start with.

## get
```
linkedHashmap.get([value], offset)
```
### Parameters
- value: the value to start from, if ommitted will start from head
- offset: the number offset to get to the value offsetted from the value given as first parameter (if positive will navigate from the value given to the next, if negative will navigate from value given to previous)

### Return value
    the value retrieved

## set
```
linkedHashmap.set(value, [next])
```
### Parameters
- value: the value to add to the map
- next: the value before which to insert the new value 

## pop
```
linkedHashmap.pop([value])
```
### Parameters
- value: the value to pop from the map
### Return value
    the popped value

## next
```
linkedHashmap.next(value)
```
### Parameters
- value: the value from which to get the next
### Return value
    the next value from the one passed as parameter


## previous
```
linkedHashmap.previous(value)
```
### Parameters
- value: the value from which to get the previous
### Return value
    the previous value from the one passed as parameter

## size
```
linkedHashmap.size()
```
### Return value
    number of elements in the linked hashmap

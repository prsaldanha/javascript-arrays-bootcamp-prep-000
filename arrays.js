var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles" ]

function addElementToBeginningOfArray(sourcearray, element)
{
  return [element, ...sourcearray]
}

function destructivelyAddElementToBeginningOfArray(sourcearray, element)
{
  var newarray = sourcearray.unshift(element);
  return newarrayl
}
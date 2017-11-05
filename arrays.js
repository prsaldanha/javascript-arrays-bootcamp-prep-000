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

function addElementToEndOfArray(sourcearray, element)
{
    return [...sourcearray, element];
}

function addElementToEndOfArray(sourcearray, element)
{
    var newarray = sourcearray.push(element)
    return newarray;
}

function accessElementInArray(sourcearray, index)
{
    return sourcearray[index];
}

function destructivelyRemoveElementFromBeginningOfArray(sourcearray)
{
  sourcearray.shift();
}

function removeElementFromBeginningOfArray(sourcearray)
{
  return sourcearray.slice(1);
}


function destructivelyRemoveElementFromEndOfArray(sourcearray)
{
    sourcearray.pop();
    return sourcearray;
}

function removeElementFromEndOfArray(sourcearray)
{
  return sourcearray.slice(0, sourcearray.length - 1)
}

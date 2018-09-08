function findMinAndRemoveSorted(array) {
  return array.shift()
}

<<<<<<< HEAD

function merge(array1, array2) {
  let sorted = []
  
  while (array1.length != 0 && array2.length != 0) {
    if (array1[0] < array2[0]) {
      sorted.push(findMinAndRemoveSorted(array1))
    } else {
      sorted.push(findMinAndRemoveSorted(array2))
    }
  }
  return sorted.concat(array1).concat(array2)
}


function mergeSort(array) {
  let midpoint = array.length/2
  let firstHalf= array.slice(0, midpoint)
  let secondHalf = array.slice(midpoint, array.length)
  
  if (array.length < 2) {
    return array
  } else {
    return merge(mergeSort(firstHalf), mergeSort(secondHalf))
  }
=======
function merge(array1, array2) {
  let sorted = []
  let currentMin
  
  while (array1.length != 0 && array2.length != 0) {
    let minArray1 = findMinAndRemoveSorted(array1)
    let minArray2 = findMinAndRemoveSorted(array2)
    if (minArray1 < minArray2) {
      currentMin = minArray1
    } else {
      currentMin = minArray2
    }
    sorted.push(currentMin)
  }
  return sorted.concat(minArray1).concat(minArray2)
>>>>>>> ce911c66867d2f5548bf2b45050c9f50165955bf
}
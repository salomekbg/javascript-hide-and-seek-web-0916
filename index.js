function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
 return document.querySelector('#nested .target')
}

function deepestChild() {
  var check = document.querySelectorAll('#grand-node')
  for (let i = 0; i < check.length; i++) {
    if (check[i].innerHTML) {
      return check[i];
    }
  }
}

function increaseRankBy(n) {
  var ranks = document.querySelectorAll('.ranked-list li')
  for(let i = 0; i < ranks.length; i++) {
    ranks[i].innerHTML = parseInt(ranks[i].innerHTML) + n
  }
}
// Define a function increaseRankBy(n) that increases the ranks in all of the .ranked-lists by n. (You might need to make use of parseInt()

/*
  Prompt: http://www.codewars.com/kata/linked-lists-get-nth-node
*/

function Node(data) {
  this.data = data;
  this.next = null;
}

function getNth(node, index) {
  let counter = 0;
  while (node) {
    if (counter === index) {
      return node;
    }
    counter++;
    node = node.next;
  }

  throw 'Cannot find index';
}

/*
Clever solution by other user
*/
// function getNth(node, index) {
//   if (!node) throw new Error('Invalid node at ' + index);
  
//   return (index === 0) ? node : getNth(node.next, index - 1);
// }

let sample = {
  data: 0,
  next: {
    data: 1,
    next: {
      data: 2,
      next: {
        data: 3,
        next: {
          data: 4,
          next: {
            data: 5,
            next: {
              data: 6,
              next: null
            }
          }
        }
      }
    }
  }
};

console.log(getNth(sample, 6).data);  // 6
console.log(getNth(sample, 1).data);  // 1
console.log(getNth(sample, 2).data);  // 2
console.log(getNth(sample, 0).data);  // 0
console.log(getNth(sample, 7).data);  // error


/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and l = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */

// function removeKFromList(l, k) {
//   const list = l;
//   list.tail = null;
//   let deleteNode = null;
//   while (list.head && list.head.value === k) {
//     deleteNode = list.head;
//     list.head = list.head.next;
//   }
//   let current = list.head;
//   if (current !== 0) {
//     while (current.next) {
//       if (current.next.value === k) {
//        deleteNode = current.next.next;
//         current.next = current.next.next;
//       } else {
//         current = current.next;
//       }
//     }
//   }
//   if (list.tail && list.tail.value === k) {
//     list.tail = current;
//   }
//   return l;
// }

function removeKFromList(l, k) {
  const list = l;
  function removeFromPosition(position) {
    let current = list.head;
    if (position === 0) {
      list.head = current.next;
    } else {
      let prev = null;
      let index = 0;
      while (index < position) {
        prev = current;
        current = current.next;
        index++;
      }
      prev.next = current.next;
    }
    list.length--;
  }
  function getIndexOf(value) {
    let current = list.head;
    let index = 0;
    while (current) {
      if (current.value === value) {
        return index;
      }
      current = current.next;
      index++;
    }
    return -1;
  }
  while (getIndexOf(k) >= 0) {
    removeFromPosition(getIndexOf(k));
  }
  return l;
}
module.exports = removeKFromList;

// Create a function called deleteAllNodesWithValue that removes all nodes with a specific value
// Make sure to update the size of the list as well

const DLL = require('../lib/DLL');

function deleteAllNodesWithValue(list, value) {
  let current = list.head;

  while (current) {
    if (current.data === value) {
      const prevNode = current.prev;
      const nextNode = current.next;

      if (prevNode) {
        prevNode.next = nextNode;
      } else {
        list.head = nextNode;
      }

      if (nextNode) {
        nextNode.prev = prevNode;
      } else {
        list.tail = prevNode;
      }

      list.size--;
    }

    current = current.next;
  }
}

const list = new DLL();
list.insertAtBack(1);
list.insertAtBack(2);
list.insertAtBack(3);
list.insertAtBack(2);
list.insertAtBack(5);

deleteAllNodesWithValue(list, 2);
console.log(list.print()); // 1 <-> 3 <-> 5
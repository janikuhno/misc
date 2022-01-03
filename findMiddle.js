const findMiddle = (linkedList) => {
  let fast = linkedList.head;
  let slow = linkedList.head;

  while (fast !== null) {
    fast = fast.getNextNode();
    if (fast !== null) {
      fast = fast.getNextNode();
      slow = slow.getNextNode();
    }
  }
  return slow;
};

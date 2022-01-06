/* WIP!
 * Universal Value Tree
 * Also known as a unival tree.
 * A tree in which all the values are the same.
 * Returns the amount of non-empty unival trees.
 */
function countUniValSubtrees(root) {
  let count = 0;
  if (!root) {
    return 0;
  }
  isUniValHelper(root, count);
  return count;
}

function isUniValHelper(node, count) {
  if (node.left === null && node.right === null) {
    count++;
    return true;
  }
  let isUniVal = true;
  if (node.left !== null) {
    isUniVal =
      isUniValHelper(node.left) && isUniVal && node.left.val === node.val;
  }
  if (node.left !== null) {
    isUniVal =
      isUniValHelper(node.right) && isUniVal && node.right.val === node.val;
  }
  if (!isUniVal) {
    return false;
  }
  count++;
  return true;
}

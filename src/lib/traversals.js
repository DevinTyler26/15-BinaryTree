'use strict';

const preOrderTraversal = (rootNode, callback) => {
  if (!rootNode) return undefined;
  callback(rootNode.value);
  preOrderTraversal(rootNode.left, callback);
  preOrderTraversal(rootNode.right, callback);
  return undefined;
};

const postOrderTraversal = (rootNode, callback) => {
  if (!rootNode) return undefined;
  preOrderTraversal(rootNode.left, callback);
  preOrderTraversal(rootNode.right, callback);
  callback(rootNode.value);
  return undefined;
};

const inLineTraveral = (rootNode, callback) => {
  if (!rootNode) return undefined;
  preOrderTraversal(rootNode.left, callback);
  callback(rootNode.value);
  preOrderTraversal(rootNode.right, callback);
  return undefined;
};

export { preOrderTraversal, postOrderTraversal, inLineTraveral };

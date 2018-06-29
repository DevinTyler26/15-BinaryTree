'use strict';

import binaryTree from '../model/binary-tree';
import { preOderTraversal, postOrderTraversal, inLineTraveral } from '../lib/traversals';

describe('Pre-Order' () => {
  test('Expect a string of visted nodes as  ', () => {
    let str = '';
    preOderTraversal(binaryTree.root, (nodeValue) => {
      str =+ `${nodeValue}, `;
    });
    expect(str.trim()).toEqual('1, 2, 6, 7, 8, 9, 3, 4, 5,');
  });
});

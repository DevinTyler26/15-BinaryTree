'use strict';

import binaryTree from '../model/binary-tree';
import { preOrderTraversal, postOrderTraversal, inLineTraveral } from '../lib/traversals';

describe('Pre-Order', () => {
  test('Expect a string of visited nodes as  ', () => {
    let str = '';
    preOrderTraversal(binaryTree.root, (nodeValue) => {
      str += `${nodeValue}, `;
    });
    expect(str.trim()).toEqual('1, 2, 6, 7, 8, 9, 3, 4, 5,');
  });
});

describe('Post-Order', () => {
  test('Expect a string of visited nodes as  ', () => {
    let str = '';
    postOrderTraversal(binaryTree.root, (nodeValue) => {
      str += `${nodeValue}, `;
    });
    expect(str.trim()).toEqual('2, 6, 7, 8, 9, 3, 4, 5, 1,');
  });
});

describe('inLine-Order', () => {
  test('Expect a string of visited nodes as  ', () => {
    let str = '';
    inLineTraveral(binaryTree.root, (nodeValue) => {
      str += `${nodeValue}, `;
    });
    expect(str.trim()).toEqual('2, 6, 7, 8, 9, 1, 3, 4, 5,');
  });
});

'use strict';

import binaryTree from '../model/binary-tree';
import { preOderTraversal, postOrderTraversal, inLineTraveral } from '../lib/traversals';

describe('Pre-Order', () => {
  test('Expect a string of visited nodes as  ', () => {
    let str = '';
    preOderTraversal(binaryTree.root, (nodeValue) => {
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
    expect(str.trim()).toEqual('1, 2, 6, 7, 8, 9, 3, 4, 5,');
  });
});

describe('inLine-Order', () => {
  test('Expect a string of visited nodes as  ', () => {
    let str = '';
    inLineTraveral(binaryTree.root, (nodeValue) => {
      str += `${nodeValue}, `;
    });
    expect(str.trim()).toEqual('1, 2, 6, 7, 8, 9, 3, 4, 5,');
  });
});

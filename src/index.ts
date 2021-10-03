import {BinarySearchTree} from './dataStructure/tree/tree';
import Commitment from './methods/promise';

// let BST = new BinarySearchTree()
// BST.insert(11)
// BST.insert(7)
// BST.insert(15)
// BST.insert(5)
// BST.insert(3)
// BST.insert(9)
// BST.insert(8)
// BST.insert(10)
// BST.insert(13)
// BST.insert(12)
// BST.insert(14)
// BST.insert(20)
// BST.insert(18)
// BST.insert(25)
// BST.insert(6)
// BST.remove(6)

let commitment = new Commitment((resolve,reject)=>{
  resolve('这次一定')
})
commitment.then(
  undefined,
  (res:any)=>{console.log(res);}
)
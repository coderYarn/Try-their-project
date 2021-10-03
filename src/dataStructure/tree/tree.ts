//public private protected static

class NodeItem {
	key: any;
	left: any;
	right: any;
	constructor(key) {
		this.key = key;
		this.left = null;
		this.right = null;
	}
}
export class BinarySearchTree {
	root: any;
	constructor() {
		this.root = null;
	}
	
	public insert(key:number){//向树中插入一个数据
		//1.根据key 创建node节点
		const newNode = new NodeItem(key);
		//2.如果原来的树是一颗空树
		if(this.root===null){
			this.root = newNode
		}else{
			this.insertNode(this.root,newNode)
		}
	}
	private insertNode(node,NewNode){
		if (NewNode.key>node.key){
			if(node.right ===null){
				node.right = NewNode;
			} else{
				this.insertNode(node.right,NewNode)
			}
		}else{
			if(node.left === null){
				node.left = NewNode;
			} else{
				this.insertNode(node.left,NewNode)
			}
		}
	}
	search(key:number){
			return this.searchNode(this.root,key)
	}
	search2(key){
		let node = this.root
		while(node!==null){
			if(node.key>key){
				node=node.left
			}else if(node.key<key){
				node=node.right
			}else{
				return true
			}
		}
		return false
	}
	searchNode(root,key){
		if (root ===null)return false
		if(key<root.key){
			return this.searchNode(root.left,key)
		}else if(key>root.key){
			return this.searchNode(root.right,key)
		}else{
			return true
		}

	}
	preOrderTraverse(){
		this.preOrderTraverseNode(this.root)
	}
	
	private preOrderTraverseNode(node){
		if (node === null)return;
		console.log(node.key);//直接访问节点
		this.preOrderTraverseNode(node.left);
		this.preOrderTraverseNode(node.right);
	}
	inOrderTranverse(){
		this.inOrderTranverseNode(this.root)
	}

	private inOrderTranverseNode(node){
		if(node === null) return ;
		this.inOrderTranverseNode(node.left)
		console.log(node.key);
		this.inOrderTranverseNode(node.right);
	}
	postOrderTranverse(){
		this.postOrderTranverseNode(this.root)
	}
	postOrderTranverseNode(node){
		if(node === null) return ;
		this.postOrderTranverseNode(node.left)
		this.postOrderTranverseNode(node.right)
		console.log(node.key);
	}
	 max(){
		let node = this.root
		while (node.right!==null){
			node = node.right
		}
		return node.key
	}
	min(){
		let node = this.root
		while (node.left!==null){
			node = node.left
		}
		return node.key
	}
	remove(key){
		let current = this.root;
		let prevous = null;
		let leftChild = true;
		while (current.key!==key) {
			prevous = current;
			if(current.key>key){
				leftChild = true
				current= current.left
			}else if(current.key<key){
				leftChild = false
				current= current.right
			}
			if(current===null) return false;
		}
		//找到节点
		//情况1:删除的节点是叶子节点(没有子节点)
		if (current.right===null&&current.left===null) {
			if(current===this.root){
				this.root = null;
			}
			else if(leftChild){
				prevous.left = null
			}else{
				prevous.right = null;
			}
				//情况2:删除的节点只有一个子节点
		}else if(current.right===null){//只有左子节点
			if(current==this.root){
				this.root ==current.left
			}else if(leftChild){
				prevous.left = current.left
			}else{
				prevous.right = current.left
			}
		}else if(current.left===null){//只有右子节点
			if(current==this.root){
				this.root ==current.left
			}else if(leftChild){
				prevous.right = current.right
			}else{
				prevous.left = current.right
			}
		}
		return true;
	}
}


class TreeNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
let root=new TreeNode(3);
root.left=new TreeNode(9);
root.right=new TreeNode(20);
root.right.left=new TreeNode(15);
root.right.right=new TreeNode(7);

function minDepth(root) {
    if (root == null) {  
        return 0;
    }
    let leftSide = minDepth(root.left);
    let rightSide = minDepth(root.right);

    if (root.left == null || root.right == null) {
        return Math.max(leftSide, rightSide) + 1;
    }

    return Math.min(leftSide, rightSide) + 1;
    
}
let result=minDepth(root);
console.log("Minimum depth of tree is ",result);
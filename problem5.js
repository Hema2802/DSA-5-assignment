
// in order traversal
class TreeNode{
    constructor(data){
        this.data=data;
        this.left=null;
        this.right=null;
    }
}
let root=new TreeNode(1);
root.left=new TreeNode(null);
root.right=new TreeNode(2);
root.right.left=new TreeNode(3);

function inOrder(root){
    if(root==null){
        return ;
    }
   
    inOrder(root.left);
    console.log(root.data);
    inOrder(root.right);
    
}
inOrder(root);


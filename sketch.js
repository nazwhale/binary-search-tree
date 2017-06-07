var tree;

function setup() {
  noCanvas();
  tree = new Tree();
  tree.addValue(5);
  tree.addValue(3);
  tree.addValue(7);
  tree.addValue(13);
  tree.addValue(8);
  tree.addValue(10);
  console.log(tree);
  tree.traverse();
}

class TreeView {
  constructor(rootNode, childNodesMin, childNodesMax, depth) {
    this.numberRootNode = rootNode
    this.numberChildNodes = getRandomChild(childNodesMin, childNodesMax)
    this.depth = depth
    this.nodes = []
  }

  init() {
    let currentDepth = 0
    for (let i = 0;i <= this.numberRootNode;i++) {
      this.nodes = this.nodes.push(this.makeNode(i, currentDepth))
    }
    console.log(this.nodes)
  }

  makeNode(index, currentDepth) {
    let nodes = []
    let children = []
    if (currentDepth < this.depth) {
      children = this.makeNode(index, currentDepth - 1)
    }
    for (let i = 0;i < this.numberChildNodes;i++) {
      nodes.push(this.setNode(currentDepth, index))
    }
    return setNode(currentDepth, index, children)
  }


}

const tree = new TreeView(4,2,5,3)
console.log(tree)
tree.init()
console.log(tree.nodes)

function setNode(parentId, id, string, childrenNode = []) {
  return {
    parentId,
    id,
    text: (id > 0 ? `item ` : `root node `) + id,
    childrenNode
  }
}

function getRandomChild(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// const rootNode = 4
// const childNodesMin = 2
// const childNodesMax = 5
// const depth = 3
//
// for (let i = 0;i <= rootNode;i++) {
//   makeNode()
// }
//
// console.log(getRandomChild(2, 5))
//
// // function mekeChildNodes(max, min) {
// //
// //   return
// // }
//
// function makeNode() {
//   return {
//     parent: id,
//     id: number,
//     text: string,
//     childrenNode: makeNode()
//   }
// }
//
// const node = {
//   parent: number
//   id: number,
//   text: string,
//   childrenNode: []
// }
//
// function getRandomChild(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
// }

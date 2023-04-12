import { Node, NodeId } from 'src/types/node';

const getChildrensId = (nodeId: NodeId, nodes: Node) => {
  const result: NodeId[] = [];

  nodes[nodeId].children.forEach((childrenId) => {
    if (nodes[childrenId].children.length) {
      const childrensId = getChildrensId(childrenId, nodes);
      result.push(...childrensId);
    }

    result.push(childrenId);
  });

  return result;
};

export default getChildrensId;

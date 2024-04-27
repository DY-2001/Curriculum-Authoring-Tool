import { v4 as uuidv4 } from "uuid";

const useTraverseTree = () => {
  function insertNode(tree, topicName) {
    if (tree.subTopics.length === 0) {
      tree.subTopics.push({
        id: uuidv4(),
        topicName,
        topicHierarchy: `${parseInt(tree.topicHierarchy) + 1}`,
        subTopics: [],
      });
      return;
    }

    let prevTree = tree;
    while (tree.subTopics.length !== 0) {
      tree = tree.subTopics[tree.subTopics.length - 1];
      if (tree.subTopics.length === 0) break;
      prevTree = tree;
    }

    prevTree.subTopics.push({
      id: uuidv4(),
      topicName,
      topicHierarchy: `${parseInt(prevTree.topicHierarchy) + 1}`,
      subTopics: [],
    });
  }

  return {
    insertNode,
  };
};

export default useTraverseTree;

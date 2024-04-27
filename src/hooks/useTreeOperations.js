import { v4 as uuidv4 } from "uuid";

const useTreeOperations = () => {
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

  function deleteNode(tree, id) {
    if (tree.subTopics.length === 0) return;

    for (let i = 0; i < tree.subTopics.length; i++) {
      if (tree.subTopics[i].id === id) {
        tree.subTopics.splice(i, 1);
        return;
      }
      deleteNode(tree.subTopics[i], id);
    }
  }

  return {
    insertNode,
    deleteNode,
  };
};

export default useTreeOperations;

import { v4 as uuidv4 } from "uuid";

const useTreeOperations = () => {
  function insertNode(tree, treeData, topicName) {
    if (tree.subTopics.length === 0) {
      tree.subTopics.push({
        id: uuidv4(),
        topicName,
        topicHierarchy: `${parseInt(tree.topicHierarchy) + 1}`,
        isHidden: false,
        subTopics: [],
      });
      return treeData;
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
      isHidden: false,
      subTopics: [],
    });
    return treeData;
  }

  function deleteNode(tree, subTree, id) {
    for (let i = 0; i < subTree.subTopics.length; i++) {
      if (subTree.subTopics[i].id === id) {
        subTree.subTopics.splice(i, 1);
        return tree;
      } else {
        let newSubTree = subTree.subTopics[i];
        for (let j = 0; j < newSubTree.subTopics.length; j++) {
          if (newSubTree.subTopics[j].id === id) {
            newSubTree.subTopics.splice(j, 1);
            return tree;
          } else {
            let newSubSubTree = newSubTree.subTopics[j];
            for (let k = 0; k < newSubSubTree.subTopics.length; k++) {
              if (newSubSubTree.subTopics[k].id === id) {
                newSubSubTree.subTopics.splice(k, 1);
                return tree;
              }
            }
          }
        }
      }
    }
  }

  function indentNode(tree, id, hierarchy) {
    if (hierarchy === "3") return tree;
    for (let i = 0; i < tree.subTopics.length; i++) {
      if (tree.subTopics[i].id === id) {
        tree.subTopics[i].isHidden = true;
        tree.subTopics[i].subTopics.unshift({
          id: uuidv4(),
          topicName: tree.subTopics[i].topicName,
          topicHierarchy: "2",
          isHidden: false,
          subTopics: [],
        });
        return tree;
      } else {
        let newTree = tree.subTopics[i];
        for (let j = 0; j < newTree.subTopics.length; j++) {
          if (newTree.subTopics[j].id === id) {
            newTree.subTopics[j].isHidden = true;
            newTree.subTopics[j].subTopics.unshift({
              id: uuidv4(),
              topicName: newTree.subTopics[j].topicName,
              topicHierarchy: "3",
              isHidden: false,
              subTopics: [],
            });
            return tree;
          }
        }
      }
    }
  }

  return {
    insertNode,
    deleteNode,
    indentNode,
  };
};

export default useTreeOperations;

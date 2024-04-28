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
    if (hierarchy === "3" || tree.subTopics[0].id === id) return tree;
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
        tree.subTopics[i - 1].subTopics = [
          ...tree.subTopics[i - 1].subTopics,
          ...tree.subTopics[i].subTopics,
        ];
        let treee = deleteNode(tree, tree, tree.subTopics[i].id);
        return treee;
      } else {
        let newTree = tree.subTopics[i];
        if (newTree.subTopics.length === 0) continue;
        if (newTree.subTopics[0].id === id) return tree;
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
            newTree.subTopics[j - 1].subTopics = [
              ...newTree.subTopics[j - 1].subTopics,
              ...newTree.subTopics[j].subTopics,
            ];
            let treee = deleteNode(tree, tree, newTree.subTopics[j].id);
            return treee;
          }
        }
      }
    }
  }

  function outdentNode(tree, id, hierarchy) {
    if (hierarchy === "1") return tree;
    for (let i = 0; i < tree.subTopics.length; i++) {
      let newTree = tree.subTopics[i];
      for (let j = 0; j < newTree.subTopics.length; j++) {
        if (newTree.subTopics[j].id === id) {
          if (hierarchy === "2" && newTree.subTopics[j].subTopics.length > 0)
            return tree;
          newTree.subTopics[j].isHidden = true;
          tree.subTopics.splice(i + 1, 0, {
            id: uuidv4(),
            topicName: newTree.subTopics[j].topicName,
            topicHierarchy: "1",
            isHidden: false,
            subTopics: [],
          });
          return tree;
        } else {
          let newSubTree = newTree.subTopics[j];
          for (let k = 0; k < newSubTree.subTopics.length; k++) {
            if (newSubTree.subTopics[k].id === id) {
              if (
                hierarchy === "3" &&
                newSubTree.subTopics[k].subTopics.length > 0
              )
                return tree;
              newSubTree.subTopics[k].isHidden = true;
              newTree.subTopics.splice(j + 1, 0, {
                id: uuidv4(),
                topicName: newSubTree.subTopics[k].topicName,
                topicHierarchy: "2",
                isHidden: false,
                subTopics: [],
              });
              return tree;
            }
          }
        }
      }
    }
  }

  function editNameNode(tree, id, newName) {
    for (let i = 0; i < tree.subTopics.length; i++) {
      if (tree.subTopics[i].id === id) {
        tree.subTopics[i].topicName = newName;
        return tree;
      } else {
        let newTree = tree.subTopics[i];
        for (let j = 0; j < newTree.subTopics.length; j++) {
          if (newTree.subTopics[j].id === id) {
            newTree.subTopics[j].topicName = newName;
            return tree;
          } else {
            let newSubTree = newTree.subTopics[j];
            for (let k = 0; k < newSubTree.subTopics.length; k++) {
              if (newSubTree.subTopics[k].id === id) {
                newSubTree.subTopics[k].topicName = newName;
                return tree;
              }
            }
          }
        }
      }
    }
  }

  function handleDragAndDrop(tree, dragItemId, dropItemId) {
    
  }

  return {
    insertNode,
    deleteNode,
    indentNode,
    outdentNode,
    editNameNode,
    handleDragAndDrop,
  };
};

export default useTreeOperations;

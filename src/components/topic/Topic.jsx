import ParticularTopic from "../particularTopic/ParticularTopic";

const Topic = ({ subTopicsData, dragItem, setDragItem }) => {
  if (subTopicsData.topicHierarchy === "3") {
    return (
      <ParticularTopic
        dragItem={dragItem}
        setDragItem={setDragItem}
        subTopicsData={subTopicsData}
      />
    );
  } else if (
    subTopicsData.topicHierarchy === "1" ||
    subTopicsData.topicHierarchy === "2"
  ) {
    return (
      <>
        <ParticularTopic
          dragItem={dragItem}
          setDragItem={setDragItem}
          subTopicsData={subTopicsData}
        />
        {subTopicsData.subTopics.map((subTopicsData) => (
          <Topic key={subTopicsData.id} subTopicsData={subTopicsData} />
        ))}
      </>
    );
  } else {
    return (
      <>
        {subTopicsData.subTopics.map((subTopicsData) => (
          <Topic key={subTopicsData.id} subTopicsData={subTopicsData} />
        ))}
      </>
    );
  }
};

export default Topic;

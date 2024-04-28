import ParticularTopic from "../particularTopic/ParticularTopic";

const Topic = ({ subTopicsData, dragItemId, setDragItemId }) => {
  if (subTopicsData.topicHierarchy === "3") {
    return (
      <ParticularTopic
        dragItemId={dragItemId}
        setDragItemId={setDragItemId}
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
          dragItemId={dragItemId}
          setDragItemId={setDragItemId}
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

import ParticularTopic from "../particularTopic/ParticularTopic";

const Topic = ({ topicsData }) => {
  if (topicsData.topicHierarchy === '3') {
    return <ParticularTopic topicName={topicsData.topicName} />;
  } else if (
    topicsData.topicHierarchy === '1' ||
    topicsData.topicHierarchy === '2'
  ) {
    return (
      <>
        <ParticularTopic topicName={topicsData.topicName} />
        {topicsData.subTopics.map((topicsData) => (
          <Topic key={topicsData.id} topicsData={topicsData} />
        ))}
      </>
    );
  } else {
    return (
      <>
        {topicsData.subTopics.map((topicsData) => (
          <Topic key={topicsData.id} topicsData={topicsData} />
        ))}
      </>
    );
  }
};

export default Topic;

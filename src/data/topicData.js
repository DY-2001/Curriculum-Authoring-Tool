const topics = {
  id: "1",
  topicName: "mathematics",
  topicHierarchy: "0",
  subTopics: [
    {
      id: "2",
      topicName: "number",
      topicHierarchy: "1",
      subTopics: [
        {
          id: "3",
          topicName: "natural numbers",
          topicHierarchy: "2",
          subTopics: [
            {
              id: "4",
              topicName: "counting numbers",
              topicHierarchy: "3",
              subTopics: [],
            },
            {
              id: "5",
              topicName: "positive numbers",
              topicHierarchy: "3",
              subTopics: [],
            },
          ],
        },
        {
          id: "6",
          topicName: "whole numbers",
          topicHierarchy: "2",
          subTopics: [],
        },
      ],
    },
    {
      id: "7",
      topicName: "algebra",
      topicHierarchy: "1",
      subTopics: [
        {
          id: "8",
          topicName: "linear algebra",
          topicHierarchy: "2",
          subTopics: [],
        },
        {
          id: "9",
          topicName: "quadratic algebra",
          topicHierarchy: "2",
          subTopics: [
            {
              id: "10",
              topicName: "quadratic equations",
              topicHierarchy: "3",
              subTopics: [],
            },
            {
              id: "11",
              topicName: "quadratic functions",
              topicHierarchy: "3",
              subTopics: [],
            },
          ],
        },
      ],
    },
    {
      id: "12",
      topicName: "geometry",
      topicHierarchy: "1",
      subTopics: [
        {
          id: "13",
          topicName: "plane geometry",
          topicHierarchy: "2",
          subTopics: [],
        },
        {
          id: "14",
          topicName: "solid geometry",
          topicHierarchy: "2",
          subTopics: [],
        },
      ],
    },
  ],
};

export default topics;

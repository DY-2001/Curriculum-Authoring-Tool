import { v4 as uuidv4 } from 'uuid';

const topics = {
  id: uuidv4(),
  topicName: "Curriculum",
  topicHierarchy: "0",
  isHidden: true,
  subTopics: [
    {
      id: uuidv4(),
      topicName: "number",
      topicHierarchy: "1",
      isHidden: false,
      subTopics: [
        {
          id: uuidv4(),
          topicName: "natural numbers",
          topicHierarchy: "2",
          isHidden: false,
          subTopics: [
            {
              id: uuidv4(),
              topicName: "counting numbers",
              topicHierarchy: "3",
              isHidden: false,
              subTopics: [],
            },
            {
              id: uuidv4(),
              topicName: "positive numbers",
              topicHierarchy: "3",
              isHidden: false,
              subTopics: [],
            },
          ],
        },
        {
          id: uuidv4(),
          topicName: "whole numbers",
          topicHierarchy: "2",
          isHidden: false,
          subTopics: [],
        },
      ],
    },
    {
      id: uuidv4(),
      topicName: "algebra",
      topicHierarchy: "1",
      isHidden: false,
      subTopics: [
        {
          id: uuidv4(),
          topicName: "linear algebra",
          topicHierarchy: "2",
          isHidden: false,
          subTopics: [],
        },
        {
          id: uuidv4(),
          topicName: "quadratic algebra",
          topicHierarchy: "2",
          isHidden: false,
          subTopics: [
            {
              id: uuidv4(),
              topicName: "quadratic equations",
              topicHierarchy: "3",
              isHidden: false,
              subTopics: [],
            },
            {
              id: uuidv4(),
              topicName: "quadratic functions",
              topicHierarchy: "3",
              isHidden: false,
              subTopics: [],
            },
          ],
        },
      ],
    },
    {
      id: uuidv4(),
      topicName: "geometry",
      topicHierarchy: "1",
      isHidden: false,
      subTopics: [
        {
          id: uuidv4(),
          topicName: "plane geometry",
          topicHierarchy: "2",
          isHidden: false,
          subTopics: [],
        },
        {
          id: uuidv4(),
          topicName: "solid geometry",
          topicHierarchy: "2",
          isHidden: false,
          subTopics: [],
        },
      ],
    },
  ],
};

export default topics;

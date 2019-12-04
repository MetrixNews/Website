import React from 'react';

function TopicButton(props) {
    // Correct! There is no need to specify the key here:
    return <button className="button">{props.value}</button>
  }
  
  export default function TopicData(props) {
    const topicButton = props.topics.map((topic) =>
      // Correct! Key should be specified inside the array.
      <TopicButton key={topic.id}
                value={topic.data1} />
    );
    return (
      <ul>
        {topicButton}
      </ul>
    );
  }
  
//   ReactDOM.render(
//     <TopicLinks topicData={topicData} />,
//     document.getElementById('root')
//   );


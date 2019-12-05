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
  
  const PresentationData = [
    {id: 0, title: "Gender Equality", api:"http://134.209.163.4/articles/category/Women's%20Rights", data1: "", data2:"", topic:[]},
    {id: 1, title: "Voter Rights", api:"http://134.209.163.4/articles/category/Voter%20Rights", data1: "", data2:"", topic:[]},
    {id: 2, title: "Universal Basic Income", api:"http://134.209.163.4/articles/category/Universal%20Basic%20Income", data1: "", data2:""},
    {id: 3, title: "Trade War", api:"http://134.209.163.4/articles/category/Trade%20Wars", data1: "", data2:""},
  //   {id: 4, title: "Terrorism", api: "http://134.209.163.4/articles/category/Terrorism", data1: "", data2:""},
  //   {id: 5, title: "Taxes", api: "http://134.209.163.4/articles/category/Taxes", data1: "", data2:""},
  //   {id: 6, title: "Prison Reform", api:"http://134.209.163.4/articles/category/Prison%20Reform", data1: "", data2:""},
  //   {id: 7, title: "Pollution", api: "http://134.209.163.4/articles/category/Pollution", data1: "", data2:""},
  //   {id: 8, title: "Police Brutality", api:"http://134.209.163.4/articles/category/Police%20Brutality", data1: "", data2:""},
  //   {id: 9, title: "Opioid Crisis", api:"http://134.209.163.4/articles/category/Opioid%20Crisis", data1: "", data2:""},
  //   {id: 10, title: "Minimum Wage", api:"http://134.209.163.4/articles/category/Minimum%20Wage", data1: "", data2:""},
  //   {id: 11, title: "Military", api:"http://134.209.163.4/articles/category/Military", data1: "", data2:""},
  //   {id: 12, title: "Marijuana", api:"http://134.209.163.4/articles/category/Marijuana", data1: "", data2:""},
  //   {id: 13, title: "LGTBQ+ Rights", api:"http://134.209.163.4/articles/category/LGTBQ+%20Rights", data1: "", data2:""},
  //   {id: 14, title: "Infrastructure", api:"http://134.209.163.4/articles/category/Infrastructure", data1: "", data2:""},
  //   {id: 15, title: "Income Inequality", api:"http://134.209.163.4/articles/category/Income%20Inequality", data1: "", data2:""},
  //   {id: 16, title: "Impeachment", api:"http://134.209.163.4/articles/category/Impeachment", data1: "", data2:""},
  //   {id: 17, title: "Immigration", api:"http://134.209.163.4/articles/category/Immigration", data1: "", data2:""},
  //   {id: 18, title: "Gun Control", api:"http://134.209.163.4/articles/category/Gun%20Control%20and%20Mass%20Shootings", data1: "", data2:""},
  //   {id: 19, title: "Government Spending", api:"http://134.209.163.4/articles/category/Government%20Spending", data1: "", data2:""},
  //   {id: 20, title: "Energy", api:"http://134.209.163.4/articles/category/Energy", data1: "", data2:""},
  //   {id: 21, title: "Education", api: "http://134.209.163.4/articles/category/Education", data1: "", data2:""},
  //   {id: 22, title: "Economy", api:"http://134.209.163.4/articles/category/Economy", data1: "", data2:""},
  //   {id: 23, title: "Data Privacy", api:"http://134.209.163.4/articles/category/Data%20Privacy", data1: "", data2:""},
  //   {id: 24, title: "College Tuition", api:"http://134.209.163.4/articles/category/College%20Tuition", data1: "", data2:""},
  //   {id: 25, title: "Climate Change", api:"http://134.209.163.4/articles/category/Climate%20Change", data1: "", data2:""},
  //   {id: 26, title: "Mexico and U.S. Border", api:"http://134.209.163.4/articles/category/Border%20Security", data1: "", data2:""},
  //   {id: 27, title: "Agriculture", api:"http://134.209.163.4/articles/category/Agriculture", data1: "", data2:""},
  //   {id: 28, title: "Abortion", api:"http://134.209.163.4/articles/category/Abortion", data1: "", data2:""},
  //   {id: 29, title: "2020 Presidential Election", api:"http://134.209.163.4/articles/category/2020%20Presidental%20Election", data1: "", data2:""},
  ]
//   ReactDOM.render(
//     <TopicLinks topicData={topicData} />,
//     document.getElementById('root')
//   );


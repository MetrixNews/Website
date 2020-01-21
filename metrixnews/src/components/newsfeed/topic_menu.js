import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './newsfeed.scss';

export default class TopicMenu extends Component {

  render() {
      const topics = [
          '2020 Presidential Election',
          'Abortion',
          'Agriculture',
          'Border Security',
          'College Tuition',
          'Climate Change',
          'Data Privacy',
          'Economy',
          'Education',
          'Energy',
          'Gender Equality',
          'Government Spending',
          'Gun Control',
          'Healthcare',
          'Immigration',
          'Impeachment',
          'Income Inequality',
          'Infrastructure',
          'LGTBQ+ Rights',
          'Marijuana',
          'Military',
          'Minimum Wage',
          'Opioid Crisis',
          'Police Brutality',
          'Pollution',
          'Prison Reform',
          'Taxes',
          'Terrorism',
          'Trade Wars',
          'Universal Basic Income',
          'Voter Rights',
      ];

      const item = {
          fontSize: "8pt",
          fontWeight: "bold",
          border: "solid 2px var(--metrix-color)",
          borderRadius: "7px",
          backgroundColor: "var(--metrix-color)",
          color: "var(--bg-color)",
      }

    return (
        <div className="app">
            <div className="full hide-scroll">
                <ul className="menu">
                {topics.map((topic) => (
                <a href="" >
                    <li style={item}> 
                        <span topic={topic}>
                            {topic}
                        </span>
                    </li>
                </a>
                ))}
                </ul>
              </div> 
        </div>
    )
  }
}


        
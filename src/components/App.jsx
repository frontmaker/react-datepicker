import React, { Component } from 'react';
import moment from 'moment';
import Calendar from './Calendar';

import '../style/main.scss';

export default class App extends Component {
  render() {
    const currentTime = moment(Date.now());

    return (
      <div>
        <Calendar
          date={currentTime}
          locale="de"
        />
      </div>
    );
  }
}

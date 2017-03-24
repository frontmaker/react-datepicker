// @flow
import React from 'react';
import moment from 'moment';

import Weeks from './Weeks';

// import '../style/main.scss';

type Props = {
    date: Object,
}

type State = {
    date: Object,
    locale: string,
    selectedDate: Object
}

export default class Calendar extends React.Component {
  state: State;

  static defaultProps = {
    locale: 'en',
    date: moment(Date.now()),
  };

  prevMonth: Function;
  nextMonth: Function;
  selectDate: Function;

  constructor(props: Props) {
    super(props);

    this.state = {
      date: props.date,
			selectedDate: props.date.locale(props.locale),
      locale: props.locale,
    };

    this.prevMonth = this.prevMonth.bind(this);
    this.nextMonth = this.nextMonth.bind(this);
    this.selectDate = this.selectDate.bind(this);
  }

  prevMonth() {
    const { date } = this.props;
    date.add(-1, 'M');
    this.setState({ date });
  }

  nextMonth(): void {
    const { date } = this.props;
    date.add(1, 'M');
    this.setState({ date });
  }

  selectDate(date: Object): void {
    this.setState({ selectedDate: date });
  }

  render() {

    return (
      <div className="calendar-container">
        <div className="calendar-header">
          <div className="calendar-header__year">
            {this.state.selectedDate.format('YYYY')}
          </div>
          <div className="calendar-header__date">
            <span>{this.state.selectedDate.format('ddd')},</span>
            <span>{this.state.selectedDate.format('MMM')}</span>
            <span>{this.state.selectedDate.format('D')}</span>
          </div>
        </div>
        <div className="calendar-body">
          <div className="calendar-body__month">
            <button className="calendar-body__icon _left" onClick={this.prevMonth}>
              <i className="fa fa-angle-left">&nbsp;</i>
            </button>
            {this.state.selectedDate.format('MMMM')}
            <button className="calendar-body__icon _right" onClick={this.nextMonth}>
              <i className="fa fa-angle-right">&nbsp;</i>
            </button>
          </div>
          {this.renderWeekDays()}
          <Weeks
            select={this.selectDate}
            selectedDate={this.state.selectedDate}
            date={this.state.date}
          />
        </div>
      </div>
    );
  }

  renderWeekDays() {
		const currentDate = moment.locale(this.state.locale);

  	const weekDays = moment.weekdaysShort();

    return (
      <div className="calendar-weeks">
				{weekDays.map((day, index) => <span key={index} className="calendar-weeks__day">{day}</span>)}
      </div>
    );
  }
}

// @flow
import React from 'react';
import moment from 'moment';

import Weeks from './Weeks';

import '../style/main.scss';

type Props = {
    format: String,
    date: Date,
    locale: String,
}

type State = {
    date: Date,
    selectedDate: Date
}

export default class Calendar extends React.Component {
    state: State

    constructor(props: Props) {
        super(props)

        this.state = {
            date: moment(Date.now()),
            selectedDate: moment(Date.now()),
            locale: 'en'
        }

        this.prevMonth = this.prevMonth.bind(this);
        this.nextMonth = this.nextMonth.bind(this);
        this.selectDate = this.selectDate.bind(this);
    }

    prevMonth(): void {
        const {date} = this.props;
        date.add(-1, "M");
        this.setState({date})

    }

    nextMonth(): void {
        const {date} = this.props;
        date.add(1, "M");
        this.setState({date})
    }

    selectDate(date): void {
        this.setState({selectedDate: date})
    }

    render() {

        return(
            <div className="calendar-container">
                <div className="calendar-header">
                    <div className="calendar-header__year">{this.state.selectedDate.format("YYYY")}</div>
                    <div className="calendar-header__date">
                        <span>{this.state.selectedDate.format("ddd")},</span>
                        <span>{this.state.selectedDate.format("MMM")}</span>
                        <span>{this.state.selectedDate.format("D")}</span>
                    </div>
                </div>
                <div className="calendar-body">
                    <div className="calendar-body__month">
                        <span className="calendar-body__icon _left">
                            <i className="fa fa-angle-left" onClick={this.prevMonth}>&nbsp;</i>
                        </span>
                        {this.state.date.format("MMMM")}
                        <span className="calendar-body__icon _right">
                            <i className="fa fa-angle-right" onClick={this.nextMonth}>&nbsp;</i>
                        </span>
                    </div>
                    {this.renderWeekDays()}
                    <Weeks
                        select={this.selectDate}
                        selectedDate={this.state.selectedDate}
                        date={this.state.date}
                    />
                </div>
            </div>
        )
    }

    renderWeekDays() {
        return(
            <div className="calendar-weeks">
                <span className="calendar-weeks__day">Mon</span>
                <span className="calendar-weeks__day">Tue</span>
                <span className="calendar-weeks__day">Wed</span>
                <span className="calendar-weeks__day">Thu</span>
                <span className="calendar-weeks__day">Fri</span>
                <span className="calendar-weeks__day">Sat</span>
                <span className="calendar-weeks__day">Sun</span>
            </div>
        )
    }
}
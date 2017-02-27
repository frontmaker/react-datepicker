// @flow
import React from 'react';
import moment from 'moment';

import WeekDays from './WeekDays';

type Props = {
    format: String,
    date: Date,
    locale: String,
}

type State = {
    date: Date,
}

export default class Calendar extends React.Component {
    state: State

    constructor(props: Props) {
        super(props)

        this.state = {
            date: moment(Date.now()),
            locale: 'en'
        }

        this.prevMonth = this.prevMonth.bind(this);
        this.nextMonth = this.nextMonth.bind(this);
    }

    prevMonth(): void {
        const {date} = this.props;
        date.add(-1, "M");
        this.setState({date})
    }

    nextMonth(): void {
        const {date} = this.props;
        date.add(-1, "M");
        this.setState({date})
    }

    render() {

        return(
            <div className="calendar-container">
                <div className="calendar-header">
                    <div className="calendar-header__year">{this.props.date.format("YYYY")}</div>
                    <div className="calendar-header__date">
                        <span>{this.props.date.locale('ru').format("ddd")},</span>
                        <span>{this.props.date.format("MMM")}</span>
                        <span>{this.props.date.format("D")}</span>
                    </div>
                </div>
                <div className="calendar-body">
                    <div className="calendar-body__month">
                        <span className="calendar-body__icon _left">
                            <i className="fa fa-angle-left" onClick={this.prevMonth}>&nbsp;</i>
                        </span>
                        {this.props.date.format("MMMM")}
                        <span className="calendar-body__icon _right">
                            <i className="fa fa-angle-right" onClick={this.prevMonth}>&nbsp;</i>
                        </span>
                    </div>
                    <WeekDays />
                </div>
            </div>
        )
    }
}
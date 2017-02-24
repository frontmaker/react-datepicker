// @flow
import React from 'react';
import moment from 'moment';

type Props = {
    format: String,
    date: String,
    locale: String,
}

export default class Calendar extends React.Component {
    constructor(props: Props) {
        super(props)

        this.state = {
            date: moment(Date.now()),
            locale: 'ru'
        }
    }

    prevMonth() {
        const {date} = this.props;
        date.add(-1, "M");
        this.setState({date})
    }

    nextMonth() {
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
                        <i className="fa fa-angle-left" onClick={this.previous}>1</i>
                        {this.props.date.format("M")}
                    </div>
                </div>
            </div>
        )
    }
}
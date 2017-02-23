import React from 'react';


export default class Calendar extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            month: 'January'
        }
    }

    prevMonth() {
        const {month} = this.props;
        month.add(-1, "M");
        this.setState({month})
    }

    nextMonth() {
        const {month} = this.props;
        month.add(-1, "M");
        this.setState({month})
    }

    select() {

    }

}
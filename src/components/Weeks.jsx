import React from 'react';


const Week = (props) => {

    let days = [],
        date = props.date,
        month = props.month;


    for (let i = 0; i < 7; i++) {
        let day = {
            name: date.format("dd").substring(0, 1),
            number: date.date(),
            isCurrentMonth: date.month() === month.month(),
            isToday: date.isSame(new Date(), "day"),
            date: date
        };
        days.push(<span className="calendar-days__day" key={day.date.toString()}>{day.number}</span>);
        date = date.clone();
        date.add(1, "d");

    }

    return <div className="calendar-days">
        {days}
    </div>
}


const Weeks = (props) => {

    let weeks = [],
        done = false,
        date = props.date.clone().startOf("month").weekday(0),
        monthIndex = date.month(),
        count = 0;

    for (let i = 0; i < 5; i++) {

        if (monthIndex === date.month()) {
            weeks.push(<Week key={date.toString()} date={date.clone()} month={props.date} />);
            date.add(1, "w");
            monthIndex = date.month();
        }
    }


    // while (!done) {
    //
    //     weeks.push(<Week key={date.toString()} date={date.clone()} month={props.date} />);
    //     date.add(1, "w");
    //     done = count++ > 2 && monthIndex !== date.month();
    //     monthIndex = date.month();
    // }


    return(
        <div>
            {weeks}
        </div>
    )
}

export default Weeks;
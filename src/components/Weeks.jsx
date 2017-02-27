import React from 'react';


const Week = (props) => {

    var days = [],
        date = props.date,
        month = props.month;


    for (var i = 0; i < 7; i++) {
        var day = {
            name: date.format("dd").substring(0, 1),
            number: date.date(),
            isCurrentMonth: date.month() === month.month(),
            isToday: date.isSame(new Date(), "day"),
            date: date
        };
        days.push(<span key={day.date.toString()}>{day.number}</span>);
        date = date.clone();
        date.add(1, "d");

    }

    return <div className="week">
        {days}
    </div>
}


const Weeks = (props) => {

    var weeks = [],
        done = false,
        date = props.date.clone().startOf("month").add("w" - 1).day("Sunday"),
        monthIndex = date.month(),
        count = 0;

    while (!done) {

        weeks.push(<Week key={date.toString()} date={date.clone()} month={props.date} />);
        date.add(1, "w");
        done = count++ > 2 && monthIndex !== date.month();
        monthIndex = date.month();
    }


    return(
        <div>
            {weeks}
        </div>
    )
}

export default Weeks;
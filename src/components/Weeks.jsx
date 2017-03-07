import React from 'react';


const Day = (props) => {
    return (
        <div
        className={`calendar-days__day ${props.isToday ? '_today' : ''}`}
        onClick={() => console.log(props.date.toString())}>
            <span>
                {
                    props.isCurrentMonth ? props.date.date() : ''
            }
            </span>
        </div>)
}



const Week = (props) => {

    let days = [],
        date = props.date,
        month = props.month;

    for (let i = 0; i < 7; i++) {

        days.push(
            <Day
                isToday={date.isSame(props.date)}
                isSelected={date.isSame(props.date)}
                isCurrentMonth={date.month() === month.month()}
                select={props.select}
                key={date.toString()}
                date={date}
            />
        );

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


    while (!done) {

        weeks.push(<Week
            key={date.toString()}
            select={props.select}
            date={date.clone()}
            month={props.date}
        />);
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
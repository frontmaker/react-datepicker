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
            isSelected: date.isSame(props.date),
            isToday: date.isSame(new Date(), "day"),
            date: date
        };

        days.push(
            <div
            className={`calendar-days__day ${day.isToday ? '_today' : ''}`}
            key={date.toString()}
            onClick={() => console.log(day.date.toString())}
            >
                <span>
                {
                    day.isCurrentMonth ? date.date() : ''
                }
                </span>
            </div>
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
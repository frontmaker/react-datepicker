import React from 'react';
import Week from './Week';

const Weeks = (props) => {

    let weeks = [],
        done = false,
        date = props.date.clone().startOf("month").weekday(1),
        monthIndex = date.month(),
        count = 0;


    while (!done) {

        weeks.push(<Week
            key={date.toString()}
            select={props.select}
            selected={props.selectedDate}
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
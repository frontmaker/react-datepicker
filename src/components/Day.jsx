import React from 'react';

const Day = ({selected, date, select, isCurrentMonth}) => {

    let dayClass = 'calendar-days__day';

    if (selected.isSame(date, "day")) dayClass += ' _selected'

    if (date.isSame(new Date, "day")) dayClass += ' _today'

    console.log(dayClass);

    return (
        <div>
            {isCurrentMonth ?
                <div
                    className={dayClass}
                    onClick={() => select(date)}>
                    <span>{date.date()}</span>
                </div> :

                <div className="calendar-days__empty"></div>
            }
        </div>
    )
}

export default Day;
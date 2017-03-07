import React from 'react';

const Day = ({selected, date, select, isCurrentMonth}) => {
    return (
        <div>
            {isCurrentMonth ?
                <div
                    className={`calendar-days__day ${selected.isSame(date, "day") ? '_today' : ''}`}
                    onClick={() => select(date)}>
                    <span>{date.date()}</span>
                </div> :

                <div className="calendar-days__empty"></div>
            }
        </div>
    )
}

export default Day;
import React from 'react';

type Props = {
    selected: Object,
    date: Object,
    select: Function,
    isCurrentMonth: Boolean
}


const Day = ({ selected, date, select, isCurrentMonth } = Props) => {
  let dayClass = 'calendar-days__day';

  if (selected.isSame(date, 'day')) dayClass += ' _selected';

  if (date.isSame(new Date(), 'day')) dayClass += ' _today';

  return (
    <div>
      {isCurrentMonth ?
        <button
          className={dayClass}
          onClick={() => select(date)}
        >
          <span>{date.date()}</span>
        </button> :

        <div className="calendar-days__empty" />
            }
    </div>
  );
};

export default Day;

import React from 'react';
import Day from './Day';

type Props = {
    date: Object,
    month: Object,
    selected: Object,
    select: Function
}


const Week = (props: Props) => {
  const days = [];
  const month = props.month;
  let date = props.date;

  for (let i = 0; i < 7; i++) {
    days.push(
      <Day
        isToday={date.isSame(new Date(), 'day')}
        selected={props.selected}
        isCurrentMonth={date.month() === month.month()}
        select={props.select}
        key={date.toString()}
        date={date}
      />,
        );

    date = date.clone();
    date.add(1, 'd');
  }

  return (<div className="calendar-days">
    {days}
  </div>);
};


export default Week;

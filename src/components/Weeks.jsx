import React from 'react';
import Week  from './Week';

type Props = {
    date: Object,
    select: Function,
    selectedDate: Object
}


const Weeks = (props: Props) => {
  let done = false;
  let count = 0;
  const date = props.date.clone().startOf('month').weekday(1);
  let monthIndex = date.month();
  const weeks = [];


  while (!done) {
    weeks.push(<Week
      key={date.toString()}
      select={props.select}
      selected={props.selectedDate}
      date={date.clone()}
      month={props.date}
    />);

    date.add(1, 'w');
    done = count++ > 2 && monthIndex !== date.month();
    monthIndex = date.month();
  }


  return (
    <div>
      {weeks}
    </div>
  );
};

export default Weeks;

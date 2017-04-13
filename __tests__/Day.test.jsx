import React from 'react';
import moment from 'moment';
import Day from '../src/components/Day';
import { shallow, mount } from 'enzyme';

let props = {
	date: moment(Date.now()),
	selected: moment(Date.now()).add(7, 'days'),
	select: () => console.log('select'),
	isToday: false,
	isCurrentMonth: false,
	key: 123
}


describe('<Day />', () => {

	let wrapper = mount(
		<Day {...props}/>
	);

	const emptyDaysBlock = <div className="calendar-days__empty" />;

	it('render "calendar-days__empty" block if isCurrentMonth=false', () => {
		expect(wrapper.props().isCurrentMonth).toEqual(false)
		expect(wrapper.contains(emptyDaysBlock)).toEqual(true)
	})


	it('do not render "calendar-days__empty" block if isCurrentMonth=true', () => {

		props.isCurrentMonth = true;
		wrapper = mount(<Day {...props}/>)

		expect(wrapper.props().isCurrentMonth).toEqual(true)
		expect(wrapper.contains(emptyDaysBlock)).toEqual(false)
	})


	it('should simulate click event', () => {
		const spy = jest.fn();

		props.select = spy;
		wrapper = mount(<Day {...props}/>)

		wrapper.find('button').simulate('click');

		expect(spy).toHaveBeenCalled();
	})


})

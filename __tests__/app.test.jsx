import React from 'react';
import renderer from 'react-test-renderer';
import Calendar from '../src/components/Calendar';


describe('Calendar', () => {
    it('render component without crashing', () => {
        const component = renderer.create(<Calendar />);
        const json = component.toJSON();
        expect(json).toMatchSnapshot();
    })
})
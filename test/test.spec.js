import React from 'react';
import App from '../src/App';

describe('App', () => {
  const wrapper = shallow(<App />);

  it('should exist', () => {
    expect(wrapper).to.exist;
    expect(wrapper.find('button').at(0).text()).to.equal('Lime-Primary');
  });

  it('renders correct Pallet buttons', () => {
    expect(wrapper.find('button').at(0).text()).to.equal('Lime-Primary');
    expect(wrapper.find('button').at(1).text()).to.equal('Peach-Primary');
    expect(wrapper.find('button').at(2).text()).to.equal('Slate-Primary');
    expect(wrapper.find('button').at(3).text()).to.equal('Lime-Dark');
    expect(wrapper.find('button').at(4).text()).to.equal('Dark-Peach');
    expect(wrapper.find('button').at(5).text()).to.equal('Slate-Lite');
  });

  it('generate correct states when clicking on Pallet buttons', () => {
    wrapper.find('button').at(0).simulate('click');
    expect(wrapper.state('colorChosen')).to.equal('#9CFF93');
    expect(wrapper.state('btnTextColor')).to.equal('#000');
    wrapper.find('button').at(2).simulate('click');
    expect(wrapper.state('colorChosen')).to.equal('#262630');
    expect(wrapper.state('btnTextColor')).to.equal('#FFF');
    wrapper.find('button').at(4).simulate('click');
    expect(wrapper.state('colorChosen')).to.equal('#FFD366');
    expect(wrapper.state('btnTextColor')).to.equal('#000');
  });
})

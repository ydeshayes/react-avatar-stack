/* global expect*/

import sinon from 'sinon';
import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';

import AvatarStack from '../src';

describe('<AvatarStack />', () => {
  it('Render AvatarStack with one child', () => {
    const wrapper = shallow(<AvatarStack>
          <div></div>
        </AvatarStack>);

    expect(wrapper.html()).to.be.a('string');
  });

  it('Render AvatarStack with less than maxNumber child', () => {
    const wrapper = mount(<AvatarStack>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </AvatarStack>);

    expect(wrapper.html()).to.be.a('string');
    expect(wrapper.text()).to.equal('');
  });

  it('Render AvatarStack with the "more" component', () => {
    const wrapper = mount(<AvatarStack>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </AvatarStack>);

    const divs = wrapper.find('div');

    expect(wrapper.html()).to.be.a('string');
    expect(divs).to.have.length(23);
    expect(wrapper.text()).to.equal('+1');
    expect(divs.last().text()).to.equal('+1');
  });

  it('Render AvatarStack with the "more" component and custom maxNumber', () => {
    const wrapper = mount(<AvatarStack
        maxAvatarNumber={4}
      >
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </AvatarStack>);

    const divs = wrapper.find('div');

    expect(wrapper.html()).to.be.a('string');
    expect(wrapper.text()).to.equal('+6');
    expect(divs.last().text()).to.equal('+6');
  });

  it('Render AvatarStack and click on the "more" component', () => {
    const onClick = sinon.spy();

    const wrapper = mount(<AvatarStack
      onNumberLeftClick={onClick}
      >
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </AvatarStack>);

    const divs = wrapper.find('div');

    divs.last().simulate('click');

    expect(onClick.called).to.equal(true);
  });
});

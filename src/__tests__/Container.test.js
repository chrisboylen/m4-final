/* eslint-disable */
import Vue from 'vue';
/* eslint-enable */
import { mount } from '@vue/test-utils';
import Container from '../components/Container.vue';

global.fetch = require("node-fetch");

describe('Container', () => {
  it('should match snapshot', () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve({one: true})
    }))
    const wrapper = mount(Container);
    expect(wrapper).toMatchSnapshot();
  });
});
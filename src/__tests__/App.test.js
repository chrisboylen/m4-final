/* eslint-disable */
import Vue from 'vue';
/* eslint-enable */
import { mount } from '@vue/test-utils';
import App from '../components/App.vue';

describe('App', () => {
  let wrapper;
  
  beforeEach(() => {
    wrapper = mount(App);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });
});
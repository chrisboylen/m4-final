import Vue from 'vue';
import { mount } from '@vue/test-utils';
import Card from '../components/Card.vue';

describe('Card', () => {
  let mockCard;
  let wrapper;

  beforeEach(() => {
    mockCard = {
      "id": 142035,
      "technique": "Drypoint and aquatint",
      "imagepermissionlevel": 0,
      "primaryimageurl": "https://nrs.harvard.edu/urn-3:HUAM:INV166572_dynmc",
      "people": [{
        "alphasort": "Hewitt, Charles",
        "birthplace": "Lewiston, Maine",
        "personid": 22803,
        "prefix": null,
        "name": "Charles Hewitt",
        "role": "Artist",
        "gender": "unknown",
        "displayorder": 1,
        "displaydate": "born 1946",
        "culture": "American",
        "displayname": "Charles Hewitt",
        "deathplace": null
      }]
    }
    wrapper = mount(Card,{
      propsData: {
        card: mockCard
      }
    });
  });
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
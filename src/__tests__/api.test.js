import { getMuseumData } from '../Utilities/api';

describe('API', () => {
  describe('getMuseumData', () => {
    let mockData;

    beforeEach(() => {
      mockData = [{
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
      }];
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        json: () => Promise.resolve(mockData)
      }))
    });

    it('should be invoked with correct params', async () => {
      const key = process.env.VUE_APP_HAM_KEY;
      const url = `https://api.harvardartmuseums.org/object?classification=Prints&q=totalpageviews:1&fields=primaryimageurl,people,technique&apikey=${key}`;
      
      await getMuseumData();

      expect(window.fetch).toHaveBeenCalledWith(url);
    });
  });
});
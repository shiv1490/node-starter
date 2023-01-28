import getPrice from './services';
import nock from 'nock';
import { Response } from './types';

describe('service', () => {
  test('should get response from service', async () => {
    nock('https://www.boredapi.com/api').get('/activity').reply(200, {
      activity: 'Create and follow a savings plan',
      type: 'busywork',
      participants: 1,
      price: 0,
      link: '',
      key: '9366464',
      accessibility: 0.2,
    });

    const res = (await getPrice()) as Response;
    expect(res).not.toBeUndefined();
    expect(res.activity).toEqual('Create and follow a savings plan');
    expect(res.type).toEqual('busywork');
  });

  test('should catch error from service', async () => {
    nock('https://www.boredapi.com/api')
      .get('/activity')
      .reply(500, 'Error occurred');

    const res = await getPrice();
    expect(res).not.toBeUndefined();
    expect(res).toEqual({ msg: 'Error occurred' });
  });
});

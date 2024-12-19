// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import AroTestSDK from 'aro-test-sdk';
import { Response } from 'node-fetch';

const client = new AroTestSDK({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource students', () => {
  test('retrieve', async () => {
    const responsePromise = client.students.retrieve(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.students.retrieve(0, { path: '/_stainless_unknown_path' })).rejects.toThrow(
      AroTestSDK.NotFoundError,
    );
  });

  test('list', async () => {
    const responsePromise = client.students.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.students.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      AroTestSDK.NotFoundError,
    );
  });
});

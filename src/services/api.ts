import axios, { AxiosRequestConfig } from 'axios';
import { MethodType, METHOD_TYPES } from 'commons/constants/common';
import process from 'process';
import qs from 'querystringify';
import { isEmpty } from 'lodash';

// export declare interface APIType {
//   [x: string]: (payload: any) => void;
// }

const Create = (baseURL = process.env.NEXT_PUBLIC_API_URL) => {
  const OAUTH_URL = 'https://accounts.spotify.com/api/token';

  const api = axios.create({
    // base URL is read from the "constructor"
    baseURL,
    // here are some default hesaders
    headers: {
      'Cache-Control': 'no-cache',
    },
    // 10 second timeout...
    // timeout: 10000,
  });

  const apiAuth = axios.create({
    baseURL,
    headers: {
      'Cache-Control': 'no-cache',
      Authorization: 'Basic ' + Buffer.from(process.env.NEXT_PUBLIC_CLIENT_ID + ':' + process.env.NEXT_PUBLIC_CLIENT_SECRET).toString('base64'),
      grant_type: 'client_credentials',
      json: true,
    },
    // 10 second timeout...
    timeout: 10000,
  });

  api.interceptors.request.use((config) => {
    // Add a custom header to the request
    if (config.headers) {
      config.headers['X-Custom-Header'] = 'foobar';
    }
    return config;
  });

  api.interceptors.response.use(
    (response) => {
      // Do something with the response data
      return response.data;
    },
    (error) => {
      // Handle the error
      return Promise.reject(error);
    }
  );

  const GET = (payload: any) =>
    api.get(`${payload?.path}?${qs.stringify(payload?.params)}`, {
      headers: {
        // Authorization: 'JWT ' + CookiesService.getClientCookies('token'),
      },
    });

  const POST = (payload: any) =>
    api.post(`${payload?.path}`, payload?.params, {
      headers: {
        // Authorization: 'JWT ' + CookiesService.getClientCookies('token'),
      },
    });

  const PUT = (payload: any) =>
    api.put(payload?.path, payload?.params, {
      headers: {
        // Authorization: 'JWT ' + CookiesService.getClientCookies('token'),
      },
    });

  const DELETE = (payload: any) =>
    api.delete(`${payload?.path}?${qs.stringify(payload?.params)}`, {
      headers: {
        // Authorization: 'JWT ' + CookiesService.getClientCookies('token'),
      },
    });

  const getHeader = () => {
    return {};
  };

  const callApi = (method: MethodType, url: string, payload: any, moreConfig: AxiosRequestConfig<any> | undefined = {}) => {
    let mergedHeaders;
    const { headers = {}, ...restConfig } = moreConfig;
    const defaultHeaders = getHeader();
    if (!isEmpty(headers)) {
      mergedHeaders = { ...defaultHeaders, ...moreConfig.headers };
    }
    const configs = { ...{ headers: mergedHeaders || defaultHeaders }, ...restConfig };
    switch (method) {
      case METHOD_TYPES.GET:
        return api.get(`${url}?${qs.stringify(payload)}`, configs);
      case METHOD_TYPES.POST:
        return api.post(url, payload, configs);
      case METHOD_TYPES.PUT:
        return api.put(url, payload, configs);
      case METHOD_TYPES.DELETE:
        return api.delete(`${url}?${qs.stringify(payload)}`, configs);
    }
  };

  const getAccessToken = (payload: any) => {
    console.log(process.env.NEXT_PUBLIC_CLIENT_ID + ':' + process.env.NEXT_PUBLIC_CLIENT_SECRET);
    return apiAuth.post(OAUTH_URL, '', {
      headers: {
        // 'Content-Type': 'application/x-www-form-urlencoded',
        'Cache-Control': 'no-cache',
        Authorization: 'Basic ' + Buffer.from(process.env.NEXT_PUBLIC_CLIENT_ID + ':' + process.env.NEXT_PUBLIC_CLIENT_SECRET).toString('base64'),
        grant_type: 'client_credentials',
      },
    });
  };

  const getExample = (payload: any) => apiAuth.get('https://api.sampleapis.com/avatar/info', payload);

  return { getAccessToken, getExample };xcxc
};

// let's return back our create method as the default.
const API = Create();
console.log(API);
export default API;

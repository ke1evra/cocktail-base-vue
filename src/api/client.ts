import { createFetch } from 'ofetch';

import { FIELD_NAMES } from '@/constants';

export const client = createFetch({
  defaults: {
    baseURL: import.meta.env.VITE_API_URL,

    onRequest({ options }) {
      const token = localStorage.getItem(FIELD_NAMES.TOKEN);

      options.headers = {
        ...options.headers,
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      };
    },

    onResponseError({ response }) {
      if (response.status !== 401) {
        response._data = response._data.message;

        return;
      }

      localStorage.removeItem(FIELD_NAMES.TOKEN);
      window.location.href = '/';
    },
  },
});

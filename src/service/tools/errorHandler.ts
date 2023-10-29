import { type AxiosError } from 'axios';

export function errorHandler(error: AxiosError) {
  console.log('### error ###', error);
}

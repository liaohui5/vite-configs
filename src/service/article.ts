import { http } from './tools/http';

export const fetchArticles = () => http.get('/api/articles');

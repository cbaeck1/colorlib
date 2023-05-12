import http from './http';

export default {
  async getArticles() {
    return http.get('json-server/blog-article.json');
  }
}

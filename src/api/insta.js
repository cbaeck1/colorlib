import http from './http';

export default {
  async getArticles() {
    return http.get('json-server/instagram.json');
  }
}

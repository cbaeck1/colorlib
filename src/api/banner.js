import http from './http';

export default {
  async getMainSlideBanners() {
    return http.get('json-server/banner.json');
  }
}
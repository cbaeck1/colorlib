import http from './http';

export default {
  async getBestProducts() {
    return http.get('json-server/best-product.json');
  },
  async getFeaturedProducts() {
    return http.get('json-server/featured-product.json');
  },
  async getProducts(page = 1, priceRange = null) {
    return http.get('json-server/products.json', {
      page,
      priceRange
    });
  }
}
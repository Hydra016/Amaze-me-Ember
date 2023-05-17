import Route from '@ember/routing/route';

export default class ProductsRoute extends Route {
    async model() {
        const response = await fetch('https://fakestoreapi.com/products');
        const products = await response.json();
        return products;
      }
}

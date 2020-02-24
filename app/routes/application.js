import Route from '@ember/routing/route';

export default class ApplicationRoute extends Route {
  async model() {
    let response = await fetch('/api/countries.json');
    let { data } = await response.json();

    return data.map(model => {
      let { attributes } = model;
      return { ...attributes };
    });
  }
}
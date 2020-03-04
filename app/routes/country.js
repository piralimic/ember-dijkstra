import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class CountryRoute extends Route {
  @service store;
  async model(params) {
    return this.store.findRecord('country', params.country_id, {
      reload: true,
      backgroundReload: false
    });
  }
    // ${params.rental_id}
    // http://localhost:3000/api/v1/countries/1/result/?city_from=8&city_to=1


}

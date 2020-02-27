import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class CountryRoute extends Route {
  @service store;
  async model(params) {
    return this.store.findRecord('country', params.country_id, {
      include: 'cities'
    });
  }
}
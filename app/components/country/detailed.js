import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class DetailedComponent extends Component {
  @service store;

  @tracked city_list
  @tracked city_from
  @tracked city_to
  @tracked path
  @tracked distance
  @tracked start_city
  @tracked end_city

  /**
  *
  *@param {Event & {target: HTMLFormElement}} evt
  */
  @action
  async onFormSubmit(evt){
    const { target } = evt;
    const city_from_id = target.querySelector('#city_from').value;
    const city_to_id = target.querySelector('#city_to').value;

    // prevent the reloading page on form submit
    evt.preventDefault();

    const newResult = this.store.createRecord('result', { countryId: this.args.country.id, startCity: city_from_id, endCity: city_to_id});
    newResult.save().then(result => {
      this.path = result.path;
      this.distance = result.distance;
      this.start_city = result.startCity;
      this.end_city = result.endCity;
    });
  }

  @action
  setCity(direction) {
    if (direction == "city_to") {
      this.city_to = parseInt(event.target.selectedOptions[0].value);
    } else {
      this.city_from = parseInt(event.target.selectedOptions[0].value);
    }
  }
}

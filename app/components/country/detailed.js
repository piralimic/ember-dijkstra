import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class DetailedComponent extends Component {
  @service store;

  @tracked city_from
  @tracked city_to

  getStartEndCities(city_from_id, city_to_id) {
    console.log('Form submission')
    console.log('City from : ', city_from_id);
    console.log('City to : ', city_to_id);
  }

  /**
  *
  *@param {Event & {target: HTMLFormElement}} evt
  */
  @action
  onFormSubmit(evt){
    const { target } = evt;
    const city_from_id = target.querySelector('#city_from').value;
    const city_to_id = target.querySelector('#city_to').value;

    // prevent the reloading page on form submit
    evt.preventDefault();

    this.getStartEndCities(city_from_id, city_to_id);

    const newResult = this.store.createRecord('result', { start_city: city_from_id, end_city: city_to_id});
    newResult.save();
  }

  @action
  setCity(direction, city) {
    if (direction == "city_to") {
      this.city_to = parseInt(event.target.selectedOptions[0].value);
      console.log('Selection update')
      console.log('City to : ', this.city_to);
    } else {
      this.city_from = parseInt(event.target.selectedOptions[0].value);
      console.log('Selection update')
      console.log('City from : ', this.city_from);
    }
  }
}

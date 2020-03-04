import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import fetch from 'fetch';

export default class DetailedComponent extends Component {
  @service store;

  @tracked city_from
  @tracked city_to

  printStartEndCities(city_from_id, city_to_id) {
    console.log('Form submission params')
    console.log('city_from : ', parseInt(city_from_id));
    console.log('city_to : ', parseInt(city_to_id));
  }

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

    this.printStartEndCities(city_from_id, city_to_id);
    console.log("country_id : ", parseInt(country_id.value));
    const newResult = this.store.createRecord('result', { country_id: country_id.value, start_city: city_from_id, end_city: city_to_id});
    // newResult.save();
    const response = await fetch(`http://localhost:3000/api/v1/countries/${country_id.value}/results/?city_from=${city_from_id}&city_to=${city_to_id}`, { method: 'POST'});
    return response.json();
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

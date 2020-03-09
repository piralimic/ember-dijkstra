import Model, { attr, hasMany } from '@ember-data/model';

export default class CountryModel extends Model {
  @attr name;
  @hasMany('city', { async: false }) cities;
}

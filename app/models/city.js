import Model, { attr, belongsTo } from '@ember-data/model';

export default class CityModel extends Model {
  @attr name;
  @belongsTo('country', {async: false }) country;
}

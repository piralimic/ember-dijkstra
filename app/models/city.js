import Model, { attr, belongsTo } from '@ember-data/model';

export default class CityModel extends Model {
  @attr name;
  //@belongsTo('country', {inverse: 'cities' }) country;
  @belongsTo('country', {async: false }) country;
}

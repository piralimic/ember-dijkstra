import Model, { attr, belongsTo } from '@ember-data/model';

export default class ResultModel extends Model {
  @attr distance;
  @attr path;
  @attr start_city;
  @attr end_city;
  @belongsTo('country', {async: false }) country;
}

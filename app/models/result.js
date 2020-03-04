import Model, { attr } from '@ember-data/model';

export default class ResultModel extends Model {
  @attr distance;
  @attr path;
  @attr start_city;
  @attr end_city;
}

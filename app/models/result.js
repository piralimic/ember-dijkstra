import Model, { attr, belongsTo } from '@ember-data/model';

export default class ResultModel extends Model {
  @attr distance;
  @attr path;
  @attr startCity;
  @attr endCity;
  @attr countryId;
}

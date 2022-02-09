/* eslint-disable no-param-reassign */
/* eslint-disable dot-notation */
/* eslint-disable semi */
import _ from 'lodash'

const normalize = (obj) => {
  obj['name'] = _.capitalize(obj['name'].toLowerCase())
  obj['description'] = obj['description'].toLowerCase()
}

export default normalize

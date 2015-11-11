import keyMirror from 'keymirror';

var AppConstants = {

  ActionTypes: keyMirror({
    GET_SHIPMENT: null,
    GET_TRACKING: null,
    GET_SHIPMENT_AND_TRACKING: null
  })

};

export default AppConstants;
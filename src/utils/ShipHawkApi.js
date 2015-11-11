var axios = require('axios');
import shipmentObj from '../utils/shipmentObj';
import trackingObj from '../utils/trackingObj';

var ShipHawkApi = {
  getShipment: (shipmentId, apiKey, shipmentCallback) => {
    let url = 'https://shiphawk.com/api/v3/shipments/' + shipmentId;
    return shipmentObj;
    //return axios.get(url, {
    //  params: {
    //    api_key: apiKey
    //  },
    //  headers: {
    //    'Access-Control-Allow-Credentials': 'true',
    //    'Access-Control-Allow-Origin':'*',
    //    'Access-Control-Allow-Headers': 'Origin, Content-Type, Accept, Authorization, X-Request-With'
    //  }
    //}).then(axios.spread(function (response) {
    //
    //  shipmentCallback(response);
    //})).catch(function (error) {
    //  console.log(error);
    //});
  },

  getTracking: (shipmentId, apiKey, trackingCallback) => {
    let url = 'https://shiphawk.com/api/v3/shipments/' + shipmentId + '/tracking';
    return trackingObj;
    //return axios.get(url, {
    //  params: {
    //    api_key: apiKey
    //  },
    //  headers: {
    //    'Access-Control-Allow-Credentials': 'true',
    //    'Access-Control-Allow-Origin':'*',
    //    'Access-Control-Allow-Headers': 'Origin, Content-Type, Accept, Authorization, X-Request-With'
    //  }
    //}).then(axios.spread(function (response) {
    //  // Both requests are now complete
    //  trackingCallback(response);
    //})).catch(function (error) {
    //  console.log(error);
    //});
  },

  getShipmentAndTracking: (shipmentID, apiKey, shipmentAndTrackingCallback) => {
    return axios.all([ShipHawkApi.getShipment(shipmentID, apiKey), ShipHawkApi.getTracking(shipmentID, apiKey)])
      .then(axios.spread((shipmentRes, trackingRes) => {
        // Both requests are now complete
        shipmentAndTrackingCallback(shipmentRes, trackingRes);
      }));

  }

};


export default ShipHawkApi;
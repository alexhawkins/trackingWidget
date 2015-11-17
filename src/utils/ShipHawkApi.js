import axios from 'axios';
import shipmentObj from '../utils/shipmentObj';
import trackingObj from '../utils/trackingObj';

var ShipHawkApi = {
  getShipment: (shipmentId, apiKey, shipmentAndTrackingCallback) => {
    let url = 'https://jsonp.afeld.me/?url=https://shiphawk.com/api/v3/shipments/' + shipmentId + '?api_key=' + apiKey;
    return axios.get(url).then(function(shipmentData) {
      ShipHawkApi.getTracking(shipmentId, apiKey, shipmentAndTrackingCallback, shipmentData);
    }).catch(function(error) {
      console.log(error);
    });
  },

  getTracking: (shipmentId, apiKey, shipmentAndTrackingCallback, shipmentData) => {
    let url = 'https://jsonp.afeld.me/?url=https://shiphawk.com/api/v3/shipments/' + shipmentId + '/tracking?api_key=' + apiKey;
    return axios.get(url).then(function(trackingData) {
      shipmentAndTrackingCallback(shipmentData.data, trackingData.data);
    }).catch(function(error) {
      console.log(error);
    });
  }
};

export default ShipHawkApi;
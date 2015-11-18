import axios from 'axios';
import shipmentObj from '../utils/shipmentObj';
import trackingObj from '../utils/trackingObj';

var ShipHawkApi = {
  getShipment: (shipmentId, apiKey, shipmentAndTrackingCallback) => {
    let url = 'https://jsonp.afeld.me/?url=https://shiphawk.com/api/v3/shipments/' + shipmentId + '?api_key=' + apiKey;
    return axios.get(url).then(function(shipmentData) {
      ShipHawkApi.getTracking(shipmentId, apiKey, shipmentData, shipmentAndTrackingCallback);
    }).catch(function(error) {
      console.log(error);
    });
  },

  getTracking: (shipmentId, apiKey, shipmentData, shipmentAndTrackingCallback) => {
    let url = 'https://jsonp.afeld.me/?url=https://shiphawk.com/api/v3/shipments/' + shipmentId + '/tracking?api_key=' + apiKey;
    return axios.get(url).then(function(trackingData) {
      shipmentAndTrackingCallback(shipmentData.data, trackingData.data);
    }).catch(function(error) {
      console.log(error);
    });
  },

  getShipmentFromTracking: (trackingNumber, carrierCode, apiKey, shipmentAndTrackingCallback) => {
    let url = 'https://shiphawk.com/api/v3/track?code=' + carrierCode + '&tracking_number=' + trackingNumber + '&api_key=' + apiKey;
    return axios.get(url).then(function(shipmentData) {
      let shipmentId = shipmentData.data.details.id;
      ShipHawkApi.getTracking(shipmentId, apiKey, shipmentData, shipmentAndTrackingCallback);
    }).catch(function(error) {
      console.log(error);
    });
  }
};

export default ShipHawkApi;

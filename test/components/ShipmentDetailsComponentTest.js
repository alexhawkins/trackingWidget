/*eslint-env node, mocha */
/*global expect */
/*eslint no-console: 0*/
'use strict';

// Uncomment the following lines to use the react test utilities
// import TestUtils from 'react-addons-test-utils';
import createComponent from 'helpers/shallowRenderHelper';

import ShipmentDetailsComponent from 'components//ShipmentDetailsComponent.js';

describe('ShipmentDetailsComponent', () => {
    let component;

    beforeEach(() => {
      component = createComponent(ShipmentDetailsComponent);
    });

    it('should have its component name as default className', () => {
      expect(component.props.className).to.equal('shipmentdetails-component');
    });
});

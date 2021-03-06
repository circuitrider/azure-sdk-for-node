/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * @summary ExpressRouteLink
  *
 * ExpressRouteLink child resource definition.
 *
 * @extends models['SubResource']
 */
class ExpressRouteLink extends models['SubResource'] {
  /**
   * Create a ExpressRouteLink.
   * @property {string} [routerName] Name of Azure router associated with
   * physical port.
   * @property {string} [interfaceName] Name of Azure router interface.
   * @property {string} [patchPanelId] Mapping between physical port to patch
   * panel port.
   * @property {string} [rackId] Mapping of physical patch panel to rack.
   * @property {string} [connectorType] Physical fiber port type. Possible
   * values include: 'LC', 'SC'
   * @property {string} [adminState] Administrative state of the physical port.
   * Possible values include: 'Enabled', 'Disabled'
   * @property {string} [provisioningState] The provisioning state of the
   * ExpressRouteLink resource. Possible values are: 'Succeeded', 'Updating',
   * 'Deleting', and 'Failed'.
   * @property {string} [name] Name of child port resource that is unique among
   * child port resources of the parent.
   * @property {string} [etag] A unique read-only string that changes whenever
   * the resource is updated.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of ExpressRouteLink
   *
   * @returns {object} metadata of ExpressRouteLink
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ExpressRouteLink',
      type: {
        name: 'Composite',
        className: 'ExpressRouteLink',
        modelProperties: {
          id: {
            required: false,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          routerName: {
            required: false,
            readOnly: true,
            serializedName: 'properties.routerName',
            type: {
              name: 'String'
            }
          },
          interfaceName: {
            required: false,
            readOnly: true,
            serializedName: 'properties.interfaceName',
            type: {
              name: 'String'
            }
          },
          patchPanelId: {
            required: false,
            readOnly: true,
            serializedName: 'properties.patchPanelId',
            type: {
              name: 'String'
            }
          },
          rackId: {
            required: false,
            readOnly: true,
            serializedName: 'properties.rackId',
            type: {
              name: 'String'
            }
          },
          connectorType: {
            required: false,
            readOnly: true,
            serializedName: 'properties.connectorType',
            type: {
              name: 'String'
            }
          },
          adminState: {
            required: false,
            serializedName: 'properties.adminState',
            type: {
              name: 'String'
            }
          },
          provisioningState: {
            required: false,
            readOnly: true,
            serializedName: 'properties.provisioningState',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          etag: {
            required: false,
            readOnly: true,
            serializedName: 'etag',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ExpressRouteLink;

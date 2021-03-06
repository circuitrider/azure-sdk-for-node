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
 * Registered Server resource.
 *
 * @extends models['ProxyResource']
 */
class RegisteredServer extends models['ProxyResource'] {
  /**
   * Create a RegisteredServer.
   * @property {string} [serverCertificate] Registered Server Certificate
   * @property {string} [agentVersion] Registered Server Agent Version
   * @property {string} [serverOSVersion] Registered Server OS Version
   * @property {number} [serverManagementErrorCode] Registered Server
   * Management Error Code
   * @property {string} [lastHeartBeat] Registered Server last heart beat
   * @property {string} [provisioningState] Registered Server Provisioning
   * State
   * @property {string} [serverRole] Registered Server serverRole
   * @property {string} [clusterId] Registered Server clusterId
   * @property {string} [clusterName] Registered Server clusterName
   * @property {string} [serverId] Registered Server serverId
   * @property {string} [storageSyncServiceUid] Registered Server
   * storageSyncServiceUid
   * @property {string} [lastWorkflowId] Registered Server lastWorkflowId
   * @property {string} [lastOperationName] Resource Last Operation Name
   * @property {string} [discoveryEndpointUri] Resource discoveryEndpointUri
   * @property {string} [resourceLocation] Resource Location
   * @property {string} [serviceLocation] Service Location
   * @property {string} [friendlyName] Friendly Name
   * @property {string} [managementEndpointUri] Management Endpoint Uri
   * @property {string} [monitoringConfiguration] Monitoring Configuration
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of RegisteredServer
   *
   * @returns {object} metadata of RegisteredServer
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'RegisteredServer',
      type: {
        name: 'Composite',
        className: 'RegisteredServer',
        modelProperties: {
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            readOnly: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          type: {
            required: false,
            readOnly: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          serverCertificate: {
            required: false,
            serializedName: 'properties.serverCertificate',
            type: {
              name: 'String'
            }
          },
          agentVersion: {
            required: false,
            serializedName: 'properties.agentVersion',
            type: {
              name: 'String'
            }
          },
          serverOSVersion: {
            required: false,
            serializedName: 'properties.serverOSVersion',
            type: {
              name: 'String'
            }
          },
          serverManagementErrorCode: {
            required: false,
            serializedName: 'properties.serverManagementErrorCode',
            type: {
              name: 'Number'
            }
          },
          lastHeartBeat: {
            required: false,
            serializedName: 'properties.lastHeartBeat',
            type: {
              name: 'String'
            }
          },
          provisioningState: {
            required: false,
            serializedName: 'properties.provisioningState',
            type: {
              name: 'String'
            }
          },
          serverRole: {
            required: false,
            serializedName: 'properties.serverRole',
            type: {
              name: 'String'
            }
          },
          clusterId: {
            required: false,
            serializedName: 'properties.clusterId',
            type: {
              name: 'String'
            }
          },
          clusterName: {
            required: false,
            serializedName: 'properties.clusterName',
            type: {
              name: 'String'
            }
          },
          serverId: {
            required: false,
            serializedName: 'properties.serverId',
            type: {
              name: 'String'
            }
          },
          storageSyncServiceUid: {
            required: false,
            serializedName: 'properties.storageSyncServiceUid',
            type: {
              name: 'String'
            }
          },
          lastWorkflowId: {
            required: false,
            serializedName: 'properties.lastWorkflowId',
            type: {
              name: 'String'
            }
          },
          lastOperationName: {
            required: false,
            serializedName: 'properties.lastOperationName',
            type: {
              name: 'String'
            }
          },
          discoveryEndpointUri: {
            required: false,
            serializedName: 'properties.discoveryEndpointUri',
            type: {
              name: 'String'
            }
          },
          resourceLocation: {
            required: false,
            serializedName: 'properties.resourceLocation',
            type: {
              name: 'String'
            }
          },
          serviceLocation: {
            required: false,
            serializedName: 'properties.serviceLocation',
            type: {
              name: 'String'
            }
          },
          friendlyName: {
            required: false,
            serializedName: 'properties.friendlyName',
            type: {
              name: 'String'
            }
          },
          managementEndpointUri: {
            required: false,
            serializedName: 'properties.managementEndpointUri',
            type: {
              name: 'String'
            }
          },
          monitoringConfiguration: {
            required: false,
            serializedName: 'properties.monitoringConfiguration',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = RegisteredServer;

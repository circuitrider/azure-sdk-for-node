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
 * Azure Storage-specific protectable containers
 *
 * @extends models['ProtectableContainer']
 */
class AzureStorageProtectableContainer extends models['ProtectableContainer'] {
  /**
   * Create a AzureStorageProtectableContainer.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of AzureStorageProtectableContainer
   *
   * @returns {object} metadata of AzureStorageProtectableContainer
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'StorageContainer',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: 'protectableContainerType',
          clientName: 'protectableContainerType'
        },
        uberParent: 'ProtectableContainer',
        className: 'AzureStorageProtectableContainer',
        modelProperties: {
          friendlyName: {
            required: false,
            serializedName: 'friendlyName',
            type: {
              name: 'String'
            }
          },
          backupManagementType: {
            required: false,
            serializedName: 'backupManagementType',
            type: {
              name: 'String'
            }
          },
          healthStatus: {
            required: false,
            serializedName: 'healthStatus',
            type: {
              name: 'String'
            }
          },
          containerId: {
            required: false,
            serializedName: 'containerId',
            type: {
              name: 'String'
            }
          },
          protectableContainerType: {
            required: true,
            serializedName: 'protectableContainerType',
            isPolymorphicDiscriminator: true,
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = AzureStorageProtectableContainer;

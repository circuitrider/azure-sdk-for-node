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
 * The event data for a Job output asset.
 *
 * @extends models['MediaJobOutput']
 */
class MediaJobOutputAsset extends models['MediaJobOutput'] {
  /**
   * Create a MediaJobOutputAsset.
   * @member {string} [assetName] Gets the Job output asset name.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of MediaJobOutputAsset
   *
   * @returns {object} metadata of MediaJobOutputAsset
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: '#Microsoft.Media.JobOutputAsset',
      type: {
        name: 'Composite',
        className: 'MediaJobOutputAsset',
        modelProperties: {
          error: {
            required: false,
            serializedName: 'error',
            type: {
              name: 'Composite',
              className: 'MediaJobError'
            }
          },
          label: {
            required: false,
            serializedName: 'label',
            type: {
              name: 'String'
            }
          },
          progress: {
            required: true,
            serializedName: 'progress',
            type: {
              name: 'Number'
            }
          },
          state: {
            required: true,
            serializedName: 'state',
            type: {
              name: 'Enum',
              allowedValues: [ 'Canceled', 'Canceling', 'Error', 'Finished', 'Processing', 'Queued', 'Scheduled' ]
            }
          },
          assetName: {
            required: false,
            serializedName: 'assetName',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = MediaJobOutputAsset;
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

/**
 * Details of JobOutput errors.
 *
 */
class MediaJobErrorDetail {
  /**
   * Create a MediaJobErrorDetail.
   * @member {string} [code] Code describing the error detail.
   * @member {string} [message] A human-readable representation of the error.
   */
  constructor() {
  }

  /**
   * Defines the metadata of MediaJobErrorDetail
   *
   * @returns {object} metadata of MediaJobErrorDetail
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'MediaJobErrorDetail',
      type: {
        name: 'Composite',
        className: 'MediaJobErrorDetail',
        modelProperties: {
          code: {
            required: false,
            readOnly: true,
            serializedName: 'code',
            type: {
              name: 'String'
            }
          },
          message: {
            required: false,
            readOnly: true,
            serializedName: 'message',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = MediaJobErrorDetail;
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
 * Describes the gallery Image Definition purchase plan. This is used by
 * marketplace images.
 *
 */
class ImagePurchasePlan {
  /**
   * Create a ImagePurchasePlan.
   * @member {string} [name] The plan ID.
   * @member {string} [publisher] The publisher ID.
   * @member {string} [product] The product ID.
   */
  constructor() {
  }

  /**
   * Defines the metadata of ImagePurchasePlan
   *
   * @returns {object} metadata of ImagePurchasePlan
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ImagePurchasePlan',
      type: {
        name: 'Composite',
        className: 'ImagePurchasePlan',
        modelProperties: {
          name: {
            required: false,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          publisher: {
            required: false,
            serializedName: 'publisher',
            type: {
              name: 'String'
            }
          },
          product: {
            required: false,
            serializedName: 'product',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ImagePurchasePlan;
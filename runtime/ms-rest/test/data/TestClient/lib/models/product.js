/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator 0.14.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the Product class.
 * @constructor
 * @member {number} [integer]
 * 
 * @member {string} [string]
 * 
 */
class Product {
  constructor() { }
  
  /**
   * Metadata of Product
   *
   * @returns {object} metadata of the Product
   *
   */
  mapper() {
    return {
      type: {
        name: 'Composite',
        className: 'Product',
        modelProperties: {
          id: {
            serializedName: 'id',
            constraints: {

            },
            required: true,
            type: {
              name: 'Number'
            }
          },
          name: {
            serializedName: 'name',
            required: true,
            type: {
              name: 'String'
            },
            constraints: {
              MaxLength: 256,
              MinLength: 1,
              Pattern: /^[A-Za-z0-9-._]+$/
            }
          },
          provisioningState: {
            serializedName: 'properties.provisioningState',
            required: false,
            type: {
              name: 'Enum',
              allowedValues: ['Creating', 'Failed', 'Succeeded']
            }
          },
          tags: {
            serializedName: 'tags',
            required: false,
            type: {
              name: 'Dictionary',
              value: {
                type: {
                  name: 'String'
                }
              }
            }
          },
          dispatchTime: {
            serializedName: 'dispatchTime',
            required: false,
            type: {
              name: 'DateTime'
            }
          },
          invoiceInfo: {
            serializedName: 'invoiceInfo',
            required: false,
            type: {
              name: 'Composite',
              className: 'Invoice'
            }
          },
          subProducts: {
            serializedName: 'subProducts',
            required: false,
            type: {
              name: 'Sequence',
              element: {
                type: {
                  name: 'Composite',
                  className: 'SubProduct'
                }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = Product;

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
 * the authorization used by the user who has performed the operation that led
 * to this event. This captures the RBAC properties of the event. These usually
 * include the 'action', 'role' and the 'scope'
 *
 */
class SenderAuthorization {
  /**
   * Create a SenderAuthorization.
   * @property {string} [action] the permissible actions. For instance:
   * microsoft.support/supporttickets/write
   * @property {string} [role] the role of the user. For instance: Subscription
   * Admin
   * @property {string} [scope] the scope.
   */
  constructor() {
  }

  /**
   * Defines the metadata of SenderAuthorization
   *
   * @returns {object} metadata of SenderAuthorization
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'SenderAuthorization',
      type: {
        name: 'Composite',
        className: 'SenderAuthorization',
        modelProperties: {
          action: {
            required: false,
            serializedName: 'action',
            type: {
              name: 'String'
            }
          },
          role: {
            required: false,
            serializedName: 'role',
            type: {
              name: 'String'
            }
          },
          scope: {
            required: false,
            serializedName: 'scope',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = SenderAuthorization;

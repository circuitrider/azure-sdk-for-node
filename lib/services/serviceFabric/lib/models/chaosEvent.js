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
 * Represents an event generated during a Chaos run.
 *
 */
class ChaosEvent {
  /**
   * Create a ChaosEvent.
   * @property {date} timeStampUtc The UTC timestamp when this Chaos event was
   * generated.
   * @property {string} kind Polymorphic Discriminator
   */
  constructor() {
  }

  /**
   * Defines the metadata of ChaosEvent
   *
   * @returns {object} metadata of ChaosEvent
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ChaosEvent',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: 'Kind',
          clientName: 'kind'
        },
        uberParent: 'ChaosEvent',
        className: 'ChaosEvent',
        modelProperties: {
          timeStampUtc: {
            required: true,
            serializedName: 'TimeStampUtc',
            type: {
              name: 'DateTime'
            }
          },
          kind: {
            required: true,
            serializedName: 'Kind',
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

module.exports = ChaosEvent;

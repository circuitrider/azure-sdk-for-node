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
 * @summary Statistics related to Pool usage information.
  *
 */
class UsageStatistics {
  /**
   * Create a UsageStatistics.
   * @property {date} startTime The start time of the time range covered by the
   * statistics.
   * @property {date} lastUpdateTime The time at which the statistics were last
   * updated. All statistics are limited to the range between startTime and
   * lastUpdateTime.
   * @property {moment.duration} dedicatedCoreTime The aggregated wall-clock
   * time of the dedicated Compute Node cores being part of the Pool.
   */
  constructor() {
  }

  /**
   * Defines the metadata of UsageStatistics
   *
   * @returns {object} metadata of UsageStatistics
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'UsageStatistics',
      type: {
        name: 'Composite',
        className: 'UsageStatistics',
        modelProperties: {
          startTime: {
            required: true,
            serializedName: 'startTime',
            type: {
              name: 'DateTime'
            }
          },
          lastUpdateTime: {
            required: true,
            serializedName: 'lastUpdateTime',
            type: {
              name: 'DateTime'
            }
          },
          dedicatedCoreTime: {
            required: true,
            serializedName: 'dedicatedCoreTime',
            type: {
              name: 'TimeSpan'
            }
          }
        }
      }
    };
  }
}

module.exports = UsageStatistics;

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import { BaseResource } from 'ms-rest-azure';
import { CloudError } from 'ms-rest-azure';
import * as moment from 'moment';

export { BaseResource } from 'ms-rest-azure';
export { CloudError } from 'ms-rest-azure';


/**
 * @class
 * Initializes a new instance of the DeleteOperationResult class.
 * @constructor
 * The result of the request or operation.
 *
 * @member {boolean} [operationResult] The result of the operation or request.
 */
export interface DeleteOperationResult {
  readonly operationResult?: boolean;
}

/**
 * @class
 * Initializes a new instance of the EndpointPropertiesSubnetsItem class.
 * @constructor
 * Subnet first address, scope, and/or last address.
 *
 * @member {string} [first] First address in the subnet.
 * @member {string} [last] Last address in the subnet.
 * @member {number} [scope] Block size (number of leading bits in the subnet
 * mask).
 */
export interface EndpointPropertiesSubnetsItem {
  first?: string;
  last?: string;
  scope?: number;
}

/**
 * @class
 * Initializes a new instance of the EndpointPropertiesCustomHeadersItem class.
 * @constructor
 * Custom header name and value.
 *
 * @member {string} [name] Header name.
 * @member {string} [value] Header value.
 */
export interface EndpointPropertiesCustomHeadersItem {
  name?: string;
  value?: string;
}

/**
 * @class
 * Initializes a new instance of the HeatMapEndpoint class.
 * @constructor
 * Class which is a sparse representation of a Traffic Manager endpoint.
 *
 * @member {string} [resourceId] The ARM Resource ID of this Traffic Manager
 * endpoint.
 * @member {number} [endpointId] A number uniquely identifying this endpoint in
 * query experiences.
 */
export interface HeatMapEndpoint {
  resourceId?: string;
  endpointId?: number;
}

/**
 * @class
 * Initializes a new instance of the QueryExperience class.
 * @constructor
 * Class representing a Traffic Manager HeatMap query experience properties.
 *
 * @member {number} endpointId The id of the endpoint from the 'endpoints'
 * array which these queries were routed to.
 * @member {number} queryCount The number of queries originating from this
 * location.
 * @member {number} [latency] The latency experienced by queries originating
 * from this location.
 */
export interface QueryExperience {
  endpointId: number;
  queryCount: number;
  latency?: number;
}

/**
 * @class
 * Initializes a new instance of the TrafficFlow class.
 * @constructor
 * Class representing a Traffic Manager HeatMap traffic flow properties.
 *
 * @member {string} [sourceIp] The IP address that this query experience
 * originated from.
 * @member {number} [latitude] The approximate latitude that these queries
 * originated from.
 * @member {number} [longitude] The approximate longitude that these queries
 * originated from.
 * @member {array} [queryExperiences] The query experiences produced in this
 * HeatMap calculation.
 */
export interface TrafficFlow {
  sourceIp?: string;
  latitude?: number;
  longitude?: number;
  queryExperiences?: QueryExperience[];
}

/**
 * @class
 * Initializes a new instance of the Resource class.
 * @constructor
 * The core properties of ARM resources
 *
 * @member {string} [id] Fully qualified resource Id for the resource. Ex -
 * /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/trafficManagerProfiles/{resourceName}
 * @member {string} [name] The name of the resource
 * @member {string} [type] The type of the resource. Ex-
 * Microsoft.Network/trafficManagerProfiles.
 */
export interface Resource extends BaseResource {
  id?: string;
  name?: string;
  type?: string;
}

/**
 * @class
 * Initializes a new instance of the ProxyResource class.
 * @constructor
 * The resource model definition for a ARM proxy resource. It will have
 * everything other than required location and tags
 *
 */
export interface ProxyResource extends Resource {
}

/**
 * @class
 * Initializes a new instance of the HeatMapModel class.
 * @constructor
 * Class representing a Traffic Manager HeatMap.
 *
 * @member {date} [startTime] The beginning of the time window for this
 * HeatMap, inclusive.
 * @member {date} [endTime] The ending of the time window for this HeatMap,
 * exclusive.
 * @member {array} [endpoints] The endpoints used in this HeatMap calculation.
 * @member {array} [trafficFlows] The traffic flows produced in this HeatMap
 * calculation.
 */
export interface HeatMapModel extends ProxyResource {
  startTime?: Date;
  endTime?: Date;
  endpoints?: HeatMapEndpoint[];
  trafficFlows?: TrafficFlow[];
}

/**
 * @class
 * Initializes a new instance of the UserMetricsModel class.
 * @constructor
 * Class representing Traffic Manager User Metrics.
 *
 * @member {string} [key] The key returned by the User Metrics operation.
 */
export interface UserMetricsModel extends ProxyResource {
  key?: string;
}

/**
 * @class
 * Initializes a new instance of the Endpoint class.
 * @constructor
 * Class representing a Traffic Manager endpoint.
 *
 * @member {string} [targetResourceId] The Azure Resource URI of the of the
 * endpoint. Not applicable to endpoints of type 'ExternalEndpoints'.
 * @member {string} [target] The fully-qualified DNS name or IP address of the
 * endpoint. Traffic Manager returns this value in DNS responses to direct
 * traffic to this endpoint.
 * @member {string} [endpointStatus] The status of the endpoint. If the
 * endpoint is Enabled, it is probed for endpoint health and is included in the
 * traffic routing method. Possible values include: 'Enabled', 'Disabled'
 * @member {number} [weight] The weight of this endpoint when using the
 * 'Weighted' traffic routing method. Possible values are from 1 to 1000.
 * @member {number} [priority] The priority of this endpoint when using the
 * 'Priority' traffic routing method. Possible values are from 1 to 1000, lower
 * values represent higher priority. This is an optional parameter.  If
 * specified, it must be specified on all endpoints, and no two endpoints can
 * share the same priority value.
 * @member {string} [endpointLocation] Specifies the location of the external
 * or nested endpoints when using the 'Performance' traffic routing method.
 * @member {string} [endpointMonitorStatus] The monitoring status of the
 * endpoint. Possible values include: 'CheckingEndpoint', 'Online', 'Degraded',
 * 'Disabled', 'Inactive', 'Stopped'
 * @member {number} [minChildEndpoints] The minimum number of endpoints that
 * must be available in the child profile in order for the parent profile to be
 * considered available. Only applicable to endpoint of type 'NestedEndpoints'.
 * @member {array} [geoMapping] The list of countries/regions mapped to this
 * endpoint when using the 'Geographic' traffic routing method. Please consult
 * Traffic Manager Geographic documentation for a full list of accepted values.
 * @member {array} [subnets] The list of subnets, IP addresses, and/or address
 * ranges mapped to this endpoint when using the 'Subnet' traffic routing
 * method. An empty list will match all ranges not covered by other endpoints.
 * @member {array} [customHeaders] List of custom headers.
 */
export interface Endpoint extends ProxyResource {
  targetResourceId?: string;
  target?: string;
  endpointStatus?: string;
  weight?: number;
  priority?: number;
  endpointLocation?: string;
  endpointMonitorStatus?: string;
  minChildEndpoints?: number;
  geoMapping?: string[];
  subnets?: EndpointPropertiesSubnetsItem[];
  customHeaders?: EndpointPropertiesCustomHeadersItem[];
}

/**
 * @class
 * Initializes a new instance of the CheckTrafficManagerRelativeDnsNameAvailabilityParameters class.
 * @constructor
 * Parameters supplied to check Traffic Manager name operation.
 *
 * @member {string} [name] The name of the resource.
 * @member {string} [type] The type of the resource.
 */
export interface CheckTrafficManagerRelativeDnsNameAvailabilityParameters {
  name?: string;
  type?: string;
}

/**
 * @class
 * Initializes a new instance of the DnsConfig class.
 * @constructor
 * Class containing DNS settings in a Traffic Manager profile.
 *
 * @member {string} [relativeName] The relative DNS name provided by this
 * Traffic Manager profile. This value is combined with the DNS domain name
 * used by Azure Traffic Manager to form the fully-qualified domain name (FQDN)
 * of the profile.
 * @member {string} [fqdn] The fully-qualified domain name (FQDN) of the
 * Traffic Manager profile. This is formed from the concatenation of the
 * RelativeName with the DNS domain used by Azure Traffic Manager.
 * @member {number} [ttl] The DNS Time-To-Live (TTL), in seconds. This informs
 * the local DNS resolvers and DNS clients how long to cache DNS responses
 * provided by this Traffic Manager profile.
 */
export interface DnsConfig {
  relativeName?: string;
  readonly fqdn?: string;
  ttl?: number;
}

/**
 * @class
 * Initializes a new instance of the MonitorConfigCustomHeadersItem class.
 * @constructor
 * Custom header name and value.
 *
 * @member {string} [name] Header name.
 * @member {string} [value] Header value.
 */
export interface MonitorConfigCustomHeadersItem {
  name?: string;
  value?: string;
}

/**
 * @class
 * Initializes a new instance of the MonitorConfigExpectedStatusCodeRangesItem class.
 * @constructor
 * Min and max value of a status code range.
 *
 * @member {number} [min] Min status code.
 * @member {number} [max] Max status code.
 */
export interface MonitorConfigExpectedStatusCodeRangesItem {
  min?: number;
  max?: number;
}

/**
 * @class
 * Initializes a new instance of the MonitorConfig class.
 * @constructor
 * Class containing endpoint monitoring settings in a Traffic Manager profile.
 *
 * @member {string} [profileMonitorStatus] The profile-level monitoring status
 * of the Traffic Manager profile. Possible values include:
 * 'CheckingEndpoints', 'Online', 'Degraded', 'Disabled', 'Inactive'
 * @member {string} [protocol] The protocol (HTTP, HTTPS or TCP) used to probe
 * for endpoint health. Possible values include: 'HTTP', 'HTTPS', 'TCP'
 * @member {number} [port] The TCP port used to probe for endpoint health.
 * @member {string} [path] The path relative to the endpoint domain name used
 * to probe for endpoint health.
 * @member {number} [intervalInSeconds] The monitor interval for endpoints in
 * this profile. This is the interval at which Traffic Manager will check the
 * health of each endpoint in this profile.
 * @member {number} [timeoutInSeconds] The monitor timeout for endpoints in
 * this profile. This is the time that Traffic Manager allows endpoints in this
 * profile to response to the health check.
 * @member {number} [toleratedNumberOfFailures] The number of consecutive
 * failed health check that Traffic Manager tolerates before declaring an
 * endpoint in this profile Degraded after the next failed health check.
 * @member {array} [customHeaders] List of custom headers.
 * @member {array} [expectedStatusCodeRanges] List of expected status code
 * ranges.
 */
export interface MonitorConfig {
  profileMonitorStatus?: string;
  protocol?: string;
  port?: number;
  path?: string;
  intervalInSeconds?: number;
  timeoutInSeconds?: number;
  toleratedNumberOfFailures?: number;
  customHeaders?: MonitorConfigCustomHeadersItem[];
  expectedStatusCodeRanges?: MonitorConfigExpectedStatusCodeRangesItem[];
}

/**
 * @class
 * Initializes a new instance of the TrackedResource class.
 * @constructor
 * The resource model definition for a ARM tracked top level resource
 *
 * @member {object} [tags] Resource tags.
 * @member {string} [location] The Azure Region where the resource lives
 */
export interface TrackedResource extends Resource {
  tags?: { [propertyName: string]: string };
  location?: string;
}

/**
 * @class
 * Initializes a new instance of the Profile class.
 * @constructor
 * Class representing a Traffic Manager profile.
 *
 * @member {string} [profileStatus] The status of the Traffic Manager profile.
 * Possible values include: 'Enabled', 'Disabled'
 * @member {string} [trafficRoutingMethod] The traffic routing method of the
 * Traffic Manager profile. Possible values include: 'Performance', 'Priority',
 * 'Weighted', 'Geographic', 'MultiValue', 'Subnet'
 * @member {object} [dnsConfig] The DNS settings of the Traffic Manager
 * profile.
 * @member {string} [dnsConfig.relativeName] The relative DNS name provided by
 * this Traffic Manager profile. This value is combined with the DNS domain
 * name used by Azure Traffic Manager to form the fully-qualified domain name
 * (FQDN) of the profile.
 * @member {string} [dnsConfig.fqdn] The fully-qualified domain name (FQDN) of
 * the Traffic Manager profile. This is formed from the concatenation of the
 * RelativeName with the DNS domain used by Azure Traffic Manager.
 * @member {number} [dnsConfig.ttl] The DNS Time-To-Live (TTL), in seconds.
 * This informs the local DNS resolvers and DNS clients how long to cache DNS
 * responses provided by this Traffic Manager profile.
 * @member {object} [monitorConfig] The endpoint monitoring settings of the
 * Traffic Manager profile.
 * @member {string} [monitorConfig.profileMonitorStatus] The profile-level
 * monitoring status of the Traffic Manager profile. Possible values include:
 * 'CheckingEndpoints', 'Online', 'Degraded', 'Disabled', 'Inactive'
 * @member {string} [monitorConfig.protocol] The protocol (HTTP, HTTPS or TCP)
 * used to probe for endpoint health. Possible values include: 'HTTP', 'HTTPS',
 * 'TCP'
 * @member {number} [monitorConfig.port] The TCP port used to probe for
 * endpoint health.
 * @member {string} [monitorConfig.path] The path relative to the endpoint
 * domain name used to probe for endpoint health.
 * @member {number} [monitorConfig.intervalInSeconds] The monitor interval for
 * endpoints in this profile. This is the interval at which Traffic Manager
 * will check the health of each endpoint in this profile.
 * @member {number} [monitorConfig.timeoutInSeconds] The monitor timeout for
 * endpoints in this profile. This is the time that Traffic Manager allows
 * endpoints in this profile to response to the health check.
 * @member {number} [monitorConfig.toleratedNumberOfFailures] The number of
 * consecutive failed health check that Traffic Manager tolerates before
 * declaring an endpoint in this profile Degraded after the next failed health
 * check.
 * @member {array} [monitorConfig.customHeaders] List of custom headers.
 * @member {array} [monitorConfig.expectedStatusCodeRanges] List of expected
 * status code ranges.
 * @member {array} [endpoints] The list of endpoints in the Traffic Manager
 * profile.
 * @member {string} [trafficViewEnrollmentStatus] Indicates whether Traffic
 * View is 'Enabled' or 'Disabled' for the Traffic Manager profile. Null,
 * indicates 'Disabled'. Enabling this feature will increase the cost of the
 * Traffic Manage profile. Possible values include: 'Enabled', 'Disabled'
 * @member {number} [maxReturn] Maximum number of endpoints to be returned for
 * MultiValue routing type.
 */
export interface Profile extends TrackedResource {
  profileStatus?: string;
  trafficRoutingMethod?: string;
  dnsConfig?: DnsConfig;
  monitorConfig?: MonitorConfig;
  endpoints?: Endpoint[];
  trafficViewEnrollmentStatus?: string;
  maxReturn?: number;
}

/**
 * @class
 * Initializes a new instance of the TrafficManagerNameAvailability class.
 * @constructor
 * Class representing a Traffic Manager Name Availability response.
 *
 * @member {string} [name] The relative name.
 * @member {string} [type] Traffic Manager profile resource type.
 * @member {boolean} [nameAvailable] Describes whether the relative name is
 * available or not.
 * @member {string} [reason] The reason why the name is not available, when
 * applicable.
 * @member {string} [message] Descriptive message that explains why the name is
 * not available, when applicable.
 */
export interface TrafficManagerNameAvailability {
  name?: string;
  type?: string;
  nameAvailable?: boolean;
  reason?: string;
  message?: string;
}

/**
 * @class
 * Initializes a new instance of the Region class.
 * @constructor
 * Class representing a region in the Geographic hierarchy used with the
 * Geographic traffic routing method.
 *
 * @member {string} [code] The code of the region
 * @member {string} [name] The name of the region
 * @member {array} [regions] The list of Regions grouped under this Region in
 * the Geographic Hierarchy.
 */
export interface Region {
  code?: string;
  name?: string;
  regions?: Region[];
}

/**
 * @class
 * Initializes a new instance of the TrafficManagerGeographicHierarchy class.
 * @constructor
 * Class representing the Geographic hierarchy used with the Geographic traffic
 * routing method.
 *
 * @member {object} [geographicHierarchy] The region at the root of the
 * hierarchy from all the regions in the hierarchy can be retrieved.
 * @member {string} [geographicHierarchy.code] The code of the region
 * @member {string} [geographicHierarchy.name] The name of the region
 * @member {array} [geographicHierarchy.regions] The list of Regions grouped
 * under this Region in the Geographic Hierarchy.
 */
export interface TrafficManagerGeographicHierarchy extends ProxyResource {
  geographicHierarchy?: Region;
}


/**
 * @class
 * Initializes a new instance of the ProfileListResult class.
 * @constructor
 * The list Traffic Manager profiles operation response.
 *
 */
export interface ProfileListResult extends Array<Profile> {
}

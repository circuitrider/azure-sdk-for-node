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
 * Initializes a new instance of the Resource class.
 * @constructor
 * The resource model definition for Azure Resource Manager resource.
 *
 * @member {string} [id] Fully qualified identifier for the resource. Ex -
 * /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
 * @member {string} [name] The name of the resource
 * @member {string} [type] The type of the resource. Ex-
 * Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.
 * @member {string} [location] The geo-location where the resource lives
 */
export interface Resource extends BaseResource {
  readonly id?: string;
  readonly name?: string;
  readonly type?: string;
  location?: string;
}

/**
 * @class
 * Initializes a new instance of the ProxyResource class.
 * @constructor
 * The resource model definition for Azure Resource Manager proxy resource. It
 * will have everything other than required location and tags.
 *
 */
export interface ProxyResource extends Resource {
}

/**
 * @class
 * Initializes a new instance of the ManagedProxyResource class.
 * @constructor
 * The resource model definition for Azure Resource Manager proxy resource. It
 * will have everything other than required location and tags. This proxy
 * resource is explicitly created or updated by including it in the parent
 * resource.
 *
 * @member {string} [id] Fully qualified identifier for the resource. Ex -
 * /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
 * @member {string} [name] The name of the resource
 * @member {string} [type] The type of the resource. Ex-
 * Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.
 */
export interface ManagedProxyResource extends BaseResource {
  readonly id?: string;
  name?: string;
  readonly type?: string;
}

/**
 * @class
 * Initializes a new instance of the TrackedResource class.
 * @constructor
 * The resource model definition for Azure Resource Manager tracked top-level
 * resource.
 *
 * @member {object} [tags] Resource tags.
 */
export interface TrackedResource extends Resource {
  tags?: { [propertyName: string]: string };
}

/**
 * @class
 * Initializes a new instance of the ProvisionedResourceProperties class.
 * @constructor
 * Describes common properties of a provisioned resource.
 *
 * @member {string} [provisioningState] State of the resource.
 */
export interface ProvisionedResourceProperties {
  readonly provisioningState?: string;
}

/**
 * @class
 * Initializes a new instance of the Layer4IngressConfig class.
 * @constructor
 * Describes the layer4 configuration for public connectivity for this network.
 *
 * @member {string} [name] Layer4 ingress config name.
 * @member {number} [publicPort] Specifies the public port at which the service
 * endpoint below needs to be exposed.
 * @member {string} [applicationName] The application name which contains the
 * service to be exposed.
 * @member {string} [serviceName] The service whose endpoint needs to be
 * exposed at the public port.
 * @member {string} [endpointName] The service endpoint that needs to be
 * exposed.
 */
export interface Layer4IngressConfig {
  name?: string;
  publicPort?: number;
  applicationName?: string;
  serviceName?: string;
  endpointName?: string;
}

/**
 * @class
 * Initializes a new instance of the IngressConfig class.
 * @constructor
 * Describes public connectivity configuration for the network.
 *
 * @member {string} [qosLevel] The QoS tier for ingress. Possible values
 * include: 'Bronze'
 * @member {array} [layer4] Configuration for layer4 public connectivity for
 * this network.
 * @member {string} [publicIPAddress] The public IP address for reaching this
 * network.
 */
export interface IngressConfig {
  qosLevel?: string;
  layer4?: Layer4IngressConfig[];
  readonly publicIPAddress?: string;
}

/**
 * @class
 * Initializes a new instance of the NetworkResourceDescription class.
 * @constructor
 * This type describes a network resource.
 *
 * @member {string} [provisioningState] State of the resource.
 * @member {string} [description] User readable description of the network.
 * @member {string} addressPrefix the address prefix for this network.
 * @member {object} [ingressConfig] Configuration for public connectivity for
 * this network.
 * @member {string} [ingressConfig.qosLevel] The QoS tier for ingress. Possible
 * values include: 'Bronze'
 * @member {array} [ingressConfig.layer4] Configuration for layer4 public
 * connectivity for this network.
 * @member {string} [ingressConfig.publicIPAddress] The public IP address for
 * reaching this network.
 */
export interface NetworkResourceDescription extends TrackedResource {
  readonly provisioningState?: string;
  description?: string;
  addressPrefix: string;
  ingressConfig?: IngressConfig;
}

/**
 * @class
 * Initializes a new instance of the NetworkProperties class.
 * @constructor
 * Describes a network.
 *
 * @member {string} [description] User readable description of the network.
 * @member {string} addressPrefix the address prefix for this network.
 * @member {object} [ingressConfig] Configuration for public connectivity for
 * this network.
 * @member {string} [ingressConfig.qosLevel] The QoS tier for ingress. Possible
 * values include: 'Bronze'
 * @member {array} [ingressConfig.layer4] Configuration for layer4 public
 * connectivity for this network.
 * @member {string} [ingressConfig.publicIPAddress] The public IP address for
 * reaching this network.
 */
export interface NetworkProperties {
  description?: string;
  addressPrefix: string;
  ingressConfig?: IngressConfig;
}

/**
 * @class
 * Initializes a new instance of the VolumeProviderParametersAzureFile class.
 * @constructor
 * This type describes a volume provided by an Azure Files file share.
 *
 * @member {string} accountName Name of the Azure storage account for the File
 * Share.
 * @member {string} [accountKey] Access key of the Azure storage account for
 * the File Share.
 * @member {string} shareName Name of the Azure Files file share that provides
 * storage for the volume.
 */
export interface VolumeProviderParametersAzureFile {
  accountName: string;
  accountKey?: string;
  shareName: string;
}

/**
 * @class
 * Initializes a new instance of the VolumeResourceDescription class.
 * @constructor
 * This type describes a volume resource.
 *
 * @member {string} [provisioningState] State of the resource.
 * @member {string} [description] User readable description of the volume.
 * @member {object} [azureFileParameters] This type describes a volume provided
 * by an Azure Files file share.
 * @member {string} [azureFileParameters.accountName] Name of the Azure storage
 * account for the File Share.
 * @member {string} [azureFileParameters.accountKey] Access key of the Azure
 * storage account for the File Share.
 * @member {string} [azureFileParameters.shareName] Name of the Azure Files
 * file share that provides storage for the volume.
 */
export interface VolumeResourceDescription extends TrackedResource {
  readonly provisioningState?: string;
  description?: string;
  azureFileParameters?: VolumeProviderParametersAzureFile;
}

/**
 * @class
 * Initializes a new instance of the VolumeProperties class.
 * @constructor
 * This type describes properties of a volume resource.
 *
 * @member {string} [description] User readable description of the volume.
 * @member {object} [azureFileParameters] This type describes a volume provided
 * by an Azure Files file share.
 * @member {string} [azureFileParameters.accountName] Name of the Azure storage
 * account for the File Share.
 * @member {string} [azureFileParameters.accountKey] Access key of the Azure
 * storage account for the File Share.
 * @member {string} [azureFileParameters.shareName] Name of the Azure Files
 * file share that provides storage for the volume.
 */
export interface VolumeProperties {
  description?: string;
  azureFileParameters?: VolumeProviderParametersAzureFile;
}

/**
 * @class
 * Initializes a new instance of the ServiceResourceDescription class.
 * @constructor
 * This type describes a service resource.
 *
 * @member {string} osType The Operating system type required by the code in
 * service.
 * . Possible values include: 'Linux', 'Windows'
 * @member {array} codePackages Describes the set of code packages that forms
 * the service. A code package describes the container and the properties for
 * running it. All the code packages are started together on the same host and
 * share the same context (network, process etc.).
 * @member {array} [networkRefs] The names of the private networks that this
 * service needs to be part of.
 * @member {object} [diagnostics] Reference to sinks in DiagnosticsDescription.
 * @member {boolean} [diagnostics.enabled] Status of whether or not sinks are
 * enabled.
 * @member {array} [diagnostics.sinkRefs] List of sinks to be used if enabled.
 * References the list of sinks in DiagnosticsDescription.
 * @member {string} [description] User readable description of the service.
 * @member {number} [replicaCount] The number of replicas of the service to
 * create. Defaults to 1 if not specified.
 * @member {string} [healthState] The health state of a resource such as
 * Application, Service, or Network. Possible values include: 'Invalid', 'Ok',
 * 'Warning', 'Error', 'Unknown'
 * @member {string} [status] Represents the status of the service. Possible
 * values include: 'Unknown', 'Active', 'Upgrading', 'Deleting', 'Creating',
 * 'Failed'
 */
export interface ServiceResourceDescription extends ManagedProxyResource {
  osType: string;
  codePackages: ContainerCodePackageProperties[];
  networkRefs?: NetworkRef[];
  diagnostics?: DiagnosticsRef;
  description?: string;
  replicaCount?: number;
  healthState?: string;
  readonly status?: string;
}

/**
 * @class
 * Initializes a new instance of the DiagnosticsSinkProperties class.
 * @constructor
 * Properties of a DiagnosticsSink.
 *
 * @member {string} [name] Name of the sink. This value is referenced by
 * DiagnosticsReferenceDescription
 * @member {string} [description] A description of the sink.
 * @member {string} kind Polymorphic Discriminator
 */
export interface DiagnosticsSinkProperties {
  name?: string;
  description?: string;
  kind: string;
}

/**
 * @class
 * Initializes a new instance of the DiagnosticsDescription class.
 * @constructor
 * Describes the diagnostics options available
 *
 * @member {array} [sinks] List of supported sinks that can be referenced.
 * @member {boolean} [enabled] Status of whether or not sinks are enabled.
 * @member {array} [defaultSinkRefs] The sinks to be used if diagnostics is
 * enabled. Sink choices can be overridden at the service and code package
 * level.
 */
export interface DiagnosticsDescription {
  sinks?: DiagnosticsSinkProperties[];
  enabled?: boolean;
  defaultSinkRefs?: string[];
}

/**
 * @class
 * Initializes a new instance of the ApplicationResourceDescription class.
 * @constructor
 * This type describes an application resource.
 *
 * @member {string} [provisioningState] State of the resource.
 * @member {string} [description] User readable description of the application.
 * @member {string} [debugParams] Internal use.
 * @member {array} [services] describes the services in the application.
 * @member {string} [healthState] Describes the health state of an application
 * resource. Possible values include: 'Invalid', 'Ok', 'Warning', 'Error',
 * 'Unknown'
 * @member {string} [unhealthyEvaluation] When the application's health state
 * is not 'Ok', this additional details from service fabric Health Manager for
 * the user to know why the application is marked unhealthy.
 * @member {string} [status] Status of the application resource. Possible
 * values include: 'Invalid', 'Ready', 'Upgrading', 'Creating', 'Deleting',
 * 'Failed'
 * @member {string} [statusDetails] Gives additional information about the
 * current status of the application deployment.
 * @member {array} [serviceNames] Names of the services in the application.
 * @member {object} [diagnostics] Describes the diagnostics definition and
 * usage for an application resource.
 * @member {array} [diagnostics.sinks] List of supported sinks that can be
 * referenced.
 * @member {boolean} [diagnostics.enabled] Status of whether or not sinks are
 * enabled.
 * @member {array} [diagnostics.defaultSinkRefs] The sinks to be used if
 * diagnostics is enabled. Sink choices can be overridden at the service and
 * code package level.
 */
export interface ApplicationResourceDescription extends TrackedResource {
  readonly provisioningState?: string;
  description?: string;
  debugParams?: string;
  services?: ServiceResourceDescription[];
  readonly healthState?: string;
  readonly unhealthyEvaluation?: string;
  readonly status?: string;
  readonly statusDetails?: string;
  readonly serviceNames?: string[];
  diagnostics?: DiagnosticsDescription;
}

/**
 * @class
 * Initializes a new instance of the ApplicationProperties class.
 * @constructor
 * This type describes properties of an application resource.
 *
 * @member {string} [description] User readable description of the application.
 * @member {string} [debugParams] Internal use.
 * @member {array} [services] describes the services in the application.
 * @member {string} [healthState] Describes the health state of an application
 * resource. Possible values include: 'Invalid', 'Ok', 'Warning', 'Error',
 * 'Unknown'
 * @member {string} [unhealthyEvaluation] When the application's health state
 * is not 'Ok', this additional details from service fabric Health Manager for
 * the user to know why the application is marked unhealthy.
 * @member {string} [status] Status of the application resource. Possible
 * values include: 'Invalid', 'Ready', 'Upgrading', 'Creating', 'Deleting',
 * 'Failed'
 * @member {string} [statusDetails] Gives additional information about the
 * current status of the application deployment.
 * @member {array} [serviceNames] Names of the services in the application.
 * @member {object} [diagnostics] Describes the diagnostics definition and
 * usage for an application resource.
 * @member {array} [diagnostics.sinks] List of supported sinks that can be
 * referenced.
 * @member {boolean} [diagnostics.enabled] Status of whether or not sinks are
 * enabled.
 * @member {array} [diagnostics.defaultSinkRefs] The sinks to be used if
 * diagnostics is enabled. Sink choices can be overridden at the service and
 * code package level.
 */
export interface ApplicationProperties {
  description?: string;
  debugParams?: string;
  services?: ServiceResourceDescription[];
  readonly healthState?: string;
  readonly unhealthyEvaluation?: string;
  readonly status?: string;
  readonly statusDetails?: string;
  readonly serviceNames?: string[];
  diagnostics?: DiagnosticsDescription;
}

/**
 * @class
 * Initializes a new instance of the ContainerState class.
 * @constructor
 * The container state.
 *
 * @member {string} [state] The state of this container
 * @member {date} [startTime] Date/time when the container state started.
 * @member {string} [exitCode] The container exit code.
 * @member {date} [finishTime] Date/time when the container state finished.
 * @member {string} [detailStatus] Human-readable status of this state.
 */
export interface ContainerState {
  state?: string;
  startTime?: Date;
  exitCode?: string;
  finishTime?: Date;
  detailStatus?: string;
}

/**
 * @class
 * Initializes a new instance of the ContainerEvent class.
 * @constructor
 * A container event.
 *
 * @member {string} [name] The name of the container event.
 * @member {number} [count] The count of the event.
 * @member {string} [firstTimestamp] Date/time of the first event.
 * @member {string} [lastTimestamp] Date/time of the last event.
 * @member {string} [message] The event message
 * @member {string} [type] The event type.
 */
export interface ContainerEvent {
  name?: string;
  count?: number;
  firstTimestamp?: string;
  lastTimestamp?: string;
  message?: string;
  type?: string;
}

/**
 * @class
 * Initializes a new instance of the ContainerInstanceView class.
 * @constructor
 * Runtime information of a container instance.
 *
 * @member {number} [restartCount] The number of times the container has been
 * restarted.
 * @member {object} [currentState] Current container instance state.
 * @member {string} [currentState.state] The state of this container
 * @member {date} [currentState.startTime] Date/time when the container state
 * started.
 * @member {string} [currentState.exitCode] The container exit code.
 * @member {date} [currentState.finishTime] Date/time when the container state
 * finished.
 * @member {string} [currentState.detailStatus] Human-readable status of this
 * state.
 * @member {object} [previousState] Previous container instance state.
 * @member {string} [previousState.state] The state of this container
 * @member {date} [previousState.startTime] Date/time when the container state
 * started.
 * @member {string} [previousState.exitCode] The container exit code.
 * @member {date} [previousState.finishTime] Date/time when the container state
 * finished.
 * @member {string} [previousState.detailStatus] Human-readable status of this
 * state.
 * @member {array} [events] The events of this container instance.
 */
export interface ContainerInstanceView {
  restartCount?: number;
  currentState?: ContainerState;
  previousState?: ContainerState;
  events?: ContainerEvent[];
}

/**
 * @class
 * Initializes a new instance of the ContainerLabel class.
 * @constructor
 * Describes a container label.
 *
 * @member {string} name The name of the container label.
 * @member {string} value The value of the container label.
 */
export interface ContainerLabel {
  name: string;
  value: string;
}

/**
 * @class
 * Initializes a new instance of the ContainerLogs class.
 * @constructor
 * The logs of the container.
 *
 * @member {string} [content] content of the log.
 */
export interface ContainerLogs {
  content?: string;
}

/**
 * @class
 * Initializes a new instance of the ImageRegistryCredential class.
 * @constructor
 * Image registry credential.
 *
 * @member {string} server Docker image registry server, without protocol such
 * as `http` and `https`.
 * @member {string} username The username for the private registry.
 * @member {string} [password] The password for the private registry.
 */
export interface ImageRegistryCredential {
  server: string;
  username: string;
  password?: string;
}

/**
 * @class
 * Initializes a new instance of the ResourceLimits class.
 * @constructor
 * This type describes the resource limits for a given container. It describes
 * the most amount of resources a container is allowed to use before being
 * restarted.
 *
 * @member {number} [memoryInGB] The memory limit in GB.
 * @member {number} [cpu] CPU limits in cores. At present, only full cores are
 * supported.
 */
export interface ResourceLimits {
  memoryInGB?: number;
  cpu?: number;
}

/**
 * @class
 * Initializes a new instance of the ResourceRequests class.
 * @constructor
 * This type describes the requested resources for a given container. It
 * describes the least amount of resources required for the container. A
 * container can consume more than requested resources up to the specified
 * limits before being restarted. Currently, the requested resources are
 * treated as limits.
 *
 *
 * @member {number} memoryInGB The memory request in GB for this container.
 * @member {number} cpu Requested number of CPU cores. At present, only full
 * cores are supported.
 */
export interface ResourceRequests {
  memoryInGB: number;
  cpu: number;
}

/**
 * @class
 * Initializes a new instance of the ResourceRequirements class.
 * @constructor
 * This type describes the resource requirements for a container or a service.
 *
 * @member {object} requests Describes the requested resources for a given
 * container.
 * @member {number} [requests.memoryInGB] The memory request in GB for this
 * container.
 * @member {number} [requests.cpu] Requested number of CPU cores. At present,
 * only full cores are supported.
 * @member {object} [limits] Describes the maximum limits on the resources for
 * a given container.
 * @member {number} [limits.memoryInGB] The memory limit in GB.
 * @member {number} [limits.cpu] CPU limits in cores. At present, only full
 * cores are supported.
 */
export interface ResourceRequirements {
  requests: ResourceRequests;
  limits?: ResourceLimits;
}

/**
 * @class
 * Initializes a new instance of the AvailableOperationDisplay class.
 * @constructor
 * An operation available at the listed Azure resource provider.
 *
 * @member {string} [provider] Name of the operation provider.
 * @member {string} [resource] Name of the resource on which the operation is
 * available.
 * @member {string} [operation] Name of the available operation.
 * @member {string} [description] Description of the available operation.
 */
export interface AvailableOperationDisplay {
  provider?: string;
  resource?: string;
  operation?: string;
  description?: string;
}

/**
 * @class
 * Initializes a new instance of the OperationResult class.
 * @constructor
 * List of operations available at the listed Azure resource provider.
 *
 * @member {string} [name] The name of the operation.
 * @member {object} [display] The object that represents the operation.
 * @member {string} [display.provider] Name of the operation provider.
 * @member {string} [display.resource] Name of the resource on which the
 * operation is available.
 * @member {string} [display.operation] Name of the available operation.
 * @member {string} [display.description] Description of the available
 * operation.
 * @member {string} [origin] Origin result
 * @member {string} [nextLink] The URL to use for getting the next set of
 * results.
 */
export interface OperationResult {
  name?: string;
  display?: AvailableOperationDisplay;
  origin?: string;
  nextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the ErrorModel class.
 * @constructor
 * The error details.
 *
 * @member {string} [code] The error code.
 * @member {string} [message] The error message.
 */
export interface ErrorModel {
  code?: string;
  message?: string;
}

/**
 * @class
 * Initializes a new instance of the EnvironmentVariable class.
 * @constructor
 * Describes an environment variable for the container.
 *
 * @member {string} [name] The name of the environment variable.
 * @member {string} [value] The value of the environment variable.
 */
export interface EnvironmentVariable {
  name?: string;
  value?: string;
}

/**
 * @class
 * Initializes a new instance of the Setting class.
 * @constructor
 * Describes a setting for the container.
 *
 * @member {string} [name] The name of the setting.
 * @member {string} [value] The value of the setting.
 */
export interface Setting {
  name?: string;
  value?: string;
}

/**
 * @class
 * Initializes a new instance of the EndpointProperties class.
 * @constructor
 * Describes a container endpoint.
 *
 * @member {string} name The name of the endpoint.
 * @member {number} [port] Port used by the container.
 */
export interface EndpointProperties {
  name: string;
  port?: number;
}

/**
 * @class
 * Initializes a new instance of the ContainerVolume class.
 * @constructor
 * Describes how a volume is attached to a container.
 *
 * @member {string} name Name of the volume.
 * @member {boolean} [readOnly] The flag indicating whether the volume is read
 * only. Default is 'false'.
 * @member {string} destinationPath The path within the container at which the
 * volume should be mounted. Only valid path characters are allowed.
 */
export interface ContainerVolume {
  name: string;
  readOnly?: boolean;
  destinationPath: string;
}

/**
 * @class
 * Initializes a new instance of the DiagnosticsRef class.
 * @constructor
 * Reference to sinks in DiagnosticsDescription.
 *
 * @member {boolean} [enabled] Status of whether or not sinks are enabled.
 * @member {array} [sinkRefs] List of sinks to be used if enabled. References
 * the list of sinks in DiagnosticsDescription.
 */
export interface DiagnosticsRef {
  enabled?: boolean;
  sinkRefs?: string[];
}

/**
 * @class
 * Initializes a new instance of the ContainerCodePackageProperties class.
 * @constructor
 * Describes a container and its runtime properties.
 *
 * @member {string} name The name of the code package.
 * @member {string} image The Container image to use.
 * @member {object} [imageRegistryCredential] Image registry credential.
 * @member {string} [imageRegistryCredential.server] Docker image registry
 * server, without protocol such as `http` and `https`.
 * @member {string} [imageRegistryCredential.username] The username for the
 * private registry.
 * @member {string} [imageRegistryCredential.password] The password for the
 * private registry.
 * @member {string} [entrypoint] Override for the default entry point in the
 * container.
 * @member {array} [commands] Command array to execute within the container in
 * exec form.
 * @member {array} [environmentVariables] The environment variables to set in
 * this container
 * @member {array} [settings] The settings to set in this container. The
 * setting file path can be fetched from environment variable
 * "Fabric_SettingPath". The path for Windows container is "C:\\secrets". The
 * path for Linux container is "/var/secrets".
 * @member {array} [labels] The labels to set in this container.
 * @member {array} [endpoints] The endpoints exposed by this container.
 * @member {object} resources This type describes the resource requirements for
 * a container or a service.
 * @member {object} [resources.requests] Describes the requested resources for
 * a given container.
 * @member {number} [resources.requests.memoryInGB] The memory request in GB
 * for this container.
 * @member {number} [resources.requests.cpu] Requested number of CPU cores. At
 * present, only full cores are supported.
 * @member {object} [resources.limits] Describes the maximum limits on the
 * resources for a given container.
 * @member {number} [resources.limits.memoryInGB] The memory limit in GB.
 * @member {number} [resources.limits.cpu] CPU limits in cores. At present,
 * only full cores are supported.
 * @member {array} [volumeRefs] The volumes to be attached to the container.
 * @member {object} [instanceView] Runtime information of a container instance.
 * @member {number} [instanceView.restartCount] The number of times the
 * container has been restarted.
 * @member {object} [instanceView.currentState] Current container instance
 * state.
 * @member {string} [instanceView.currentState.state] The state of this
 * container
 * @member {date} [instanceView.currentState.startTime] Date/time when the
 * container state started.
 * @member {string} [instanceView.currentState.exitCode] The container exit
 * code.
 * @member {date} [instanceView.currentState.finishTime] Date/time when the
 * container state finished.
 * @member {string} [instanceView.currentState.detailStatus] Human-readable
 * status of this state.
 * @member {object} [instanceView.previousState] Previous container instance
 * state.
 * @member {string} [instanceView.previousState.state] The state of this
 * container
 * @member {date} [instanceView.previousState.startTime] Date/time when the
 * container state started.
 * @member {string} [instanceView.previousState.exitCode] The container exit
 * code.
 * @member {date} [instanceView.previousState.finishTime] Date/time when the
 * container state finished.
 * @member {string} [instanceView.previousState.detailStatus] Human-readable
 * status of this state.
 * @member {array} [instanceView.events] The events of this container instance.
 * @member {object} [diagnostics] Reference to sinks in DiagnosticsDescription.
 * @member {boolean} [diagnostics.enabled] Status of whether or not sinks are
 * enabled.
 * @member {array} [diagnostics.sinkRefs] List of sinks to be used if enabled.
 * References the list of sinks in DiagnosticsDescription.
 */
export interface ContainerCodePackageProperties {
  name: string;
  image: string;
  imageRegistryCredential?: ImageRegistryCredential;
  entrypoint?: string;
  commands?: string[];
  environmentVariables?: EnvironmentVariable[];
  settings?: Setting[];
  labels?: ContainerLabel[];
  endpoints?: EndpointProperties[];
  resources: ResourceRequirements;
  volumeRefs?: ContainerVolume[];
  readonly instanceView?: ContainerInstanceView;
  diagnostics?: DiagnosticsRef;
}

/**
 * @class
 * Initializes a new instance of the ServiceReplicaProperties class.
 * @constructor
 * Describes the properties of a service replica.
 *
 * @member {string} osType The Operating system type required by the code in
 * service.
 * . Possible values include: 'Linux', 'Windows'
 * @member {array} codePackages Describes the set of code packages that forms
 * the service. A code package describes the container and the properties for
 * running it. All the code packages are started together on the same host and
 * share the same context (network, process etc.).
 * @member {array} [networkRefs] The names of the private networks that this
 * service needs to be part of.
 * @member {object} [diagnostics] Reference to sinks in DiagnosticsDescription.
 * @member {boolean} [diagnostics.enabled] Status of whether or not sinks are
 * enabled.
 * @member {array} [diagnostics.sinkRefs] List of sinks to be used if enabled.
 * References the list of sinks in DiagnosticsDescription.
 */
export interface ServiceReplicaProperties {
  osType: string;
  codePackages: ContainerCodePackageProperties[];
  networkRefs?: NetworkRef[];
  diagnostics?: DiagnosticsRef;
}

/**
 * @class
 * Initializes a new instance of the ServiceReplicaDescription class.
 * @constructor
 * This type describes a replica of a service resource.
 *
 * @member {string} [replicaName] Name of the replica.
 */
export interface ServiceReplicaDescription extends ServiceReplicaProperties {
  replicaName?: string;
}

/**
 * @class
 * Initializes a new instance of the NetworkRef class.
 * @constructor
 * Describes a network reference in a service.
 *
 * @member {string} [name] Name of the network.
 */
export interface NetworkRef {
  name?: string;
}

/**
 * @class
 * Initializes a new instance of the AzureInternalMonitoringPipelineSinkDescription class.
 * @constructor
 * Diagnostics settings for Geneva.
 *
 * @member {string} [accountName] Azure Internal monitoring pipeline account.
 * @member {string} [namespace] Azure Internal monitoring pipeline account
 * namespace.
 * @member {string} [maConfigUrl] Azure Internal monitoring agent
 * configuration.
 * @member {object} [fluentdConfigUrl] Azure Internal monitoring agent fluentd
 * configuration.
 * @member {string} [autoKeyConfigUrl] Azure Internal monitoring pipeline
 * autokey associated with the certificate.
 */
export interface AzureInternalMonitoringPipelineSinkDescription extends DiagnosticsSinkProperties {
  accountName?: string;
  namespace?: string;
  maConfigUrl?: string;
  fluentdConfigUrl?: any;
  autoKeyConfigUrl?: string;
}


/**
 * @class
 * Initializes a new instance of the ApplicationResourceDescriptionList class.
 * @constructor
 * A pageable list of application resources.
 *
 * @member {string} [nextLink] URI to fetch the next page of the list.
 */
export interface ApplicationResourceDescriptionList extends Array<ApplicationResourceDescription> {
  nextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the ServiceList class.
 * @constructor
 * A pageable list of all services in an application.
 *
 *
 * @member {string} [nextLink] URI to fetch the next page of the list.
 */
export interface ServiceList extends Array<ServiceResourceDescription> {
  nextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the ServiceReplicaList class.
 * @constructor
 * A pageable list of replicas of a service resource.
 *
 *
 * @member {string} [nextLink] URI to fetch the next page of the list.
 */
export interface ServiceReplicaList extends Array<ServiceReplicaDescription> {
  nextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the OperationListResult class.
 * @constructor
 * Describes the result of the request to list Service Fabric operations.
 *
 * @member {string} [nextLink] URL to get the next set of operation list
 * results if there are any.
 */
export interface OperationListResult extends Array<OperationResult> {
  readonly nextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the NetworkResourceDescriptionList class.
 * @constructor
 * A pageable list of network resources.
 *
 * @member {string} [nextLink] URI to fetch the next page of the list.
 */
export interface NetworkResourceDescriptionList extends Array<NetworkResourceDescription> {
  nextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the VolumeResourceDescriptionList class.
 * @constructor
 * A pageable list of volume resources.
 *
 * @member {string} [nextLink] URI to fetch the next page of the list.
 */
export interface VolumeResourceDescriptionList extends Array<VolumeResourceDescription> {
  nextLink?: string;
}

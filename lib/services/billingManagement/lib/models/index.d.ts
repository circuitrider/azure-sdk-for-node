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
 * The Resource model definition.
 *
 * @member {string} [id] Resource Id.
 * @member {string} [name] Resource name.
 * @member {string} [type] Resource type.
 */
export interface Resource extends BaseResource {
  readonly id?: string;
  readonly name?: string;
  readonly type?: string;
}

/**
 * @class
 * Initializes a new instance of the EnrollmentAccount class.
 * @constructor
 * An enrollment account resource.
 *
 * @member {string} [principalName] The account owner's principal name.
 */
export interface EnrollmentAccount extends Resource {
  readonly principalName?: string;
}

/**
 * @class
 * Initializes a new instance of the BillingPeriod class.
 * @constructor
 * A billing period resource.
 *
 * @member {date} [billingPeriodStartDate] The start of the date range covered
 * by the billing period.
 * @member {date} [billingPeriodEndDate] The end of the date range covered by
 * the billing period.
 * @member {array} [invoiceIds] Array of invoice ids that associated with.
 */
export interface BillingPeriod extends Resource {
  readonly billingPeriodStartDate?: Date;
  readonly billingPeriodEndDate?: Date;
  readonly invoiceIds?: string[];
}

/**
 * @class
 * Initializes a new instance of the DownloadUrl class.
 * @constructor
 * A secure URL that can be used to download a PDF invoice until the URL
 * expires.
 *
 * @member {date} [expiryTime] The time in UTC at which this download URL will
 * expire.
 * @member {string} [url] The URL to the PDF file.
 */
export interface DownloadUrl {
  readonly expiryTime?: Date;
  readonly url?: string;
}

/**
 * @class
 * Initializes a new instance of the ErrorDetails class.
 * @constructor
 * The details of the error.
 *
 * @member {string} [code] Error code.
 * @member {string} [message] Error message indicating why the operation
 * failed.
 * @member {string} [target] The target of the particular error.
 */
export interface ErrorDetails {
  readonly code?: string;
  readonly message?: string;
  readonly target?: string;
}

/**
 * @class
 * Initializes a new instance of the ErrorResponse class.
 * @constructor
 * Error response indicates that the service is not able to process the
 * incoming request. The reason is provided in the error message.
 *
 * @member {object} [error] The details of the error.
 * @member {string} [error.code] Error code.
 * @member {string} [error.message] Error message indicating why the operation
 * failed.
 * @member {string} [error.target] The target of the particular error.
 */
export interface ErrorResponse {
  error?: ErrorDetails;
}

/**
 * @class
 * Initializes a new instance of the Invoice class.
 * @constructor
 * An invoice resource can be used download a PDF version of an invoice.
 *
 * @member {object} [downloadUrl] A secure link to download the PDF version of
 * an invoice. The link will cease to work after its expiry time is reached.
 * @member {date} [downloadUrl.expiryTime] The time in UTC at which this
 * download URL will expire.
 * @member {string} [downloadUrl.url] The URL to the PDF file.
 * @member {date} [invoicePeriodStartDate] The start of the date range covered
 * by the invoice.
 * @member {date} [invoicePeriodEndDate] The end of the date range covered by
 * the invoice.
 * @member {array} [billingPeriodIds] Array of billing period ids that the
 * invoice is attributed to.
 */
export interface Invoice extends Resource {
  downloadUrl?: DownloadUrl;
  readonly invoicePeriodStartDate?: Date;
  readonly invoicePeriodEndDate?: Date;
  readonly billingPeriodIds?: string[];
}

/**
 * @class
 * Initializes a new instance of the OperationDisplay class.
 * @constructor
 * The object that represents the operation.
 *
 * @member {string} [provider] Service provider: Microsoft.Billing.
 * @member {string} [resource] Resource on which the operation is performed:
 * Invoice, etc.
 * @member {string} [operation] Operation type: Read, write, delete, etc.
 */
export interface OperationDisplay {
  readonly provider?: string;
  readonly resource?: string;
  readonly operation?: string;
}

/**
 * @class
 * Initializes a new instance of the Operation class.
 * @constructor
 * A Billing REST API operation.
 *
 * @member {string} [name] Operation name: {provider}/{resource}/{operation}.
 * @member {object} [display] The object that represents the operation.
 * @member {string} [display.provider] Service provider: Microsoft.Billing.
 * @member {string} [display.resource] Resource on which the operation is
 * performed: Invoice, etc.
 * @member {string} [display.operation] Operation type: Read, write, delete,
 * etc.
 */
export interface Operation {
  readonly name?: string;
  display?: OperationDisplay;
}


/**
 * @class
 * Initializes a new instance of the EnrollmentAccountListResult class.
 * @constructor
 * Result of listing enrollment accounts.
 *
 * @member {string} [nextLink] The link (url) to the next page of results.
 */
export interface EnrollmentAccountListResult extends Array<EnrollmentAccount> {
  readonly nextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the BillingPeriodsListResult class.
 * @constructor
 * Result of listing billing periods. It contains a list of available billing
 * periods in reverse chronological order.
 *
 * @member {string} [nextLink] The link (url) to the next page of results.
 */
export interface BillingPeriodsListResult extends Array<BillingPeriod> {
  readonly nextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the InvoicesListResult class.
 * @constructor
 * Result of listing invoices. It contains a list of available invoices in
 * reverse chronological order.
 *
 * @member {string} [nextLink] The link (url) to the next page of results.
 */
export interface InvoicesListResult extends Array<Invoice> {
  readonly nextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the OperationListResult class.
 * @constructor
 * Result listing billing operations. It contains a list of operations and a
 * URL link to get the next set of results.
 *
 * @member {string} [nextLink] URL to get the next set of operation list
 * results if there are any.
 */
export interface OperationListResult extends Array<Operation> {
  readonly nextLink?: string;
}

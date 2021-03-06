// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'test1';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://test1.westus.batch.azure.com';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'f30ef677-64a9-4768-934f-5fbbc0e1ad27';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://test1.westus.batch.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/pools?api-version=2019-06-01.9.0', '*')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Thu, 06 Jun 2019 23:42:51 GMT',
  etag: '0x8D6EAD8B0658B63',
  location:
   'https://test1.westus.batch.azure.com/pools/nodesdktestpool2',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '2f0380d9-f19f-4d67-9173-1b86db898762',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  dataserviceid:
   'https://test1.westus.batch.azure.com/pools/nodesdktestpool2',
  date: 'Thu, 06 Jun 2019 23:42:50 GMT',
  connection: 'close' });
 return result; }]];
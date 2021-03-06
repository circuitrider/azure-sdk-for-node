// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'test1';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://test1.westus.batch.azure.com';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'f30ef677-64a9-4768-934f-5fbbc0e1ad27';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://test1.westus.batch.azure.com:443')
  .post('/jobschedules/NodeSDKTestSchedule/disable?api-version=2019-06-01.9.0')
  .reply(204, "", { 'content-length': '0',
  'last-modified': 'Fri, 07 Jun 2019 05:30:49 GMT',
  etag: '0x8D6EB094D06E7EB',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '3f0096ec-5e38-48b8-9b5e-c3dda8193edc',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  dataserviceid:
   'https://test1.westus.batch.azure.com/jobschedules/NodeSDKTestSchedule/disable',
  date: 'Fri, 07 Jun 2019 05:30:49 GMT',
  connection: 'close' });
 return result; }]];
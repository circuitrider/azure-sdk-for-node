// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'test1';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://test1.westus.batch.azure.com';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'f30ef677-64a9-4768-934f-5fbbc0e1ad27';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://test1.westus.batch.azure.com:443')
  .post('/pools/nodesdktestpool1/nodes/tvm-1650185656_5-20190607t074944z/reimage?api-version=2019-06-01.9.0')
  .reply(202, "", { 'transfer-encoding': 'chunked',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'f85f65ca-7401-43d8-b60a-b45b4ff14dc1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  dataserviceid:
   'https://test1.westus.batch.azure.com/pools/nodesdktestpool1/nodes/tvm-1650185656_5-20190607t074944z/reimage',
  date: 'Fri, 07 Jun 2019 07:57:43 GMT',
  connection: 'close' });
 return result; }]];
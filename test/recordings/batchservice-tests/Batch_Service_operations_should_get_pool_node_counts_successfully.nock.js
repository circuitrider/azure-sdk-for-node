// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'test1';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://test1.westus.batch.azure.com';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'f30ef677-64a9-4768-934f-5fbbc0e1ad27';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://test1.westus.batch.azure.com:443')
  .get('/nodecounts?api-version=2019-06-01.9.0')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://test1.westus.batch.azure.com/$metadata#poolnodecounts\",\"value\":[\r\n    {\r\n      \"poolId\":\"nodesdkinboundendpointpool\",\"dedicated\":{\r\n        \"creating\":0,\"idle\":1,\"leavingPool\":0,\"offline\":0,\"preempted\":0,\"rebooting\":0,\"reimaging\":0,\"running\":0,\"starting\":0,\"startTaskFailed\":0,\"unusable\":0,\"unknown\":0,\"waitingForStartTask\":0,\"total\":1\r\n      },\"lowPriority\":{\r\n        \"creating\":0,\"idle\":0,\"leavingPool\":0,\"offline\":0,\"preempted\":0,\"rebooting\":0,\"reimaging\":0,\"running\":0,\"starting\":0,\"startTaskFailed\":0,\"unusable\":0,\"unknown\":0,\"waitingForStartTask\":0,\"total\":0\r\n      }\r\n    },{\r\n      \"poolId\":\"testacr1\",\"dedicated\":{\r\n        \"creating\":0,\"idle\":0,\"leavingPool\":0,\"offline\":0,\"preempted\":0,\"rebooting\":0,\"reimaging\":0,\"running\":0,\"starting\":0,\"startTaskFailed\":0,\"unusable\":0,\"unknown\":0,\"waitingForStartTask\":0,\"total\":0\r\n      },\"lowPriority\":{\r\n        \"creating\":0,\"idle\":0,\"leavingPool\":0,\"offline\":0,\"preempted\":0,\"rebooting\":0,\"reimaging\":0,\"running\":0,\"starting\":0,\"startTaskFailed\":0,\"unusable\":0,\"unknown\":0,\"waitingForStartTask\":0,\"total\":0\r\n      }\r\n    },{\r\n      \"poolId\":\"testacr3\",\"dedicated\":{\r\n        \"creating\":0,\"idle\":0,\"leavingPool\":0,\"offline\":0,\"preempted\":0,\"rebooting\":0,\"reimaging\":0,\"running\":0,\"starting\":0,\"startTaskFailed\":0,\"unusable\":0,\"unknown\":0,\"waitingForStartTask\":0,\"total\":0\r\n      },\"lowPriority\":{\r\n        \"creating\":0,\"idle\":0,\"leavingPool\":0,\"offline\":0,\"preempted\":0,\"rebooting\":0,\"reimaging\":0,\"running\":0,\"starting\":0,\"startTaskFailed\":0,\"unusable\":0,\"unknown\":0,\"waitingForStartTask\":0,\"total\":0\r\n      }\r\n    }\r\n  ]\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'f4811bda-5956-413d-b258-e4d50a1e728f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Fri, 07 Jun 2019 06:01:00 GMT',
  connection: 'close' });
 return result; }]];
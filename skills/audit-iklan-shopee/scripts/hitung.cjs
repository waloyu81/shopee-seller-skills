'use strict';
const fs = require('node:fs');
const { reconcile, orderContribution, breakEven, adBreakEven } = require('./math.cjs');
function run(request) {
  if (!request || !request.input || typeof request.input !== 'object') throw new Error('operation and input required');
  switch (request.operation) {
    case 'reconcile': return reconcile(request.input);
    case 'contribution': return { contribution: orderContribution(request.input) };
    case 'breakEven': return breakEven(request.input.revenue, request.input.contribution);
    case 'adBreakEven': return adBreakEven(request.input);
    default: throw new Error('unsupported operation');
  }
}
if (require.main === module) {
  try { process.stdout.write(JSON.stringify(run(JSON.parse(fs.readFileSync(0, 'utf8')))) + '\n'); }
  catch (error) { process.stderr.write(JSON.stringify({ error: error.message }) + '\n'); process.exitCode = 1; }
}
module.exports = { run };

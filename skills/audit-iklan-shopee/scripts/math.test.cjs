'use strict';
const assert = require('node:assert/strict');
const { spawnSync } = require('node:child_process');
const path = require('node:path');
const { run } = require('./hitung.cjs');
const { roas } = require('./math.cjs');
const near = (a,b) => assert.ok(Math.abs(a-b)<1e-9);
// Synthetic fixtures, unrelated to any real store.
const rows = [{id:'a',revenue:40000,spend:10000},{id:'b',revenue:10000,spend:0}];
const input = {summary:{revenue:50000,spend:10000},rows,complete:true,comparable:true};
const matched = run({operation:'reconcile',input});
assert.equal(matched.status,'matched');
assert.equal(matched.rowTotals.roas,5);
assert.equal(run({operation:'reconcile',input:{...input,complete:false}}).status,'scope_unverified');
assert.equal(run({operation:'reconcile',input:{...input,comparable:false}}).status,'scope_unverified');
const mismatch = run({operation:'reconcile',input:{...input,summary:{revenue:51000,spend:10001}}});
assert.equal(mismatch.status,'mismatch');
assert.deepEqual(mismatch.delta,{revenue:1000,spend:1});
assert.throws(()=>run({operation:'reconcile',input:{...input,rows:[rows[0],rows[0]]}}));
assert.throws(()=>run({operation:'reconcile',input:{...input,complete:undefined}}));
assert.equal(roas(10000,0),null);
assert.equal(roas(0,100),0);
assert.throws(()=>roas(null,100));
assert.throws(()=>roas(-1,100));
const base={revenue:10000,cogs:5000,platformFees:2000,affiliateFees:0,packing:500,otherVariableCosts:0};
const one=run({operation:'contribution',input:base}).contribution;
const two=run({operation:'contribution',input:{...base,revenue:20000,cogs:10000,platformFees:3000}}).contribution;
assert.equal(one,2500);
assert.equal(two,6500);
assert.equal(two-2*one,1500); // shared process fee + packing, charged once
assert.equal(run({operation:'breakEven',input:{revenue:10000,contribution:one}}).roas,4);
near(run({operation:'breakEven',input:{revenue:20000,contribution:two}}).roas,20000/6500);
assert.equal(run({operation:'breakEven',input:{revenue:10000,contribution:0}}).roas,null);
assert.equal(run({operation:'breakEven',input:{revenue:10000,contribution:-100}}).status,'no_positive_ad_budget');
assert.equal(run({operation:'breakEven',input:{revenue:0,contribution:-100}}).status,'no_revenue');
assert.throws(()=>run({operation:'contribution',input:{...base,packing:undefined}}));
assert.throws(()=>run({operation:'contribution',input:{...base,affiliateFees:'0'}}));
near(run({operation:'breakEven',input:{revenue:30000,contribution:7000}}).roas,30000/7000);
assert.notEqual(30000/7000,(10000/6000+20000/1000)/2);
assert.throws(()=>run({operation:'unknown',input:{}}));
// Synthetic external-tax scenarios; no default tax rate inferred by the helper.
const adInput = { revenue:10000, contribution:2500, adCostFactor:1.1 };
const adjusted = run({operation:'adBreakEven',input:adInput});
near(adjusted.baseRoas,4);
near(adjusted.roas,4.4);
near(run({operation:'adBreakEven',input:{...adInput,adCostFactor:1}}).roas,4);
near(run({operation:'adBreakEven',input:{...adInput,revenue:12000}}).roas,5.28);
// At the adjusted threshold the actual cost matches the contribution.
near(adInput.revenue/adjusted.roas*adInput.adCostFactor,adInput.contribution);
assert.equal(run({operation:'adBreakEven',input:{...adInput,contribution:0}}).roas,null);
assert.equal(run({operation:'adBreakEven',input:{...adInput,contribution:-10}}).roas,null);
assert.equal(run({operation:'adBreakEven',input:{...adInput,revenue:0}}).status,'no_revenue');
for (const factor of [undefined,null,0,-1,'1.1',Infinity]) {
  assert.throws(()=>run({operation:'adBreakEven',input:{...adInput,adCostFactor:factor}}));
}
const cli = spawnSync(process.execPath,[path.join(__dirname,'hitung.cjs')],{input:JSON.stringify({operation:'breakEven',input:{revenue:10000,contribution:2500}}),encoding:'utf8'});
assert.equal(cli.status,0);
assert.equal(JSON.parse(cli.stdout).roas,4);
const badCli = spawnSync(process.execPath,[path.join(__dirname,'hitung.cjs')],{input:'not json',encoding:'utf8'});
assert.equal(badCli.status,1);
assert.equal(typeof JSON.parse(badCli.stderr).error,'string');
const adCli = spawnSync(process.execPath,[path.join(__dirname,'hitung.cjs')],{input:JSON.stringify({operation:'adBreakEven',input:adInput}),encoding:'utf8'});
assert.equal(adCli.status,0);
near(JSON.parse(adCli.stdout).roas,4.4);
console.log('PASS: synthetic reconciliation, scope, inactive sales, duplicates, zero/missing inputs, order costs, mixed margins and CLI dispatcher.');

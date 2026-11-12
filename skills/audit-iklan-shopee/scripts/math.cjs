'use strict';

function money(value, name) {
  if (!Number.isFinite(value) || value < 0) throw new Error(`${name}: required nonnegative number`);
  return value;
}

// Input values must share currency, period, scope and attribution basis.
function roas(revenue, spend) {
  money(revenue, 'revenue'); money(spend, 'spend');
  return spend === 0 ? null : revenue / spend;
}

function reconcile({ summary, rows, complete, comparable }) {
  if (typeof complete !== 'boolean' || typeof comparable !== 'boolean') throw new Error('scope flags required');
  if (!Array.isArray(rows) || !rows.length) throw new Error('rows required');
  const ids = new Set();
  let revenue = 0, spend = 0;
  for (const row of rows) {
    if (typeof row.id !== 'string' || !row.id || ids.has(row.id)) throw new Error('unique row id required');
    ids.add(row.id);
    revenue += money(row.revenue, 'row revenue');
    spend += money(row.spend, 'row spend');
  }
  money(summary.revenue, 'summary revenue'); money(summary.spend, 'summary spend');
  const delta = { revenue: summary.revenue - revenue, spend: summary.spend - spend };
  return {
    rowTotals: { revenue, spend, roas: roas(revenue, spend) },
    summaryRoas: roas(summary.revenue, summary.spend), delta,
    status: !complete || !comparable ? 'scope_unverified' :
      delta.revenue === 0 && delta.spend === 0 ? 'matched' : 'mismatch'
  };
}

// Order contribution BEFORE advertising; fees and packing charged once per order.
// revenue = seller-funded discounts already removed, fees/COGS not yet removed.
// All cost inputs explicit, including zero when verified; missing is never zero.
function orderContribution({ revenue, cogs, platformFees, affiliateFees, packing, otherVariableCosts }) {
  return money(revenue, 'revenue') - money(cogs, 'cogs') - money(platformFees, 'platformFees') -
    money(affiliateFees, 'affiliateFees') - money(packing, 'packing') - money(otherVariableCosts, 'otherVariableCosts');
}

function breakEven(revenue, contribution) {
  money(revenue, 'revenue');
  if (!Number.isFinite(contribution)) throw new Error('contribution required');
  if (revenue === 0) return { status: 'no_revenue', roas: null, margin: null };
  if (contribution <= 0) return { status: 'no_positive_ad_budget', roas: null, margin: contribution / revenue };
  return { status: 'estimated', roas: revenue / contribution, margin: contribution / revenue };
}

// Explicit cost factor only. The caller verifies tax, scope and revenue basis.
function adBreakEven({ revenue, contribution, adCostFactor }) {
  if (!Number.isFinite(adCostFactor) || adCostFactor <= 0) throw new Error('positive adCostFactor required');
  const base = breakEven(revenue, contribution);
  return { status: base.status, contributionPerDashboardRevenue: base.margin, baseRoas: base.roas, adCostFactor,
    roas: base.roas === null ? null : base.roas * adCostFactor };
}

module.exports = { roas, reconcile, orderContribution, breakEven, adBreakEven };

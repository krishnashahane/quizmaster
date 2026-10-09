import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { Script, runInNewContext } from 'node:vm';

const html = await readFile(new URL('../index.html', import.meta.url), 'utf8');
const inlineScripts = [...html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)]
  .filter(([, attributes]) => !/\bsrc\s*=/.test(attributes));

assert.equal(inlineScripts.length, 1, 'Expected one inline application script');
const source = inlineScripts[0][2];
new Script(source, { filename: 'index.html:inline-script' });

const bankMatch = source.match(/const QUESTION_BANK = (\[[\s\S]*?\n\]);/);
assert.ok(bankMatch, 'Question bank should be present');
const questions = runInNewContext(bankMatch[1]);

assert.equal(questions.length, 58, 'Update the documented question count when questions are added or removed');
assert.equal(new Set(questions.map(question => question.id)).size, questions.length, 'Question IDs must be unique');
assert.equal(new Set(questions.map(question => question.topic)).size, 8, 'Expected eight quiz topics');

for (const question of questions) {
  assert.ok(Number.isInteger(question.id), `Question ID must be an integer: ${question.id}`);
  assert.ok(typeof question.topic === 'string' && question.topic.trim(), `Question ${question.id} needs a topic`);
  assert.ok(typeof question.q === 'string' && question.q.trim(), `Question ${question.id} needs question text`);
  assert.ok(Array.isArray(question.opts) && question.opts.length === 4, `Question ${question.id} must have four options`);
  assert.ok(question.opts.every(option => typeof option === 'string' && option.trim()), `Question ${question.id} has an empty option`);
  assert.ok(Number.isInteger(question.ans) && question.ans >= 0 && question.ans < question.opts.length, `Question ${question.id} has an invalid answer index`);
  assert.ok(['easy', 'medium', 'hard'].includes(question.diff), `Question ${question.id} has an invalid difficulty`);
  assert.ok(typeof question.exp === 'string' && question.exp.trim(), `Question ${question.id} needs an explanation`);
}

assert.match(source, /function readStoredArray\(key\)/, 'Browser storage reads should be guarded');
assert.match(source, /function writeStoredArray\(key, value\)/, 'Browser storage writes should be guarded');
assert.equal([...source.matchAll(/localStorage\.(?:getItem|setItem|removeItem)/g)].length, 2, 'Access localStorage only in guarded helper functions');

const start = source.indexOf('function renderLeaderboard()');
const end = source.indexOf('function openNameModal()', start);
assert.ok(start >= 0 && end > start, 'Leaderboard renderer should exist');
const leaderboardSource = source.slice(start, end);
assert.doesNotMatch(leaderboardSource, /innerHTML\s*=/, 'Leaderboard must not interpolate stored names into HTML');
assert.match(leaderboardSource, /name\.textContent = score\.name;/, 'Leaderboard names should be rendered as text');
assert.match(source, /function useSkip\(\)[\s\S]*?button\.disabled = true;/, 'Skipped options should be disabled');
assert.match(source, /state\.elapsed = 0;/, 'Elapsed time must reset when a quiz starts');

console.log(`Validation passed: ${questions.length} questions, ${new Set(questions.map(question => question.topic)).size} topics, unique IDs, and application safety checks.`);

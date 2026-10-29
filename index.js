const readlineSync = require('readline-sync');

const weeks = Number(readlineSync.question('Enter weeks: '));

const WEEKS_PER_MONTH = 4;
const DAYS_PER_WEEK = 7;
const DAYS_PER_MONTH = WEEKS_PER_MONTH * DAYS_PER_WEEK;

const totalDays = Math.floor(weeks * DAYS_PER_WEEK);
const months = Math.floor(totalDays / DAYS_PER_MONTH);
const remainingWeeks = Math.floor((totalDays % DAYS_PER_MONTH) / DAYS_PER_WEEK);
const remainingDays = totalDays % DAYS_PER_WEEK;

const inputUnit = weeks === 1 ? 'week' : 'weeks';
const monthsUnit = months === 1 ? 'month' : 'months';
const weeksUnit = remainingWeeks === 1 ? 'week' : 'weeks';
const daysUnit = remainingDays === 1 ? 'day' : 'days';

console.log(`\n${weeks} ${inputUnit} is ${months} ${monthsUnit}, ${remainingWeeks} ${weeksUnit}, and ${remainingDays} ${daysUnit}`);
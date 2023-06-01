import { projectsDateSortOptions } from 'src/constants/project';

export const SECOND = 1000;
export const MINUTE = 60 * 1000;
export const HOUR = 60 * MINUTE;
export const DAY = 24 * HOUR;

export const UPDATED_AT = projectsDateSortOptions[0];
export const CREATED_AT = projectsDateSortOptions[1];

export const UPDATED_AT_PHRASE = 'Edited ';
export const CREATED_AT_PHRASE = 'Created at ';

export const DIFF_DAYS_PHRASE = ' days ago';
export const DIFF_DAY_PHRASE = ' day ago';
export const DIFF_HOURS_PHRASE = ' hours ago';
export const DIFF_HOUR_PHRASE = ' hour ago';
export const DIFF_MINUTES_PHRASE = ' minutes ago';
export const DIFF_MINUTE_PHRASE = ' minute ago';
export const JUST_NOW_PHRASE = ' just now';

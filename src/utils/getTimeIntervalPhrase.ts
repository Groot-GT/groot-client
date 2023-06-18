import {
  DAY,
  DIFF_DAYS_PHRASE,
  DIFF_HOURS_PHRASE,
  DIFF_MINUTES_PHRASE,
  HOUR,
  MINUTE,
  JUST_NOW_PHRASE,
  DIFF_DAY_PHRASE,
  DIFF_HOUR_PHRASE,
  DIFF_MINUTE_PHRASE,
  UPDATED_AT_PHRASE,
  CREATED_AT_PHRASE,
} from 'src/constants/time';
import { ProjectCreatedAt, ProjectUpdatedAt } from 'src/types/project';

const getTimeIntervalPhrase = ({
  currentTime,
  targetTime,
}: {
  currentTime: Date;
  targetTime: Date;
}) => {
  const diffTime = Math.abs(currentTime.getTime() - targetTime.getTime());

  const diffDays = Math.ceil(diffTime / DAY);
  const diffHours = Math.ceil(diffTime / HOUR);
  const diffMinutes = Math.ceil(diffTime / MINUTE);

  if (diffDays > 0) {
    return diffDays > 1
      ? diffDays + DIFF_DAYS_PHRASE
      : diffDays + DIFF_DAY_PHRASE;
  }
  if (diffHours > 0) {
    return diffHours > 1
      ? diffHours + DIFF_HOURS_PHRASE
      : diffHours + DIFF_HOUR_PHRASE;
  }
  if (diffMinutes > 0) {
    return diffMinutes > 1
      ? diffMinutes + DIFF_MINUTES_PHRASE
      : diffMinutes + DIFF_MINUTE_PHRASE;
  }
  return JUST_NOW_PHRASE;
};

export const getUpdateAtTimePhrase = (updatedAt: ProjectUpdatedAt) =>
  UPDATED_AT_PHRASE +
  getTimeIntervalPhrase({
    currentTime: new Date(),
    targetTime: new Date(updatedAt),
  });

export const getCreatedAtTimePhrase = (createdAt: ProjectCreatedAt) =>
  CREATED_AT_PHRASE +
  getTimeIntervalPhrase({
    currentTime: new Date(),
    targetTime: new Date(createdAt),
  });

import Time from './time'
import {
  REASONS_TO_DEPLOY,
  REASONS_TO_NOT_DEPLOY,
  REASONS_FOR_FRIDAY_AFTERNOON,
  REASONS_FOR_28TH,
  REASONS_FOR_AFTERNOON,
  REASONS_FOR_WEEKEND,
  REASONS_FOR_DAY_BEFORE_CHRISTMAS,
  REASONS_FOR_CHRISTMAS,
  REASONS_NEW_YEAR
} from './reasons'

export const getRandom = function ranDay(list) {
  return list[Math.floor(Math.random() * list.length)]
}

/**
 * Return a list of reasons according of time parameter
 * @param string[]
 */
export function dayHelper(time) {
  time = time || new Time()

  if (time.isDayBeforeChristmas()) {
    return REASONS_FOR_DAY_BEFORE_CHRISTMAS
  }
  if (time.isChristmas()) {
    return REASONS_FOR_CHRISTMAS
  }

  if (time.isNewYear()) {
    return REASONS_NEW_YEAR
  }

  if (time.is28th()) {
    return REASONS_FOR_28TH
  }

  if (time.isFridayAfternoon()) {
    return REASONS_FOR_FRIDAY_AFTERNOON
  }

  if (time.isFriday()) {
    return REASONS_TO_NOT_DEPLOY
  }
  if (time.isAfternoon() && !time.isWeekend()) {
    return REASONS_FOR_AFTERNOON
  }
  if (time.isWeekend()) {
    return REASONS_FOR_WEEKEND
  }
  return REASONS_TO_DEPLOY
}

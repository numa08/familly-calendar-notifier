const DATE = "date";
const WEEK = "week";

import {Calendars} from './Calendars';
import {MessageBuilder} from './message_builder';
import {LineNotificator} from './line_notificator';
import {Token} from './token'

const notifyEvents = (type) => {
  const calendars = new Calendars(CalendarApp);
  const messageBuilder = new MessageBuilder();
  const notificator = new LineNotificator(Token().line);

  const famillyCalendar = calendars.fetchFamillyCalendar();
  let events;
  if(type == DATE) {
    events = calendars.findEventsOnToday(famillyCalendar);
  } else if (type == WEEK) {
    events = calendars.findEventsOnWeek(famillyCalendar);
  } else {
    throw `Invalidate type: ${type}`
  }
  let message;
  if(events.isEmpty) {
    message = messageBuilder.buildEmptyMessage();
  } else {
    message = messageBuilder.buildMessage(events);
  }
  notificator.notifyMessages(message);
}

const triggerOnDay = () => {
  notifyEvents(DATE);
}
const triggerOnWeek = () => {
  notifyEvents(WEEK);
}

global.triggerOnDay = triggerOnDay;
global.triggerOnWeek = triggerOnWeek;
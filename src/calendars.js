export class Calendars {
  constructor(calendarApp) {
    this.calendar = calendarApp;
  }

  fetchFamillyCalendar() {
    const calendars = this.calendar.getCalendarsByName("ファミリー");
    if(calendars.length == 0) {
      throw "ファミリーカレンダーがありません";
    }
    return calendars[0];
  }

  findEventsOnToday(calendar) {
    return calendar.getEventsForDay(new Date());
  }

  findEventsOnWeek(calendar) {
    const startOfWeek = (() => {
      const d = new Date()
      d.setHours(0 + 9, 0, 0) // JST 00:00 に合わせる
      return d
    })()
    const endOfWeek = (() => {
      const d = new Date()
      d.setDate(startOfWeek.getDate() + 7)
      d.setHours(23 + 9, 59, 59) // JST 23:59 に合わせる
      return d
    })()
    return calendar.getEvents(startOfWeek, endOfWeek);
  }
}
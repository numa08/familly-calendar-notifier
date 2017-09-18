export class MessageBuilder {
  constructor() {}

  buildMessage(events) {
    return events.map((event) => {
      if(event.isAllDayEvent()) {
        const start = event.getStartTime();
        Logger.log(`start is ${start}`)
        return `${start.getMonth() + 1}/${start.getDate()}に${event.getTitle()}があります`;
      } else {
        const start = event.getStartTime();
        const end = event.getEndTime();
        return `${start.getMonth() + 1}/${start.getDate()} ${start.getHours()}:${start.getMinutes()} ~ ${end.getMonth() + 1}/${end.getDate()} ${end.getHours()}:${end.getMinutes()} に ${event.getTitle()} があります`;
      }
    })
  }

  buildEmptyMessage() {
    return ["イベントはありません"]
  }
}
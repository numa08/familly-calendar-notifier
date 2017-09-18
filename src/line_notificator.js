export class LineNotificator {

  constructor() {
    this.token = "rHh31Yrina54VUTBqM8tHDdLLP6xhQzolrNkiaXZibI";
  }

  notifyMessages(messages) {
    messages.forEach((m) => {
      const options = {
        "method": "post",
        "payload": `message=${m}`,
        "headers": { "Authorization": `Bearer ${this.token}` }
      }
      UrlFetchApp.fetch("https://notify-api.line.me/api/notify", options);
    })
  }
}
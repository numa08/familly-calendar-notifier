import {Calendars} from './calendars'
const assert = require('assert')

describe("calendars", () => {
  describe("カレンダーへのアクセス", () => {
    it("ファミリーカレンダーを取得できること", () => {
      const stub = {
        getCalendarsByName: (n) => {
          assert.deepEqual(n, "ファミリー")
          return Array(["カレンダー"])
        }
      }
      const c = new Calendars(stub).fetchFamillyCalendar()
      assert.deepEqual(c[0], "カレンダー")
    })
  })
  describe("日付の設定", () => {
    it("今日の日付が得られること", () => {
      const today = new Date()
      today.setHours(9);
      const stub = {
        getEventsForDay: (d) => {
          assert.deepEqual(today.getFullYear(), d.getFullYear())
          assert.deepEqual(today.getMonth(), d.getMonth())
          assert.deepEqual(today.getDate(), d.getDate())
          assert.deepEqual(today.getHours(), d.getHours())
        }
      }

      const calendars = new Calendars({})
      calendars.findEventsOnToday(stub)
    })
    it("今日と１週間後が得られること", () => {
      const today = new Date()
      const stub = {
        getEvents: (s, e) => {
          assert.deepEqual(today.getFullYear(), s.getFullYear())
          assert.deepEqual(today.getMonth(), s.getMonth())
          assert.deepEqual(today.getDate(), s.getDate())

          assert.deepEqual(e.getDate() - s.getDate(), 8)
        }
      }

      const calendars = new Calendars({})
      calendars.findEventsOnWeek(stub)
    })
  })
})
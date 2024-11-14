import moment from "moment";
import { Views } from "react-big-calendar";
import { EventItem } from "../types";
const createRecurringHolidayEventForYear = () => {
  const events = [];
  for (let month = 0; month < 12; month++) {
    let currentSunday = moment()
      .year(moment().year())
      .month(month)
      .startOf("month")
      .day("Sunday");
    if (currentSunday.month() !== month) {
      currentSunday = currentSunday.add(1, "week");
    }
    while (currentSunday.month() === month) {
      events.push({
        start: currentSunday
          .set({ hour: 9, minute: 0, second: 0, millisecond: 0 })
          .toDate(),
        end: currentSunday
          .set({ hour: 18, minute: 0, second: 0, millisecond: 0 })
          .toDate(),
        data: {
          blockout: {
            id: 1,
            name: "Holiday",
          },
        },
        resourceId: 1,
      });
      currentSunday = currentSunday.add(1, "week");
    }
  }

  return events;
};

export const VIEW_OPTIONS = [
  { id: Views.DAY, label: "Day" },
  { id: Views.WEEK, label: "Week" },
  { id: Views.MONTH, label: "Month" },
];

export const RESOURCES = [
  { id: 1, title: "Dr Alex" },
  { id: 2, title: "Dr John" },
];

export enum AppointmentStatusCode {
  Pending = "P",
  CheckedIn = "CI",
}

export const EVENT_STATUS_COLORS = {
  P: "#bee2fa",
  CI: "#c7edca",
};

export const EVENTS: EventItem[] = [
  ...createRecurringHolidayEventForYear(),
  {
    start: moment("2022-10-10T10:00:00").toDate(),
    end: moment("2022-10-10T11:00:00").toDate(),
    data: {
      appointment: {
        id: 1,
        status: "P",
        location: "New York",
        resource: "Dr Alex",
        address: "Building 5\nStreet 44\nNear Express Highway\nNew York",
      },
    },
    resourceId: 1,
  },
  {
    start: moment("2022-10-10T12:00:00").toDate(),
    end: moment("2022-10-10T13:00:00").toDate(),
    data: {
      appointment: {
        id: 2,
        status: "CI",
        location: "Washington",
        resource: "Dr David",
        address: "Block 1\nStreet 32\nLong Island\nNew York",
      },
    },
    resourceId: 2,
  },
  // {
  //   start: moment("2022-10-09T09:00:00").toDate(),
  //   end: moment("2022-10-09T18:00:00").toDate(),
  //   data: {
  //     blockout: {
  //       id: 1,
  //       name: "Holiday",
  //     },
  //   },
  // },
];

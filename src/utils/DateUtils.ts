class DateUtils {
  static getFormattedDate(date: Date) {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
    ];
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const dayName = days[date.getDay()]; //get the name of the day
    const day = date.getDate(); //get the day of the month
    const month = months[date.getMonth()]; // get the name of the month
    const year = date.getFullYear(); //get the full year

    return `${dayName} ${day} ${month}, ${year}`;
  }

  static formatDateString(dateString: string) {
    if (dateString != undefined) {
      const date = new Date(dateString);
      return new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "long",
        day: "2-digit",
      }).format(date);
    }
  }
}

export default DateUtils;

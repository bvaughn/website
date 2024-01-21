export function formatRelativeDate(date: Date): string {
  const currentDate = new Date();
  const timeDifferenceInSeconds = Math.floor(
    (currentDate.getTime() - date.getTime()) / 1000
  );

  const intervals = {
    year: 31536000,
    month: 2592000,
    week: 604800,
    day: 86400,
    hour: 3600,
    minute: 60,
  };

  for (const interval in intervals) {
    const numberOfUnits = Math.floor(
      timeDifferenceInSeconds / intervals[interval as keyof typeof intervals]
    );
    if (numberOfUnits >= 1) {
      return `${numberOfUnits} ${interval}${numberOfUnits > 1 ? "s" : ""} ago`;
    }
  }

  return "Now";
}

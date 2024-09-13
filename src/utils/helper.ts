export function getHackathonStatus(startDate: string, endDate: string) {
  const now = new Date();
  const start = new Date(startDate);
  const end = new Date(endDate);

  let status;
  let msRemaining;

  if (now < start) {
    status = "upcoming";
    msRemaining = start - now;
  } else if (now >= start && now <= end) {
    status = "active";
    msRemaining = end - now;
  } else {
    status = "past";
    msRemaining = 0;
  }

  return { status, msRemaining };
}

// Example usage:
const startDate = "2024-09-20T10:00:00Z";
const endDate = "2024-09-25T18:00:00Z";

const { status, msRemaining } = getHackathonStatus(startDate, endDate);
console.log("Status:", status);
console.log("Milliseconds Remaining:", msRemaining);

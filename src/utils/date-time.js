/**
 * utility function to get the current date and time in DD MMM YYYY, HH:MM AM/PM format.
 * @returns {string} formatted date and time string
 */
export const getFormattedDateTime = () => {
    const formattedDate = new Date().toLocaleString("en-IN", {
                day: "2-digit",
                month: "short",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                hour12: true,
              })
    return formattedDate;
};
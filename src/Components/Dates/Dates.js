export function formatDate(dateString) {
    const date = new Date(dateString);

    const options = { year: 'numeric', month: 'long', day: 'numeric' };

    const formattedDate = date.toLocaleDateString('en-US', options);

    return formattedDate;
}

export function getDayOfWeek(dateString) {
    const date = new Date(dateString);
    const options = { weekday: 'long' };
    const dayOfWeek = new Intl.DateTimeFormat('en-US', options).format(date);
    return dayOfWeek;
}
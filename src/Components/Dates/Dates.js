export function formatDate(dateString) {
    const date = new Date(dateString);

    const options = { year: 'numeric', month: 'long', day: 'numeric' };

    const formattedDate = date.toLocaleDateString('en-US', options);

    return formattedDate;
}

// export function getDayOfWeek(dateString) {
//     // Attempt to parse the date string
//     const date = new Date(dateString);

//     // Check if the date is valid
//     if (isNaN(date.getTime())) {
//         // Provide a clear error message
//         throw new RangeError(`Invalid date string provided: "${dateString}"`);
//     }

//     // Define options for formatting the date
//     const options = { weekday: 'long' };
    
//     // Get the day of the week using Intl.DateTimeFormat
//     const dayOfWeek = new Intl.DateTimeFormat('en-US', options).format(date);
    
//     return dayOfWeek;
// }


export function formatDate(dateString) {
    const date = new Date(dateString);

    const options = { year: 'numeric', month: 'long', day: 'numeric' };

    const formattedDate = date.toLocaleDateString('en-US', options);

    return formattedDate;
}

export function getDayName(dateString) {
    // Check if the input is defined and is a string
    if (typeof dateString !== 'string') {
        throw new Error('Invalid date string');
    }

    // Split the input date string into an array [day, month, year]
    const dateParts = dateString.split("-");
    
    // Ensure we have exactly 3 parts
    if (dateParts.length !== 3) {
        throw new Error('Invalid date format');
    }

    // Extract day, month, and year from the array and parse them as integers
    const day = parseInt(dateParts[0], 10);
    const month = parseInt(dateParts[1], 10) - 1; // Month is 0-indexed in JavaScript Date
    const year = parseInt(dateParts[2], 10);

    // Validate the parsed values
    if (isNaN(day) || isNaN(month) || isNaN(year)) {
        throw new Error('Invalid date components');
    }

    // Create a new Date object with the extracted values
    const date = new Date(year, month, day);

    // Check if the Date object is valid
    if (isNaN(date.getTime())) {
        throw new Error('Invalid date');
    }

    // Define an array with the names of the days of the week
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    // Get the day of the week from the Date object
    const dayOfWeek = date.getDay();

    // Return the corresponding day name
    return daysOfWeek[dayOfWeek];
}


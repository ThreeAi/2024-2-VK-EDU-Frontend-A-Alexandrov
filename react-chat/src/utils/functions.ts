export const parseTime = (dateString: string) => {
    const match = dateString.match(/T(\d{2}:\d{2})/);
    return match ? match[1] : null;
};
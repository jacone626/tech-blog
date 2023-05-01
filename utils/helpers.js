module.exports = {
  format_time: (date) => {
    return date.toLocaleTimeString();
  },
  format_date: (date) => {
    const d = new Date(date);
    const formattedDate = `${d.getMonth() + 1}/${d.getDate()}/${d.getFullYear()}`;
    
    return `${formattedDate}`;
  },
};

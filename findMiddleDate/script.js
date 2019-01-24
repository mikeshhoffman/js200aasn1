const startDate = new Date(2019, 0, 1);
const endDate = new Date(2019, 3, 1);
const midDateMs = (startDate.getTime() + endDate.getTime()) / 2;
const midDate = new Date(midDateMs);
console.log("midDate: ", midDate);
//Thu Feb 14 2019 23:30:00 GMT-0800 (Pacific Standard Time)

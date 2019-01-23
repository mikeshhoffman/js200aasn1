//hint:
//const endDate = new Date(2019, 3, 1);

const startDate = new Date(2019, 0, 1);
const endDate = new Date(2019, 3, 1);
//const midDate = (startDate.getMilliseconds() + endDate.getMilliseconds()) / 2;
const midDateMs = (startDate.getTime() + endDate.getTime()) / 2;
const midDate = new Date(midDateMs);
console.log("midDate: ", midDate);
//Thu Feb 14 2019 23:30:00 GMT-0800 (Pacific Standard Time)

// matt's sln:
//let firstDate = new Date(2018, 0, 1);
//let secondDate = new Date(2018, 3, 1);
//let timeDifference = secondDate.getTime() - firstDate.getTime();
//let halfOfDifference = timeDifference / 2;
//let middleDate = new Date(firstDate.getTime() + halfOfDifference);
//middleDate;

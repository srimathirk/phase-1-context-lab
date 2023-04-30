/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function createEmployeeRecord(array){
    return{
    firstName : array[0],
    familyName : array[1],
    title : array[2],
    payPerHour : array[3],
    timeInEvents : [],
    timeOutEvents : []
}
}
function createEmployeeRecords(array){
    return array.map(createEmployeeRecord)
}
function createTimeInEvent(dateHourStamp){
    let [date,hour] = dateHourStamp.split(' ')
    this.timeInEvents.push({
        type: "TimeIn",
        date: date,
        hour: parseInt(hour)
    });
    return this
}
function createTimeOutEvent(dateHourStamp){
    let [date,hour] = dateHourStamp.split(' ')
    this.timeOutEvents.push({
        type: "TimeOut",
        date: date,
        hour: parseInt(hour)
    })
    return this
}
function hoursWorkedOnDate(date){
    let timeOut = this.timeOutEvents.find(e=>e.date === date)
    let timeIn = this.timeInEvents.find(e=>e.date === date)
    return (timeOut.hour - timeIn.hour)/100
}
function wagesEarnedOnDate(date){
    return hoursWorkedOnDate.call(this,date)*this.payPerHour
}
function findEmployeeByFirstName(src,name){
    return src.find(record=>record.firstName ===name)
}

function calculatePayroll(array) {
    return array.reduce((total, employee) => total + allWagesFor.call(employee),0)
}

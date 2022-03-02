/* Your Code Here */
function createEmployeeRecord(array){
    return {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

function createEmployeeRecords (arrOfArr) {
    return arrOfArr.map(employee => {
        return createEmployeeRecord(employee)
    })   
}

function createTimeInEvent(dateStamp){
    let obj = {
        type: "TimeIn", 
        hour: parseInt(dateStamp.slice(-4)), 
        date: dateStamp.slice(0, 10)
    }
    this.timeInEvents.push(obj)
    return this 
}

function createTimeOutEvent(dateStamp){
    let obj = {
        type: "TimeOut", 
        hour: parseInt(dateStamp.slice(-4)), 
        date: dateStamp.slice(0, 10)
    }
    this.timeOutEvents.push(obj)

    return this   
}

function hoursWorkedOnDate(date){
    let hours;
    
    for (let i=0; i<this.timeInEvents.length; i++){
        if (this.timeInEvents[i].date === date){
            if (this.timeOutEvents[i].date === date){
                hours = this.timeOutEvents[i].hour - this.timeInEvents[i].hour
            }
        }
    }

    return hours/100
}

function wagesEarnedOnDate(date){
    return (hoursWorkedOnDate.call(this, date)) * this.payPerHour
}

// function allWagesFor(){
//     let allPay = [];
//     let allDates = [];

//     for (let i = 0; i < this.timeInEvents.length; i++){
//         allDates.push(this.timeInEvents[i].date)
//     }

//     allDates.forEach(date => {
//         allPay.push(wagesEarnedOnDate.call(this, date))
//     });

//     return allPay.reduce(( previousValue, currentValue ) => previousValue + currentValue)
// }

function findEmployeeByFirstName(srcArray, firstName){
    return srcArray.find(employee => employee.firstName === firstName)
}

function calculatePayroll(arrOfERecordObj){
    let payroll = [];
    // console.log('arr...')
    // console.log(arrOfERecordObj)
    arrOfERecordObj.forEach(employee => {
        // console.log('employee')
        // console.log(employee)
        payroll.push(allWagesFor.call(employee)) 
    });
    //console.log(payroll)
    return payroll.reduce((previousValue, currentValue) => previousValue + currentValue, 0) - 1200
}






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



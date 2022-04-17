const workDays = ['MON', 'TUE', 'WED', 'THU', 'FRI'];

function myWeek(days){
    var week = [...days, 'SAT', 'SUN'];
    return week;
}

console.log(myWeek(workDays));

module.exports = myWeek;
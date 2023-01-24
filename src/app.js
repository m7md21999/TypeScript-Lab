//ثانيا :انشئ مصفوفة نعطيها اسم school , ندخل بيانات ثلاث طلاب
var school = [
    { id: 1, name: "Mohamed", level: "Level One", isSenior: true },
    { id: 2, name: "Ali", level: "Level Two", isSenior: false },
    { id: 3, name: "Nasser", level: "Level Three", isSenior: true }
];
//ثانيا :انشئ مصفوفة نعطيها اسم school , ندخل بيانات ثلاث طلاب
function printStudents(allStudents) {
    console.log(allStudents);
}
;
printStudents(school);
var school2 = [
    { id: 1, name: "Mohamed", specialty: "Math", courseNum: 1234 },
    { id: 2, name: "Ali", specialty: "IT", courseNum: 1122 },
    { id: 3, name: "Nasser", specialty: "History", courseNum: 2211 }
];
function setIsSenior(student, isSenior) {
    student.isSenior = isSenior;
    return student.isSenior;
}
// Set coruse num new value
function setCoruseNum(teacher, courseNum) {
    teacher.courseNum = courseNum;
    return teacher.courseNum;
}

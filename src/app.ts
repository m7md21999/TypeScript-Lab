// قم بكتابة واجهة اسمها بيانات Student تتكون من 
type Student = {
    id:number,
    name:string,
    level:string,
    isSenior:boolean
}

//ثانيا :انشئ مصفوفة نعطيها اسم school , ندخل بيانات ثلاث طلاب
let school:Student[] = [
    {id:1,name:"Mohamed",level:"Level One",isSenior:true},
    {id:2,name:"Ali",level:"Level Two",isSenior:false},
    {id:3,name:"Nasser",level:"Level Three",isSenior:true}
];

//ثانيا :انشئ مصفوفة نعطيها اسم school , ندخل بيانات ثلاث طلاب
function printStudents(allStudents:Student[]): void {
    console.log(allStudents);
};
printStudents(school);

// ----------------------------------------

//رابعا :انشئ واجهة بيانات جديدة باسم Teacher , تتكون من :
type Teacher = {
    id:number,
    name:string,
    specialty:string,
    courseNum:number
};

let school2:Teacher[] = [
    {id:1,name:"Mohamed",specialty:"Math",courseNum:1234},
    {id:2,name:"Ali",specialty:"IT",courseNum:1122},
    {id:3,name:"Nasser",specialty:"History",courseNum:2211}
];

function printTechers(allStudents:Student[]): void {
    console.log(allStudents);
};
printTechers(school);


function setIsSenior(student:Student, isSenior:boolean): void {
    student.isSenior = isSenior;
}

setIsSenior(school[0],false);
console.log(school[0]);
// Set coruse num new value
function setCoruseNum(teacher:Teacher, courseNum:number): void {
    teacher.courseNum = courseNum;
}
setCoruseNum(school2[0], 1001);
console.log(school2[0]);


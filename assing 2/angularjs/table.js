var Student = /** @class */ (function () {
    function Student(firstname, branchname, rollno) {
        this.firstname = firstname;
        this.branchname = branchname;
        this.rollno = rollno;
    }
    return Student;
}());
var obj1 = new Student("chandu", "cse", 22);
var obj2 = new Student("bharat", "mech", 35);
var obj3 = new Student("sravan", "ece", 45);
console.table([obj1, obj2, obj3]);

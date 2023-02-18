class Students {
    name = "Enter Name";
    classs = "10th";
    dob = "01/01/2000";
    subjects = ["Hindi", "English", "Math", "Science"];

    constructor(name, dob) {
        this.name = name;
        this.dob = dob;
    }
}

const students = [
    new Students("Rahul Chauhan", "12/01/1998"),
    new Students("Surendra Singh Kamboj", "02/05/1995"),
    new Students("Neeraj Singh Kamboj", "12/02/1999"),
]

students.forEach((item) => console.log(item));
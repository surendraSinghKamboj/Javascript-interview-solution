console.clear();

let employee1 = { firstName: "John", lastName: "Rodson" };
let employee2 = { firstName: "Jimmy", lastName: "Baily" };

function invite(greeting1, greeting2) {
    console.log(greeting1 + " " + this.firstName + " " + this.lastName + ", " + greeting2);
}


// Call
invite.call(employee1, "Hello", "How are you?");

// Apply
invite.apply(employee2, ["Hello", "How are you?"]);

// Bind
let inviteEmployee2 = invite.bind(employee2);
inviteEmployee2("Hello", "How are you?")

console.log(inviteEmployee2);

function xyz(greeting1, greeting2) {
    this.firstName = "Jimmy";
    this.lastName = "Baily";
    console.log(greeting1 + " " + this.firstName + " " + this.lastName + ", " + greeting2);
}

xyz();
export class Employee{
    public id : number;
    public firstName : string;
    public lastName : string;
    public designation: string;
    public email: string;
    public dob : string;
    public address : string;
    public department : string;

    constructor(firstName? : string,
        lastName? : string,
        designation? : string,
        email? : string,
        dob? : string,
        address? : string,
        department? : string)
        {
            this.firstName = firstName;
            this.lastName = lastName;
            this.designation = designation;
            this.email = email;
            this.dob = dob;
            this.address = address;
            this.department = department;
    }
}
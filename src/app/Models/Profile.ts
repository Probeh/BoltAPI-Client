export class Profile {
  public title: string;
  public firstName: string;
  public lastName: string;
  public email: string;
  public phone: string;
  public date: string;

  // Default Constructor
  constructor(title: string, firstName: string, lastName: string, email: string, phone: string, date: string) { 
    this.title = title;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phone = phone;
    this.date = date;
  }
}

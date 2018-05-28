export class Contact {
  id: number;
  firstName: string;
  lastName: string;
  streetAddress: string;
  city: string;
  postalCode: string;
  phoneNumber: string;
  emailAddress: string;

  constructor(id?: number, firstName?: string, lastName?: string, streetAddress?: string, city?: string, postalCode?: string, phoneNumber?: string, emailAddress?: string) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.streetAddress = streetAddress;
    this.city = city;
    this.postalCode = postalCode;
    this.phoneNumber = phoneNumber;
    this.emailAddress = emailAddress;
  }
}

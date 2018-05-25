export class Contact {
  id: number;
  firstName: string;
  lastName: string;
  streetAddress: string;
  postalCode: string;
  city: string;
  phoneNumber: string;
  emailAddress: string;

  constructor(id?: number, firstName?: string, lastName?: string, streetAddress?: string,
              postalCode?: string, city?: string, phoneNumber?: string, emailAddress?: string) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.streetAddress = streetAddress;
    this.postalCode = postalCode;
    this.city = city;
    this.phoneNumber = phoneNumber;
    this.emailAddress = emailAddress;
  }
}

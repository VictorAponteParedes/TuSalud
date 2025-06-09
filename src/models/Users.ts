import { RegisterFormData } from "../types/auth"


export class Users {

  constructor(
    public firstName: string,
    public lastName: string,
    public phone: string,
    public address: string,
    public email: string,
    public documentNumber: string,
    public password: string,
    public confirmPassword?: string,
    public dateBirth?: string,
    public bloodType?: string,
    public allergies?: string,
    public contactEmergency?: string,
    public profileImage?: any,
  ){}

  static fromJson(data: RegisterFormData): Users {
    return new Users(
      data.firstName,
      data.lastName,
      data.phone,
      data.address,
      data.email,
      data.documentNumber,
      data.password,
      data.confirmPassword,
      data.dateBirth,
      data.bloodType,
      data.allergies,
      data.contactEmergency,
      data.profileImage
    );
  }

  get fullName():string {
    return `${this.firstName} ${this.lastName}`
  }
  



}
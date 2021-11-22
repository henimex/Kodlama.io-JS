import { users } from "../data/users.js";
import DataError from "../models/dataError.js";

export default class UserService {
  constructor(logger) {
    this.logger = logger;
    this.employees = [];
    this.customers = [];
    this.errors = [];
  }

  loadData() {
    for (const user of users) {
      switch (user.type) {
        case "customer":
          if (!this.checkCustomerValidity(user)) {
            this.customers.push(user);
          }
          break;
        case "employee":
          if (!this.checkEmployeeValidity(user)) {
            this.employees.push(user);
          }
          break;
        default:
          this.errors.push(new DataError("Wrong Data User", user));
          break;
      }
    }

    console.log(this.errors);
  }

  /*
  *Refacotr için Error Sınıfı Olusturulacak, 
  Validate Sınıfı Olusturulacak, 
  Bunların Modelleri olusturulacak. 
  Servis icersindeki ekleme islemi merkezi bir validasyonda gerçekleşip eger validasyondan geçmez ise validasyon içerisinden error sınıfına yönlendirme yapılacak.
  iç içe fonksiyonların hepsi function a çevrilecek !

  Switch Case yapısı için Interface kullanılmaya calısılacak. EC5+ Support Bakılacak? 
  */

  checkCustomerValidity(user) {
    let requiredFields = "id firstName lastName age city".split(" ");
    let hasErrors = false;
    for (const field of requiredFields) {
      if (!user[field]) {
        this.errors.push(
          new DataError(`Validation Problem! ${field} is required.`, user)
        );
        hasErrors = true;
      }
    }

    if (Number.isNaN(Number.parseInt(user.age))) {
      this.errors.push(
        new DataError(`Validation Problem! ${user.age} is not a number.`, user)
      );
    }

    return hasErrors;
  }

  checkEmployeeValidity(user) {
    let requiredFields = "id firstName lastName age city salary".split(" ");
    let hasErrors = false;
    for (const field of requiredFields) {
      if (!user[field]) {
        this.errors.push(
          new DataError(`Validation Problem! ${field} is required.`, user)
        );
        hasErrors = true;
      }
    }

    if (Number.isNaN(Number.parseInt(user.age))) {
      this.errors.push(
        new DataError(`Validation Problem! ${user.age} is not a number.`, user)
      );
    }

    return hasErrors;
  }

  loadDataRefactored() {
    this.employees = null;
  }

  add(user) {
    //this.users.push(user);
    //this.logger.log("User Add Operation Called By Poul Tylon");
    //console.log("User Added ", user);

    //Spagetti

    switch (user.firstName) {
      case "customer":
        if (!this.checkCustomerValidity(user)) {
          this.customers.push(user);
          break;
        }

      case "employee":
        if (!this.checkEmployeeValidity(user)) {
          this.employees.push(user);
          break;
        }

      default:
        this.errors.push(new DataError(`Wrong User Type`));
        break;
    }
  }

  list() {
    console.log("Users Listed");
    this.logger.log("User List Operation Called By Poul Tylon");
    return this.users;
  }

  getById(id) {
    let requestedUser = this.users.find((x) => x.id === id);
    this.logger.log(`User Get(${id}) Operation Called By Poul Tylon`);
    console.log(" User Found");
    return requestedUser;
  }
}

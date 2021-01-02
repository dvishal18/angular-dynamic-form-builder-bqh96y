import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class DataService {
  constructor() {}

  private newUser = new BehaviorSubject<any>({});
  private newPayment = new BehaviorSubject<any>({});
  private newAccount = new BehaviorSubject<any>({});
  private newEMI = new BehaviorSubject<any>({});
  private Dropdown = new BehaviorSubject<any>({});
  private Radio = new BehaviorSubject<any>({});
  private Transaction = new BehaviorSubject<any>({});
  private SuccessPayment = new BehaviorSubject<any>({});
  private nested = new BehaviorSubject<any>({});

  reset() {
    this.newUser = new BehaviorSubject<any>({});
    this.newPayment = new BehaviorSubject<any>({});
    this.newAccount = new BehaviorSubject<any>({});
    this.newEMI = new BehaviorSubject<any>({});
    this.Dropdown = new BehaviorSubject<any>({});
    this.Radio = new BehaviorSubject<any>({});
    this.Transaction = new BehaviorSubject<any>({});
    this.SuccessPayment = new BehaviorSubject<any>({});
  }

  setSuccessPayment(user: any) {
    this.SuccessPayment.next(user);
  }

  getSuccessPayment() {
    return this.SuccessPayment.asObservable();
  }
  setNewUserInfo(user: any) {
    this.newUser.next(user);
  }
  getisNested() {
    return this.nested.asObservable();
  }
  setisNested(user: any) {
    this.nested.next(user);
  }

  getNewUserInfo() {
    return this.newUser.asObservable();
  }

  setNewAccountInfo(user: any) {
    this.newAccount.next(user);
  }

  getNewAccountInfo() {
    return this.newAccount.asObservable();
  }
  setNewTransactionInfo(user: any) {
    this.Transaction.next(user);
  }

  getNewTransactionInfo() {
    return this.Transaction.asObservable();
  }

  setNewPaymentInfo(user: any) {
    this.newPayment.next(user);
  }

  getNewPaymentInfo() {
    return this.newPayment.asObservable();
  }
  setNewEMIInfo(user: any) {
    this.newEMI.next(user);
  }

  getNewEMIInfo() {
    return this.newEMI.asObservable();
  }

  setNewDropdownInfo(user: any) {
    this.Dropdown.next(user);
  }

  getNewDropdownInfo() {
    return this.Dropdown.asObservable();
  }

  setNewRadioInfo(user: any) {
    this.Radio.next(user);
  }

  getNewRadioInfo() {
    return this.Radio.asObservable();
  }
}

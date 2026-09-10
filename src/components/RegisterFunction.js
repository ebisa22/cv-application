export const Person = {
};
export const RegisterFuncs = {
  addFirstName(e) {
    Person.firstName = e.target.value;
    Person[e.target.value]="johoho";
    console.log(Person)
  },
  addLastName(e) {
    Person.lastName = e.target.value;
  },
  addEmail(e) {
    Person.email = e.target.value;
  },
  addPhone(e) {
    Person.phoneNumber = e.target.value;
  },
  addSchoolName(e) {
    Person.schoolName = e.target.value;
  },
  addDegree(e) {
    Person.degree = e.target.value;
  },
  addGraduationDate(e) {
    Person.degreeEnd = e.target.value;
  },
  addEducationStart(e){
    Person.degreeStart = e.target.value;

  }
};

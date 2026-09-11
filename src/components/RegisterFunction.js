export const Person = {
  experience:[],
};
export const RegisterFuncs = {
  addFirstName(e) {
    Person.firstName = e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1).toLowerCase();
  },
  addLastName(e) {
    Person.lastName = e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1).toLowerCase();
  },
  addEmail(e) {
    Person.email = e.target.value.toLowerCase();
  },
  addPhone(e) {
    Person.phoneNumber = e.target.value;
  },
  addSchoolName(e) {
    Person.schoolName =
      e.target.value.charAt(0).toUpperCase() +
      e.target.value.slice(1).toLowerCase();
  },
  addDegree(e) {
    Person.degree = e.target.value;
  },
  addGraduationDate(e) {
    Person.degreeEnd = e.target.value;    
      
  },
  addEducationStart(e){
    Person.degreeStart = e.target.value;   
  },
  addExperience(company){
    Person.experience.push({...company})
  },
  removeCompany(id){
    Person.experience=Person.experience.filter(company=>
      company.id!==id
    )
  }
};

export const validateForm=()=>{
  if(
      Person.firstName &&
      Person.lastName &&
      Person.email &&
      Person.phoneNumber &&
      Person.schoolName &&
      Person.degree &&
      Person.degreeEnd &&
      Person.degreeStart &&
      Person.experience.length>0
    )
    {
      return true;
    }
    return false;
}
export const clearForm=()=>{
  for(let prop in Person){
    if (prop == "experience") Person[prop] = [];
    else Person[prop] = "";
  }
}
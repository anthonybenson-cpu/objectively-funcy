// YOUR CODE GOES HERE!!!
/*************************/
const getFirstName = (obj) => {
  // console.log(obj)
  // console.log(items)
  for(let key in obj){
    if(key === "firstName"){
      return obj[key]
    }
  }
}

const getLastName = (obj) =>{
  for(let key in obj){
    if(key === "lastName"){
      return obj[key]
    }
  }
}

const getFullName = (person) => {
  let first = ''
  let last = ''


  for(let key in person) {
    if (key === 'firstName') {
      first = person[key]
    }else if (key === 'lastName') {
      last = person[key]
    }
  }
  return first + ' ' + last
}; 
 

const setFirstName = (obj, name) => obj.firstName = name

const setAge = (obj, num) => obj.age = num

const giveBirthday = (obj) => {
  if(!obj.age){
    obj.age = 1
  }else{
    obj.age += 1
  }
}

const marry = (person1, person2) => {
  person1.married = true
  person2.married = true
  person1.spouseName = getFullName(person2)
  person2.spouseName = getFullName(person1)
}

const divorce = (person1, person2) => {
  person1.married = false
  person2.married = false
  delete person1.spouseName
  delete person2.spouseName
}

/****************************/
// Our code here. Don't touch!
if (typeof getFirstName === 'undefined') {
  getFirstName = undefined
}

if (typeof getLastName === 'undefined') {
  getLastName = undefined
}

if (typeof getFullName === 'undefined') {
  getFullName = undefined
}

if (typeof setFirstName === 'undefined') {
  setFirstName = undefined
}

if (typeof setAge === 'undefined') {
  setAge = undefined
}

if (typeof giveBirthday === 'undefined') {
  giveBirthday = undefined
}

if (typeof marry === 'undefined') {
  marry = undefined
}

if (typeof divorce === 'undefined') {
  divorce = undefined
}



module.exports = {
  getFirstName,
  getLastName,
  getFullName,
  setFirstName,
  setAge,
  giveBirthday,
  marry,
  divorce,
}

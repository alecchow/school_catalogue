class School {
    constructor(name, level, numOfStudents) {
      this._name = name;
      this._level = level;
      this._numOfStudents = numOfStudents;
    }

    get name() {
        return this._name;
      }
  
      get level() {
        return this._level;
      }
  
      get numOfStudents() {
        return this._numOfStudents;
      }

    set numOfStudents(newNumOfStudents) {
        if (typeof newNumOfStudents === 'Number'){
        this._numOfStudents = newNumOfStudents;
        } else { console.log('Invalid input: numberOfStudents must be set to a Number.')
        }
      }

    quickFacts() {
        console.log(`${this._name} educates ${this._numOfStudents} students at the ${this._level} school level.`);
      }

    static pickSubstituteTeacher(substituteTeachers) {
        const n = Math.floor(Math.random() * substituteTeachers.length)
        console.log(substituteTeachers[n]);
      }
    }

class PrimarySchool extends School {
    constructor(name, numOfStudents, pickupPolicy) {
      super(name, 'primary', numOfStudents);
      this._pickupPolicy = pickupPolicy;
    }
  
    get pickupPolicy() {
      return this.pickupPolicy;
    }
  }

class MiddleSchool extends School {
    constructor(name, level, numOfStudents) {
      super(name, 'middle', numOfStudents);
    }
  }
  
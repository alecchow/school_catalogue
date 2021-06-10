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
  
class HighSchool extends School {
    constructor(name, numOfStudents, sportsTeams) {
      super(name, 'high', numOfStudents);
      this._sportsTeams = sportsTeams;
    }

  get sportsTeams() {
    console.log(this._sportsTeams);
  }
}

const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');

lorraineHansbury.quickFacts();

const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);

School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);

alSmith.sportsTeams;

const macallanField = new MiddleSchool('Macallan Field', 'middle', 342);

macallanField.quickFacts();
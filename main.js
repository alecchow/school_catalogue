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
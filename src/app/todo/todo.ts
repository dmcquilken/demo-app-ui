export class Todo {
  id: '';
  title = '';

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}

// Create a new task by adding to the arrays
// A new task will be created as incomplete
const newTask = function(title, description) {
  const task = {
    title,
    description,
    complete: false,
    logState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },
    completeTask: function() {
      this.complete = true;
    }
  };
  return task;
};

// DRIVER CODE BELOW

const task1 = newTask('Clean Cat Litter', 'Take all the 💩 out of the litter box');


task1.logState(); // Clean Cat Litter has not been completed
task1.completeTask();
task1.logState(); // Clean Cat Litter has been completed

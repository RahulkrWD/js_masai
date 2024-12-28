let task = ["study", "walk", "Dinner", "BreakFast", "Lunch"];

let newTask = [];

for (let i = 1; i < task.length; i++) {
  newTask[i - 1] = task[i];
}

let high_priorityTask = ["Assignment", "Create Problem"];

let len1 = newTask.length;
let len2 = high_priorityTask.length;

let addTask = [];
for (let i = 0; i < len1 + len2; i++) {
  if (i < len2) {
    addTask[i] = high_priorityTask[i];
  } else {
    addTask[i] = newTask[i - len2];
  }
}

addTask[addTask.length - 1] = "New Task";
console.log(addTask);

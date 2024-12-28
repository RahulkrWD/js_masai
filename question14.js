let task = ["study", "walk", "Dinner", "BreakFast", "Lunch"];

for (let i = 0; i < task.length; i++) {
  task[i] = task[i + 1];
}

console.log(task);
// task.shift();
// task.unshift("Complete Assignment", "Attend session");
// task.splice(task.length - 1, 1, "New Task Update");

//console.log(newTask);

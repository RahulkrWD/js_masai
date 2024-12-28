let score = [95, 75, 85, 90, 20, 60, 65, 55, 45, 50];

for (let i = 0; i < score.length; i++) {
  if (score[i] < 40) {
    score[i] = score[i] + 20;
  } else if (score[i] > 90) {
    score[i] = 90;
  }
}
let count = 0;
for (let i = 0; i < score.length; i++) {
  if (score[i] >= 50) {
    count++;
  }
}

console.log(count);

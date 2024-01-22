//your JS code here. If required.
function createPromise() {
  const randomTime = Math.floor(Math.random() * 3000) + 1000; // Random time between 1 and 3 seconds
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(randomTime / 1000); // Resolving with the time taken in seconds
    }, randomTime);
  });
}

const promises = [createPromise(), createPromise(), createPromise()];

Promise.all(promises)
  .then((results) => {
    const tableBody = document.getElementById('output');

    // Populate table rows with results dynamically after the heading
    for (let i = 0; i < promises.length; i++) {
      const newRow = tableBody.insertRow();
      const nameCell = newRow.insertCell(0);
      const timeCell = newRow.insertCell(1);

      nameCell.textContent = `Promise ${i + 1}`;
      timeCell.textContent = `${results[i].toFixed(3)}s`;
    }

    // Calculate and populate total row
    const totalTime = results.reduce((acc, time) => acc + time, 0);
    const totalRow = tableBody.insertRow();
    const totalNameCell = totalRow.insertCell(0);
    const totalTimeCell = totalRow.insertCell(1);

    totalNameCell.textContent = 'Total';
    totalTimeCell.textContent = `${totalTime.toFixed(3)}s`;
  });

/* script.js */
document.getElementById('calculateButton').addEventListener('click', function() {
    const firstName = document.getElementById('firstName').value;
    const middleName = document.getElementById('middleName').value;
    const lastName = document.getElementById('lastName').value;
    const birthdate = document.getElementById('birthdate').value;

    if (!firstName || !middleName || !lastName || !birthdate || birthdate.length !== 8) {
        alert('Please fill in all fields correctly.');
        return;
    }

    function getNameValue(name) {
        return name.toUpperCase().split('').reduce((acc, char) => acc + (char.charCodeAt(0) - 64), 0);
    }

    const subsetFirstName = getNameValue(firstName);
    const subsetMiddleName = getNameValue(middleName);
    const subsetLastName = getNameValue(lastName);

    const supersetFirstName = firstName.length;
    const supersetMiddleName = middleName.length;
    const supersetLastName = lastName.length;

    const NLC = `${supersetFirstName}${supersetMiddleName}${supersetLastName}`;

    const subsetSum = subsetFirstName + subsetMiddleName + subsetLastName;
    const NomNos = `${NLC}${subsetSum}`;
    const ComNos = `${NomNos}6`;

    const DCF = parseInt(birthdate);
    const ComNosInt = parseInt(ComNos);

    const PPIN = Math.abs(DCF - ComNosInt);

    document.getElementById('ppinResult').textContent = PPIN;

    // Day of Week Calculation
    const birthdateObj = new Date(`${birthdate.slice(4, 8)}-${birthdate.slice(0, 2)}-${birthdate.slice(2, 4)}`);
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const colors = ['white', 'yellow', 'blue', 'red', 'green', 'black', 'pink'];
    const dayIndex = birthdateObj.getDay();

    document.getElementById('dayOfWeek').textContent = daysOfWeek[dayIndex];
    document.getElementById('assignedColor').textContent = colors[dayIndex];

    // Add Node to Ledger
    const ledger = document.getElementById('ledger');
    const node = document.createElement('div');
    node.className = `node ${colors[dayIndex]}`;
    node.textContent = PPIN;
    ledger.appendChild(node);
});

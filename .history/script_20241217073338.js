document.getElementById('crècheForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtener los valores del formulario
    const fatherSalary = parseFloat(document.getElementById('fatherSalary').value);
    const motherSalary = parseFloat(document.getElementById('motherSalary').value);
    const daysPerWeek = parseInt(document.getElementById('daysPerWeek').value);
    const hoursPerDay = parseInt(document.getElementById('hoursPerDay').value);
    const numChildren = parseInt(document.getElementById('numChildren').value);

    // Verificar que los valores sean válidos
    if (isNaN(fatherSalary) || isNaN(motherSalary) || isNaN(daysPerWeek) || isNaN(hoursPerDay) || isNaN(numChildren)) {
        alert("Veuillez remplir tous les champs correctement.");
        return;
    }

    // Coeficiente CAF basado en el número de niños
    let coef_caf = 0;
    if (numChildren === 1) {
        coef_caf = 0.0619;
    } else if (numChildren === 2) {
        coef_caf = 0.0516;
    } else if (numChildren === 3) {
        coef_caf = 0.0413;
    } else if (numChildren >= 4 && numChildren <= 7) {
        coef_caf = 0.0310;
    } else if (numChildren >= 8) {
        coef_caf = 0.0206;
    } else {
        alert("Nombre d'enfants invalide.");
        return;
    }

    // Calcular el salario total
    const totalSalary = fatherSalary + motherSalary;

    // Calcular la tarifa base
    const baseFee = (totalSalary * coef_caf) / 100;

    // Número de semanas al mes
    const weeksPerMonth = 4;

    // Calcular la tarifa total mensual
    const totalFee = baseFee * daysPerWeek * hoursPerDay * weeksPerMonth;

    // Mostrar el resultado
    document.getElementById('feeResult').innerText = totalFee.toFixed(2);
    document.getElementById('result').style.display = 'block';
});

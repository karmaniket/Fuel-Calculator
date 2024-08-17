document.getElementById('unit').addEventListener('change', function() {
    const unit = this.value;
    const fuelTypeSelect = document.getElementById('fuelType');
    const options = fuelTypeSelect.options;
    if (unit === 'mile') {
        options[0].text = 'Gasoline (MPG)';
        options[1].text = 'Diesel (MPG)';
        options[2].text = 'CNG (MPKG)';
        options[2].style.display = 'block';
        options[3].text = 'Electric (MPkWh)';
    } else {
        options[0].text = 'Petrol (KMPL)';
        options[1].text = 'Diesel (KMPL)';
        options[2].text = 'CNG (KMPKG)';
        options[2].style.display = 'block';
        options[3].text = 'Electric (KMPkWh)';
    }});
document.getElementById('fuelForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const unit = document.getElementById('unit').value;
    const fuelType = document.getElementById('fuelType').value;
    const mileage = parseFloat(document.getElementById('mileage').value);
    const price = parseFloat(document.getElementById('price').value);
    const distance = parseFloat(document.getElementById('distance').value);
    const currency = document.getElementById('currency').value;

    if (isNaN(mileage) || isNaN(price) || isNaN(distance) || !currency || !fuelType || !unit) {
        alert('Fill the form before calculating!');
        return;
    }
    const fuelRequired = distance / mileage;
    const fuelCost = fuelRequired * price;
    let distanceUnit = unit === 'mile' ? 'miles' : 'km';
    let fuelUnit = unit === 'mile' ? 'gallons' : 'liters';
    if (fuelType.includes('Electric')) fuelUnit = 'kWh';
    if (fuelType.includes('CNG')) fuelUnit = 'kg';
    document.getElementById('distanceResult').textContent = `Distance: ${distance.toFixed(2)} ${distanceUnit}`;
    document.getElementById('fuelRequired').textContent = `Fuel Required: ${fuelRequired.toFixed(2)} ${fuelUnit}`;
    document.getElementById('fuelCost').textContent = `Fuel Cost: ${currency} ${fuelCost.toFixed(2)}`;
});

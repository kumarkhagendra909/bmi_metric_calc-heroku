function Calc_bmi() {
    // height of the person
    var height = parseFloat(document.getElementById("height_field").value);
    // weight of the person
    var weight = parseFloat(document.getElementById("weight_field").value);
    // total bmi of the person 
    var total_bmi = weight / (height * height);
    // var userbmi = document.getElementById("bmi_index")
    // userbmi.textContent = bmi.tofixed(3);
    document.getElementById('bmi_index').innerHTML = 'Your Bmi is:' + ' ' + total_bmi + 'Kgm^2';

    if (total_bmi < 18) {
        document.getElementById("bmi_status").innerHTML = "Under Weight";
    } else if (total_bmi >= 18.5 && total_bmi < 24.9) {
        document.getElementById("bmi_status").innerHTML = "Healthy";
    } else if (total_bmi >= 24.9 && total_bmi < 30) {
        document.getElementById("bmi_status").innerHTML = "Over Weight";
    } else if (total_bmi >= 30) {
        document.getElementById("bmi_status").innerHTML = "Suffering from Obesity";
    }

}
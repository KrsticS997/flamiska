$(document).ready(function () {

    var radSelect = $('#inputRad');

    var frizer = ['Dečije šišanje', 'Žensko šišanje', 'Feniranje'];
    var nokti = [];
    var depilacija = [];
    var sminkanje = [];
    var trepavice = [];
    var obrve = [];


    $('#inputUsluge').change(function () {
        var val = $(this).val();
        if (val == 'Frizer') {
            $('.inputRad').css('display','block');
            frizer.forEach(function (value) {
                radSelect.append('<option>' + value + '</option>')
            });
        } else if (val == 'Nokti') {
            $('.inputRad').css('display','block');
            nokti.forEach(function (value) {
                radSelect.append('<option>' + value + '</option>')
            });
        } else if (val == 'Depilacija') {
            $('.inputRad').css('display','block');
            depilacija.forEach(function (value) {
                radSelect.append('<option>' + value + '</option>')
            });
        } else if (val === 'Šminkanje') {
            $('.inputRad').css('display','block');
            sminkanje.forEach(function (value) {
                radSelect.append('<option>' + value + '</option>')
            });
        } else if (val == 'Svilene trepavice') {
            $('.inputRad').css('display','block');
            trepavice.forEach(function (value) {
                radSelect.append('<option>' + value + '</option>')
            });
        } else {
            $('.inputRad').css('display','block');
            obrve.forEach(function (value) {
                radSelect.append('<option>' + value + '</option>')
            });
        }
    });

});
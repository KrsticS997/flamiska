$(document).ready(function () {

    var radSelect = $('#inputRad');

    var frizer = ['Dečije šišanje', 'Žensko šišanje', 'Feniranje', 'Šišanje + feniranje', 'Lokne', 'Peglanje bez pranja kose', 'Farbanje', 'Preliv/izrastak', 'Farbanje + feniranje', 'Pramenovi + feniranje', 'Pramenovi + farbanje + feniranje', 'Skidanje boje', 'Dubinsko pakovanje kose', 'Svečane frizure', 'Pletenice', 'Brazilski keratin'];
    var nokti = ['Nadogradnja noktiju', 'Korekcija noktiju', 'Ojačavanje noktiju', 'Skidanje noktiju', 'Lakiranje noktiju', 'Ukrašavanje noktiju'];
    var depilacija = ['Depilacija - cele noge + prepone', 'Depilacija - cele noge + prepone + bikini', 'Depilacija ruku', 'Depilacija pola nogu', 'Depilacija prepona', 'Brazilska depilacija', 'Depilacija nausnica', 'Depilacija lica i brade', 'Depilacija stomaka', 'Depilacija pazuha'];
    var sminkanje = ['Šminkanje', 'Šminkanje sa trepavicama', 'Šminkanje sa komplet trepavicama', 'Šminkanje mlade'];
    var trepavice = ['Nadogradnja metodom 1:1', 'Korekcija', 'Skidanje gelom'];
    var obrve = ['Senčenje obrva', 'Korekcija'];


    $('#inputUsluge').change(function () {
        var val = $(this).val();
        if (val == 'Frizer') {
            $('.inputRad').css('display','block');
            $('.inputRad').find('option').remove();
            $('#inputRad').append('<option disabled selected>Izaberite...</option>');
            frizer.forEach(function (value) {
                radSelect.append('<option>' + value + '</option>')
            });
        } else if (val == 'Nokti') {
            $('.inputRad').css('display','block');
            $('.inputRad').find('option').remove();
            $('#inputRad').append('<option disabled selected>Izaberite...</option>');
            nokti.forEach(function (value) {
                radSelect.append('<option>' + value + '</option>')
            });
        } else if (val == 'Depilacija') {
            $('.inputRad').css('display','block');
            $('.inputRad').find('option').remove();
            $('#inputRad').append('<option disabled selected>Izaberite...</option>');
            depilacija.forEach(function (value) {
                radSelect.append('<option>' + value + '</option>')
            });
        } else if (val === 'Šminkanje') {
            $('.inputRad').css('display','block');
            $('.inputRad').find('option').remove();
            $('#inputRad').append('<option disabled selected>Izaberite...</option>');
            sminkanje.forEach(function (value) {
                radSelect.append('<option>' + value + '</option>')
            });
        } else if (val == 'Svilene trepavice') {
            $('.inputRad').css('display','block');
            $('.inputRad').find('option').remove();
            $('#inputRad').append('<option disabled selected>Izaberite...</option>');
            trepavice.forEach(function (value) {
                radSelect.append('<option>' + value + '</option>')
            });
        } else {
            $('.inputRad').css('display','block');
            $('.inputRad').find('option').remove();
            $('#inputRad').append('<option disabled selected>Izaberite...</option>');
            obrve.forEach(function (value) {
                radSelect.append('<option>' + value + '</option>')
            });
        }
    });

});

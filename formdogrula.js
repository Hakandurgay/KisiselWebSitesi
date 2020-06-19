function dogrula(form) {
    var deger = document.formisim.adi.value;
    if (deger == "") {
        window.alert("İsim alanı boş bırakılamaz.");
        return false;
    }

    var deger = document.formisim.soyadi.value;
    if (deger == "") {
        window.alert("Soyadı alanı boş bırakılamaz.");
        return false;
    }

    var deger = document.formisim.telefonnumarasi.value;
    if (deger == "") {
        window.alert("Telefon numarası alanı boş bırakılamaz.");
        return false;
    }

    var deger = document.formisim.aciklama.value;
    if (deger == "") {
        window.alert("Lütfen bir açıklama yazınız.");
        return false;
    }


    var deger = document.getElementById("telefonnumarasi").value;
    if (isNaN(deger) == true) {
        window.alert("Telefon numarası alanı rakamlardan başka bir değer içeremez.");
        return false;
    }


    patternEposta = "^" + "([abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0-9_\.\-]+)" + "@" + "([abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0-9_\.\-]+)" + "[\.]" + "([abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0-9_\.\-]+)" + "$";

    if (!regKontrol(patternEposta, form.email.value)) {
        alert("Lütfen Doğru Bir E-posta Adresi Giriniz.");
        form.email.value = "";
        form.email.focus();
        return false;
    }
    return true;

}

function regKontrol(pattern, value) {
    r = new RegExp(pattern, "g");
    return r.test(value);
}
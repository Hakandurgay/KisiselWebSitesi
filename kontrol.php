<?php
echo 'Merhaba '. $_POST["adi"]. ' '. $_POST["soyadi"];
echo '<br/> Mesajiniz alinmiştir. Kisa sure icerisinde donus yapacagiz.';
echo '<br/> Adiniz : ' . $_POST["adi"];
echo '<br/> Soyadiniz : ' . $_POST["soyadi"];
echo '<br/> Cinsiyetiniz : ' . $_POST["cinsiyet"];
echo '<br/> E-mailiniz : ' . $_POST["email"];
echo '<br/> Açıklamaniz : ' . $_POST["aciklama"];
echo '<br/> Yukaridaki bilgiler doğru değilse bizimle iletisime geciniz. Mail-hakandurgay@gmail.com';
?>
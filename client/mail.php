<?php
$to = "klimovcode@mail.ru"; // емайл получателя данных из формы
$subject = "Форма обратной связи"; // тема полученного емайла
$message = "Ваше имя: ".$_POST['name']."<br>";//присвоить переменной значение, полученное из формы name=name
//$message .= "E-mail: ".$_POST['email']."<br>"; //полученное из формы name=email
 $message .= "Номер телефона: ".$_POST['phone']."<br>"; //полученное из формы name=phone
//$message .= "Сообщение: ".$_POST['message']."<br>"; //полученное из формы name=message
$headers  = 'MIME-Version: 1.0' . "\r\n"; // заголовок соответствует формату плюс символ перевода строки
$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n"; // указывает на тип посылаемого контента
//echo $message;

if(mail($to, $subject, $message, $headers) ) {
    echo '<meta http-equiv = "Refresh" content="0; URL=index.html">';
} else {
    echo '<meta http-equiv = "Refresh" content="0; URL=index.html"';
}
?>
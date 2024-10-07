<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // استلام البيانات من نموذج الاتصال
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $location = htmlspecialchars($_POST['location']);
    $message = htmlspecialchars($_POST['message']);

    // إعداد البريد الإلكتروني
    $to = "bram82364@gmail.com"; // ضع هنا بريدك الإلكتروني
    $subject = "طلب جديد من موقع خدمات فورد";
    $body = "اسم المرسل: $name\nالبريد الإلكتروني: $email\nالموقع: $location\n\nالرسالة:\n$message";
    $headers = "From: $email\r\n";

    // إرسال البريد الإلكتروني
    if (mail($to, $subject, $body, $headers)) {
        echo "تم إرسال الرسالة بنجاح.";
    } else {
        echo "فشل في إرسال الرسالة.";
    }
}
?>

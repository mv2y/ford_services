// التحقق من إرسال نموذج الاتصال
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // بيانات النموذج
    const templateParams = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        location: document.getElementById('location').value,
        message: document.getElementById('message').value
    };

    // استخدام EmailJS لإرسال الرسالة
    emailjs.send('service_nb5trg7', 'template_xgnmtbg', templateParams)
        .then(function(response) {
           alert('تم إرسال الرسالة بنجاح!');
        }, function(error) {
           alert('حدث خطأ أثناء الإرسال. حاول مرة أخرى.');
        });
});
emailjs.send("service_nb5trg7","template_xgnmtbg");
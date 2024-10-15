// إعداد Firebase
var firebaseConfig = {
    apiKey: "AIzaSyD8-zbezVA3BD9N_OdkEnM83u61p8Ba2M8",
    authDomain: "ford-servies.firebaseapp.com",
    databaseURL: "https://ford-servies-default-rtdb.firebaseio.com",
    projectId: "ford-servies",
    storageBucket: "ford-servies.appspot.com",
    messagingSenderId: "757262710894",
    appId: "1:757262710894:web:331885b21a90d13d5a4e7f"
};

// تهيئة Firebase
firebase.initializeApp(firebaseConfig);

// تسجيل الدخول
function loginUser(email, password) {
    return firebase.auth().signInWithEmailAndPassword(email, password);
}

// إنشاء حساب جديد
function signupUser(email, password) {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
}

// إرسال الرسائل إلى Firebase
function sendMessage(sender, message) {
    var database = firebase.database();
    return database.ref('messages').push({
        sender: sender,
        message: message
    });
}

// عرض الرسائل في الوقت الفعلي
function receiveMessages(callback) {
    var database = firebase.database();
    database.ref('messages').on('child_added', function(snapshot) {
        var messageData = snapshot.val();
        callback(messageData);
    });
}

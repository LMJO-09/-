// قاعدة بيانات بسيطة للمساعد
const responses = {
    "مرحبا": "أهلاً بك! كيف يمكنني مساعدتك اليوم؟",
    "شكرا": "عفواً، أنا هنا لخدمتك 😊",
    "السلام عليكم": "وعليكم السلام ورحمة الله",
};

function getBotResponse(userMessage) {
    const msg = userMessage.toLowerCase().trim();
    
    // البحث عن رد مطابق
    for (let key in responses) {
        if (msg.includes(key.toLowerCase())) {
            return responses[key];
        }
    }
    
    // رد افتراضي
    return "شكراً لسؤالك. هل يمكنك توضيح اسم الكتاب والوحدة والدرس لأعطيك إجابة دقيقة؟ 📚";
}

function sendMessage() {
    const input = document.getElementById('userInput');
    const userMessage = input.value.trim();
    
    if (userMessage === "") return;
    
    const chatBox = document.getElementById('chatBox');
    
    // عرض رسالة المستخدم
    const userDiv = document.createElement('div');
    userDiv.className = 'message user';
    userDiv.textContent = userMessage;
    chatBox.appendChild(userDiv);
    
    // عرض رد المساعد
    const botDiv = document.createElement('div');
    botDiv.className = 'message bot';
    botDiv.textContent = getBotResponse(userMessage);
    chatBox.appendChild(botDiv);
    
    // تمرير للأسفل
    chatBox.scrollTop = chatBox.scrollHeight;
    
    // تفريغ حقل الإدخال
    input.value = "";
}

function checkIt() { // функція перевірки полів форми
    //-----------
        if (document.mailer.Name.value != "") { // функція перевірки поля Name
        } else {
          alert("\nОбласть \"Ім'я\" у формі. \n\ Будь ласка, введіть своє ім'я."); // ви-водить повідомлення, якщо поле Name не заповнено
          document.mailer.Name.focus(); // вертає курсор на поле Name
          return false;
        }
    //-----------
        if (document.mailer.Subject.value != "") { // функція перевірки поля Subject
        } else {
          alert("\nОбласть \"Тема\" в формі. \n\ Будь ласка, введіть, введите тему."); //виводить повідомлення, якщо поле Subject не заповнено
          document.mailer.Subject.focus(); // вертає курсор на поле Subject
          return false;
        }
    //-----------
        if (document.mailer.Message.value != "") { // функція перевірки поля Message
          return true; // ВСЕ ВІДМІННО
        } else {
          alert("\nОбласть \"Повідомлення\" в формі. \n\nБудь ласка, напишіть повідомлення."); // виводить повідомлення, якщо поле Message не заповнено
          document.mailer.Message.focus(); // вертає курсор на поле Message
          return false;
        }
    //-----------
      }
      function msg() { // функція відправки
        document.mailer.action = "mailto:PracticalWeb6.6@gmail.com"
        mailtoandSubject = (('?Subject=' + document.mailer.Subject.value) + '&Body=' + document.mailer.Message.value);
      }
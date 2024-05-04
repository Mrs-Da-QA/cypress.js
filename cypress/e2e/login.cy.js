describe('Проверка авторизации', function () {

    it('Верный логин и пароль', function () {
          cy.visit('https://login.qa.studio/'); //зашли на сайт
         
          cy.get('#mail').type('german@dolnikov.ru'); //ввели верный логин
          cy.get('#pass').type('iLoveqastudio1'); //ввели верный пароль
          cy.get('#loginButton').click(); // нажали кнопку Войти
          
          cy.get('#messageHeader').contains('Авторизация прошла успешно'); //проверили, что при авторизации появляется текст
          cy.get('#exitMessageButton > .exitIcon').should('be.visible');// есть крестик и он виден пользователю
            });
 
     it('Восстановление пароля', function () {
          cy.visit('https://login.qa.studio/'); //зашли на сайт
          cy.get('#forgotEmailButton').click();// нажали кнопку Забыли пароль

          cy.get('#mailForgot').type('german@dolnikov.ru'); // вели эл.почту
          cy.get('#restoreEmailButton').click();//нажали кнопку отправить код
                
          cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); //проверили, что появляется текст
          cy.get('#exitMessageButton').should('be.visible'); //есть крестик и он виден пользователю
                  });

     it('Верный логин и неверный пароль', function () {
          cy.visit('https://login.qa.studio/'); //зашли на сайт
                   
          cy.get('#mail').type('german@dolnikov.ru'); //ввели верный логин
          cy.get('#pass').type('iLoveqastudio8'); //ввели неверный пароль
          cy.get('#loginButton').click(); // нажали кнопку Войти
                    
          cy.get('#messageHeader').contains('Такого логина или пароля нет'); //проверили, что появляется текст
          cy.get('#exitMessageButton > .exitIcon').should('be.visible');// есть крестик и он виден пользователю
            });    
            
     it('Не верный логин и верный пароль', function () {
          cy.visit('https://login.qa.studio/'); //зашли на сайт
                         
          cy.get('#mail').type('german@dolniko.ru'); //ввели неверный логин
          cy.get('#pass').type('iLoveqastudio1'); //ввели верный пароль
          cy.get('#loginButton').click(); // нажали кнопку Войти
                          
          cy.get('#messageHeader').contains('Такого логина или пароля нет'); //проверили, что появляется текст
          cy.get('#exitMessageButton > .exitIcon').should('be.visible');// есть крестик и он виден пользователю
                  });  

     it('Логин без собачки и верный пароль', function () {
          cy.visit('https://login.qa.studio/'); //зашли на сайт
                                   
          cy.get('#mail').type('germandolnikov.ru'); //ввели логин без @
          cy.get('#pass').type('iLoveqastudio1'); //ввели верный пароль
          cy.get('#loginButton').click(); // нажали кнопку Войти
                                    
          cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); //проверили, что появляется текст
          cy.get('#exitMessageButton > .exitIcon').should('be.visible');// есть крестик и он виден пользователю
             });  
             
             
      it('Приведение к строчным буквам в логине', function () {
          cy.visit('https://login.qa.studio/'); //зашли на сайт
               
          cy.get('#mail').type(' GerMan@Dolnikov.ru'); //ввели верный логин разными регистрами
          cy.get('#pass').type('iLoveqastudio1'); //ввели верный пароль
          cy.get('#loginButton').click(); // нажали кнопку Войти
                
          cy.get('#messageHeader').contains('Авторизация прошла успешно'); //проверили, что при авторизации появляется текст
          cy.get('#exitMessageButton > .exitIcon').should('be.visible');// есть крестик и он виден пользователю
              }); 
     })







     
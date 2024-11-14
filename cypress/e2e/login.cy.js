describe('Проверка авторизации', function () {

    it('Верный пароль и верный логин', function () {
         cy.visit('https://login.qa.studio/');// зашли на сайт
        cy.get('#mail').type('german@dolnikov.ru');//ввели верный логин
        cy.get('#pass').type('iLoveqastudio1');// ввели верный пароль
        cy.get('#loginButton').click();//нажал войти
        cy.get('#messageHeader').contains('Авторизация прошла успешно');//проверяю, что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible'); //Есть текст и он виден для пользователя
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');//Есть крестик и он виден для пользователя
     })

     it('Неверный пароль и верный логин', function () {
        cy.visit('https://login.qa.studio/');// зашли на сайт
       cy.get('#mail').type('german@dolnikov.ru');//ввели верный логин
       cy.get('#pass').type('iLoveqastudio2');// ввели неверный пароль
       cy.get('#loginButton').click();//нажал войти
       cy.get('#messageHeader').contains('Такого логина или пароля нет');//проверяю, что после авторизации вижу текст
       cy.get('#messageHeader').should('be.visible'); //Есть текст и он виден для пользователя
       cy.get('#exitMessageButton > .exitIcon').should('be.visible');//Есть крестик и он виден для пользователя
    })

    it('Верный пароль и неверный логин', function () {
        cy.visit('https://login.qa.studio/');// зашли на сайт
       cy.get('#mail').type('german@dolnikov1.ru');//ввели неверный логин
       cy.get('#pass').type('iLoveqastudio1');// ввели верный пароль
       cy.get('#loginButton').click();//нажал войти
       cy.get('#messageHeader').contains('Такого логина или пароля нет');//проверяю, что после авторизации вижу текст
       cy.get('#messageHeader').should('be.visible'); //Есть текст и он виден для пользователя
       cy.get('#exitMessageButton > .exitIcon').should('be.visible');//Есть крестик и он виден для пользователя
    })

    it('Проверка, что в логине есть собачка', function () {
        cy.visit('https://login.qa.studio/');// зашли на сайт
       cy.get('#mail').type('germandolnikov1.ru');//ввела логин без собачки
       cy.get('#pass').type('iLoveqastudio1');// ввели верный пароль
       cy.get('#loginButton').click();//нажал войти
       cy.get('#messageHeader').contains('Нужно исправить проблему валидации');//проверяю, что после авторизации вижу текст
       cy.get('#messageHeader').should('be.visible'); //Есть текст и он виден для пользователя
       cy.get('#exitMessageButton > .exitIcon').should('be.visible');//Есть крестик и он виден для пользователя
    })

    it('Проверка восстановления пароля', function () {
        cy.visit('https://login.qa.studio/');// зашли на сайт
       cy.get('#forgotEmailButton').click();//нажал восстановить пароль
       cy.get('#mailForgot').type('german@dolnikov.ru');//ввели почту для восстановления
       cy.get('#restoreEmailButton').click();//Нажали отправить код
       cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');//проверяю на совпадение текст
       cy.get('#messageHeader').should('be.visible'); //Есть текст и он виден для пользователя
       cy.get('#exitMessageButton > .exitIcon').should('be.visible');//Есть крестик и он виден для пользователя

      
 })
 
 it('Приведение к строчным буквам в логине', function () {
    cy.visit('https://login.qa.studio/');// зашли на сайт
   cy.get('#mail').type('GerMan@Dolnikov.ru');//ввели логин
   cy.get('#pass').type('iLoveqastudio1');// ввели верный пароль
   cy.get('#loginButton').click();//нажали войти
   cy.get('#messageHeader').contains('Авторизация прошла успешно');//проверяю, что после авторизации вижу текст
   cy.get('#messageHeader').should('be.visible'); //Есть текст и он виден для пользователя
   cy.get('#exitMessageButton > .exitIcon').should('be.visible');//Есть крестик и он виден для пользователя
})
 
})

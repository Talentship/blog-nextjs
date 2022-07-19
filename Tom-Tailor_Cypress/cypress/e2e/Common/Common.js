 class Email_Common 
 {

     generateRandomEmail() 
     
     {
        const result = Math.random().toString(36).substring(2,7);
        const randomEmail=result+'@jknkbajk.mailosaur.net';
        return randomEmail;
     }

 }
 export default Email_Common

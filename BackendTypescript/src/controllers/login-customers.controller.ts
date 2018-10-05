
export default {
  processLogin(user: string, password: string): Promise<string>  {
    return new Promise(
      function (resolve, reject) {
        if (!user)
          reject('Not user provided');
        else if (!password)
          reject('Not password provided');
        
        
        /*

          logica

        */
        resolve("Token123455");
      }
    );
  }
};
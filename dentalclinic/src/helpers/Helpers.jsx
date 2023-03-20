export const Helpers = (name, data, required) => {
    switch (name) {
      case "name":
      case "surname":
      case "nombre":
      case "apellido":
        //Aqui evaluaremos strings que NO pueden tener números
  
        if (data === "" && required === true) {
  
          
          return {message: "Please fill the field", Helpers: false};
  
          //Evaluamos mediante la expresión regular 
        } else if (!/[a-z]/gi.test(data)) {
          return {message: "Please fill with a valid text", Helpers: false};
        }
  
        return {message: "", Helpers: true};
  
      case "email":
        if (data === "" && required === true) {
          return {message: "Please fill the field", Helpers: false};
        } else if (
          !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(data)
        ) {
          return {message: "Invalid e-mail format", Helpers: false};
        }
  
        return {message: "", Helpers: true};
  
      case "password":
        if (data === "" && required === true) {
          return {message: "Please fill the field", Helpers: false};
        } else if (!/[\d()+-]/g.test(data)) {
          return {message: "Invalid password format", Helpers: false};
        }
        return {message: "", Helpers: true};
  
      case "phone":
      case "tfno":
      case "telefono":
      case "phonenumber":
        break;
  
      case "dni":
      case "document":
      case "nif":
        break;
  
      default:
        console.log("Field not recognized");
    }
  };
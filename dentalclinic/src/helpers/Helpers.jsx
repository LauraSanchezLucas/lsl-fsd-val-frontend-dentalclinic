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
        if (data === "" && required === true) {
          return {message: "Please fill the field", Helpers: false};
        } else if (!/\+?\(?\d{2,4}\)?[\d\s-]{9}/.test(data)) {
          return {message: "Invalid phone format", Helpers: false};
        }
        return {message: "", Helpers: true};
  
      case "dni":
      case "document":
      case "nif":
        if (data === "" && required === true) {
          return {message: "Please fill the field", Helpers: false};
        } else if (!/^[a-z]{1}[0-9]{8}?$/i.test(data)) {
          return {message: "Invalid nif format", Helpers: false};
        }
        return {message: "", Helpers: true};

      case "adress":
      case "direccion":
      case "direction":
        if (data === "" && required === true) {
          return {message: "Please fill the field", Helpers: false};
        } else if (!/^(?:\.{2})?(?:\/\.{2})*(\/[a-zA-Z0-9]+)+$/.test(data)) {
          return {message: "Invalid adress format", Helpers: false};
        }
        return {message: "", Helpers: true};

    
      case "fecha_nacimiento":
        case "birth_date":
        if (data === "" && required === true) {
          return {message: "Please fill the field", Helpers: false};
        } else if (!/^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/.test(data)) {
          return {message: "Invalid birth date format", Helpers: false};
        }
        return {message: "", Helpers: true};
  
      default:
        console.log("Field not recognized");
    }
  };
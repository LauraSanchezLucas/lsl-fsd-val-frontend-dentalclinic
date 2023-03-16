import Form from "react-bootstrap/Form";

export const InputText = ( {className, type, name, placeholder, changeFunction} ) => {
    return (
      <>
      <Form.Control
      className={className} 
      type={type}
      name={name}
      placeholder={placeholder}
      />
      </>
    )
  }

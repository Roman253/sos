import './App.css';
import emailjs from "emailjs-com";
import {createRef} from "react";

function App() {
  let form = createRef()
  
  const sendEmail = (e) => {
    e.preventDefault();
  
    emailjs.sendForm('service_ubizvfh', 'template_3a4t5mg', form.current, 'user_aPdljovZLcub8EK4W2ZHA')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  return (
    <div className="App">

    <form ref={form} onSubmit={sendEmail}>
      <input type="submit" value="Send" />
    </form>

    </div>
  );
}

export default App;

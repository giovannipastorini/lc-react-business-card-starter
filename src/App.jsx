import { useState } from "react";
import CardPreview from "./components/CardPreview";
import BusinessForm from "./components/BusinessForm";

const App = () => {

 /* 
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [companyPic, setCompanyPic] = useState("") 
  */;

  const initialFormData={
    firstName:"",
    lastName:"",
    companyName:"",
    role:"",
    email:"",
    phone:"",
    companyPic:""
  }

  const [formData, setFormData]=useState(initialFormData);

  function handleFormData(e){
    /* console.log(e); */
   /*  console.log(e.target.name);
    console.log(e.target.value); */
    
    setFormData(
      {
        ...formData,
        [e.target.name]: e.target.value
      }
    )
    
  }

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-8">
          {/* FORM */}
          < BusinessForm formData={formData} handleFormData={handleFormData} />
        </div>

        {/* COLONNA DESTRA */}
        <div className="col-md-4">

          {/* BUSINESS CARD */}
          < CardPreview formData={formData} />

        </div>
      </div>
    </div>
  );
}

export default App

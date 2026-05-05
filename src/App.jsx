import { useState } from "react";

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
          <form>
            <div className="row g-3 row-cols-2">
              <div className="col">
                <input
                  className="form-control"
                  placeholder="Nome"
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleFormData}
                  /* onChange={(e) => setFormData({...formData, firstName: e.target.value})} */
                />
              </div>
              <div className="col">
                <input
                  className="form-control"
                  placeholder="Cognome"
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleFormData}
                  /* onChange={(e) => setFormData({...formData, lastName: e.target.value})}*/
                /> 
              </div>
              <div className="col">
                <input
                  className="form-control"
                  placeholder="Azienda"
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleFormData}
                  /* onChange={(e) => setFormData({...formData, companyName: e.target.value})} */
                />
              </div>
              <div className="col">
                <input
                  className="form-control"
                  placeholder="Ruolo"
                  type="text"
                  name="role"
                  value={formData.role}
                  onChange={handleFormData}
                  /* onChange={(e) => setFormData({...formData, role: e.target.value})} */
                />
              </div>
              <div className="col">
                <input
                  className="form-control"
                  placeholder="Email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleFormData}
                  /* onChange={(e) => setFormData({...formData, email: e.target.value})} */
                />
              </div>
              <div className="col">
                <input
                  className="form-control"
                  placeholder="Telefono"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleFormData}
                  /* onChange={(e) => setFormData({...formData, phone: e.target.value})} */
                />
              </div>
            </div>
            <input
              className="form-control mt-3"
              placeholder="Logo Azienda"
              type="url"
              name="companyPic"
              value={formData.companyPic}
              onChange={handleFormData}
              /* onChange={(e) => setFormData({...formData, companyPic: e.target.value})} */
            />
          </form>
        </div>

        {/* COLONNA DESTRA */}
        <div className="col-md-4">

          {/* BUSINESS CARD */}
          <div className="card h-100">
            <div className="card-header">{formData.companyName}</div>
            <div className="card-body">
              <div className="row row-cols-2">
                <div className="col">
                  <blockquote className="blockquote mb-0">
                    <p>
                      {formData.firstName} {formData.lastName}
                    </p>
                    <footer className="blockquote-footer">
                      <cite title={formData.role}>{formData.role}</cite>
                    </footer>
                  </blockquote>
                  <ul className="list-unstyled">
                    <li><i className="bi bi-telephone-fill"></i> {formData.phone}</li>
                    <li><i className="bi bi-envelope-at"></i> {formData.email}</li>
                  </ul>
                </div>
                <div className="col">
                  <img
                    className="img-fluid"
                    src={formData.companyPic}
                    alt={formData.companyName}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App

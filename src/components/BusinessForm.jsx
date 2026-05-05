export default function BusinessForm ({formData,handleFormData }){

    return(
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
    )
}
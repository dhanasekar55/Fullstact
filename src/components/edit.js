
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const Edit = () => {
  const navigate = useNavigate();
  const { state } = useLocation(); 
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    contact: "",
    email: "",
  });



  useEffect(() => {
    if (state?.id) {
      
      axios.get(`http://127.0.0.1:8000/api/company/${state.id}/`)
        .then(response => {
          setFormData(response.data); 
        })
        .catch(error => console.error("Error fetching data:", error));
    }
  }, [state]);




  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    axios.put(`http://127.0.0.1:8000/api/company/${state.id}/`, formData)
      .then(() => {
        alert("Update successful!");
        navigate("/"); 
      })
      .catch(error => console.error("Error updating data:", error));
  };
  

  return (
    <div>
      <h2>Edit Company</h2>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input id="name" value={formData.name} onChange={handleChange} /> <br/>

        <label>Age</label>
        <input id="age" value={formData.age} onChange={handleChange} /> <br/>

        <label>Contact</label>
        <input id="contact" value={formData.contact} onChange={handleChange} /> <br/>

        <label>Email</label>
        <input id="email" value={formData.email} onChange={handleChange} /> <br/>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Edit;

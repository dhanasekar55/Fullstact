import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import '../assests/css/work.css'

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tableData, setTableData] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  let navigate = useNavigate();

  const fetchTableData = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/company/");
      setTableData(response.data);
    } catch (error) {
      console.error("fetch error :", error);
    }
  };

  useEffect(() => {
    fetchTableData();
  }, [isModalOpen]);

  const onclickSubmit = async (e) => {
    e.preventDefault();
    const newcompany = {
      name,
      age,
      contact,
      email,
    };
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/company/",
        newcompany
      );
      setIsModalOpen(false);
      setName("");
      setAge("");
      setContact("");
      setEmail("");
    } catch (error) {
      console.error("fetch error:", error);
    }
  };

  const onclickEdit = (item) => {
    // console.log(index);

    navigate("/edit", { state: item });
  };
  const onclickDelete =(item)=>{
    navigate("/delete",{state: item});
  }

  console.log(tableData);

  return (
    <div className="container">
      <div>
        <button onClick={() => setIsModalOpen(true)}>Add Details</button>
      </div>
      {isModalOpen && (
        <div>
          <form>
            <label htmlFor="name">name</label>
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              id="name"
              placeholder="enter name"
              name="name"
            />
            <br />
            <br />
            <label htmlFor="age">age</label>
            <input
              onChange={(e) => setAge(e.target.value)}
              value={age}
              id="age"
              placeholder="enter age"
              name="age"
            />
            <br />
            <br />
            <label htmlFor="contact">contact</label>
            <input
              onChange={(e) => setContact(e.target.value)}
              value={contact}
              id="contact"
              placeholder="enter contact"
              name="contact"
            />
            <br />
            <br />
            <label htmlFor="email">email</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              id="email"
              placeholder="enter email"
              name="email"
            />
            <br />
            <br />
            <button onClick={(e) => onclickSubmit(e)}>Submit</button>
          </form>
        </div>
      )}

      <div>
        <table>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Contact</th>
            <th>Email</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
          {tableData.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.contact}</td>
              <td>{item.email}</td>
              <td>
                <button onClick={() => onclickEdit(item)}>Edit</button>
              </td>
              <td>
                <button onClick={() => onclickDelete(item)}>Delete</button>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Home;

import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import '../assests/css/work.css'
import { motion } from "framer-motion";

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
      <button
        onClick={() => setIsModalOpen((prev) => !prev)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        {isModalOpen ? "Close Form" : "Add Details"}
      </button>
      </div>
      {isModalOpen && (
        <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 1 }}
        className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto"
      >
        <form>
          <label htmlFor="name" className="block text-gray-700">
            Name
          </label>
          <input className="w-full border p-2 rounded mb-2" />
  
          <label htmlFor="age" className="block text-gray-700">
            Age
          </label>
          <input className="w-full border p-2 rounded mb-2" />
  
          <label htmlFor="contact" className="block text-gray-700">
            Contact
          </label>
          <input className="w-full border p-2 rounded mb-2" />
  
          <label htmlFor="email" className="block text-gray-700">
            Email
          </label>
          <input className="w-full border p-2 rounded mb-4" />
  
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-full bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
          >
            Submit
          </motion.button>
        </form>
      </motion.div>
      )}

      <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 1 }}>
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
      </motion.div>
    </div>
  );
};

export default Home;

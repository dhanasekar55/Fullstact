import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const Delete = () => {
    const navigate = useNavigate();
    const { state } = useLocation(); 
    const handleDelete = () => {
        if (!state?.id) {
            alert("Invalid company ID!");
            return;
        }

        axios.delete(`http://127.0.0.1:8000/api/company/${state.id}/`)
            .then(() => {
                alert("Company deleted successfully!");
                navigate("/"); 
            })
            .catch(error => {
                console.error("Error deleting:", error);
                alert("Error deleting the company.");
            });
    };

    return (
        <div>
            <h2>Are you sure you want to delete?</h2>
            <button onClick={handleDelete}>Delete</button>
            <button onClick={() => navigate("/")}>Cancel</button>
        </div>
    );
};

export default Delete;

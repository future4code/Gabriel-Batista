import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";


export const useProtectedPage = () => {
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      history.push("/login");
    }
  }, [history]);
};



const useForm = (initialState) => {
  const [form, setForm] = useState(initialState);

  const onChange = (event) => {
    const { value, name } = event.target;
    setForm({ ...form, [name]: value });
  };

  const clearFields = () => {
    setForm(initialState);
  };

  return [form, onChange, clearFields];
};

export default useForm;

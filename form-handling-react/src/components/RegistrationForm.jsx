import { useState } from 'react';

const ControlledForm = () => {
    const [formData, setFormData] = useState({ username: '', email: '', password: '' });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const validateForm = () => {
         const newErrors = {};
        if (!formData.username.trim()) { // Use .trim() to check for only whitespace
        newErrors.username = 'Username is required';
    }
        if (!formData.email.trim()) {
        newErrors.email = 'Email is required';
    }
        if (!formData.password.trim()) {
        newErrors.password = 'Password is required';
    } 
        return newErrors;
    };



    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        const formErrors = validateForm();
        if (Object.keys(formErrors).length === 0) {
    // No errors, submit the form data (e.g., to an API)
    alert('Form submitted successfully!');
    console.log('Form data:', formData);
    setErrors({}); // Clear errors after successful submit
  } else {
    // Found errors, update the errors state to display messages
    setErrors(formErrors);
  }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="username"
                value={username}
                onChange={handleChange}
            />
            <input
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
            />
            <input
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
            />
            <button type="submit">Submit</button>
        </form>
    );
};

export default ControlledForm;
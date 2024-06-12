



import React, { useState } from "react";

const JoinUs = () => {
    const genders = [
        { value: "male", label: "Male" },
        { value: "female", label: "Female" },
        { value: "non-binary", label: "Non-binary" },
        { value: "prefer-not-to-say", label: "Prefer not to say" }
    ];

    const religions = [
        { value: "christianity", label: "Christianity" },
        { value: "islam", label: "Islam" },
        { value: "hinduism", label: "Hinduism" },
        { value: "buddhism", label: "Buddhism" },
        { value: "sikhism", label: "Sikhism" },
        { value: "judaism", label: "Judaism" },
        { value: "other", label: "Other" },
        { value: "none", label: "None" }
    ];

    const countries = [
        { value: "us", label: "United States" },
        { value: "ca", label: "Canada" },
        { value: "uk", label: "United Kingdom" },
        { value: "in", label: "India" },
        { value: "au", label: "Australia" },
        // Add more countries as needed
    ];

    const paymentMethods = [
        { value: "credit-card", label: "Credit Card" },
        { value: "debit-card", label: "Debit Card" },
        { value: "paypal", label: "PayPal" },
        { value: "bank-transfer", label: "Bank Transfer" },
        { value: "crypto", label: "Cryptocurrency" }
    ];

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
        gender: "",
        country: "",
        nationality: "",
        preferredPaymentMethod: "",
        religions: [],
        image: null,
    });

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked, files } = e.target;
        if (type === "checkbox") {
            setFormData((prevData) => {
                const religions = checked
                    ? [...prevData.religions, value]
                    : prevData.religions.filter((religion) => religion !== value);
                return { ...prevData, religions };
            });
        } else if (type === "file") {
            const file = files[0];
            setFormData((prevData) => ({ ...prevData, image: file }));
        } else {
            setFormData((prevData) => ({ ...prevData, [name]: value }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // Handle form submission
    };

    const renderImagePreview = () => {
        if (!formData.image) {
            return null;
        }
        const url = URL.createObjectURL(formData.image);
        return <img src={url} alt="Preview" className="w-24 h-24 object-cover rounded-full" />;
    };

    return (
        <div className="container mx-auto p-4 max-w-lg bg-white shadow-md rounded-lg mt-5 mb-5">
            <h2 className="text-2xl font-bold mb-6 text-center">Join Us</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group mb-4 flex justify-center">
                    <div className="relative">
                        {renderImagePreview()}
                        <label htmlFor="imageUpload" className="absolute inset-0 flex items-center cursor-pointer rounded-full">
                            <span className="text-gray-700 p-4">Upload Picture </span>
                            <input
                                type="file"
                                id="imageUpload"
                                name="image"
                                accept="image/*"
                                onChange={handleChange}
                                className="hidden"
                            />
                        </label>
                    </div>
                </div>
                <div className="form-group mb-4">
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                    />
                </div>
                <div className="form-group mb-4">
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                    />
                </div>
                <div className="form-group mb-4">
                    <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Phone Number</label>
                    <input
                        type="tel"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                    />
                </div>
                <div className="form-group mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                    />
                </div>
                <div className="form-group mb-4">
                    <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Gender</label>
                    <select
                        id="gender"
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                    >
                        <option value="" disabled>Select your gender</option>
                        {genders.map((gender) => (
                            <option key={gender.value} value={gender.value}>
                                {gender.label}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="form-group mb-4">
                    <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country</label>
                    <select
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                    >
                        <option value="" disabled>Select your country</option>
                        {countries.map((country) => (
                            <option key={country.value} value={country.value}>
                                {country.label}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="form-group mb-4">
                    <label htmlFor="nationality" className="block text-sm font-medium text-gray-700">Nationality</label>
                    <select
                        id="nationality"
                        name="nationality"
                        value={formData.nationality}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                    >
                        <option value="" disabled>Select your nationality</option>
                        {countries.map((country) => (
                            <option key={country.value} value={country.value}>
                                {country.label}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="form-group mb-4">
                    <label htmlFor="preferredPaymentMethod" className="block text-sm font-medium text-gray-700">Preferred Payment Method</label>
                    <select
                        id="preferredPaymentMethod"
                        name="preferredPaymentMethod"
                        value={formData.preferredPaymentMethod}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                    >
                        <option value="" disabled>Select your payment method</option>
                        {paymentMethods.map((method) => (
                            <option key={method.value} value={method.value}>
                                {method.label}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="form-group mb-4 relative">
                    <label htmlFor="religion" className="block text-sm font-medium text-gray-700">Which of these best describe you? Select up to a maximum of three:</label>
                    <div className="mt-1">
                        <button
                            type="button"
                            onClick={() => setDropdownOpen(!dropdownOpen)}
                            className="w-full p-2 border border-gray-300 rounded-md shadow-sm bg-white"
                        >
                            {formData.religions.length === 0 ? "Select your religions" : formData.religions.join(", ")}
                        </button>
                    </div>
                    {dropdownOpen && (
                        <div className="absolute mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg z-10">
                            <div className="p-2 max-h-40 overflow-y-auto">
                                {religions.map((religion) => (
                                    <label key={religion.value} className="block text-sm font-medium text-gray-700">
                                        <input
                                            type="checkbox"
                                            name="religion"
                                            value={religion.value}
                                            checked={formData.religions.includes(religion.value)}
                                            onChange={handleChange}
                                            className="mr-2"
                                        />
                                        {religion.label}
                                    </label>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
                <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-lg shadow-sm hover:bg-blue-600">Register</button>
            </form>
        </div>
    );
};

export default JoinUs;

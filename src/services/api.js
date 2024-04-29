const API_BASE_URL = "https://assignment-startoonlab.onrender.com/api";

// Example function to get data from the API
export const fetchData = async (endpoint, options = {}) => {
  try {
    const response = await fetch(`${API_BASE_URL}/${endpoint}`, options);

    if (!response.ok) {
      // Handle error responses
      throw new Error(`Request failed with status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    // Handle network errors or other issues
    console.error("Error fetching data:", error.message);
    throw error;
  }
};

// Example function to send data to the API (e.g., POST request)
export const sendData = async (endpoint, data, options = {}) => {
  try {
    const response = await fetch(`${API_BASE_URL}/${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      ...options,
    });

    if (!response.ok) {
      throw new Error(`Request failed with status: ${response.status}`);
    }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error("Error sending data:", error.message);
    throw error;
  }
};

export const signin = async (data) => {
  try {
    const response = await fetch(`${API_BASE_URL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error(`Request failed with status: ${response.status}`);
    }
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error("Error sending data:", error.message);
    throw error;
  }
};

export const signup = async (data) => {
  try {
    const response = await fetch(`${API_BASE_URL}/users/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error(`Request failed with status: ${response.status}`);
    }
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error("Error sending data:", error.message);
    throw error;
  }
};



//////////////////////////////////////////////////getAllusers Admin

export const getAllUsers = async (token) => {
  try {
    const cleanToken = token.replace(/['"]+/g, "");
    const response = await fetch(`${API_BASE_URL}/admin/admin/dashboard`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${cleanToken}`, // Ensure Bearer prefix for JWT
      },
    });

    if (!response.ok) {
      throw new Error(`Request failed with status: ${response.status}`);
    }

    const users = await response.json();
    return users;
  } catch (error) {
    console.error("Error fetching all users:", error.message);
    throw error;
  }
};










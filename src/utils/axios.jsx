import axios from "axios";

const instance = axios.create({
  baseURL: "https://fakestoreapi.com",
});

export default instance; // Exporting the instance for other parts of the app to use.  This is a Singleton pattern.  We are using axios to make HTTP requests to the fake API.  This instance is then used throughout the app.  This pattern allows for easier mocking of API responses for testing purposes.  The instance is also reused across different components to avoid making multiple HTTP requests to the same API.  This could be beneficial if the API is slow or if

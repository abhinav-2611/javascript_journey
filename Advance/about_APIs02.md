
# Understanding How an Actual API Looks

### 1. **API URL (Endpoint)**
An API provides a **URL** (called an endpoint) where you send requests.

**Example Endpoint:**

`https://api.openweathermap.org/data/2.5/weather`

This is the endpoint for the OpenWeatherMap API, which provides weather data.

---

### 2. **API Request**
Requests are sent to the API using HTTP methods like **GET**, **POST**, etc., along with query parameters, headers, or body data.

**Example Request:**

`GET https://api.openweathermap.org/data/2.5/weather?q=Delhi&appid=your_api_key`

- **`GET`**: HTTP method used to request data.
- **`q=Delhi`**: Query parameter asking for weather data for Delhi.
- **`appid=your_api_key`**: API key (like a password) to authenticate your request.

---

### 3. **API Response**
The API sends back a response, typically in **JSON** format (a structured data format).

**Example Response:**

{
    "coord": { "lon": 77.22, "lat": 28.67 },
    "weather": [
        { "id": 800, "main": "Clear", "description": "clear sky", "icon": "01d" }
    ],
    "main": {
        "temp": 303.15,
        "feels_like": 306.15,
        "temp_min": 303.15,
        "temp_max": 303.15,
        "pressure": 1012,
        "humidity": 44
    },
    "name": "Delhi",
    "cod": 200
}

**Explanation of Response:**

- **Coordinates (`coord`)**: Location data (longitude and latitude).
- **Weather (`weather`)**: Description of the weather (e.g., "clear sky").
- **Temperature (`main`)**: Current, minimum, and maximum temperatures.
- **City Name (`name`)**: The requested city (e.g., "Delhi").
- **Status Code (`cod`)**: 200 means the request was successful.



### 4. **API Documentation**
APIs come with documentation that explains how to use them. For example:

#### OpenWeatherMap API Documentation:
- **Endpoint:** `https://api.openweathermap.org/data/2.5/weather`
- **Parameters:**
  - `q`: City name (e.g., `Delhi`).
  - `appid`: Your API key (required).
- **Response:** JSON object with weather details.



### 5. **Example Code for Calling an API**

#### Using JavaScript with `fetch()`:

const apiKey = "your_api_key"; // Replace with your API key
const city = "Delhi";

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => {
        console.log("Weather Data:", data);
        console.log(`Temperature in ${data.name}: ${data.main.temp}°K`);
    })
    .catch(error => console.error("Error:", error));



### 7. **Tools for Testing APIs**
- **Postman**: A tool for testing and experimenting with APIs.
- **Browser**: For simple GET requests, you can type the API URL into the browser (e.g., `https://catfact.ninja/fact`) to see the response.



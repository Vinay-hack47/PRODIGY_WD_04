# Weather App

## Overview

This Weather App allows users to search for the current weather conditions of any location. It uses the OpenWeatherMap API to fetch weather data and displays it in a user-friendly interface.

## Features

- **Search Weather by Location**: Users can enter the name of a city to get the current weather conditions.
- **Current Location Weather**: Automatically fetches and displays the weather for the user's current location using geolocation.
- **Weather Details**: Displays temperature, humidity, and wind speed.
- **Weather Icons**: Shows appropriate weather icons based on the current weather conditions.

## Components

### `Weather.jsx`

- **State Management**: Manages the state for the location (`place`), weather data (`weather`), and weather icon (`weatherIcon`).
- **Geolocation**: Uses the browser's geolocation API to get the user's current location and fetch weather data for that location.
- **API Calls**: Contains functions to fetch weather data from the OpenWeatherMap API based on the city name or coordinates.
- **Weather Icon Update**: Updates the weather icon based on the fetched weather data.
- **Search Bar**: Provides an input field for users to enter a city name and a search button to fetch weather data.

### `DisplayWeather.jsx`

- **Weather Display**: Displays the weather icon, temperature, location name, humidity, and wind speed.
- **Conditional Rendering**: Ensures that weather data is displayed only when available.

## How to Run

1. **Clone the Repository**: 
   ```bash
   git clone <repository-url>
   ```
2. **Install Dependencies**: 
   ```bash
   npm install
   ```
3. **Set Up Environment Variables**: 
   - Create a `.env` file in the root directory.
   - Add your OpenWeatherMap API key:
     ```
     VITE_APP_ID=your_openweathermap_api_key
     ```
4. **Start the Application**: 
   ```bash
   npm run dev
   ```

## Usage

- Open the application in your browser.
- Use the search bar to enter a city name and click the search icon to fetch weather data.
- The application will automatically fetch and display the weather for your current location on load.

## Dependencies

- **React**: JavaScript library for building user interfaces.
- **OpenWeatherMap API**: Provides weather data.
- **Vite**: A fast and lightweight development server for building web applications.

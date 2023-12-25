# Polygon App

The project involves the development of a mobile application using React Native and a backend based on NodeJS with ExpressJS. The application will fetch data from the Polygon API to display information about loading states and price variations in stocks.

## Table of Contents

- [Features](#features)
- [Screenshots](#screenshots)
- [Installation and Execution](#installation)
- [Project Structure](#project-structure)

## Features

- Visualization of information about stock price variations.
- Customized watchlist.
- Data update with a pull-down gesture.

## Screenshots

![Home Image](assets/img/home.png)

## Installation and Execution

For this project, Node V21.0.0 was used, and it was developed with Expo and TypeScript to handle types correctly.

Note: For Android, version 33 is recommended.

```bash
# Install dependencies
npm install

# Run on platforms
npm run android
npm run ios
```

## Project Structure

```bash
src
├───assets # Fonts, icons, and images for the app
│   ├───fonts
│   ├───icons
│   └───img
├───components # App components such as buttons, texts, etc.
│   └───theme # Components related only to the app theme
├───context
├───data # Mock data
├───hooks
├───navigation # Where app navigation is established (Tabs and Stacks)
├───pages # Application views
│   └───Home
├───service # Connection to external services
└───utils
```


# React Native Project with React Navigation and GraphQL Integration (TypeScript)

## Project Overview

This React Native project demonstrates how to integrate React Navigation for navigation management and GraphQL for API requests. The project is written in TypeScript to ensure type safety and code maintainability.

## Prerequisites

Before you begin, ensure you have the following installed on your development machine:

- **Node.js:** Make sure you have Node.js installed. You can download it from [nodejs.org](https://nodejs.org/).
- **Yarn (optional but recommended):** Yarn is a fast, reliable, and secure dependency management tool. You can install Yarn by following the instructions at [yarnpkg.com](https://yarnpkg.com/).


## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```bash
   cd <project-directory>
   ```

3. Install dependencies:

   ```bash
   yarn install
   ```

## Configuration

### GraphQL Integration

1. **Apollo Client Setup:**

   Configure Apollo Client with your GraphQL API endpoint. Open `src/services/graphql/apollo.ts` and update the `uri` property in the `HttpLink` constructor with your GraphQL API URL.

   ```typescript
   const httpLink = new HttpLink({
     uri: 'YOUR_GRAPHQL_API_ENDPOINT', // Update this with your GraphQL API URL
   });
   ```

   Make sure you have the necessary GraphQL queries, mutations, and subscriptions set up in your API.

2. **GraphQL Operations:**

   Define your GraphQL operations (queries) in separate files inside the `src/services/graphql/queries` directory. Import and use this operations in your components or services.

### React Navigation

React Navigation is already set up in this project. You can find the navigation logic in the `src/navigations` directory. Update the navigator files (`navigations.tsx`, `user.stack.tsx`, etc.) according to application's navigation requirements.

## Usage

### Running the App

To run the app on an Android or iOS emulator/simulator, use the following commands:

- **Android:**

  ```bash
  yarn android
  ```

- **iOS:**

  ```bash
  yarn ios
  ```

### Project Structure

The project follows a standard React Native project structure with TypeScript integration. Here's an overview of the main directories:

- **`src/components/`:** Contains reusable components used throughout the app.
- **`src/constants/`:** Contains defined colors throughout the app.
- **`src/screens/`:** Contains individual screens of the app.
- **`src/navigations/`:** Contains navigation logic and navigator components.
- **`src/services/`:** Contains GraphQL operations (queries).
- **`src/types/`:** Contains TypeScript type definitions used in the project.

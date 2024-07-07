# PiedBalleProno

PiedBalleProno is a simple football prediction application built with Vue.js. This project demonstrates basic Vue.js functionalities and intentionally includes security breaches for educational purposes.

## Features

- Display a list of football matches.
- Submit predictions for matches.
- View a list of all predictions.
- View detailed information for each prediction.

## Security Breaches

This application intentionally includes the following security breaches for educational purposes:

1. **Cross-Site Scripting (XSS) Vulnerability**: User input is rendered as HTML without proper sanitization, demonstrating the risk of XSS attacks.
2. **Insecure Direct Object Reference (IDOR) Vulnerability**: Users can access prediction details directly via URLs, demonstrating the risk of IDOR attacks.

## Project Setup

### Prerequisites

- Node.js and npm installed.
- Vue CLI installed globally.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/pireeee/PiedBalleProno.git
   cd PiedBalleProno
   ```

2.  Install dependencies:

    ```bash
    npm install
    ```

### Running the Application Locally
To run the application locally, use the following command:

    npm run serve


This will start a local development server. 
Open your browser and navigate to `http://localhost:8080` to see the application.

### Building and Deploying to GitHub Pages
1. Ensure the `vue.config.js` is correctly set up with the `publicPath` pointing to your repository name:

```javascript
    module.exports = {
        publicPath: process.env.NODE_ENV === 'production' ? '/PiedBalleProno/' : '/'
    }
```
2. Build the application:

```bash
    npm run build
```

3. Deploy to GitHub Pages:

```bash
    npm run deploy
```
4. Ensure your GitHub Pages settings are configured to serve from the `gh-pages` branch.

Your application should be accessible at `https://pireeee.github.io/PiedBalleProno/`.

### Navigating the Application
- **Home:** Displays a list of football matches.
- **Submit** Prediction: Allows users to submit predictions for matches.
- **View Predictions**: Displays a list of all submitted predictions. Each prediction includes a button to view detailed information.

## Security Breaches
### Cross-Site Scripting (XSS)
The application includes a deliberate XSS vulnerability. User inputs for predictions are rendered as HTML using v-html without sanitization. This allows scripts to be executed, demonstrating how XSS attacks can occur.

To test this, submit a prediction with the following input:

```html
<script>alert('XSS Attack');</script>
```
### Insecure Direct Object Reference (IDOR)
The application includes a deliberate IDOR vulnerability. Users can access detailed prediction information directly via URL parameters without proper authorization checks.

To test this, navigate to a prediction details page using its ID:

```plaintext
https://pireeee.github.io/PiedBalleProno/prediction/<ID>
```
Replace <ID> with the actual ID of a prediction.
### Important Note
This application is for educational purposes only. Do not deploy this application to a production environment without removing the intentional security breaches and implementing proper security measures.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

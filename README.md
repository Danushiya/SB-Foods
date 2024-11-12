# SB Foods

SB Foods is an innovative digital platform designed to revolutionize the online food ordering experience. With a user-friendly interface, streamlined ordering process, and rich features, SB Foods makes it easy for food lovers to explore, order, and enjoy their favorite dishes online.

**Demo Video** -https://drive.google.com/file/d/1fem-9O4VOlTK_oQrgjiJpQmvRWyAU8_E/view?usp=sharing

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation and Setup](#installation-and-setup)
- [Application Flow](#application-flow)
  - [User Flow](#user-flow)
  - [Restaurant Flow](#restaurant-flow)
  - [Admin Flow](#admin-flow)
- [Usage](#usage)
- [Customization and Development](#customization-and-development)
- [License](#license)

## Features

- **User-friendly interface** for easy browsing and ordering
- Comprehensive **dish details**: descriptions, reviews, pricing, and promotions
- Smooth **ordering experience**: minimal inputs needed, fast confirmation
- **Admin dashboard** for managing users, products, and orders
- Separate workflows for **users**, **restaurants**, and **admins**

## Tech Stack

- **Frontend**: React (User Interface, Authentication, Cart, Products, Profile, Admin Dashboard)
- **Backend**: Node.js/Express (API Endpoints for Users, Orders, Products, Admin Authentication)
- **Database**: MongoDB (Collections for Users, Admin, Cart, Orders, Products)

## Installation and Setup

### Prerequisites

- Node.js
- MongoDB (configured with collections for Users, Admin, Cart, Orders, and Products)

### Backend Setup

1. Clone the repository and navigate to the `server` directory:
   ```bash
   cd server
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

### Frontend Setup

1. Navigate to the `client` directory:
   ```bash
   cd client
   ```

2. Start the client:
   ```bash
   npm start
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to view the app. Adjust the port in the `.env` file if needed.

You have successfully set up the SB Foods app on your local machine. You can now proceed with further development and customization.

## Application Flow

### User Flow

- Register for an account.
- Log in to explore available products.
- Add products to the cart, proceed to checkout, and place an order.
- View order history and details in the Profile section.

### Restaurant Flow

- Log in and authenticate as a restaurant.
- Obtain admin approval to start listing products.
- Add or edit food items as needed.

### Admin Flow

- Log in to access the Admin Dashboard.
- Manage users, products, and orders efficiently.

## Usage

1. **Access the app**: Open your web browser and go to [http://localhost:3000](http://localhost:3000).
2. **Browse and order**: Explore available dishes, add them to the cart, and place orders quickly and conveniently.

## Customization and Development

Feel free to customize SB Foods as per your requirements. Use the components provided in the `client` and `server` directories for frontend and backend customizations. Additional libraries can be added by updating the `package.json` files as needed.

---

## License

This project is licensed under the MIT License.

---


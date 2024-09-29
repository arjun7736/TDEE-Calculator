TDEE Calculator
The TDEE Calculator is a web application designed to help users calculate their Total Daily Energy Expenditure (TDEE) based on personal data. The app supports user registration, login, profile management, and calculation history. Admins can manage users by viewing, blocking, or unblocking them.

Features
User Registration & Authentication: Secure registration, login, and password reset functionalities.
TDEE Calculation & History: Users can save their TDEE calculations and view past entries.
Admin Controls: Admins can manage users, block, and unblock accounts.
Installation
Prerequisites
Node.js (v14 or higher)
npm (v6 or higher)
Steps to Set Up Locally
Clone the repository:

bash
Copy code
git clone https://github.com/arjun7736/TDEE-Calculator.git
Navigate to the project folder:

bash
Copy code
cd TDEE-Calculator
Install the necessary dependencies:

bash
Copy code
npm install
Run the application:

bash
Copy code
npm run dev
Visit the application at http://localhost:3000/.


create an .env to add environment variables

API Endpoints
Admin Endpoints
Get All Users
Retrieves the list of all registered users.
GET http://localhost:3000/api/admin/get-allusers

Block User
Blocks a user by their ID.
PATCH http://localhost:3000/api/admin/block-user/:id

Unblock User
Unblocks a user by their ID.
PATCH http://localhost:3000/api/admin/unblock-user/:id

Authentication Endpoints
Login
Allows a user to log in.
POST http://localhost:3000/api/auth/login

Register
Registers a new user.
POST http://localhost:3000/api/auth/register

Reset Password
Sends a password reset request.
PATCH http://localhost:3000/api/auth/reset-password

User Endpoints
Save TDEE
Saves the TDEE calculation result for the logged-in user.
POST http://localhost:3000/api/user/save-tdee

TDEE History
Retrieves the TDEE calculation history for a specific user by their ID.
GET http://localhost:3000/api/user/history/:id

Get User Data
Fetches user data based on their ID.
GET http://localhost:3000/api/user/get-userdata/:id

Update Profile
Updates user profile information.
PUT http://localhost:3000/api/user/update-profile



# AI Usage Log

## Step: Express Server Setup

### Prompt
Create a basic Express server using ES modules...

### AI Helped With
Generated initial Express server setup using express, cors and dotenv.

### What I Did
- Verified the code
- Added .env file manually
- Ensured server runs on correct port
- Used nodemon for development


## Step: MongoDB Connection

### Prompt
Write a MongoDB connection file using mongoose...

### AI Helped With
Generated database connection logic using mongoose.

### What I Did
- Created MongoDB Project
- Configured network access
- Added MongoDB URL in env file
- Connected backend with MongoDB


## Step: Order Model

### Prompt
Create a Mongoose model for a Laundry Order...

### AI Helped With
AI generated the Mongoose schema with garments array, status enum and timestamps.

### What I Improved
I kept the schema minimal and avoided unnecessary fields for the assignment.


## Step: Price List

### Prompt
Create a simple price list utility file for a laundry system...

### AI Helped With
Generated a centralized price list for garments.

### What I Improved
Kept the structure simple and used a plain object for easy access in controller.


## Step: Create Order Controller

### Prompt
Write an Express controller function to create a laundry order...

### AI Helped With
AI generated the billing calculation flow and order creation logic.

### What I Improved
I added validation for empty garments, invalid quantity and missing garment price.
I connected the controller with routes and tested all cases using REST Client.


## Step: Order Routes

### Prompt
Create Express routes for laundry orders...

### AI Helped With
Generated routing structure using express.Router and mapped controller functions to endpoints.

### What I Improved
Kept routes minimal and avoided unnecessary complexity like separate route files per action.


## Step: Update Order Status

### Prompt
Write an Express controller function to update laundry order status.

### AI Helped With
AI generated the status update controller with allowed status validation.

### What I Improved
I connected the controller with Express routes and tested it using REST Client.


## Step: Get Orders API

### Prompt
Write an Express controller function to get laundry orders.

Requirements:
- Return all orders sorted by newest first
- Filter by status using query param: ?status=READY
- Search by customerName or phone using query param: ?search=rahul
- Search should be case-insensitive for customerName
- Return count and data
- Handle errors properly
- Use ES module export

### AI Helped With
AI generated the query-building logic for status filtering and search.

### What I Improved
I connected the controller with routes and tested all cases using REST Client.


## Step: Dashboard API

### Prompt
Create a dashboard controller for a laundry order system...

### AI Helped With
Generated MongoDB aggregation logic for calculating total revenue and order counts by status.

### What I Improved
I connected the controller with routes and verified output with real data.
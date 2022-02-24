# West Buena

This project is a [West Elm](https://www.westelm.com/) clone. West Buena is the street where I live, in the neighborhood of Buena Park in Chicago, IL. West Buena is a site where users can shop for garden-related products, add those products to their personal shopping cart, checkout, and then track their orders. West Buena is a fullstack application.

![westbuena Splash](https://westbuena.s3.us-east-2.amazonaws.com/westbuena-splash.png)

## Technologies

- Frontend: Javascript, React, Redux, HTML, CSS
- Backend: Python, SQLAlchemy
- Cloud Image Hosting: Amazon S3
- Hosting: Heroku, Docker
- Control System: GIT

## Features

Users can:
- Create an account, sign in, or log in as a demo user
   * default users (named after neighborhood streets / landmarks): montrose@aa.io (demo); belle@aa.io; sheridan@aa.io
- Shopping cart
   - Add to shopping cart (Create)
   - View shopping cart (Read)
   - Update items in shopping cart (Update)
   - Delete items in shopping cart (Delete)
- Track Orders
   - Create an order by checking out (Create)
   - View details of the order (Read)
   - Return an item on the order (Update)
   - Cancel an order (Delete)
- Search
   - Use a keyword to search for products
- Upcoming features
   - Favorites List
   - Save for Later
   - Account details

## Screenshots

- Product Page

![westbuena Product Page](https://westbuena.s3.us-east-2.amazonaws.com/westbuena-product.png)

- Shopping Cart

![westbuena Shopping Cart](https://westbuena.s3.us-east-2.amazonaws.com/westbuena-cart.png)

- Track Your Order

![westbuena Track Order](https://westbuena.s3.us-east-2.amazonaws.com/westbuena-order.png)

## Setup

1. Clone this repository

   ```bash
   git clone https://github.com/grantongrant/westbuena.git
   ```

2. Install backend dependencies in root folder `westbuena`:

      ```bash
      pipenv install --dev -r dev-requirements.txt && pipenv install -r requirements.txt
      ```
3. Install frontend dependencies in folder `react-app`:

      ```bash
      npm install
      ```
4. Create an **.env** file with the following variables:

```
FLASK_APP=app
FLASK_ENV=development
SECRET_KEY=<secret here>
DATABASE_URL=<set url>
SEED_PASSWORD=<set password>
S3_BUCKET=<your bucket name>
S3_KEY=<Access key Id>
S3_SECRET=<Secret access key>
```

5. Setup your PostgreSQL user, password and database and make sure it matches your **.env** file

6. Get into your pipenv from the main directory, migrate your database, seed your database, and run your flask app

   ```bash
   pipenv shell
   ```

   ```bash
   flask db upgrade
   ```

   ```bash
   flask seed all
   ```

   ```bash
   flask run
   ```

7. In the frontend folder `react-app` run the app

   ```bash
   npm start
   ```

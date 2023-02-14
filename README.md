
# Product REST API

This rest api has create,read and delete function.

Create any product model by his description.

You can read all products at a time or you can read just one product at a time by his id.

You can delete the products by his id.

Update any product details by giving his unique id.



## Installation

Install my-project with npm

```bash
  npm install 
  npm start
```
    
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`MONGODB_PASSWORD`
//Add your MongoDB database password


## Tech Stack

**Server:** Node, Express, nodemon, mongoose, MongoDB


## Demo

https://documenter.getpostman.com/view/21391219/2s935vkfX6


## API Reference

#### GET
Read All Products

```http
  http://localhost:3000/product/readall
```

#### GET
Read Product By ProductId

```http
  http://localhost:3000/product/read/1
```

#### DELETE
Delete Product By ProductId

```http
  http://localhost:3000/product/delete/1
```

#### POST
Create Product

```http
  http://localhost:3000/product/create
```

#### POST
Create New Category

```http
  http://localhost:3000/category/create
```

#### PATCH
Update Product By ProductId

```http
  http://localhost:3000/product/update/1
```



## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://github.com/AkashKumarRam)

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/akash-kumar-ram-b02387252/)

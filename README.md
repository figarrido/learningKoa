# [Building a RESTful API with Koa and Postgres](http://mherman.org/blog/2017/08/23/building-a-restful-api-with-koa-and-postgres/#.WiyYzR2nFhF)

[![CircleCI](https://circleci.com/gh/figarrido/learningKoa.svg?style=svg)](https://circleci.com/gh/figarrido/learningKoa)

## Endpoints
* `GET /`

```
{
  "status": "success",
  "message": "hello world"
}
```

* `GET /api/v1/movies`

```
{
  "status": ("success" | "error"),
  "data": [
    {
      "id": integer,
      "name": string,
      "genre": string,
      "rating": integer,
      "explicit": boolean
    },
    ...
  ]
}
```

* `GET /api/v1/movies/:id`

```
{
  "status": ("success" | "error"),
  "data": {
    "id": integer,
    "name": string,
    "genre": string,
    "rating": integer,
    "explicit": boolean
  }
}
```

* `POST /api/v1/movies`

```
payload
{
  "name": string,
  "genre": string,
  "rating": integer,
  "explicit": boolean
}
``` 
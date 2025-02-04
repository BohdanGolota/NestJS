<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>


## build
for build 
```bash
 $ docker compose up --build
```
for shutdown docker compose 
```bash
 $ docker compose down
```
Endpoints 
```bash
# for get all news
localhost:3000/news/list

# for get one new
localhost:3000/news/{id}


# post request for create news
localhost:3000/news/item
#body: 
{
  "title": "New Title",
  "content": "Some content",
  "shortDescription": "Short desc",
  "published": true,
  "publishedAt": "2025-01-21T12:00:00Z"
}

# delete one new
localhost:3000/news/{id} 

# PUT for update news 
localhost:3000/news/{id}
# body 
{
  "title": "Title",
  "content": "Updated content"
}

```

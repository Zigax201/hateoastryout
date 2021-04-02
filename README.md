# implementasi-hateoas-Zigax201

| Nama | NIM |
| --- | ----------- |
| Alvan Dwi Akbar A. | 185150701111005 |

<br>
<br>

## API NOTES

<br>
<br>

>### Notes Show All

Request :

-   Method : GET
-   Endpoint : `/api/notes/show`

Response :

```json
[
    {
        "id": 1,
        "title": "Note Pertama",
        "body": "Ini adalah percobaan hateoas",
        "createAt": "2021-04-01T14:40:15.000Z",
        "updateAt": "2021-04-01T14:40:15.000Z"
    },
    {
        "id": 2,
        "title": "Ini Data Ke 2 boi",
        "body": "Ini cttn buat hateoas di nodejs pake mysql OP bro",
        "createAt": "2021-04-01T14:45:22.000Z",
        "updateAt": "2021-04-01T14:45:22.000Z"
    }
]
```

<br>

>### Notes Show by Id

Request :

-   Method : GET
-   Endpoint : `/api/notes/show/{id}`

Response :

```json
{
        "id": 1,
        "title": "Note Pertama",
        "body": "Ini adalah percobaan hateoas",
        "createAt": "2021-04-01T14:40:15.000Z",
        "updateAt": "2021-04-01T14:40:15.000Z"
}
```

<br>

>### Create Notes

Request :

-   Method : POST
-   Endpoint : `/api/notes/show`
-   Body :
    -   title : string
    -   body : string

Response :

```json
{
    "Notes Succesfully Created"
}
```

<br>

>### Update Notes

Request :

-   Method : PUT
-   Endpoint : `/api/notes/show/{id}`
-   Body :
    -   title : string
    -   body : string

Response :

```json
{
    "Notes Succesfully Edited"
}
```

<br>

>### Delete Notes

Request :

-   Method : DELETE
-   Endpoint : `/api/notes/show`
  
Response :

```json
{
    "Notes Succesfully Deleted"
}
```

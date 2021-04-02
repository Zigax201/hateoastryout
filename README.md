# implementasi-hateoas-Zigax201

| Nama | NIM |
| --- | ----------- |
| |  |

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
{
    "result": [
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
    ],
    "_links": [
        {
            "rel": "notes",
            "method": "GET",
            "title": "Notes by Id",
            "href": {
                "arr": [
                    {
                        "href": "/api/notes/show/1"
                    },
                    {
                        "href": "/api/notes/show/2"
                    }
                ]
            }
        },
        {
            "data": [
                {
                    "rel": "create",
                    "method": "POST",
                    "title": "Create Notes",
                    "href": "/api/notes/show"
                },
                {
                    "rel": "update",
                    "method": "PUT",
                    "title": "Update Notes",
                    "href": "/api/notes/show/"
                }
            ]
        }
    ]
}
```

<br>

>### Notes Show by Id

Request :

-   Method : GET
-   Endpoint : `/api/notes/show/{id}`

Response :

```json
{
    "result": {
        "id": 1,
        "title": "Note Pertama",
        "body": "Ini adalah percobaan hateoas",
        "createAt": "2021-04-01T14:40:15.000Z",
        "updateAt": "2021-04-01T14:40:15.000Z"
    },
    "_links": [
        {
            "rel": "notes",
            "method": "GET",
            "title": "Notes by Id",
            "href": {
                "arr": [
                    {
                        "href": "/api/notes/show/1"
                    }
                ]
            }
        },
        {
            "data": [
                {
                    "rel": "create",
                    "method": "POST",
                    "title": "Create Notes",
                    "href": "/api/notes/show"
                },
                {
                    "rel": "update",
                    "method": "PUT",
                    "title": "Update Notes",
                    "href": "/api/notes/show/"
                }
            ]
        }
    ]
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
    "result": "Notes Succesfully Create",
    "_links": [
        {
            "rel": "notes",
            "method": "GET",
            "title": "Notes by Id",
            "href": {
                "arr": [
                    {
                        "href": "/api/notes/show/15"
                    }
                ]
            }
        },
        {
            "data": [
                {
                    "rel": "update",
                    "method": "PUT",
                    "title": "Update Notes",
                    "href": "/api/notes/show/"
                }
            ]
        }
    ]
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
    "result": "Notes Succesfully Edit",
    "_links": [
        {
            "rel": "notes",
            "method": "GET",
            "title": "Notes by Id",
            "href": {
                "arr": [
                    {
                        "href": "/api/notes/show/11"
                    }
                ]
            }
        },
        {
            "data": [
                {
                    "rel": "create",
                    "method": "POST",
                    "title": "Create Notes",
                    "href": "/api/notes/show"
                },
                {
                    "rel": "update",
                    "method": "PUT",
                    "title": "Update Notes",
                    "href": "/api/notes/show/"
                }
            ]
        }
    ]
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
# hateoastryout

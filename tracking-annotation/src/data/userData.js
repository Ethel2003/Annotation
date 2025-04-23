import { ref } from "vue"

export const users = ref([
        {
            
            "firstName": "Jacques",
            "lastName": "AGBETI",
            "login": "Jacques",
            "password": "aze",
            "role_id": 1,
            "isldap": true,
    
        },
        {
            
            "firstName": "Ulrich",
            "lastName": "KINHOEGBE",
            "login": "Ulrich",
            "password": "rez",
            "role_id": 3,
            "isldap": false,

        },
        {
            
            "firstName": "Peace",
            "lastName": "KAKPO",
            "login": "Peace",
            "password": "rft",
            "role_id": 1,
            "isldap": true,


        },
    {
            
                "firstName": "Inocent",
                "lastName": "OLORY-TOGBE",
                "login": "Inocent",
                "password": "hacker229",
                "role_id": 1,
                "isldap": true,
    
    
            },
        {
            
            "firstName": "Jean Luc",
            "lastName": "AKPOHOUNTI",
            "login": "Jean",
            "password": "gtrf",
            "role_id": 3
        },
        {
            
            "firstName": "Mathieu",
            "lastName": "ADIMI",
            "login": "Mathieu",
            "password": "hgfrt",
            "role_id": 2,
            "isldap": false,

        }
    ])
     
    export const roles =ref([
            {
                "id": 1,
                "libelleRole": "admin"
            },
            {
                "id": 2,
                "libelleRole": "evaluateur"
            },
            {
                "id": 3,
                "libelleRole": "annotateur"
            }
    ])
     
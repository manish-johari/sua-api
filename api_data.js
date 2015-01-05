define({ api: [

  {
    "type": "post",
    "url": "/users/sign_up",
    "title": "Sign up",
    "name": "Create_Account",
    "description": "API will create a user account.",
    "group": "Login",
    "version": "1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "user[country_code]",
            "optional": false,
            "description": "Provide the Country Code."
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "user[phone_no]",
            "optional": false,
            "description": "Provide the phone_no."
          }
        ]
        }
    },
    "success": {
      "examples": [
        {
          "title": "Success (201):",
          "content": "{\n\t\"user_id\":  2,\n\t\"auth_token\": \"xyzabc\" \n}"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error (422):",
          "content": "{\n\t \"errors\" : \n\t {\n\t\t \"phone_no\": \"Phone_no has already been taken.\" \n\t}\n}"
        }
      ]
    },
  },



]});
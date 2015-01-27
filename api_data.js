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
            "type": "Integer",
            "field": "user[country_code]",
            "optional": false,
            "description": "Provide the Country Code."
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "field": "user[phone_num]",
            "optional": false,
            "description": "Provide the phone_num."
          }
        ]
        }
    },
    "success": {
      "examples": [
        {
          "title": "Success (201):",
          "content": "{\n\t\"user_id\":1,\n\t \"country_code\":91,\n\t \"phone_num\":\"9971480801\",\n\t \"verification_token\":\"778fb\",\n\t \"token\":\"az2Jf41yDMc1E2DMHssS\" \n}"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error (422):",
          "content": "{\n\t \"errors\" : \n\t {\n\t\t \"phone_num\": \"Phone num can't be blank.\" \n\t}\n}"
        }
      ]
    },
  },

  {
    "type": "get",
    "url": "/users/confirmation",
    "title": "Confirm token",
    "name": "Confirm_Token",
    "description": "API will verify the confirmation token.",
    "group": "Login",
    "version": "1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "user[confirmation_token]",
            "optional": false,
            "description": "Provide the confirmation_token sent to user via sms."
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "auth_token",
            "optional": false,
            "description": "Provide authentication token of user."
          },
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response (200):",
          "content": "{\n\t \"user_id\":1,\n\t \"country_code\":91,\n\t \"phone_num\":\"9971480801\"\n}\n"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response (422):",
          "content": "{\n\t \"errors\": \n\t\t {\n\t\t\t\"confirmation_token\": \"Confirmation token is invalid.\", \n\t\t\t\"generic_errors\": \"Confirmation token is invalid.\"\n\t\t}\n}\n"
        }
      ]
    },
  },

  {
    "type": "post",
    "url": "/contacts",
    "title": "Create Contact",
    "name": "create_contact",
    "description": "API will create user's contact.",
    "group": "Contact",
    "version": "1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Array",
            "field": "user[contact]",
            "optional": false,
            "description": "Provide the array of contact numbers of user. <p>eg. [\"121\", \"+9112345678\", \"09971480801\", \"902135689\", \"00969989745*6\", \"*121*2#\"]</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "auth_token",
            "optional": false,
            "description": "Provide authentication token of user."
          },
        ]
        }
    },
    "success": {
      "examples": [
        {
          "title": "Success (201):",
          "content": "{\n\t\"contact\":\n\t\t{\n\t\t\t\"121\": {\"errors\": [\"Contact is not valid.\"]},\n\t\t\t\"+9112345678\":{\"id\":9,\"contact\":9112345678,\"is_existing\":false},\n\t\t\t\"09971480801\":{\"id\":1,\"contact\":919971480801,\"is_existing\":true}\n\t\t} \n}"
        }
      ]
    }
  },

  {
    "type": "get",
    "url": "/contacts",
    "title": "Show Contacts",
    "name": "show_contacts",
    "description": "API will show user's contacts.",
    "group": "Contact",
    "version": "1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "auth_token",
            "optional": false,
            "description": "Provide authentication token of user."
          },
        ]
        }
    },
    "success": {
      "examples": [
        {
          "title": "Success (200):",
          "content": "{\n\t\"contacts\": \n\t\[\n\t\t{\"id\":1,\"contact\":919971xxxxx,\"is_existing\":true\},\n\t\t\{\"id\":2,\"contact\":9190xxxxxxx,\"is_existing\":false\}\n\t]\n}"
        }
      ]
    }
  },

  {
    "type": "delete",
    "url": "/contacts/:id",
    "title": "Delete Contact",
    "name": "delete_contact",
    "description": "API will delete user's contact.",
    "group": "Contact",
    "version": "1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "auth_token",
            "optional": false,
            "description": "Provide authentication token of user."
          },
        ]
        }
    },
    "success": {
      "examples": [
        {
          "title": "Success (200):",
          "content": "{\n\t\"id\": 1, \"contact\" : 99714808XXX \n}"
        }
      ]
    }
  },

  {
    "type": "post",
    "url": "/profile",
    "title": "Create Profile",
    "name": "create_profile",
    "description": "API will create user's profile.",
    "group": "Profile",
    "version": "1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "profile[name]",
            "optional": false,
            "description": "Provide the profile name of user."
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "profile[date_of_birth]",
            "optional": false,
            "description": "Provide the date of birth. Format : <b>YYYY/MM/DD</b>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "profile[gender]",
            "optional": false,
            "description": "Provide the gender."
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "profile[status]",
            "optional": false,
            "description": "Provide the profile status of user."
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "profile[profile_image_attributes][media]",
            "optional": false,
            "description": "Provide the profile Image."
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "user[email]",
            "optional": false,
            "description": "Provide the user's email."
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "auth_token",
            "optional": false,
            "description": "Provide authentication token of user."
          },
        ]
        }
    },
    "success": {
      "examples": [
        {
          "title": "Success (201):",
          "content": "{\n\t\"Ok\" \n}"
        }
      ]
    }
  },



]});

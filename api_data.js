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
          "content": "{\n\t\"user_id\":1,\"country_code\":91,\"phone_no\":\"9971480801\",\"verification_token\":\"778fb\" \n}"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error (422):",
          "content": "{\n\t \"errors\" : \n\t {\n\t\t \"phone_no\": \"Phone no can't be blank.\" \n\t}\n}"
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
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response (200):",
          "content": "{\n\t \"user_id\":1,\"country_code\":91,\"phone_no\":\"9971480801\",\"token\":\"nBbemTsS4U4ia7YAsKbW\"\n}\n"
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

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
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "field": "deviice[id]",
            "optional": false,
            "description": "Provide the device id provided by server on app installation."
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
            "field": "user[contacts]",
            "optional": false,
            "description": "Provide the array of contact numbers of user. <p>eg. [ { \"id\" : \"\", \"phone_num\"  :\"8826303400\", \"deleted\" : \"0\"} ]</p>"
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
          "content": "{\n\t\"contacts\":\n\t\t[{\"id\":18,\"phone_num\":\"8826303400\",\"deleted\":0,\"is_existing\":false}] \n}"
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
    "url": "/contacts",
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
            "type": "Array",
            "field": "id",
            "optional": false,
            "description": "Provide the array of contact id of user. <p>eg. [\"4\", \"5\", \"10\"] <br/> Note: Contact with id 4 and 5 are valid.</p>"
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
          "title": "Success (200):",
          "content": "{\n\t\"contacts\":\n\t\t[\n\t\t\t\{\"id\":4,\"contact\":91989724677}, \n\t\t\t\{\"id\":5,\"contact\":9198xxxxxx}\n\t\t]\n}"
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
            "type": "File",
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
          "content": "{\n\t\"name\":\"johari\",\n\t\"date_of_birth\":\"1989-06-27\",\n\t\"gender\":\"m\",\n\t\"status\":\"status message\",\n\t\"email\":\"joharimani@gmail.com\",\n\t\"image_url\":null,\n\t\"updated_at\":\"2015-02-09T07:58:25.613Z\" \n}"
        }
      ]
    }
  },

  {
    "type": "post",
    "url": "/groups",
    "title": "Create Group",
    "name": "create_group",
    "description": "API will create user's group.",
    "group": "Group",
    "version": "1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "group[name]",
            "optional": false,
            "description": "Provide the name of group."
          },
          {
            "group": "Parameter",
            "type": "File",
            "field": "group[group_image_attributes][media]",
            "optional": false,
            "description": "Provide the image of group."
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "auth_token",
            "optional": false,
            "description": "Provide authentication token of user."
          }
        ]
        }
    },
    "success": {
      "examples": [
        {
          "title": "Success (201):",
          "content": "{\n\t\"id\" : 8,\n\t\"name\" : \"Group Name\" \n}"
        }
      ]
    }
  },

  {
    "type": "post",
    "url": "/groups/add_contacts",
    "title": "Add Contacts",
    "name": "add_contact",
    "description": "API will add contacts to user's group.",
    "group": "Group",
    "version": "1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "group[id]",
            "optional": false,
            "description": "Provide the id of group."
          },
          {
            "group": "Parameter",
            "type": "Array",
            "field": "group[contact_id]",
            "optional": false,
            "description": "Provide the Array of contact ids to be added in group."
          },
          {
            "group": "Parameter",
            "type": "Array",
            "field": "group[group_id]",
            "optional": false,
            "description": "Provide the Array of group ids to be added in group."
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
          "content": "{\n\t\"group_id\":7,\"group_contacts\":[14,13] \n}"
        }
      ]
    }
  },

  {
    "type": "get",
    "url": "/groups",
    "title": "List Groups",
    "name": "groups",
    "description": "API will list user's groups.",
    "group": "Group",
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
          "content": "[\n\t{\"id\":6,\"name\":\"G1\",\"image_url\":null}, \n\t {\"id\":11,\"name\":\"G4\",\"image_url\":\"/system/attachment/group_images/media/007/small/image.png\"} \n]"
        }
      ]
    }
  },

  {
    "type": "get",
    "url": "/groups/:id/edit",
    "title": "Edit Group",
    "name": "edit_group",
    "description": "API will edit user's group.",
    "group": "Group",
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
          "content": "{\n\t \"id\":6,\"name\":\"G1\",\"contact_ids\":[13,17],\"image_url\":null \n}"
        }
      ]
    }
  },

  {
    "type": "put",
    "url": "/groups/:id",
    "title": "Update Group",
    "name": "update_group",
    "description": "API will update user's group.",
    "group": "Group",
    "version": "1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "group[name]",
            "optional": false,
            "description": "Provide the name of group."
          },
          {
            "group": "Parameter",
            "type": "File",
            "field": "group[group_image_attributes][media]",
            "optional": false,
            "description": "Provide the image of group."
          },
          {
            "group": "Parameter",
            "type": "Array",
            "field": "group[contact_id]",
            "optional": false,
            "description": "Provide the Array of contact ids to be added in group."
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
          "title": "Success (200):",
          "content": "{\n\t \"id\":6,\"name\":\"G1\",\"contact_ids\":[13,17],\"image_url\":null \n}"
        }
      ]
    }
  },

  {
    "type": "delete",
    "url": "/groups/:id",
    "title": "Delete Group",
    "name": "delete_group",
    "description": "API will delete user's group.",
    "group": "Group",
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
          "content": "{\n\t \"message\":\"ok\" \n}"
        }
      ]
    }
  },

  {
    "type": "post",
    "url": "/events",
    "title": "Create event",
    "name": "create_event",
    "description": "API will create event.",
    "group": "Event",
    "version": "1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "event[title]",
            "optional": false,
            "description": "Provide title of event."
          },
          {
            "group": "Parameter",
            "type": "File",
            "field": "event[event_image_attributes][media]",
            "optional": false,
            "description": "Provide image for event."
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "event[start_date]",
            "optional": false,
            "description": "Provide start date of event."
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "event[end_date]",
            "optional": false,
            "description": "Provide end date of event."
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "event[lat]",
            "optional": false,
            "description": "Provide latitude."
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "event[long]",
            "optional": false,
            "description": "Provide longitude."
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "event[location]",
            "optional": false,
            "description": "Provide location of event."
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "field": "event[all_day]",
            "optional": false,
            "description": "true/false."
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "event[start_time]",
            "optional": false,
            "description": "Provide Start time of event."
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "event[end_time]",
            "optional": false,
            "description": "Provide End time of event."
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "event[last_day_to_confirm]",
            "optional": false,
            "description": "Provide last_day_to_confirm for event."
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "field": "event[bringing_guest]",
            "optional": false,
            "description": "Provide true/false if bringing_guest."
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "event[description]",
            "optional": false,
            "description": "Provide description for event."
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "event[rsvp_for_adult_and_guest]",
            "optional": false,
            "description": "Provide true/false."
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "field": "event[limit_rsvp]",
            "optional": false,
            "description": "Provide true/false "
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "event[max_capacity]",
            "optional": false,
            "description": "Provide max_capacity for event."
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "event[dress_code]",
            "optional": false,
            "description": "Provide dress_code for event."
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "event[cost]",
            "optional": false,
            "description": "Provide cost per person for event."
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "field": "event[allow_voting]",
            "optional": false,
            "description": "Provide true/false."
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "field": "event[disable_chat]",
            "optional": false,
            "description": "Provide true/false."
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "field": "event[hide_guest_list]",
            "optional": false,
            "description": "Provide true/false."
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "field": "event[is_cancelled]",
            "optional": false,
            "description": "Provide true/false."
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "event[added_at]",
            "optional": false,
            "description": "Provide the timestamp of event created at device."
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
          "content": "{\n\t\"id\": \"1\", \n\t\"title\": \"My Event\", \n\t\"image_url\": \"image_url\" \n}"
        }
      ]
    }
  },

  {
    "type": "post",
    "url": "/invitees",
    "title": "Invite Contacts",
    "name": "invite_contacts",
    "description": "API will invite contacts to event.",
    "group": "Event",
    "version": "1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "invite[id]",
            "optional": false,
            "description": "Provide id of event."
          },
          {
            "group": "Parameter",
            "type": "Array",
            "field": "invite[contact_id]",
            "optional": false,
            "description": "Provide array of contact ids to be invited for event."
          },
          {
            "group": "Parameter",
            "type": "Array",
            "field": "invite[group_id]",
            "optional": false,
            "description": "Provide array of group ids to be invited for event."
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
          "content": "{\n\t\"id\": \"1\", \n\t\"title\": \"Event title\", \n\t\"unregisted_contact_ids\": [\"13\", \"14\"] \n}"
        }
      ]
    }
  },

  {
    "type": "put",
    "url": "/events/:id/event_admin/:admin_id",
    "title": "Update Admin",
    "name": "update_admin",
    "description": "API will update admin of the event.",
    "group": "Event",
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
          "content": "{\n\t\"id\": \"1\", \n\t\"admin_id\": \"1\" \n}"
        }
      ]
    }
  },

  {
    "type": "get",
    "url": "/events",
    "title": "Upcoming Events",
    "name": "upcoming",
    "description": "API will list all upcoming events.",
    "group": "Event",
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
          "content": "{\n\t\[\n\t\t\"id\": \"1\", \n\t\t\"title\": \"Event title\", \n\t\t\"image_url\": \"url_path\" , \n\t\t\"admin_id\": \"1\" \n\t\]\n}"
        }
      ]
    }
  },

  {
    "type": "get",
    "url": "/events",
    "title": "Past Events",
    "name": "past",
    "description": "API will list all past events.",
    "group": "Event",
    "version": "1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "q",
            "optional": false,
            "description": "Provide value 'p', e.g. \"q=p\" to list all past events."
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
          "title": "Success (200):",
          "content": "{\n\t\[\n\t\t\"id\": \"1\", \n\t\t\"title\": \"Event title\", \n\t\t\"image_url\": \"url_path\" , \n\t\t\"admin_id\": \"1\" \n\t\]\n}"
        }
      ]
    }
  },

  {
    "type": "put",
    "url": "/events/:id",
    "title": "Update event",
    "name": "update_event",
    "description": "API will update event.",
    "group": "Event",
    "version": "1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "event[title]",
            "optional": false,
            "description": "Provide title of event."
          },
          {
            "group": "Parameter",
            "type": "File",
            "field": "event[event_image_attributes][media]",
            "optional": false,
            "description": "Provide image for event."
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "event[start_date]",
            "optional": false,
            "description": "Provide start date of event."
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "event[end_date]",
            "optional": false,
            "description": "Provide end date of event."
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "event[lat]",
            "optional": false,
            "description": "Provide latitude."
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "event[long]",
            "optional": false,
            "description": "Provide longitude."
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "event[location]",
            "optional": false,
            "description": "Provide location of event."
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "field": "event[all_day]",
            "optional": false,
            "description": "true/false."
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "event[start_time]",
            "optional": false,
            "description": "Provide Start time of event."
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "event[end_time]",
            "optional": false,
            "description": "Provide End time of event."
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "event[last_day_to_confirm]",
            "optional": false,
            "description": "Provide last_day_to_confirm for event."
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "field": "event[bringing_guest]",
            "optional": false,
            "description": "Provide true/false if bringing_guest."
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "event[description]",
            "optional": false,
            "description": "Provide description for event."
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "event[rsvp_for_adult_and_guest]",
            "optional": false,
            "description": "Provide true/false."
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "field": "event[limit_rsvp]",
            "optional": false,
            "description": "Provide true/false "
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "event[max_capacity]",
            "optional": false,
            "description": "Provide max_capacity for event."
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "event[dress_code]",
            "optional": false,
            "description": "Provide dress_code for event."
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "event[cost]",
            "optional": false,
            "description": "Provide cost per person for event."
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "field": "event[allow_voting]",
            "optional": false,
            "description": "Provide true/false."
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "field": "event[disable_chat]",
            "optional": false,
            "description": "Provide true/false."
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "field": "event[hide_guest_list]",
            "optional": false,
            "description": "Provide true/false."
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "field": "event[is_cancelled]",
            "optional": false,
            "description": "Provide true/false."
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
          "title": "Success (200):",
          "content": "{\n\t\"id\": \"1\", \n\t\"title\": \"My Event\", \n\t\"image_url\": \"image_url\" \n}"
        }
      ]
    }
  },

  {
    "type": "delete",
    "url": "/events/:id",
    "title": "Delete event",
    "name": "delete_event",
    "description": "API will delete user's event.",
    "group": "Event",
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
          "content": "{\n\t \"id\":\"1\" \n}"
        }
      ]
    }
  },

  {
    "type": "get",
    "url": "/events/1",
    "title": "Show Event",
    "name": "show_event",
    "description": "API will show event.",
    "group": "Event",
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
          "content": "{\n\t\"id\":45,\n\t\"title\":\"G3\",\n\t\"image_url\":null,\n\t\"start_date\":\"2012-11-11\",\n\t\"end_date\":\"2012-11-11\",\n\t\"start_time\":\"00:00:00\",\n\t\"end_time\":\n\t\"00:00:00\",\n\t\"lat\":\n\t\"20.2\",\n\t\"long\":\"40.4\",\n\t\"location\":\"kiwitech\",\n\t\"all_day\":false,\n\t\"last_day_to_confirm\":2,\n\t\"bringing_guest\":true,\n\t\"rsvp_for_adult_and_guest\":false,\n\t\"limit_rsvp\":true,\n\t\"max_capacity\":20,\n\t\"dress_code\":\"formal\",\n\t\"cost\":4.99,\n\t\"allow_voting\":true,\n\t\"disable_chat\":true,\n\t\"hide_guest_list\":false,\n\t\"is_cancelled\":false,\n\t\"added_at\":\"12345\",\n\t\"admin_id\":1,\n\t \"guest_list\":\n\t\t\t{\n\t\t\t\t\"id\":45,\n\t\t\t\t\"yes\": [],\n\t\t\t\t\"no\": [],\n\t\t\t\t\"maybe\": [],\n\t\t\t\t\"default\": \n\t\t\t\t\t[\n\t\t\t\t\t\t{\"id\": 19,\"name\": \"+919971480812\",\"image_url\": null,\"contact\": \"919971480812\",\"is_pending\": false},\n\t\t\t\t\t\t{\"id\": 10,\"contact\": \"919021610243\",\"is_pending\": true}\n\t\t\t\t\t]\n\t\t\t\t}\n}"
        }
      ]
    }
  },




]});

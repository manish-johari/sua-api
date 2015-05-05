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
    "url": "/profiles",
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
            "type": "Integer",
            "field": "event[max_capacity]",
            "optional": false,
            "description": "Provide max_capacity for event."
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "field": "event[seats_reserved]",
            "optional": false,
            "description": "Provide seats_reserved for event by admin."
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
          "content": "{\n\t\"id\": \"1\", \n\t\"updated_at\": \"2015-05-01T04:33:03.863Z\" \n}"
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
            "field": "invitees[created][]",
            "optional": false,
            "description": "Provide Contact number of invitee."
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "invitees[created][]",
            "optional": false,
            "description": "Provide Contact number of invitee."
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "invitees[deleted][]",
            "optional": false,
            "description": "Provide Contact number of invitee."
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "field": "event_id",
            "optional": false,
            "description": "Provide id of event."
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
          "content": "{\n\t\"invitee_list_updated_at\": \"2015-05-03T05:11:43.704Z\", \n\t\"invitees\": [\n\t\t{\n\t\t\t\"contacts\": \"+919971480801\", \n\t\t\t\"seeyouall_id\": 4\n\t\t}\n\t] \n}"
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
    "title": "List Events",
    "name": "events",
    "description": "API will list all events.",
    "group": "Event",
    "version": "1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "latest_updated_at",
            "optional": true,
            "description": "Provide latest_updated_at timestamp."
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
          "content": "{\n\t\"events\":\n\t\t{\n\t\t\"latest_updated_at\" : \"2015-04-17T07:53:17.524Z\",\n\t\t\"created\" :  [\n\t\t\t\t\t{\n\t\t\t\t\t\"id\":6,\n\t\t\t\t\t\"start_time\":\"2016-10-11T11:20:00.000Z\",\n\t\t\t\t\t\"end_time\":\"2016-11-11T11:20:00.000Z\",\n\t\t\t\t\t\"updated_at\":\"2016-11-11T11:20:00.000Z\",\n\t\t\t\t\t\"invitee_list_updated_at\":\"2016-11-11T11:20:00.000Z\"\n\t\t\t\t\t\}\n\t\t\t\t],\n\t\t\"updated\" : [\n\t\t\t\t\t{\n\t\t\t\t\t\"id\":5,\n\t\t\t\t\t\"start_time\":\"2016-11-11T11:20:00.000Z\",\n\t\t\t\t\t\"end_time\":\"2016-12-11T11:20:00.000Z\",\n\t\t\t\t\t\"updated_at\":\"2016-11-11T11:20:00.000Z\",\n\t\t\t\t\t\"invitee_list_updated_at\":\"2016-11-11T11:20:00.000Z\"\n\t\t\t\t\t\}\n\t\t\t\t],\n\t\t\"deleted\":[6]\n\t\t}\n}"
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
            "type": "Integer",
            "field": "event[max_capacity]",
            "optional": false,
            "description": "Provide max_capacity for event."
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "field": "event[seats_reserved]",
            "optional": false,
            "description": "Provide seats_reserved for event by admin."
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
          "content": "{\n\t \"message\":\"ok\" \n}"
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
          "content": "{\n\t\"id\":45,\n\t\"title\":\"G3\",\n\t\"image_url\":null,\n\t\"start_date\":\"2012-11-11\",\n\t\"end_date\":\"2012-11-11\",\n\t\"start_time\":\"2015-11-11T00:00:00\",\n\t\"end_time\":\"2015-11-11T00:00:00\",\n\t\"lat\":\"20.2\",\n\t\"long\":\"40.4\",\n\t\"location\":\"kiwitech\",\n\t\"all_day\":false,\n\t\"last_day_to_confirm\":2,\n\t\"bringing_guest\":true,\n\t\"rsvp_for_adult_and_guest\":false,\n\t\"limit_rsvp\":true,\n\t\"max_capacity\":20,\n\t\"seats_reserved\":2,\n\t\"dress_code\":\"formal\",\n\t\"cost\":4.99,\n\t\"allow_voting\":true,\n\t\"disable_chat\":true,\n\t\"hide_guest_list\":false,\n\t\"is_cancelled\":false,\n\t\"added_at\":\"12345\",\n\t\"admin_id\":1,\n\t \"guest_list\":\n\t\t\t{\n\t\t\t\t\"id\":45,\n\t\t\t\t\"yes\": [],\n\t\t\t\t\"no\": [],\n\t\t\t\t\"maybe\": [],\n\t\t\t\t\"default\": \n\t\t\t\t\t[\n\t\t\t\t\t\t{\"id\": 19,\"name\": \"+919971480812\",\"image_url\": null,\"contact\": \"919971480812\",\"is_pending\": false},\n\t\t\t\t\t\t{\"id\": 10,\"contact\": \"919021610243\",\"is_pending\": true}\n\t\t\t\t\t]\n\t\t\t\t}\n}"
        }
      ]
    }
  },

  {
    "type": "delete",
    "url": "/invitees/1",
    "title": "Remove invitees",
    "name": "remove_invitees",
    "description": "API will remove invitees from event.",
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
          {
            "group": "Parameter",
            "type": "String",
            "field": "invitees[contacts][][id]",
            "optional": false,
            "description": "Provide id of contact to be removed."
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "field": "invitees[contacts][][is_pending]",
            "optional": false,
            "description": "Provide true/false."
          },
        ]
        }
    },
    "success": {
      "examples": [
        {
          "title": "Success (200):",
          "content": "{\n\t\"id\":1\n}"
        }
      ]
    }
  },

  {
    "type": "post",
    "url": "/devices",
    "title": "Register device",
    "name": "device",
    "description": "API will register user's device.",
    "group": "Login",
    "version": "1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "device[device_type]",
            "optional": false,
            "description": "Provide the device type. e.g. Value 'Android'"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "device[device_id]",
            "optional": false,
            "description": "Provide the device_id."
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "device[token]",
            "optional": false,
            "description": "Provide GCM token."
          }
        ]
        }
    },
    "success": {
      "examples": [
        {
          "title": "Success (201):",
          "content": "{\n\t\"id\" : 8,\n\t\"status\" : \"ok\" \n}"
        }
      ]
    }
  },

  {
    "type": "get",
    "url": "/profiles/:id",
    "title": "View Profile",
    "name": "profile",
    "description": "API will show profile of contact.",
    "group": "Profile",
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
          "content": "{\n\t\"name\":\"Manish\",\n\t\"date_of_birth\":null,\n\t\"gender\":\"m\",\n\t\"status\":null,\n\t\"email\":\"\",\n\t\"image_url\":null\n}"
        }
      ]
    }
  },

  {
    "type": "post",
    "url": "invitees/rsvp",
    "title": "RSVP",
    "name": "RSVP",
    "description": "API will update invitee rsvp status.",
    "group": "Invitee",
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
          {
            "group": "Parameter",
            "type": "Integer",
            "field": "invitee[event_id]",
            "optional": false,
            "description": "Provide the event id"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "invitee[rsvp]",
            "optional": false,
            "description": "Provide the rsvp. possible values are 'yes', 'no', 'maybe'."
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "field": "invitee[adults]",
            "optional": true,
            "description": "Provide Number of Adult guests"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "field": "invitee[kids]",
            "optional": true,
            "description": "Provide Number of kid guests"
          },
        ]
        }
    },
    "success": {
      "examples": [
        {
          "title": "Success (201):",
          "content": "{\n\t\"rsvp\":\"yes\"\n}"
        }
      ]
    }
  },

  {
    "type": "post",
    "url": "event_location_suggestions",
    "title": "Location",
    "name": "Location",
    "description": "API will Create a Suggestion for event location. On which Invitees can vote later",
    "group": "Suggest",
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
          {
            "group": "Parameter",
            "type": "Integer",
            "field": "event_location_suggestion[event_id]",
            "optional": false,
            "description": "Provide the event id"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "event_location_suggestion[address]",
            "optional": false,
            "description": "Provide the suggested address"
          },
        ]
        }
    },
    "success": {
      "examples": [
        {
          "title": "Success (201):",
          "content": "{\n\t\"id\":\"4\"\n}"
        }
      ]
    }
  },

  {
    "type": "post",
    "url": "event_location_suggestion_votes",
    "title": "Location",
    "name": "Location",
    "description": "API will upvote a Suggestion for event location",
    "group": "Voting",
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
          {
            "group": "Parameter",
            "type": "Integer",
            "field": "event_location_suggestion_id",
            "optional": false,
            "description": "Provide the event location suggestion id"
          }
        ]
        }
    },
    "success": {
      "examples": [
        {
          "title": "Success (201):",
          "content": "{\n\t\"status\":\"OK\"\n}"
        }
      ]
    }
  },

  {
    "type": "post",
    "url": "event_location_suggestions/:id/lock",
    "title": "Location Suggestion",
    "name": "Location",
    "description": "API will locked the suggestion and become the location for event",
    "group": "Lock",
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
          "content": "{}"
        }
      ]
    }
  },

  {
    "type": "post",
    "url": "event_about_suggestions",
    "title": "About",
    "name": "About",
    "description": "API will Create a Suggestion for event Description. On which Invitees can vote later",
    "group": "Suggest",
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
          {
            "group": "Parameter",
            "type": "Integer",
            "field": "event_about_suggestion[event_id]",
            "optional": false,
            "description": "Provide the event id"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "event_about_suggestion[description]",
            "optional": false,
            "description": "Provide the suggested Description"
          },
        ]
        }
    },
    "success": {
      "examples": [
        {
          "title": "Success (201):",
          "content": "{\n\t\"id\":\"4\"\n}"
        }
      ]
    }
  },

  {
    "type": "post",
    "url": "event_about_suggestion_votes",
    "title": "About",
    "name": "About",
    "description": "API will upvote a Suggestion for event Description",
    "group": "Voting",
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
          {
            "group": "Parameter",
            "type": "Integer",
            "field": "event_about_suggestion_id",
            "optional": false,
            "description": "Provide the event address suggestion id"
          }
        ]
        }
    },
    "success": {
      "examples": [
        {
          "title": "Success (201):",
          "content": "{\n\t\"status\":\"OK\"\n}"
        }
      ]
    }
  },

  {
    "type": "post",
    "url": "event_address_suggestions/:id/lock",
    "title": "Address Suggestion",
    "name": "Address",
    "description": "API will locked the suggestion and become the Description for event",
    "group": "Lock",
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
          "content": "{}"
        }
      ]
    }
  },

  {
    "type": "post",
    "url": "event_time_suggestions",
    "title": "Time",
    "name": "Time",
    "description": "API will Create a Suggestion for event Time. On which Invitees can vote later",
    "group": "Suggest",
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
          {
            "group": "Parameter",
            "type": "Integer",
            "field": "event_time_suggestion[event_id]",
            "optional": false,
            "description": "Provide the event id"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "event_time_suggestion[start_date]",
            "optional": false,
            "description": "Provide the suggested start date"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "event_time_suggestion[start_time]",
            "optional": false,
            "description": "Provide the suggested start time"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "event_time_suggestion[end_date]",
            "optional": false,
            "description": "Provide the suggested end date"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "event_time_suggestion[end_time]",
            "optional": true,
            "description": "Provide the suggested end time"
          },
        ]
        }
    },
    "success": {
      "examples": [
        {
          "title": "Success (201):",
          "content": "{\n\t\"id\":\"4\"\n}"
        }
      ]
    }
  },

  {
    "type": "post",
    "url": "event_time_suggestion_votes",
    "title": "Time",
    "name": "Time",
    "description": "API will upvote a Suggestion for event Timing",
    "group": "Voting",
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
          {
            "group": "Parameter",
            "type": "Integer",
            "field": "event_about_suggestion_id",
            "optional": false,
            "description": "Provide the event time suggestion id"
          }
        ]
        }
    },
    "success": {
      "examples": [
        {
          "title": "Success (201):",
          "content": "{\n\t\"status\":\"OK\"\n}"
        }
      ]
    }
  },

  {
    "type": "post",
    "url": "event_time_suggestions/:id/lock",
    "title": "Time Suggestion",
    "name": "Time",
    "description": "API will locked the suggestion and become the Timing for event",
    "group": "Lock",
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
          "content": "{}"
        }
      ]
    }
  },

  {
    "type": "delete",
    "url": "/invitees/:id/leave",
    "title": "Leave Event",
    "name": "leave_event",
    "description": "API will leave user's event.",
    "group": "Invitee",
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
    "type": "get",
    "url": "/events/:id/invitees",
    "title": "Event Invitees",
    "name": "invitees",
    "description": "API will show invitees detail.",
    "group": "Invitee",
    "version": "1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "latest_updated_at",
            "optional": true,
            "description": "Provide timestamp of invitee_list_updated_at."
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
          "content": "{\n\t\"invitee_list_updated_at\":\"2015-05-05T06:28:32.540Z\",\n\t\"created\": [\n\t\t{\n\t\t\t\"seeyouall_id\": \"\", \n\t\t\t\"contact\": \"+919971480801\", \n\t\t\t\"rsvp\": \"\"\n\t\t}\n\t],\n\t\"updated\": [],\n\t\"deleted\": [\n\t\t{\n\t\t\t\"seeyouall_id\": \"2\", \n\t\t\t\"contact\": \"+919971480801\", \n\t\t\t\"rsvp\": \"default\"\n\t\t}\n\t] \n}"
        }
      ]
    }
  },

]});

"use strict";

let formatAccounts = accounts => {
    let elements = [];
    accounts.forEach(account =>
        elements.push({
            title: account.get("Name"),
            subtitle: account.get("BillingStreet") + ", " + account.get("BillingCity") + " " + account.get("BillingState") + " · " + account.get("Phone"),
            "image_url": "http://wallpaper-gallery.net/images/profile-pics/profile-pics-20.jpg",
            "buttons": [{
                "type":"postback",
                "title":"View Contacts",
                "payload": "view_contacts," + account.getId() + "," + account.get("Name")
            },{
                "type": "web_url",
                "url": "https://login.salesforce.com/" + account.getId(),
                "title": "Open in Salesforce"
            },
]
        })
    );
    return {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "generic",
                "elements": elements
            }
        }
    };
};

// let formatCases = cases => {
//     let elements = [];
//     cases.forEach(case => {
//         elements.push({
//             title: case.get("Subject"),
//             subtitle: case.get("Reason") + ", " + case.get("ClosedDate") + " " + case.get("CreatedDate") 
//           })
//     }
//     );
//     return {
//         "attachment": {
//             "type": "template",
//             "payload": {
//                 "template_type": "generic",
//                 "elements": elements
//             }
//         }
//     };
// };
let formatCases = accounts => {
    let elements = [];
    accounts.forEach(account =>
        elements.push({
            title: account.get("Reason"),
            subtitle: account.get("Subject") + ", " + account.get("ClosedDate") + " " + account.get("CreatedDate") 
            
        })
    );
    return {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "generic",
                "elements": elements
            }
        }
    };
};

let formatCaseQuestion = ()=>{
    return {
        "attachment":{
          "type":"template",
          "payload":{
            "template_type":"button",
            "text":"What do you want to do next?",
            "buttons":[
              {
                "type":"postback",
                "title":"Show Case",
                "payload":"Show Case"
              },
              {
                "type":"postback",
                "title":"Create Case",
                "payload":"Create Case"
              }
            ]
          }
        }
    };
};

let formatContacts = contacts => {
    let elements = [];
    contacts.forEach(contact => {
        elements.push({
            title: contact.get("Name"),
            subtitle: contact.get("Title") + " at " + contact.get("Account").Name + " · " + contact.get("MobilePhone"),
            "image_url": "http://wallpaper-gallery.net/images/profile-pics/profile-pics-20.jpg",
            "buttons": [
                {
                    "type": "postback",
                    "title": "View Notes",
                    "payload": "view_notes," + contact.getId() + "," + contact.get("Name")
                },
                {
                    "type": "web_url",
                    "url": "https://login.salesforce.com/" + contact.getId(),
                    "title": "Open in Salesforce"
                }]
        })
    });
    return {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "generic",
                "elements": elements
            }
        }
    };
};

let formatOpportunities = opportunities => {
    let elements = [];
    opportunities.forEach(opportunity =>
        elements.push({
            title: opportunity.get("Name"),
            subtitle: opportunity.get("Account").Name + " · $" + opportunity.get("Amount"),
            "image_url": "https://s3-us-west-1.amazonaws.com/sfdc-demo/messenger/opportunity500x260.png",
            "buttons": [
                {
                    "type":"postback",
                    "title":"Close Won",
                    "payload": "close_won," + opportunity.getId() + "," + opportunity.get("Name")
                },
                {
                    "type":"postback",
                    "title":"Close Lost",
                    "payload": "close_lost," + opportunity.getId() + "," + opportunity.get("Name")
                },
                {
                    "type": "web_url",
                    "url": "https://login.salesforce.com/" + opportunity.getId(),
                    "title": "Open in Salesforce"
                }]
        })
    );
    return {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "generic",
                "elements": elements
            }
        }
    };
};

exports.formatAccounts = formatAccounts;
exports.formatContacts = formatContacts;
exports.formatCases = formatCases;
exports.formatCaseQuestion = formatCaseQuestion;
exports.formatOpportunities = formatOpportunities;
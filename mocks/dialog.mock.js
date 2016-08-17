'use strict';
/**
 * @ngdoc function
 * @name insideApp.module:supportTeams
 * @description
 * # supportTeams
 * mockData for supportTeams of the insideApp
 */
angular.module('pmfApp.mocks')
    .constant('DIALOG_MOCK',
        {
          "phase": "Year Round",
          "title": "Ongoing Dialogue & Coaching",
          "description": [
            {
              "text": "A way to obtain and provide real-time, immediate input on performance",
              "link": "",
              "children": []
            }
          ],
          "rr":
            {
              "manager": [
                {
                  "text": "Schedule and conduct regular one-on-one meetings meetings",
                  "link": "",
                  "children": []
                },
                {
                  "text": "Share expectations/agenda with employees",
                  "link": "",
                  "children": []
                },
                {
                  "text": "Be present and purposeful",
                  "link": "",
                  "children": []
                },
                {
                  "text": "Share feedback and provide support",
                  "link": "",
                  "children": []
                },
                {
                  "text": "Document the conversation",
                  "link": "",
                  "children": []
                }
              ],
              "employee": [
                {
                  "text": "Request check-in meetings as needed",
                  "link": "",
                  "children": []
                },
                {
                  "text": "Prepare and share updates, receive feedback, and ask for assistance",
                  "link": "",
                  "children": []
                },
                {
                  "text": "Document the conversation",
                  "link": "",
                  "children": []
                }
              ]
            },
          "tt": [
            {
              "text": "Ongoing Conversations Employee Guide",
              "link": "https://eims.sandia.gov/Workplace/getContent?vsId={8035E655-0000-C523-8712-6069AA458B40}&objectStoreName=EIMS.__.Content&objectType=document",
              "file": "(PDF, 186 KB)",
              "children": []
            }
          ]
        }
    );

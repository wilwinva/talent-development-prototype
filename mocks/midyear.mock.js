'use strict';
/**
 * @ngdoc function
 * @name insideApp.module:supportTeams
 * @description
 * # supportTeams
 * mockData for supportTeams of the insideApp
 */
angular.module('pmfApp.mocks')
    .constant('MIDYEAR_MOCK',
        {
          "phase": "Phase 2",
          "title": "Mid-Year Review",
          "description": [
            {
              "text": "At mid-year, employees evaluate their progress on goals and model behaviors, and make a course correction if needed.",
              "link": "",
              "children": []
            },
            {
              "text": "This step helps avoid misunderstandings between the manager and employee regarding performance to date.",
              "link": "",
              "children": []
            }
          ],
          "rr":
            {
              "manager": [
                {
                  "text": "Prompt employee to draft mid-year assessment of progress against goals in ePerformance tool",
                  "link": "",
                  "children": []
                },
                {
                  "text": "Review employee's assessment and prompt employee to seek customer feedback using online tool",
                  "link": "",
                  "children": []
                },
                {
                  "text": "Review feedback from employee's customers and peers. Seek feedback from additional customers as needed",
                  "link": "",
                  "children": []
                },
                {
                  "text": "Meet with employee to discuss progress, feedback, and any required changes to objectives",
                  "link": "",
                  "children": []
                }
              ],
              "employee": [
                {
                  "text": "Review progress to date, noting any milestones achieved or roadblocks encountered",
                  "link": "",
                  "children": []
                },
                {
                  "text": "Solicit customer and peer feedback using online tool and manager guidance",
                  "link": "",
                  "children": []
                },
                {
                  "text": "Meet with manager to discuss progress to date and any required changes to objectives",
                  "link": "",
                  "children": []
                }
              ]
            },
          "tt": [
            {
              "text": "Employee Guide to the Mid-Year Performance Review",
              "link": "https://eims.sandia.gov/Workplace/getContent?vsId={158967C3-45A0-48C2-8EE8-B34F28C5176E}&objectStoreName=EIMS.__.Content&objectType=document",
              "file": "(PDF, 453 KB)",
              "children": []
            },
            {
              "text": "Manager Guide to the Mid-Year Performance Review",
              "link": "https://eims.sandia.gov/Workplace/getContent?objectStoreName=EIMS.__.Content&vsId={941B3575-A7D4-4E9A-A978-DD1F62CDE3DE}&objectType=document&folderId={AE42E094-2DAC-45F0-B67C-B77FD3B7E3CF}",
              "file": "(PDF, 344 KB)",
              "children": []
            }
          ]
        }
    );

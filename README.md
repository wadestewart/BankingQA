## Project 2 - Wade's financial literacy Q & A forum for online banking dashboard

 This app was built following the Model View Controller architecture and using MongoDB for the database, Express as the Node.js framework, Mongoose as the middleware for communication between Express and MongoDB, and Handlebars to render the content.

 My approach was to build an application to help online banking users ask questions to their bankers about financial topics.

 The features of this application are *1* user authentication, *2* full CRUD functionality so the database will read and render a predetermined list of financial topics - then a user can post a new topic and question or edit and delete a question that they have asked.

 For installation, you will need Node.js and MongoDB. The required dependencies for this application are: bcrypt-nodejs, body-parser, connect-flash, cookie-parser, ejs, express, express-ejs-layouts, express-handlebars, express-session, hbs, materialize, method-override, mongoose, morgan, nodemon, passport, passport-local.

 I would like to add CRUD functionality to my subtopics, but ran out of time!

## Planning:
### ![Alt text](domain_mode_erd.jpg)
 Planning for my project consisted of fleshing the idea through a user story. As on online banking user and a user in need of financial literacy, the idea is a Q & A forum that sits in the dashboard when a user logs into their online banking account. The user would have the ability to access a predetermined list of topics, with some questions and answers provided. The user would also be able to ask their own specific questions, edit their questions, and delete their questions. Once I established the user story, the wire framing consisted of gathering basic financial topics and using these topics as my domains. The ERD shows a path from the Bank domain to a Topic directory (one to many), and then to a Subtopic directory (one to mny) with more specific information. The bank domain would also have a path to Users (one to many).

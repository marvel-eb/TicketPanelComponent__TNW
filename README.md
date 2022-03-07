# Hello There! I am Ephrem, Web Graphic Designer / Junior Front-end Developer.

## PROJECT ASSIGNMENT__TNW -- TicketPanel [Front-End Engineer]:

Based on the design provided, please create the ticket panel component. This component
consists of a generic block title, subtitle text and a grid of 2-3 ticket types which display as
cards. Each card should display data which can be fetched and API endpoint (see below).
Card data should include ticket title, description and a price. Each ticket should display
either a check or an mdash for the relevant perks.
Your task is to convert the design to markup (html and css) and use whatever
libraries/methods you see fit to fetch and display the data. This could be vanilla js, React/Vue
etc. The choice of tools is entirely up to you.
The design corresponds only to desktop, bonus points if you can show us how you would
interpret a mobile implementation.
Requirements
● Ticket panel component as designed for desktop.
● Please include a readme with the relevant (if any) set up instructions.
Bonus Points
● Use React/Typescript for your project.
● Implement your interpretation of a mobile/reactive version of the component

## SOLUTION:

The API with HTTPS normally will not locally work, We will have a probleme of CORS (Cross-Origin Resource Sharing) issues.
The only option to resolve the issue is --- We should either create local proxy server or write some header scripting.

Options --- 
- 01. Using the API by using HTTP instead of using HTTPS (without secure layer) with .JSON(extension).
- 02. Installing "http-proxy-middleware" dependency and create proxy file inside "src' folder
- - - Using the API by using HTTPS
- - - Including custom proxy URL in my "package.json" file like this ---  {"proxy": "http://localhost:3000",}

TOOLS USED:
- CSS_3(SASS)
- HTML_5
- ReactJS
- TNW api

PLUS POINT:
- Fully responsive [ Mobile, Tablet, Dekstop [ S, M L]]:

REQUIREMENTS:
01 - Install ReactJS by using the following command:

- npx create-react-app ("...name of your app name").

02 - Run the following command to install the ncessary dependencies: (All of the necessary dependencies will automatcally be installed).

- npm install --save-dev

NOTE:
I have tried to use " Map method" to make the codes short, minified and clean, but I am un be able to finish it because of shortage of time and design issues. It requires additional time and energy. It is still possible to see and check my work in the "CardPackages" componenent which is located in the "Component" folder (I already disabled it).

CONFIGURATION & FILE / FOLDER STRUCTURES:
```
├── node_modules
├── public
│ ├── index.html
│ ├── manifest.json
│ └── robots.txt
│
├── src
│ ├── Assets
│ │ │ │──styles
│ │ │ │ │── sass
│ │ │ │ │ │──abstract
│ │ │ │ │ │ │── extends.scss
│ │ │ │ │ │ │── mixins.scss
│ │ │ │ │ │ └── variables.scss
│
│
│ │ │ │ │── base
│ │ │ │ │ │ │── base.scss
│ │ │ │ │ │ │── fonts.scss
│ │ │ │ │ │ │── helpers.scss
│ │ │ │ │ │ │── reset.scss
│ │ │ │ │ │ └── typography.scss
│ │ │ │ │── componenet
│ │ │ │ │ │ │──button.scss
│ │ │ │ │ │ │──footer.scss
│ │ │ │ │ │ │──responsive.scss
│ │ │ │ │ │ └──ticketing.scss
│ │ │ │ │── layout
│ │ │ │ │ └──ticketing.scss
│ │ │ │ │── main-styles.css
│ │ │ │ │ └──main-styles.scss
│
│
│ ├── Components
│ │  ├── CardPackages
│ │  ├── Foter
│ │  └── TicketPanel
├────────────
│
│ ├──utilities
│ │  └──axios.jsx
│
├── App.js
├── index.js
├── .gitignore
├── package.json
├── README.md
└────────────
```

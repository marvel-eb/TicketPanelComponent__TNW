# Hello There! I am Ephrem, Web Graphic Designer / Junior Front-end Developer based in Amsterdam, Netherlands.

## PROJECT -- TicketPanel [Front-End Enginner Test]:

The API with HTTPS normally will not locally work, We will have a probleme of CORS (Cross-Origin Resource Sharing) issues.
The only option to resolve the issue is --- We should either create local proxy server or write some header scripting.

The only option I have is --- 
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

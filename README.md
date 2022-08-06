# Adminator Dashboard

**Adminator** is a responsive Bootstrap 5 Admin Template. It provides you with a collection of ready to use code snippets and utilities, custom pages, a collection of applications and some useful widgets - **Initially coded by [Colorlib](https://github.com/puikinsh/Adminator-admin-dashboard)**.

<br />

> Note: This project is a Gulp migration (from `Webpack`) for a better use in frameworks like Flask, Django, FastAPI and accelerated development with new features. 

<br />

> Quick Start - Tested with **Node v16** and **Gulp v4.0.2**

```bash
$ git clone https://github.com/app-generator/adminator.git
$ npm install
$ gulp 
```

At this point, the project should run in the browser. 

<br />  

### Screenshot

![Adminator admin dashboard template preview](https://colorlib.com/wp/wp-content/uploads/sites/2/adminator-free-admin-dashboard-template.jpg)

### Demo Site: [Here](https://colorlib.com/polygon/adminator/index.html)

## TOC
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installing & Local Development](#installing--local-development)
- [Files/Folder Structure](#filesfolders-structure)
- [Deployment](#deployment)
- [Built With](#built-with)
- [Changelog](#changelog)
- [Authors](#authors)
- [License](#license)


## Getting Started
In order to run **Adminator** on your local machine all what you need to do is to have the prerequisites stated below installed on your machine and follow the installation steps down below.

#### Prerequisites
  - Node.js
  - Yarn or NPM
  - Git
  - libpng-dev *linux only*

#### Installing & Local Development
Start by typing the following commands in your terminal in order to get **Adminator** full package on your machine and starting a local development server with live reload feature.

```
> git clone https://github.com/puikinsh/Adminator-admin-dashboard.git adminator
> cd adminator
> npm install
> npm run dev
```


## Files/Folders Structure
Here is a brief explanation of the template folder structure and some of its main files usage:

```
└── src                         # Contains all template source files.
│   └── assets                  # Contains JS, CSS, images and icon fonts.
│   │   └── scripts             # Contains all JavaScript files.
│   │   │   └── charts          # Chart.js, Sparkline & Pie Chart plugins init.
│   │   │   └── chat            # All chat app JS code.
│   │   │   └── constants       # Template constant values like color values.
│   │   │   └── datatable       # Date table plugin init.
│   │   │   └── datepicker      # Bootstrap datepicker init.
│   │   │   └── email           # All email app code.
│   │   │   └── fullcalendar    # Fullcalendar plugin init.
│   │   │   └── googleMaps      # Google maps API integration code.
│   │   │   └── masonry         # Masonry layout code.
│   │   │   └── popover         # Bootstrap popover plugin init.
│   │   │   └── scrollbar       # Perfect scrollbar plugin init.
│   │   │   └── search          # Topbar toggle search init.
│   │   │   └── sidebar         # Sidebar JS code.
│   │   │   └── skycons         # Animated icons plugin init.
│   │   │   └── utils           # Basic utils used for proper rendering.
│   │   │   └── vectorMaps      # Vector maps plugin init.
│   │   │   └── index.js        # Indicator file.
│   │   │
│   │   └── static              # Contains the non-code files.
│   │   │   └── fonts           # Contains icon fonts.
│   │   │   └── images          # Contains all template images/svg.
│   │   │
│   │   └── styles              # Contains all SCSS files.
│   │       └── spec            # Contains custom SCSS files.
│   │       │   └── components  # Contains all template components.
│   │       │   └── generic     # Contains basic scaffolding styles.
│   │       │   └── screens     # Contains views specific styles.
│   │       │   └── settings    # Contains all template variables.
│   │       │   └── tools       # Contains all mixins.
│   │       │   └── utils       # Contains helper classes.
│   │       │   └── index.scss  # Indicator file.
│   │       │
│   │       └── vendor          # Contains all plugin files & custom styles.
│   │       └── index.scss      # Indicator file.
│   │
│   └── *.html                  # All HTML pages files .

│
└── .babelrc                    # Babel ES6 Transpiler.
└── .editorconfig               # Keep same coding styles between code editors.
└── .eslintrc.yml               # JavaScript Linting.
└── .gitattributes              # Git Attributes.
└── .gitignore                  # Ignored files in Git.
└── .stylelintrc.yml            # SCSS/CSS Linting.
└── gulpfile.js                 # Supported Browsers.
└── CHANGELOG.md                # Versioning.
└── package.json                # Package metadata.
└── README.md                   # Manual file.
```

## Deployment
In deployment process, you have two commands:

1. Build command
Used to generate the final result of compiling src files into build folder. This can be achieved by running the following command:
```
> npm run build
```

2. Preview command
Used to create a local dev server in order to preview the final output of build process. This can be achieved by running the following command:
```
> npm run preview
```

## Built With
- [Babel](https://babeljs.io/)
- [Webpack](https://webpack.js.org/)
- [Eslint](https://eslint.org/)
- [Sass](http://sass-lang.com/)
- [Postcss](http://postcss.org/)
- [Stylelint](https://stylelint.io/)
- [Bootstrap](http://getbootstrap.com/)
- [Chart.js](http://www.chartjs.org/)
- [Datatables](https://datatables.net/)
- [Easy Pie Chart](http://rendro.github.io/easy-pie-chart/)
- [Fullcalendar](https://fullcalendar.io/)
- [Jquery](https://jquery.com/)
- [Jquery Sparkline](https://omnipotent.net/jquery.sparkline/)
- [Jvectormap](http://jvectormap.com/)
- [Load Google Maps API](https://github.com/yuanqing/load-google-maps-api)
- [Lodash](https://lodash.com/)
- [Masonry](https://masonry.desandro.com/)
- [Moment](https://momentjs.com/)
- [Perfect Scrollbar](https://github.com/utatti/perfect-scrollbar)
- [Skycons](https://darkskyapp.github.io/skycons/)
- [Fontawesome](http://fontawesome.io/)
- [Themify Icons](https://themify.me/themify-icons)
- [Roboto Font](https://fonts.google.com/specimen/Roboto)
- [Bootstrap Datepicker](https://bootstrap-datepicker.readthedocs.io/en/latest/)

<br />

## License

@ MIT License

<br />

---
Adminator BS 5 - Actively supported and verisoned by [AppSeed](https://appseed.us/). 

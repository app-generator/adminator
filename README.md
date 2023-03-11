# [Adminator Django](https://adminator.appseed-srv1.com/)

**Adminator** is a responsive [Bootstrap 5](https://www.admin-dashboards.com/bootstrap-5-templates/) Admin Template. It provides you with a collection of ready to use code snippets and utilities, custom pages, a collection of applications and some useful widgets - **Initially coded by Colorlib** - Migrated to Gulp Tooling for accelerated development by [AppSeed](https://appseed.us/). 

- 👉 [Adminator Flask](https://appseed.us/product/adminator/flask/) - Flask integration (free)
- 👉 [Adminator Django](https://appseed.us/product/adminator/django/) - Django integration (free)

<br />

> `Quick Start` - Tested with **Node v16** and **Gulp v4.0.2**

```bash
$ git clone https://github.com/app-generator/adminator.git
$ npm install
$ gulp 
```

At this point, the project should run in the browset at address `http://localhost:3000`

<br />  

![Adminator Dashboard - Mobile View (open-source project).](https://user-images.githubusercontent.com/51070104/183240282-6e63bea1-d049-4fab-8701-b63f607613bd.png)

<br />  

## Codebase Structure
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

<br />

## License

[@MIT](./LICENSE.md)

<br />

---
[Adminator Django](https://adminator.appseed-srv1.com/) - Actively supported and verisoned by [AppSeed](https://appseed.us/). 

# MARIE - A Ghost Theme

A fully resonsive bootstrap based Ghost Theme for personal blogs. The theme has a clean layout and is easy to use with a lot of build in features.

## :bulb: Features

<img alt="HTML5" src="https://img.shields.io/badge/html5-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white"/>  <img alt="SASS" src="https://img.shields.io/badge/SASS%20-hotpink.svg?&style=for-the-badge&logo=SASS&logoColor=white"/> <img alt="Bootstrap" src="https://img.shields.io/badge/bootstrap%20-%23563D7C.svg?&style=for-the-badge&logo=bootstrap&logoColor=white"/> <img alt="JavaScript" src="https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/> <img alt="jQuery" src="https://img.shields.io/badge/jquery-%230769AD.svg?&style=for-the-badge&logo=jquery&logoColor=white"/> <img alt="Ko-Fi" src="https://img.shields.io/badge/Ko--fi-F16061?style=for-the-badge&logo=ko-fi&logoColor=white" />

MARIE includes many features build in the theme and ready for use. Some highlights are the barrier-free reading with text-size adjustments, build-in syntax highlighter with Prism.JS including all languages, line numbers and clipboard function as well as newsletter support and build-in utterances comments. 

- [x] Responsive Bootstrap Design
- [x] Masonry Layout for front page
- [x] Dark Mode
- [x] TOC Bot 
- [x] Sticky TOC in Posts
- [x] Local Font Awesome Icons
- [x] Utterranc.es and Cusdis Comments
- [x] Code Highlighter and Clipboard with PRISM JS
- [x] Ko-Fi Implementation
- [x] Barrier-free reading by adjusting the text size
- [x] Matomo and Google Analytics Support
- [x] Easy to customize SASS


## Table of Contents

- [Installation](#floppy_disk-installation)
- [Configuration](#wrench-configuration)
- [Usage](#usage)
- [Credits](#credits)
- [Sponsor](#sponsor)


## :floppy_disk: Installation
Download the latest release on Github, download the zip, extract the folder, and paste it into your theme folder (content/themes) of your Ghost installation or upload the file via the Ghost theme uploader.

You can also enter the content/themes folder on your server and enter the following command:

```bash 
git clone https://github.com/jgeisslinger/ghost-marie
```

Change your theme to MARIE in your ghost admin panel.


## Demo
For a quick demo you can visit my personal blog under https://macn.tech


## :wrench: Configuration
The theme has been build to support a *no-code* customization by just editing most of the customizations directly within your Ghost Site Injection. This makes it easy to fit your needs without entering the deep code. Please find below some main config that you may tackle.

### Basics

#### :art: Color
Marie supports two main themes from the scratch. This is a light theme mainly white/grey and a dark theme. The default is the light theme. The user can always switch between light and dark through the theme switcher. You can change the default theme by setting the theme in your code injection

```javascript
var theme = "dark";
```


#### :page_facing_up: Pagination
The theme includes a basic pagination on the index and archive pages. You can select the number of posts visible on the start page by just setting the posts per page variable in the package.json. This automatically controls the pagination pages that are generated.

```json
"config": {
    "posts_per_page": 4
  }
```

#### Social Media Links
You can enable social media links on the footer of your page. The links are based on the secondary navigation of your Ghost site. Each secondary navigation element will be transferred to a social link including icon. The label of the navigation item must match the fontawesome name. Example:





#### :triangular_ruler: Custom CSS / SASS
You can also activate custom CSS to make some own changes to the theme. You have both options, use SASS (which will be compiled into the main css file) or via extra CSS file. The files you can edit are placed under assets/css or assets/sass. Custom CASS will be imported last so you can edit all variables without changing the original theme.

If you use SCSS you need to compile the final css after your work with just a simple bash command (you need to have SASS installed on your machine):

```bash
sass assets/sass/import.scss assets/css/marie.css
```

#### :wrench: Custom JS
If you need special scripts for your personal usage you can inject your JS in the ghost admin panel. It will be published to the header of the site.


#### :cookie: Cookies 
If you use cookies in your theme (like with Matomo, theme switcher etc.) you may want to inform your visitors about this. MARIE uses the famous cookieconsent javascript plugin to manage your cookie banner. The banner is enabled by default but you can disable it in your Ghost code injection. 

```javascript
var cookies = true;
```


You can edit the details of the banner by editing the script file: 

:arrow_right: ``` partials/scripts.hbs ```



### :balloon: Specials
 
#### Ko-fi Button
You can enable a Ko-fi Donation Button below the navigation. Just enable it via Site Header Code injection on your Ghost admin panel and specify your Ko-fi link

```javascript
var kofi = 1;
var kofiurl = 'https://ko-fi.com/johannes';
```


#### :crystal_ball: Comments
You can activate a comment section based on Utterances or Cusdis. For Utterances follow their how-to (https://utteranc.es) to setup your GitHub issues for collecting your comments. For Cusdis (enabled by default) you need to host your own comment system and connect with your details. Afterwards configure the plugin under 

:arrow_right: ``` partials/comments.hbs ```


#### :bar_chart: Matomo Tracking
You can use Matomo as alternative for Google Analytics to track your visitors with your own server instance (or use a hosted service). Just enable and configure the parameters in the Code Injection Header

```javascript
var matomo = true;
var matomoserver = "";
var matomoid = 123;
```

## Credits

Finally some credits for the good work on the resources used in this theme: 

- [Font Awesome](https://fontawesome.com/)
- [Bootstrap](https://bootstrap.com/)
- [Prism.JS](https://prismjs.com)
- [cookieconsent](https://github.com/osano/cookieconsent)

## Sponsor

If you like the theme I would be very happy to reveive your feedback or a coffee to stay awake and continue coding nice things

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/I2I12FSW2)

Still need a server to spin up your own ghost installation? Check out my refer link for your Hetzner cloud server and get 20 EUR on top:
[Click Here](https://hetzner.cloud/?ref=ir0WnxeEHrmU)

Follow me on Twitter for any news

<img alt="Twitter" src="https://img.shields.io/badge/b1cKberry-%231DA1F2.svg?&style=for-the-badge&logo=Twitter&logoColor=white"/>


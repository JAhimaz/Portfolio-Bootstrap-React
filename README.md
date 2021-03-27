# Developer Portfolio Template - ReactJS & Bootstrap

## Project Information
Project is **INCOMPLETE**.

This portfolio is completely free for personal usage, although claiming the project as your own would be disrespectful and immoral. Everything is editable to your will. Though any form of credit is greatly appreciated.

The portfolio has been designed to be reactive to fit both **mobile** and **desktop view**.

Feel free to contribute to help improve the template for others.

**A Live demo of the portfolio can be viewed here:** https://jahimaz.github.io/portfolio-bootstrap-react/

Credit to Libraries used:

```
- "react-minimal-pie-chart": "^8.2.0",
- "react-particles-js": "^3.4.1",
- "@fortawesome/fontawesome-svg-core": "^1.2.35",
- "@fortawesome/free-brands-svg-icons": "^5.15.3",
- "@fortawesome/free-solid-svg-icons": "^5.15.3",
- "@fortawesome/react-fontawesome": "^0.1.14",
- "React-deploy"
```

## Get Started with the Template

**< Currently in Progress >**

## Editing the Portfolio

Head over to `src/EditMe.js` to edit the portfolio's information and styling.

#### Styling The Page

The basic styling for the whole page, this includes the background colour, foreground and additional styling.

```javascript
export let pageStyling = {
    backgroundColour: "#201f25", // Main Page Background Colour
    foregroundColour: "#33313a", // Foreground Colour
    primaryColour: "#38cdee", // Neon Colour
    secondaryColour: "#4edcff", // Underglow Colour
    font: "Consolas, Lucida Sans Typewriter, Lucida Console, Monaco, Bitstream Vera Sans Mono, monospace",
    particleEffect: true,
}
```

<hr>

#### Navigation Bar

The navigation bar on the top of the page can be edited through this section, you may add links, show a resume button and change the branding.

```javascript
export let navigation = {
    navLogo: { // Navigation Logo
        enabled: true, // Do you want to use a Branding?
        isImage: false, // Do you want to use an Image? If not, alt text will be used
        imageURL: "https://www.wilsonfamilychiropracticcenter.net/wp-content/uploads/2018/12/placeholder-logo-2.png",
        logoWidth: "75px", // Size of your logo, adjustable without the CSS
        altText: "Your Logo", // This will be used if it is not an Image (Will also be the alt text if it is an image)
        linkTo: "#",
    },

    leftNavigation: [ // Add items to the left side of the navigation Bar
        {
            text: "_External",
            url: "#",
        },
    ],

    rightNavigation: [ // Add items to the right side of the navigation Bar
        {
            text: "_About Me", // Text Value
            url: "#aboutme", // Anchor points or External URLS, you may have to edit the App.js to add Anchors
        },
        {
            text: "_Portfolio",
            url: "#portfolio",
        },
        {
            text: "_Skills",
            url: "#skills",
        },
        {
            text: "_Contact",
            url: "#",
        },
    ],

    // Enable / Disable a Resume Button to allow a user to download your RESUME

    resumeBtn: {
        enabled: true, // Enable / Disable
        downloadIcon: true, // Show Icon
        text: "Resume", // Text on Button
        url: "https://google.com", // Make sure to include https:// or http://. This is the download link to your stored Resume
    }
}
```

<hr>

#### Information Profile

Here is the main information of your portfolio which will be displayed on the portfolio itself.

```javascript
export let information = {
    fullName: "John D. Doe", // Name in Profile Banner
    welcomeMsg: "Welcome! I am,", // Welcome subheading above Name
    aboutMe: "Short Description of yourself!", // Short Description
    companyName: "Position @ Company", // Your position @ a Company
    // Replace with the URL to your image (URL or Local Image)
    profilePhoto: "https://st.depositphotos.com/2101611/3925/v/600/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg",
}
```

<hr>

#### Socials

Alongside information, you have your socials, this is seperate as it may used in multiple places throughout the website.

```javascript
export let socials = {
    twitterURL: "https://twitter.com/", // Twitter
    githubURL: "https://github.com/", // Github
    linkedinURL: "https://www.linkedin.com/in/", // LinkedIn
}
```

<hr>

#### About Me

The about me section has two simple paragraphs. You may manually add more through editing the `src/components/AboutUs.js`.

```javascript
export let aboutMe = {
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales lectus ex, nec lacinia libero finibus in. Sed at mattis justo, feugiat cursus sapien. Proin blandit nisi nec mi iaculis, ac viverra felis sollicitudin. Aliquam rhoncus porta magna, non lacinia ipsum aliquam vitae. Vivamus fermentum dapibus mauris, varius consequat velit viverra egestas. Nunc eget lacus in tortor ultricies dignissim eget a eros. Suspendisse volutpat sit amet lorem non consectetur. Fusce sed ultricies felis.",
    quote: "\"The Best Preparation For Tommorow Is Doing Your Best Today.\"",
}
```

<hr>

#### Portfolio Cards

Though not fully customisable, it follows the main page styling, if you wish to edit manually you may check the `src/css/Portfolio.css`.

You may add as many projects as you want, but it's recommended to have a maximum of **6** for quality purposes.

```javascript

export let portfolioCards = [
    {
        projectTitle: "My Project 1",
        projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales lectus ex, nec lacinia libero finibus in. Sed at mattis justo, feugiat cursus sapien. Proin blandit nisi nec mi iaculis, ac viverra felis sollicitudin. Aliquam rhoncus porta magna, non lacinia ipsum aliquam vitae. Vivamus fermentum dapibus mauris, varius consequat velit viverra egestas. Nunc eget lacus in tortor ultricies dignissim eget a eros. Suspendisse volutpat sit amet lorem non consectetur. Fusce sed ultricies felis.",
        projectURL: "https://github.com/",
    },
    {
        projectTitle: "My Project 2",
        projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales lectus ex, nec lacinia libero finibus in. Sed at mattis justo, feugiat cursus sapien. Proin blandit nisi nec mi iaculis, ac viverra felis sollicitudin. Aliquam rhoncus porta magna, non lacinia ipsum aliquam vitae. Vivamus fermentum dapibus mauris, varius consequat velit viverra egestas. Nunc eget lacus in tortor ultricies dignissim eget a eros. Suspendisse volutpat sit amet lorem non consectetur. Fusce sed ultricies felis.",
        projectURL: "https://github.com/",
    },
    {
        projectTitle: "My Project 3",
        projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales lectus ex, nec lacinia libero finibus in. Sed at mattis justo, feugiat cursus sapien. Proin blandit nisi nec mi iaculis, ac viverra felis sollicitudin. Aliquam rhoncus porta magna, non lacinia ipsum aliquam vitae. Vivamus fermentum dapibus mauris, varius consequat velit viverra egestas. Nunc eget lacus in tortor ultricies dignissim eget a eros. Suspendisse volutpat sit amet lorem non consectetur. Fusce sed ultricies felis.",
        projectURL: "https://github.com/",
    },
]
```

<hr>


# Developer Portfolio Template - ReactJS & Bootstrap

## Project Information
![Project Status](https://img.shields.io/badge/Project%20Status-Completed-green?style=for-the-badge&logo=github)
![Project Size](https://img.shields.io/github/repo-size/JAhimaz/portfolio-bootstrap-react?style=for-the-badge&logo=github)

![preview](https://github.com/JAhimaz/portfolio-bootstrap-react/blob/main/GitHub/preview.png)

This portfolio is completely free for personal usage, although claiming the project as your own would be disrespectful and immoral. Everything is editable to your will. Though any form of credit is greatly appreciated.

The portfolio has been designed to be reactive to fit both **mobile** and **desktop view**.

Feel free to contribute to help improve the template for others.

**A Live demo of the portfolio can be viewed here:** https://jahimaz.github.io/Portfolio-Bootstrap-React/

Libraries used (Credits) :

```
- "react-minimal-pie-chart": "^8.2.0",
- "react-particles-js": "^3.4.1",
- "@fortawesome/fontawesome-svg-core": "^1.2.35",
- "@fortawesome/free-brands-svg-icons": "^5.15.3",
- "@fortawesome/free-solid-svg-icons": "^5.15.3",
- "@fortawesome/react-fontawesome": "^0.1.14",
- "gh-pages": "^3.1.0",
- "clsx": "^1.1.1",
```

## Get Started with the Template

1. Click on **Use This Template** and name your repository to anything you wish. Preferably `my-portfolio`. _(This is important as you require the Repository)_
2. Clone the repository to your local machine use your "templated" repo, hence `git clone https://github.com/YOUR NAME/REPO NAME`.
3. Run the command `npm install` to get all the dependencies.
4. Edit the portfolio via the `src/EditMe.js` or any manual code changes you would like to do. You may also edit the `README.md` to remove all these instructions.
5. Headover to `package.json` and change `homepage` in this format `http://YOUR-NAME.github.io/REPO-NAME`
6. `git add .` -> `git commit -m "first commit"` -> `git push origin main`. This will push all your changes to your repository.
7. Once pushed, on your local machine run the command `npm run deploy`. This will push it to your GitHub Pages.
8. Ofcourse, you may use any web hosting service to host your website, for ease we are using react deploy.
9. Your Portfolio should be live at `httsp://YOUR-NAME.github.io/REPO-NAME`.

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
    textColor: "#bebebe", // Colour of the text in the Project
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
            text: "_Experience",
            url: "#experience",
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

#### Experience Section

You can add as much experience as you wish within this section, but preferably companies that contribute towards your skills.

```javascript
export let experience = {
    experiences: [ // Preferably, sort by newest first
        {
            companyLogo: "", // Leave Blank for Template Logo
            companyName: "The New Company", // Company Name
            companyLocation: "Selangor, Malaysia", // Location of Company
            roles: [ // Each company can have multiple Roles
                {
                    role: "Software Engineer",
                    type: "Full-Time", // Full-Time, Part-Time, Internship, etc...
                    startPeriod: "Apr 2020", // Preferable format
                    endPeriod: "Present", // End result will look like "Apr 2020 - Present"
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales lectus ex, nec lacinia libero finibus in. Sed at mattis justo, feugiat cursus sapien. Proin blandit nisi nec mi iaculis, ac viverra felis sollicitudin. Aliquam rhoncus porta magna, non lacinia ipsum aliquam vitae. Vivamus fermentum dapibus mauris, varius consequat velit viverra egestas. Nunc eget lacus in tortor ultricies dignissim eget a eros. Suspendisse volutpat sit amet lorem non consectetur. Fusce sed ultricies felis.",
                },
                {
                    role: "Intern",
                    type: "Internship", // Full-Time, Part-Time, Internship, etc...
                    startPeriod: "Jan 2020", // Preferable format
                    endPeriod: "Apr 2020", // End result will look like "Apr 2020 - Present"
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales lectus ex, nec lacinia libero finibus in. Sed at mattis justo, feugiat cursus sapien. Proin blandit nisi nec mi iaculis, ac viverra felis sollicitudin. Aliquam rhoncus porta magna, non lacinia ipsum aliquam vitae. Vivamus fermentum dapibus mauris, varius consequat velit viverra egestas. Nunc eget lacus in tortor ultricies dignissim eget a eros. Suspendisse volutpat sit amet lorem non consectetur. Fusce sed ultricies felis.",
                },
            ],
        },
        {
            companyLogo: "", // Leave Blank for Template Logo
            companyName: "The Old Company", // Company Name
            companyLocation: "United Kingdom", // Location of Company
            roles: [ // Each company can have multiple Roles
                {
                    role: "Junior Full-Stack Developer",
                    type: "Part-Time", // Full-Time, Part-Time, Internship, etc...
                    startPeriod: "Dec 2019", // Preferable format
                    endPeriod: "Jan 2020", // End result will look like "Apr 2020 - Present"
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales lectus ex, nec lacinia libero finibus in. Sed at mattis justo, feugiat cursus sapien. Proin blandit nisi nec mi iaculis, ac viverra felis sollicitudin. Aliquam rhoncus porta magna, non lacinia ipsum aliquam vitae. Vivamus fermentum dapibus mauris, varius consequat velit viverra egestas. Nunc eget lacus in tortor ultricies dignissim eget a eros. Suspendisse volutpat sit amet lorem non consectetur. Fusce sed ultricies felis.",
                },
            ],
        },
    ]
};
```

#### Skills Section

This section is for editing the pie chart and the skills, along with their experience, and a description of what you used them for.

```javascript
export let skills = {
    //Pie Chart Editing
    radius: 42, // of the circle
    lineWidth: 15, //The line Width of all segments
    paddingAngle: 5, // The distance between each segment
    //Labels
    labelPosition: 72, // Location of Label. Outer = 166
    fontSize: '2px', // Size of the Label
    //Pie Chart Data
    skillsData: [
        // Each Skill will have the title, value for the chart, color, experience (years, months) and a desscription on the task
        // Some examples are shown below
        { title: 'ReactJS', value: 45, color: '#28ACEA', experience: '3 years',
        description: 'Built multiple ReactJS based websites with integration of NodeJS and Redux'},
        { title: 'Java', value: 25, color: '#19CEEB', experience: '2 years',
        description: 'Worked on multiple Minecraft Plugins and Text-Based Adventure Survival CLI game'},
        { title: 'C++', value: 10, color: '#09EBEE', experience: '1 year',
        description: 'Sorting system of user class information'},
        { title: 'Others', value: 20, color: '#00FEEF', experience: '1 year',
        description: 'Experience with Game Development such as Unity (C#) having 2 published games on the Play Store.'},
    ],
}
```

<!-- For a full guide with images head over to the [WIKI](https://github.com/JAhimaz/portfolio-bootstrap-react/wiki) -->

<hr>

@JAhimaz - https://github.com/JAhimaz

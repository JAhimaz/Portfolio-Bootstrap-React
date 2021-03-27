/* 

For CSS (Colours) editing, head to 'css/root.css'

Here you can edit the main values for your page, such as the name, job title, etc.
Ofcourse you may take full advantage of editing it yourself through the code if you wish.

*/

// Page Styling ------------------------------------------------------------------

export let pageStyling = {
    backgroundColour: "#201f25", // Main Page Background Colour
    foregroundColour: "#33313a", // Foreground Colour
    primaryColour: "#38cdee", // Neon Colour
    secondaryColour: "#4edcff", // Underglow Colour
    font: "Consolas, Lucida Sans Typewriter, Lucida Console, Monaco, Bitstream Vera Sans Mono, monospace",
    particleEffect: true,
}

// Navigation --------------------------------------------------------------------

export let navigation = {
    navLogo: {
        enabled: true,
        isImage: false, // Setting to false will use the Alt text
        imageURL: "https://www.wilsonfamilychiropracticcenter.net/wp-content/uploads/2018/12/placeholder-logo-2.png",
        logoWidth: "75px", // Size of your logo, adjustable without the CSS
        altText: "Your Logo", // This will be used if it is not an Image (Will also be the alt text if it is an image)
        linkTo: "#",
    },

    leftNavigation: [
        {
            text: "_External",
            url: "#",
        },
    ],

    rightNavigation: [
        {
            text: "_About Me",
            url: "#aboutme",
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

    resumeBtn: {
        enabled: true,
        downloadIcon: true,
        text: "Resume",
        url: "https://google.com", // Make sure to include https:// or http://. This is the download link to your stored Resume
    }
}

// Information ------------------------------------------------------------------------

export let information = {
    fullName: "John D. Doe", // Name in Profile Banner
    welcomeMsg: "Welcome! I am,", // Welcome subheading above Name
    aboutMe: "Short Description of yourself!", // Short Description
    companyName: "Position @ Company", // Your position @ a Company
    // Replace with the URL to your image (URL or Local Image)
    profilePhoto: "https://st.depositphotos.com/2101611/3925/v/600/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg",
}

// Socials ----------------------------------------------------------------------------

export let socials = {
    twitterURL: "https://twitter.com/", // Twitter
    githubURL: "https://github.com/", // Github
    linkedinURL: "https://www.linkedin.com/in/", // LinkedIn
}

// About Me ----------------------------------------------------------------------------

export let aboutMe = {
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales lectus ex, nec lacinia libero finibus in. Sed at mattis justo, feugiat cursus sapien. Proin blandit nisi nec mi iaculis, ac viverra felis sollicitudin. Aliquam rhoncus porta magna, non lacinia ipsum aliquam vitae. Vivamus fermentum dapibus mauris, varius consequat velit viverra egestas. Nunc eget lacus in tortor ultricies dignissim eget a eros. Suspendisse volutpat sit amet lorem non consectetur. Fusce sed ultricies felis.",
    quote: "\"The Best Preparation For Tommorow Is Doing Your Best Today.\"",
}

// Portfolio ---------------------------------------------------------------------------

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


/* 

Portfolio-Bootstrap-React by Joshua Daveston Ahimaz     

My Portfolio:
https://JAhimaz.github.io

My Github: 
https://Github.com/JAhimaz


*/
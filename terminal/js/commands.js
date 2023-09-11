var twitter = "https://twitter.com/punesiddharth";
var password = "testing321";
var linkedin = "https://www.linkedin.com/in/siddharth-kulkarni-3b2138121/";
var instagram = "https://www.instagram.com/siddharth__0023/";
var github = "https://github.com/Siddharth2308";
var email = 'mailto:punesiddharth@gmail.com';

whois = [
  // "<br>",
  "Hey, I am Siddharth👋",
  "I like to build things and that is what I do most of the time.",
  "Started working with micro-controllers since secondary school, and was introduced to the software development in High school.",
  "I studied Python through online resources and have been practicing it for 2 years now.",
  "Recently decided to learn java and have been studying it form past 6 months.",
  "I have worked with many micro controllers and sensors. I am confident in handling the software as well as hardware side of projects related to IOT.",
  "Also, I studied Web Development and can create fully functional dynamic websites using the Django, Flask and MERN stack.",
  // "<br>"
];

whoami = [
  "<br>",
  "The paradox of “Who am I?” is: we never know, but, we constantly find out.",
  "<br>"
];

social = [
  // "<br>",
  'twitter        <a href="' + twitter + '" target="_blank">twitter/punesiddharth' + '</a>',
  'linkedin       <a href="' + linkedin + '" target="_blank">linkedin/siddharthkulkarni' + "</a>",
  'instagram      <a href="' + instagram + '" target="_blank">instagram/siddharth__0023' + '</a>',
  'github         <a href="' + github + '" target="_blank">github/Siddharth2308' + "</a>",
  // "<br>"
];

secret = [
  "<br>",
  '<span class="command">sudo</span>           Only use if you\'re admin',
  "<br>"
];

projects = [
  // "<br>",
  '<span class="command" onclick="handleProjects(quad)">Self Balancing Quadcopter</span>          Auto Balancing Quadcopter using Atmega328p as flight controller.',
  '<span class="command" onclick="handleProjects(water)">Water Wastage Controller</span>           A machine similar to ATM that would provide precisely the requested amount of water.',
  '<span class="command" onclick="handleProjects(dustbin)">Dustbin for Dry Garbage</span>            A equipment designed to compress the volume of dry garbage upto 50%.',
  '<span class="command" onclick="handleProjects(stinko)">Stink-O-Meter</span>                      A machine designed to monitor the quality of public toilets and alarm the responsible authorities.',
  '<span class="command" onclick="handleProjects(hydro)">Hydroponics Experimentation</span>        Studied hydroponics by observing and analysing the growth in 3 different trays put under different conditions.',
  '<span class="command" onclick="handleProjects(python_games)">Game Development Using Python</span>      Game Development using Pygame library.',
  '<span class="command" onclick="handleProjects(gui_python)">GUI Development Using Python</span>       Developed Several basic applications using TKinter library.',
  '<span class="command" onclick="handleProjects(js_games)">Javascript Based Games</span>             Basic Game development to study and explore Javascript.',
  '<span class="command" onclick="handleProjects(android_pro)">Android Development using Java</span>     Various Mobile Applications Developed using Java and Android Studios.',
  '<span class="command" onclick="handleProjects(web_pro)">Web Development Hobby Projects</span>     Some of the projects developed to study various web development frameworks and libraries.',
  // "<br>"
];

experience = [
  // "<br>",
  '<span class="command">LinkedLoops</span>                        Sensor IP Development using ARM based Microcontrollers, 6 axis Magnetometer and LORAWAN.',
  '<span class="command">Small Designs</span>                      Who are you?',
  '<span class="command">Vigyan Ashram</span>                      Developed and Deployed a Web App to handle all the order related transactions of Vigyan Ashram Canteen.',
  '<span class="command">Nisargayan</span>                         Designed and Developed the Official Website of Nisargayan.',
  '<span class="command">Team Rudra</span>                         Worked as the Team Leader and Robotics Technician At Robocon Team of MMCOE.',
  '<span class="command">Zenith Astronomy Club</span>              Designed and Developed the Official Website of Zenith Astronomy Club along with the entire Content Management System.',
  '<span class="command">Team Rudra</span>                         Designed and Developed the Official Website of Robocon Team Rudra along with the entire Content Management System.',
  // "<br>"
];

help = [
  // "<br>",
  '<span class="command">whois</span>                              Who is Siddharth?',
  '<span class="command">whoami</span>                             Who are you?',
  '<span class="command">video</span>                              View YouTube videos',
  '<span class="command">social</span>                             Display social networks',
  '<span class="command">secret</span>                             Find the password',
  '<span class="command">projects</span>                           View projects',
  '<span class="command">history</span>                            View command history',
  '<span class="command">help</span>                               You obviously already know what this does',
  '<span class="command">email</span>                              Do not email me',
  '<span class="command">clear</span>                              Clear terminal',
  '<span class="command">banner</span>                             Display the header',
  '<span class="command">experience</span>                         Professional Work Experience Internships, Freelance Projects etc.',
  // "<br>",
];

quadcopter = [
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
  "<br>",
  // "visitor@element.com:~$ Self Balancing Quadcopter",
  // "<img class='project_img' src='https://picsum.photos/200/300'>",
  "<img id='drone' class='project_img' src='assets/drone.jpg'>",
  "<h1 class='project_title'>Self Balancing Quadcopter</h1>",
  "<span class='project_headers'>Technology Used:</span> Atmega 328p, MPU-6050 (IMU), BLDC Motors (1000KV), ESC(30A) for BLDC Control, 6 Channel RC",
  "<span class='project_headers'>Project Report:</span> <a href='www.google.com' target='_blank'>www.google.com</a>",
  "<span class='project_headers'>GitHub Repository:</span> <a href='https://github.com/Siddharth2308/Auto-Balancing-Quadcopter' target='_blank'>github/Siddharth2308/Auto-Balancing-Quadcopter</a>",
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
];


banner = [
    "~~,;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;,~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
    "███████╗██╗██████╗ ██████╗ ██╗  ██╗ █████╗ ██████╗ ████████╗██╗  ██╗    ██╗  ██╗██╗   ██╗██╗     ██╗  ██╗ █████╗ ██████╗ ███╗   ██╗██╗",
    "██╔════╝██║██╔══██╗██╔══██╗██║  ██║██╔══██╗██╔══██╗╚══██╔══╝██║  ██║    ██║ ██╔╝██║   ██║██║     ██║ ██╔╝██╔══██╗██╔══██╗████╗  ██║██║",
    "███████╗██║██║  ██║██║  ██║███████║███████║██████╔╝   ██║   ███████║    █████╔╝ ██║   ██║██║     █████╔╝ ███████║██████╔╝██╔██╗ ██║██║",
    "╚════██║██║██║  ██║██║  ██║██╔══██║██╔══██║██╔══██╗   ██║   ██╔══██║    ██╔═██╗ ██║   ██║██║     ██╔═██╗ ██╔══██║██╔══██╗██║╚██╗██║██║",
    "███████║██║██████╔╝██████╔╝██║  ██║██║  ██║██║  ██║   ██║   ██║  ██║    ██║  ██╗╚██████╔╝███████╗██║  ██╗██║  ██║██║  ██║██║ ╚████║██║",
    "╚══════╝╚═╝╚═════╝ ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝    ╚═╝  ╚═╝ ╚═════╝ ╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝╚═╝",
    "~~,;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;,~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
    '<span class="color2">Welcome to my interactive web terminal.</span>',
    "<span class=\"color2\">For a list of available commands, type</span> <span class=\"command\">'help'</span><span class=\"color2\">.</span>",
    // '<span class="command">whois</span>          Who is Siddharth?',
    // '<span class="command">whoami</span>         Who are you?',
    // '<span class="command">video</span>          View YouTube videos',
    // '<span class="command">social</span>         Display social networks',
    // '<span class="command">secret</span>         Find the password',
    // '<span class="command">projects</span>       View projects',
    // '<span class="command">history</span>        View command history',
    // '<span class="command">help</span>           You obviously already know what this does',
    // '<span class="command">email</span>          Do not email me',
    // '<span class="command">clear</span>          Clear terminal',
    // '<span class="command">banner</span>         Display the header',
  ];


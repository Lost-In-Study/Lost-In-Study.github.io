/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio={
    "name":"Zhao Yanhui",
    "role":"Web Developer",
    "contacts":{
        "mobile":"68516959",
        "email":"yhuizhao@126.com",
        "github":"Lost_In_Study",
        "location":"HongKong"
    },
    "welcomeMessage":"hello guy!",
    "skills":[
    "awesomeness","delivering things","coding","loving"],
    "bioPic":"images/fry.jpg"
}

var education={
    "schools":[
    {
        "name":"Hong Kong University",
        "city":"Hong Kong",
        "degree":"Master",
        "majors":["CS"],
        "dates":2016,
        "url":"www.hku.edu.hk"
    },
    {
        "name":"HUST University",
        "city":"WuHan",
        "degree":"Bachelor",
        "majors":["Logistics"],
        "dates":2012,
        "url":"www.hust.edu.hk"
    }
    ],
    "onlineCourses":[
    {
        "title":"JavaScript Crash Course",
        "schools":"Udacity",
        "dates":2017,
        "url":"www.udacity.com"
    }
    ],
}

var work={
    "jobs":[
    {
        "employer":"Planet Express",
        "title":"Delievry Boy",
        "dates":"January 3000 - Future",
        "description":"the happiest work in the world!"
    },
    {
        "employer":"Goldman",
        "title":"Cleaning Boy",
        "dates":"January 3000 - Future",
        "description":"the most handsome work in the world!"
    }
    ]
}

var projects={
    "projects":[
        {
            "title":"Sample Project 1",
            "dates":"2014",
            "description":"Come to join us!",
            "images":[
                "images/fry.jpg",
                "images/fry.jpg"
            ]
        }

    ]
}

bio.display=function(){
    var formattedRole=HTMLheaderRole.replace("%data%",bio.role);
    $("#header").prepend(formattedRole);
    var formattedName=HTMLheaderName.replace("%data%",bio.name);
    $("#header").prepend(formattedName);


    //$("#topContacts").append(HTMLcontactGeneric);
    var formattedMobile=HTMLmobile.replace("%data%",bio.contacts.mobile);
    $("#topContacts").append(formattedMobile);
    var formattedEmail=HTMLemail.replace("%data%",bio.contacts.email);
    $("#topContacts").append(formattedEmail);
    var formattedGithub=HTMLgithub.replace("%data%",bio.contacts.github);
    $("#topContacts").append(formattedGithub);
    var formattedLocation=HTMLlocation.replace("%data%",bio.contacts.location);
    $("#topContacts").append(formattedLocation);

    var formattedBioPic=HTMLbioPic.replace("%data%",bio.bioPic);
    $("#header").append(formattedBioPic);

    var formattedWelcomeMsg=HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
    $("#header").append(formattedWelcomeMsg);

    if(bio.skills.length>0){
        $("#header").append(HTMLskillsStart);

        var formattedSkill=HTMLskills.replace("%data%",bio.skills[0]);
        $("#skills").append(formattedSkill);
        var formattedSkill=HTMLskills.replace("%data%",bio.skills[1]);
        $("#skills").append(formattedSkill);
        var formattedSkill=HTMLskills.replace("%data%",bio.skills[2]);
        $("#skills").append(formattedSkill);
    }
}

work.display=function (){
    for(job in work.jobs){
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer=HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
        var formattedTitle=HTMLworkTitle.replace("%data%",work.jobs[job].title);
        var formattedEmployerTitle=formattedEmployer+formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates=HTMLworkDates.replace("%data%",work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);

        var formattedDescription=HTMLworkDescription.replace("%data%",work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);
    }
}

$(document).click(function(loc){
    var x=loc.pageX;
    var y=loc.pageY;
    logClicks(x,y);
});

projects.display=function(){
    for(project in projects.projects){
        $("#projects").append(HTMLprojectStart);

        var formattedTitle=HTMLprojectTitle.replace("%data%",projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates=HTMLprojectDates.replace("%data%",projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription=HTMLprojectDescription.replace("%data%",projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);

        if(projects.projects[project].images.length>0){
            for(image in projects.projects[project].images){
                var formattedImage=HTMLprojectImage.replace("%data%",projects.projects[project].images[image]);
        $(".project-entry:last").append(formattedImage);
            }
        }
    }
}

education.display=function(){
    for(school in education.schools){
        $("#education").append(HTMLschoolStart);

        var formattedName=HTMLschoolName.replace("%data%",education.schools[school].name);
        //$(".education-entry:last").append(formattedName);

        var formattedDegree=HTMLschoolDegree.replace("%data%",education.schools[school].degree);
        $(".education-entry:last").append(formattedName+formattedDegree);

        var formattedDates=HTMLschoolDates.replace("%data%",education.schools[school].dates);
        $(".education-entry:last").append(formattedDates);

        var formattedLocation=HTMLschoolLocation.replace("%data%",education.schools[school].city);
        $(".education-entry:last").append(formattedLocation);

        if(education.schools[school].majors.length>0){
            for(major in education.schools[school].majors){
                var formattedMajor=HTMLschoolMajor.replace("%data%",education.schools[school].majors[major]);
        $(".education-entry:last").append(formattedMajor);
            }
        }
    }
    $("#education").append(HTMLonlineClasses);
    for(course in education.onlineCourses){
        $("#education").append(HTMLschoolStart);

        var formattedTitle=HTMLonlineTitle.replace("%data%",education.onlineCourses[course].title);
        //$(".education-entry:last").append(formattedTitle);

        var formattedSchool=HTMLonlineSchool.replace("%data%",education.onlineCourses[course].schools);
        $(".education-entry:last").append(formattedTitle+formattedSchool);

        var formattedCourseDates=HTMLonlineDates.replace("%data%",education.onlineCourses[course].dates);
        $(".education-entry:last").append(formattedCourseDates);

        var formattedURL=HTMLonlineURL.replace("%data%",education.onlineCourses[course].url);
        $(".education-entry:last").append(formattedURL);
    }
}

bio.display();
work.display();
projects.display();
education.display();
$("#mapDiv").append(googleMap);


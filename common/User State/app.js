const userRace = {


    id: 'Race',
    title: 'The Human Race',
    image:'race.jpg',
    description:`
    Race and ethnicity are socially constructed categories that have tangible effects on the lives of individuals who are defined by how one perceives one's self and how one is perceived by others. It is important to acknowledge the social construction (i.e., created from prevailing social perceptions, historical policies, and practices) of the concepts of race and ethnicity because it has implications for how measures of race have been used and changed over time. Furthermore, the concept of race is complex, with a rich history of scientific and philosophical debate as to the nature of race (James, 2016). Racial and ethnic disparities are arguably the most obstinate inequities in health over time, despite the many strides that have been made to improve health in the United States. Moreover, race and ethnicity are extremely salient factors when examining health inequity (Bell and Lee, 2011; Smedley et al., 2008; Williams et al., 2010). Therefore, solutions for health equity need to take into account the social, political, and historical context of race and ethnicity in this country.

    Analyzed rates of upward and downward mobility across generations for racial groups, we quantify how their incomes change and predict their future earnings trajectories.`
    ,
    choices:[{
        
        id:'White',
        description:'A person having origins in any of the original peoples of Europe, the Middle East, or North Africa; has no Hispanic or Latino origins.',
        result:'',
        health: 91,
        money:,
        mobility:,
    },
    {
        id:'Black',
        description:'A person having origins in any of the black racial groups of Africa; has no Hispanic or Latino origins.',
        result:'',
        health:87,
        money:,
        mobility:,
    },
    {   id:'Asian or Pacific Islander',
        description:'A person having origins in any of the original peoples of the Far East, Southeast Asia, or the Indian Subcontinent, including, for example, Cambodia, China, India, Japan, Korea, Malaysia, Pakistan, the Philippine Islands, Thailand, and Vietnam; has no Hispanic or Latino origins.',
        result:'',
        health:100,
        money:,
        mobility:,
    }
    {   id:'Native American or Indian',
        description:'A person having origins in any of the original peoples of North and South America (including Central America) who maintains cultural identification through tribal affiliation or community attachment; has no Hispanic or Latino origins.',
        result:'',
        health:86,
        money:,
        mobility:,
    }
    {   id:'Hispanic or Latino',
        description:'A person of Cuban, Mexican, Puerto Rican, South or Central American, or other Spanish culture or origin, regardless of race.',
        result:'',
        health:96,
        money:,
        mobility:,
    }
    {   id:'Two or More Races',
        description:'This applies only to those who are Non-Hispanic or Latino.',
        result:'',
        health:92,
        money:,
        mobility:,
    }
    {   id:'Native Hawaiian or Other Pacific Islander',
        description:'A person having origins in any of the original peoples of Hawaii, Guam, Samoa, or other Pacific Islands; has no Hispanic or Latino origins.',
        result:'',
        health:92,
        money:,
        mobility:,
    }]
};

const genderIdenity = {


    id:'Gender',
    title:'Gender Identity',
    image:'Gender-Diversity.jpg',
    description:,
    
    choices:[{
        
        id:'Male',
        description:'',
        result:'',
        health:-5,
        money:,
        mobility:,
    },
    {
        id:'Female',
        description:'',
        result:`
        Women generally live longer than males – on average by six to eight years. This difference is partly due to an inherent biological advantage for the female, but it also reflects behavioural differences between men and women.`,
        health:0,
        money:,
        mobility:,
    },
    {   id:'Trans',
        description:'Trans-gender',
        result:'',
        health:,
        money:,
        mobility:,
    }
    {
        id:'Gender-queer',
        description:'',
        result:'',
        health:,
        money:,
        mobility:,
    },
    {
        id:'Non-binary',
        description:'',
        result:'',
        health:,
        money:,
        mobility:,
    }],
};

const educationalAttainment = {


    id:'Education',
    title:'Degrees of Education',
    image:'education.png',
    description:`Research shows that the greatest single correlation of high income is the education level of one's parents.
    The Fed study showed that income, earnings, and wealth increased with education levels.`,

    choices:[{
        
        id:'High-School',
        description:'',
        result:'',
        health:,
        money:,
        mobility:,
    },
    {
        id:'Associate',
        description:'',
        result:'',
        health:,
        money:,
        mobility:,
    },
    {   id:'Bachelors',
        description:'',
        result:'',
        health:,
        money:,
        mobility:,
    }
    {  
        id:'Masters',
        description:'',
        result:'',
        health:,
        money:,
        mobility:,
    }
    {
        id:'PhD',
        description:'',
        result:'',
        health:,
        money:,
        mobility:,
    }
    {
        id:'Professional Degree',
        description:'',
        result:'',
        health:,
        money:,
        mobility:,
    }]
};



const environmentalConditions = {


    id:'Geographic-Environmental-Conditions',
    title:"Environments of Success",
    image:'Geography.jpg',
    description:,
    
    choices:[{
        
        id:'West-coast',
        description:'',
        result:'',
        health:,
        money:,
        mobility:,
    },
    {
        id:'East-coast',
        description:'',
        result:'',
        health:,
        money:,
        mobility:,
    },
    {   
        id:'South',
        description:'',
        result:'',
        health:,
        money:,
        mobility:,
    },
    {   
        id:'Mid-West',
        description:'',
        result:'',
        health:,
        money:,
        mobility:,
    }]
};

const economicMobility = [

    Race,
    GenderIdentity,
    Education,
    environmentalConditions,

];
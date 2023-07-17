import  { SiOpenai } from 'react-icons/si';



export const links = [
    {
        name: "Home",
        path: '/'
    },
    {
        name: "About",
        path: '/about'
    },
    {
        name:"Team",
        path:'/team'
    },
    {
        name: "Contact",
        path: '/contact'
    }
]







export const programs = [
    {
        id: 1,
        icon: {SiOpenai},
        title: "Program One",
        info: "Making websites that work for you!",
        path: "/programs/111"
    },
    {
        id: 2,
        icon: {SiOpenai},
        title: "Program Two",
        info: "Making websites that work for you!",
        path: "/programs/222"
    },
    {
        id: 3,
        icon: {SiOpenai},
        title: "Program Three",
        info: "Making websites that work for you!",
        path: "/programs/333"
    },
    {
        id: 4,
        icon: {SiOpenai},
        title: "Program Four",
        info: "Making websites that work for you!",
        path: "/programs/444"
    },
    {
        id: 5,
        icon: {SiOpenai},
        title: "Program Five",
        info:"Making websites that work for you!",
        path: "/programs/555"
    }
]








export const values = [
    {
        id: 1,
        icon: {SiOpenai},
        title: "Value One",
        desc: "Making websites that work for you!"
    },
    {
        id: 2,
        icon: {SiOpenai},
        title: "Value Two",
        desc: "Making websites that work for you!"
    },
    {
        id: 3,
        icon: {SiOpenai},
        title: "Value Three",
        desc: "Making websites that work for you!"
    },
    {
        id: 4,
        icon: {SiOpenai},
        title: "Value Four",
        desc: "Making websites that work for you!"
    },
    {
        id:5,
        icon:{SiOpenai},
        title: "Value Five",
        desc: "Making websites that work for you!"
    }
]


const TeamMember1 = import('./Components/images/team1.jpg');
const TeamMember2 = import('./Components/images/team2.jpg')
const TeamMember3 = import('./Components/images/team3.jpg')
const TeamMember4 = import('./Components/images/team4.jpg')
const TeamMember5 = import ('./Components/images/team5.jpg')
const TeamMember6 = import ('./Components/images/team6.jpg');



export const TeamMembers = [
    {
        id: 1,
        image: TeamMember1,
        name: 'Mohan Lar',
        job: 'CEO of VaroonValley',
        socials: ['https://github.com/mohanlar96']
    },
    {
        id: 2,
        image: TeamMember2,
        name: 'GanGaDa',
        job: 'Chief Operating Officer ',
        socials: ['https://www.github.com']
    },
    {
        id: 3,
        image: TeamMember3,
        name: 'Soe Phhy Htun',
        job: 'Junior Web Developer',
        socials: ['https://github.com/SoePhyu99']
    },
    {
        id: 4,
        image: TeamMember4,
        name: 'Thihan Win Htet',
        job: 'Junior Wed Developer',
        socials: ['https://github.com/ThihanWinhtet']
    },
    {
        id: 5,
        image: TeamMember5,
        name: 'Aung Phyo Thant',
        job: 'Junior Web Developer',
        socials: ['https://www.github.com/']
    },
    {
        id: 6,
        image: TeamMember6,
        name: 'Chaw Be Lar ',
        job: 'Junor Web Developer',
        socials: ['https://github.com/98ganesham']
    }
   
]
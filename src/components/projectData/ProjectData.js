import React from 'react';

let context = require.context('../../images', true, /\.(jpg|png|PNG)$/);
let images = {};

context.keys().forEach( filename => {
    let key = filename.replace(/-/g, '_').split(/[^A-Za-z0-9_]/)[2]
    images[key] = context(filename)
} )

export default [
    {
        title: 'Student Tracker',
        link: '',
        github: '',
        techs: 'AngularJS | NodeJS | PostgreSQL | Cron',
        info: 'The DevMountain student tracker keeps stats for each student, for instructor and mentor use. For student privacy, a live example and github link are not provided.',
        details: 'My team and I built the attendance tracking portion of this website. On the main view, you will see a quick overview of student attendance on the right side. Clicking on the student name will take you to their personal page, which has a more in-depth view of their attendance.',
        image: [images.tracker_main, images.tracker_student],
        tag: '#DB211C',
        type: 'AngularJS'
    },
    {
        title: 'WorkFlow',
        link: 'http://27projectmanagement.com',
        github: 'https://github.com/Project-Management-dm27/project-management',
        techs: 'React | Redux | NodeJS | PostgreSQL | Recharts',
        info: `WorkFlow is a project management tool that uses gantt chart logic to assign tasks to users. Username: demoaccount@gmail.com | password: demoaccess`,
        details: `WorkFlow is a group project designed to help organize projects. We used React with a very heavy emphasis on Redux in the front end, with NodeJS and express in the back end. We connected to our postgreSQL tables with massive, and used Auth0 for authentication. Recharts is a great program for creating graphs that we utilized for our analytics section.`,
        image: [ images.workflow_main, images.workflow_dashboard, images. workflow_project, images.workflow_analytics],
        tag: '#61DAFB',
        type: 'React'
    },
    {
        title: 'Native Chore Manager',
        link: 'https://github.com/1VinceP/native-chore-manager',
        github: 'https://github.com/1VinceP/native-chore-manager',
        techs: 'React Native | Redux | Thunk | Firebase',
        info: <div>This is a chore management application. The initial user is set up as a parent, and they may create more users (either as parents or children). Parents may create and assign chores, as well as create rewards for finishing chores. <i>Larger images on Github</i>.</div>,
        details: `It's not super pretty, but it works great. I pushed myself hard to learn React Native, Firebase, and Redux Thunk to make this project work, and I'm glad I did. It was a great experience to learn all of these technologies and I look forward to creating bigger and better native apps`,
        image: [images.chore, images.chore2, images.chore3],
        tag: '#61DAFB',
        type: 'React Native'
    },
    {
        title: 'Tree Frogs Wed',
        link: 'https://treefrogswed.now.sh/#/',
        github: 'https://github.com/1VinceP/kanzashi',
        techs: 'React | NodeJS | PostgreSQL | Auth0 | Stripe',
        info: 'Tree Frogs Wed is an eCommerce website where a customer can buy products for weddings and receptions. Username: demoaccount@gmail.com | password: demoaccess',
        details: `This is the first full sized website that I have made. I used React for the front end, along with NodeJS and Express for the back end. I used massive to connect with my postgreSQL database. Auth0 and Stripe were used for authentication and payment.`,
        image: [images.tree_frogs_order],
        tag: '#61DAFB',
        type: 'React'
    },
    {
        title: 'Super Smash Robros',
        link: 'http://vue-smashrobros.surge.sh',
        github: 'https://github.com/1VinceP/vue-super-smash-robros',
        techs: 'VueJS | HTML5 | CSS3 | JavaScript',
        info: 'This is a simple Vue application to settle debates or other sorts of conflict in a friendly manner.',
        details: `Building a game comes with plenty of complicated logic, and throwing that on top of learning Vue for the first time was a challenge. I stuck with the basics - no routing or vuex - to focus on syntax and functionality.`,
        image: [images.vue_robro_create, images.vue_robro_battle],
        tag: '#41B883',
        type: 'Vue'
    },
    {
        title: 'Dressing Your Truth Clone',
        link: 'https://liveyourtruthclone.surge.sh',
        github: 'https://github.com/1VinceP/liveyourtruth-clone',
        techs: 'React | HTML5 | CSS3 | JavaScript',
        info: 'This is a clone of the Live Your Truth webstore. I this to get more practice with styling. I specifically focused on getting the elements in their exact places.',
        details: 'The hardest part was getting the styling to change based on which "type" you were looking at, and I feel like I learned a lot about managing styling inside the JSX of React. NOTE: THE ORIGINAL WEBSITE HAS BEEN REDESIGNED.',
        image: [images.dress_truth_clone],
        tag: '#61DAFB',
        type: 'React'
    },
    {
        title: `Swanson's Pets`,
        link: 'http://talking-animals.surge.sh',
        github: 'https://github.com/1VinceP/talking-parrot',
        techs: 'React | RESTful API',
        info: `This is a quick project I made to get more familiar with using RESTful API's. This project was creating using React, and I am using Axios to make API calls to the "Ron Swanson Quotes" API.`,
        details: `While there isn't a whole lot to this little web app, it was a lot of fun to make, and the API practice was good to have. I used React to build the app, with axios to make the RESTful API calls to the database which pulls in the quotes.`,
        image: [images.swanson_thumbnail],
        tag: '#61DAFB',
        type: 'React'
    }
]
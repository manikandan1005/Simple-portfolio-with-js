let navItem=["Home","About",'Skill','Project','Contact'];
let navBar=document.querySelector('.navBar');
navItem.forEach(item=>{
    let aTag=document.createElement("a");
    aTag.href=`#${item}`;
    aTag.textContent=item;
    navBar.appendChild(aTag);
    
});
let roleAnima=document.querySelector('.roleAnima');
let roleTitle=['Software developer','Full stack developer','Front end developer','MEAN stack developer','Freelancer Developer'];
roleTitle.forEach(item=>{
    let spanText=document.createElement("span");
    spanText.textContent=item;
    roleAnima.append(spanText);
})

let text = "Hello! I'm Manikandan S, a passionate front-end developer specializing in building modern, responsive, and high-performance web applications using React, JavaScript, HTML, and CSS. I focus on creating clean UI, reusable components, and smooth user experiences. Continuously learning and exploring new technologies, I enjoy solving complex problems and building scalable, efficient, and user-friendly digital products.";
let homeText=document.querySelector('.text');
homeText.textContent=text;

let itemBox=document.querySelector('.itemBox');
let boxData=[{"title":"Project done","count":10},{"title":"Experience","count":0.5}];
boxData.forEach(i=>{
    let box=document.createElement('div');
    let boxTitle=document.createElement('p');
    let boxCount=document.createElement('h3');
    boxCount.textContent=`${i.count}+`;
    boxTitle.textContent=i.title;
    box.appendChild(boxCount);
    box.appendChild(boxTitle);
    itemBox.appendChild(box);
});
// skill data
let skills = [
  {
    skillName: 'Front End ',
    skillImgs: [
      
      { img: 'assets/html.svg', name: 'HTML' },
      { img: 'assets/css.svg', name: 'CSS' },
      { img: 'assets/javascript.svg', name: 'JavaScript' },
      { img: 'assets/typescript.svg', name: 'TypeScript' },
      { img: 'assets/react.svg', name: 'React' },
      { img: 'assets/angular.svg', name: 'Angular' },
      { img: 'assets/tailwindcss.svg', name: 'Tailwind CSS' },
       { img: 'assets/bootstrap.svg', name: 'bootstrap CSS' },

      { img: 'assets/flutter.svg', name: 'flutter' }
      
    ]
  },
  {
    skillName: 'Back End ',
    skillImgs: [
      { img: 'assets/nodejs.svg', name: 'Node.js' },
      { img: 'assets/python.svg', name: 'python' },
      { img: 'assets/mongodb.svg', name: 'MongoDB' },
      { img: 'assets/mysql.svg', name: 'MySQL' },
    //   { img: 'assets/java.svg', name: 'Java' }
    ]
  },
  {
    skillName: 'Tools   ',
    skillImgs: [
      { img: 'assets/vs code.svg', name: 'vs code' },
      { img: 'assets/github.svg', name: 'github' },
      { img: 'assets/vite.svg', name: 'vite' }
    ]
  }
];

let skillSet=document.querySelector('#Skill');
//let frontEndicons=[{'img':'assets/html.svg','text':'Html image'}];
skills.forEach(skillName=>{
    let div=document.createElement('div');
    let title=document.createElement('h3');
    
    let categorySet=document.createElement('div')
    categorySet.className = "categorySet";
    //  
    // let iconImg=document.createElement('img');
    // title.textContent=i.category
    // iconImg.src=i.img;
    // iconImg.title=i.text;
    // iconImg.height=100;
    // iconImg.width=100;
    // div.appendChild(iconImg);
    title.innerText=skillName.skillName;
    title.style.color='white';
    // console.log(skillName.category);
   // skillSet.appendChild(div);
    div.appendChild(title);
    skillName.skillImgs.forEach(icon=>{
        let iconImg=document.createElement('img');
        
        iconImg.src=icon.img;
        iconImg.title=icon.name;
        iconImg.height=80;
        iconImg.width=80;
        categorySet.appendChild(iconImg);
        // div.appendChild(categorySet);

        
    });
    div.appendChild(categorySet);
    skillSet.appendChild(div);

});
// div.appendChild(categorySet);

// project data ------
let projects = [
    {
    name: 'Cup-of-Cakes',
    link: 'https://cup-of-cakes.vercel.app/',
    git: 'https://github.com/manikandan1005/Cup-Of-Cakes-',
    content: 'Created a modern and responsive landing page for a cake/pastry brand using React. Showcased featured products, offers, and sections like About, Menu, and Contact. Implemented reusable React components, responsive layout with Bootstrap and CSS, and added interactive elements using JavaScript for better user experience.',
    tool: 'Tech Stack: React, HTML 5, CSS, Bootstrap, JavaScript',
    img: 'assets/projectImg/coc.png'
  },
  {
    name: 'Business Websites',
    link: 'https://nostra-e-commerce.netlify.app/',
    git: 'https://github.com/manikandan1005/Nostra-Ecommerce.git',
    content: 'Designed and developed a responsive business website for a fictional e-commerce brand. Focused on layout, visual design, and mobile-first responsiveness. Implemented various sections like product showcase, testimonials, and call-to-actions.',
    tool: 'Tech Stack: HTML 5, CSS, JS, Bootstrap',
    img: 'assets/projectImg/Nostra project.png'
  },
  {
    name: 'Employee Management System',
    link: 'https://employee-management-system-angular-ten.vercel.app/',
    git: 'https://github.com/manikandan1005/Employee-Management-System-Angular.git',
    content: 'Created an Employee Management System using HTML, CSS, JavaScript, and Bootstrap with complete CRUD operations and real-time form validation.',
 tool: 'Tech Stack: HTML, CSS, JS, Bootstrap',
    img: ' assets/projectImg/EMS-JS.png '
  },
  {
    name: 'Task Management System',
    link: '',
    git: 'https://github.com/manikandan1005/Angular-Todo-.git',
    content: 'Created a task manager using Angular. Features include adding and deleting tasks, with persistent storage using localStorage. The UI is responsive and clean, ensuring a seamless task-tracking experience with Bootstrap layout.',
    tool: 'Tech Stack: Angular, TypeScript, Bootstrap',
    img: 'assets/projectImg/Todo.png'
  },
  {
    name: 'Udemy Clone',
    link: '',
    git: 'https://github.com/manikandan1005/udemy-clone',
    content: 'Cloned the Udemy homepage to replicate layout and UI structure. Focused on mastering HTML structure, CSS styling, and responsive design techniques. This helped enhance frontend layout replication skills using Flexbox and grid systems.',
    tool: 'Tech Stack: HTML 5, CSS, JS, Bootstrap',
    img: 'assets/projectImg/udemy.png'
  },
  {
    name: 'Shop Sphere',
    link: '',
    git: '',
    content: 'Developed a modern e-commerce app where users can browse products, add to cart, and checkout. Used Angular Router for page navigation and reusable components. The project mimics real-world e-commerce functionality with UI efficiency.',
    tool: 'Tech Stack: Angular, TypeScript, Angular Router, Bootstrap',
    img: 'assets/projects/shopsphere.png'
  },
  {
    name: 'Greenden',
    link: 'https://vignesh-vc.github.io/greenden/',
    git: '',
    content: 'Created a visually engaging landing page for a green business. Used clean design principles and Bootstrap for layout. Included product cards, image banners, and CTA buttons. Ensured cross-device compatibility and quick load times.',
    tool: 'Tech Stack: HTML 5, CSS, JS, Bootstrap',
    img: 'assets/projectImg/Greenden.png'
  },
  {
    name: 'Actodo Project',
    link: 'https://actodo-pro.vercel.app/',
    git: '',
    content: 'Designed a to-do list application to practice basic DOM operations in JavaScript. Users can add or delete tasks with immediate feedback. This project helped strengthen logic building and DOM manipulation skills.',
    tool: 'Tech Stack: HTML 5, CSS, JS, Bootstrap',
    img: 'assets/projectImg/actodo.png'
  },
  {
    name: 'Weather Prediction',
    link: 'https://weatherapi-webapp.vercel.app/',
    git: '',
    content: 'Built a weather app using OpenWeatherMap API. Users can enter a city to view current temperature and weather info. Implemented real-time API calls, error handling, and responsive cards for display.',
    tool: 'Tech Stack: HTML 5, CSS, JS, Bootstrap',
    img: 'assets/projectImg/Weather .png'
  },
  {
    name: 'Registration Form',
    link: 'https://registration-form-vc.netlify.app/',
    git: '',
    content: 'Developed a responsive registration form with proper input validations. Included feedback messages, styled placeholders, and required fields. Designed to work seamlessly across various devices.',
    tool: 'Tech Stack: HTML 5, CSS, JS, Bootstrap',
    img: 'assets/projectImg/Registration .png'
  },
  {
    name: 'Student List Management',
    link: 'https://student-git-main-manikandans-projects-6d1ddc35.vercel.app/',
    git: 'https://github.com/manikandan1005/student.git',
    content: 'Developed a Student List Management system with features to add, view, update, and delete student records. Focused on clean UI and smooth CRUD operations to manage student data effectively.',
    tool: 'Tech Stack: Angular, TypeScript, Bootstrap',
    img: 'assets/projectImg/student.png'
  }
];



let projectLists =document.querySelector('.projectLists');
projects.forEach((list)=>{
  let itemsContainer=document.createElement('div');
  itemsContainer.className="items";
    itemsContainer.innerHTML=`
      <img src="${list.img}" alt="${list.name}">
                <h4>${list.name}</h4>
                <p>${list.content}</p>
                <div class="demoBtns">
                    <a href="${list.link}">Demo</a>
                    <a href="${list.git}">git</a>
                </div>
    `;
  projectLists.append(itemsContainer);
})

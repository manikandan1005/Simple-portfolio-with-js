let navItem=["Home","About",'Skill','Project','Contact'];
let navBar=document.querySelector('.navBar');
navItem.forEach(item=>{
    let aTag=document.createElement("a");
    aTag.href=`#${item}`;
    aTag.textContent=item;
    navBar.appendChild(aTag);
    
});
let roleAnima=document.querySelector('.roleAnima');
let roleTitle=['Software developer','Full stack developer','Front end developer','MERN stack developer','Freelancer Developer'];
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
    title.classList="blinkText scroll"
    let categorySet=document.createElement('div')
    categorySet.className = "categorySet ";
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
        let div=document.createElement("div");
        div.className="scroll";
        iconImg.src=icon.img;
        iconImg.title=icon.name;
        iconImg.height=80;
        iconImg.width=80;
        div.appendChild(iconImg);
        categorySet.appendChild(div);
        // div.appendChild(categorySet);

        
    });
    div.appendChild(categorySet);
    skillSet.appendChild(div);

});
// div.appendChild(categorySet);

// project data ------
let projects = [
 {
  id: 0,
  name: 'Cream Stones',
  link: 'https://react-cream-stones.vercel.app/',
  git: 'https://github.com/manikandan1005/React-E-Commerce-App',
  content: 'Designed and developed a modern, fully responsive landing page for a cake and pastry brand using React. Built reusable and well-structured components with a clean UI architecture. Implemented interactive sections such as Featured Products, Menu, Special Offers, and Contact. Ensured a mobile-first responsive layout with Tailwind CSS. Improved user experience through smooth animations, dynamic UI interactions, and optimized component rendering.',
  tool: 'React, JavaScript, JSX, CSS, Tailwind CSS',
  img: 'assets/projectImg/CreamStones.png'
},
  {
    id: 1,
    name: 'Business Websites',
    link: 'https://nostra-e-commerce.netlify.app/',
    git: 'https://github.com/manikandan1005/Nostra-Ecommerce.git',
    content: 'Designed and developed a professional multi-section business/e-commerce website focusing on UI structure, grid layouts, and mobile-first design. Implemented product sections, testimonial carousel, hero banner, and call-to-action components. Enhanced visual appeal using CSS animations and ensured consistency across all screen sizes.',
    tool: 'HTML 5, CSS, JS, Bootstrap',
    img: 'assets/projectImg/Nostra project.png'
  },
  {
    id: 2,
    name: 'Employee Management System',
    link: 'https://ems-in-js-crud.vercel.app/',
    git: 'https://github.com/manikandan1005/Employee-Management-System-Angular.git',
    content: 'Created a complete Employee Management System with CRUD functionalities including add, update, delete, and search. Built using pure JavaScript with form validation, dynamic table rendering, and clean UI components. Focused on DOM manipulation, modular code structure, and real-time data updates for improved usability.',
    tool: 'HTML, CSS, JavaScript, Bootstrap',
    img: 'assets/projectImg/EMS-JS.png'
  },
  {
    id: 3,
    name: 'Task Management System',
    link: '',
    git: 'https://github.com/manikandan1005/Angular-Todo-.git',
    content: 'Developed a task management app using Angular with features like add, delete, and persist tasks using localStorage. Implemented component-based architecture, TypeScript logic handling, and Bootstrap-based responsive UI. The app offers a smooth and minimal interface designed for easy daily task tracking.',
    tool: 'Angular, TypeScript, Bootstrap',
    img: 'assets/projectImg/Todo.png'
  },
  {
    id: 4,
    name: 'Udemy Clone',
    link: '',
    git: 'https://github.com/manikandan1005/udemy-clone',
    content: 'Cloned the Udemy homepage to understand and replicate real-world website design structures. Focused on advanced layout techniques using Flexbox and CSS Grid, navigation design, hero banner styling, and course-card UI patterns. Practiced responsive web design and improved pixel-perfect layout replication skills.',
    tool: 'HTML 5, CSS, JS, Bootstrap',
    img: 'assets/projectImg/udemy.png'
  },
  {
    id: 5,
    name: 'Shop Sphere',
    link: '',
    git: '',
    content: 'Built a modern e-commerce web application using Angular with key features like product browsing, add-to-cart, and checkout flow. Implemented Angular Router for multi-page navigation and reusable components for product cards and cart UI. Focused on clean UI, state handling, and improved performance with optimized Angular structure.',
    tool: 'Angular, TypeScript, Angular Router, Bootstrap',
    img: 'assets/projects/shopsphere.png'
  },
  {
    id: 6,
    name: 'Greenden',
    link: 'https://vignesh-vc.github.io/greenden/',
    git: '',
    content: 'Created a visually appealing landing page for a green eco-friendly business. Included hero sections, product displays, promotional banners, and CTA buttons. Ensured lightweight performance, fast load time, and cross-device compatibility using Bootstrap and optimized images.',
    tool: 'HTML 5, CSS, JS, Bootstrap',
    img: 'assets/projectImg/Greenden.png'
  },
  {
    id: 7,
    name: 'Actodo Project',
    link: 'https://actodo.vercel.app/',
    git: '',
    content: 'Developed a clean and simple to-do list web app using JavaScript. Implemented DOM operations to add, delete, and organize tasks instantly. Focused on logic building, array manipulation, and creating an intuitive interface with Bootstrap styling. Designed to give users quick and responsive task management.',
    tool: 'HTML 5, CSS, JS, Bootstrap',
    img: 'assets/projectImg/actodo.png'
  },
  {
    id: 8,
    name: 'Weather Prediction',
    link: 'https://weatherapi-webapp.vercel.app/',
    git: '',
    content: 'Built a weather forecast application using OpenWeatherMap API. Users can search any city to get real-time temperature, humidity, and weather conditions. Implemented dynamic API calls with error handling, loading states, and responsive weather cards for smooth UX across devices.',
    tool: 'HTML 5, CSS, JS, Bootstrap',
    img: 'assets/projectImg/Weather .png'
  },
  {
    id: 9,
    name: 'Registration Form',
    link: 'https://registration-form-vc.netlify.app/',
    git: '',
    content: 'Created a fully responsive registration form with input validations, success/error messages, and user-friendly design. Focused on form validation logic, accessibility, proper label usage, and smooth mobile responsiveness with Bootstrap styling.',
    tool: 'HTML 5, CSS, JS, Bootstrap',
    img: 'assets/projectImg/Registration .png'
  },
  {
    id: 10,
    name: 'Student List Management',
    link: 'https://student-git-main-manikandans-projects-6d1ddc35.vercel.app/',
    git: 'https://github.com/manikandan1005/student.git',
    content: 'Built a Student List Management system using Angular, featuring add, edit, delete, and search functionalities. Implemented form validation, reactive updates, Bootstrap tables, and a clean UI. Focused on Angular component communication, TypeScript handling, and smooth CRUD operation design.',
    tool: 'Angular, TypeScript, Bootstrap',
    img: 'assets/projectImg/student.png'
  },
    {
    id: 11,
    name: 'Cup-of-Cakes',
    link: 'https://cup-of-cakes.vercel.app/',
    git: 'https://github.com/manikandan1005/Cup-Of-Cakes-',
    content: 'Developed a modern and fully responsive landing page for a cake and pastry brand using React. Implemented reusable components, optimized layouts, and interactive sections such as Featured Products, Menu, Offers, and Contact. Ensured mobile-first responsiveness using Bootstrap and custom CSS. Enhanced user experience with smooth animations, dynamic UI updates, and clean component architecture.',
    tool: 'React, HTML 5, CSS, Bootstrap, JavaScript',
    img: 'assets/projectImg/coc.png'
  }
];

let projectLists =document.querySelector('.projectLists');
projects.forEach((list)=>{
  let itemsContainer=document.createElement('div');
  itemsContainer.className="items scroll";
    itemsContainer.innerHTML=`
      <img src="${list.img}" alt="${list.name}">
                <h4>${list.name}</h4>
                <button onclick="project(${list.id})">Explore</button>
                                

    `;
  projectLists.append(itemsContainer);

})
let projectexp=document.querySelector('.projectexp');



function closeProject(){
  //let close=document.querySelector('.close');
  console.log("close the project")
     projectexp.style.display="none";

}

function project(id){
  // let data=projects.id[i];
  let data = projects.find(p => p.id === id);
  console.log(data)
   projectexp.style.display="block";
   projectexp.innerHTML=`
          
            <i class="fa-solid fa-xmark blinkText scroll" onclick="closeProject()"></i>
            <div class=" content ">
                <img src="${data.img}" alt="${data.name}">
                <h1>${data.name}</h1>
            <p>${data.content}</p>
            <p><b>Tech Stack:</b> ${data.tool}</p>
            <div class="demoBtns">
                    <a href="${data.link}"  target="_blank"  rel="noopener noreferrer">Demo</a>
                    
                    <a href="${data.git}" target="_blank"  rel="noopener noreferrer">git</a>
                </div>
        
            </div>
            
`
}




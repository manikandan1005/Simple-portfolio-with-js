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

let text="Hello! I'm Manikandan S, a passionate front-end developer with experience in building responsive and user-friendly web applications using Angular, HTML, SCSS, and JavaScript.I am a web developer with a passion for building modern, responsive websites and applications. I focus on creating seamless user experiences, combining clean design with efficient, scalable solutions. Continuously learning and exploring new technologies, I thrive in solving complex problems and delivering high-quality digital products.";
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
      { img: 'assets/tailwindcss.svg', name: 'Tailwind CSS' },
       { img: 'assets/bootstrap.svg', name: 'bootstrap CSS' },
      { img: 'assets/javascript.svg', name: 'JavaScript' },
      { img: 'assets/typescript.svg', name: 'TypeScript' },
      { img: 'assets/react.svg', name: 'React' },
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
      { img: 'assets/github.svg', name: 'github' }
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
    console.log(skillName.category);
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

let navItem=["Home","About",'Service','Project','Contact'];
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
let aboutText=document.querySelector('.text');
aboutText.textContent=text;

let itemBox=document.querySelector('.itemBox');
let boxData=[{"title":"Experience","count":10},{"title":"Experience","count":1}];
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
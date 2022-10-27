/* open mobile menu */

const openM = document.getElementById('open-menu');
const closeM = document.getElementById('close-menu');
const aboutP = document.getElementById('about');

const menu = document.querySelector('nav');

openM.addEventListener('click', () => {
  menu.classList.add('menu-btn');
});

closeM.addEventListener('click', () => {
  menu.classList.remove('menu-btn');
});

/* Implement the section "Featured speakers" */

const speaker1 = {
  name: 'Fadi Sherar',
  img: ['images/avatarM-1.png'],
  position: 'Software Developer and Cloud Architect',
  info: 'Fadi is a Software Developer and Cloud Architect who is passionate about building web and mobile apps. He has an MSc in Computer Science - Internet Engineering and lives in the UK.',
};
const speaker2 = {
  name: 'Mariam Hira',
  img: ['images/avatarF-1.png'],
  position: 'Software Engineer and Instructor',
  info: 'Mariam have a degree in Information Technology from Middlesex University, London. I am the founder of Learn Space Tutorials and have helped several brands and industries to reinvent themselves by offering them my expertise.',
};
const speaker3 = {
  name: 'Angela Yu',
  img: ['images/avatarF-2.png'],
  position: 'Software Developer and Cloud Architect',
  info: 'Angela is a developer with a passion for teaching. she the lead instructor at the London App Brewery, London leading Programming Bootcamp.',
};
const speaker4 = {
  name: 'Abed Steele',
  img: ['images/avatarM-2.png'],
  position: 'Developer and Bootcamp Instructor',
  info: 'Abed a developer with a serious love for teaching. he spent the last few years teaching people to program at 2 different immersive bootcamps. His graduates work at companies like Google, Salesforce, and Square.',
};
const speaker5 = {
  name: 'Anna Taulien',
  img: ['images/avatarF-3.png'],
  position: 'Web developer and coding instructor',
  info: 'She is a professional web developer whos been developing websites and working with startups since 1999. He also has a broad set of skills in software, web development, and information technology.',
};
const speaker6 = {
  name: 'Kane Esweta',
  img: ['images/avatarM-3.png'],
  position: 'Developer, bootcamp instructor, and lead instructor.',
  info: 'He have been writing HTML, CSS and JavaScript since 2001. And I,ve been writing Rupy since 2012. I,ve created websites for large organizations, and have almost completely automated my entire life with Rupy',
};

const array = [speaker1, speaker2, speaker3, speaker4, speaker5, speaker6];

const section = document.createElement('section');
section.className = 'speakers';

const h2 = document.createElement('h2');
h2.textContent = 'Featured Speakers';
section.appendChild(h2);

const div = document.createElement('div');
div.className = 'speaker-container';
section.appendChild(div);

for (let i = 0; i < array.length; i += 1) {
  const divS = document.createElement('div');
  divS.className = 'speakerP';
  div.appendChild(divS);

  const divIMG = document.createElement('div');
  divIMG.className = 'img-speaker';
  divS.appendChild(divIMG);

  const img = document.createElement('img');
  img.src = `${array[i].img}`;
  divIMG.appendChild(img);

  const divInfo = document.createElement('div');
  divInfo.className = 'info-speaker';
  divS.appendChild(divInfo);

  const h2Info = document.createElement('h2');
  h2Info.textContent = `${array[i].name}`;
  divInfo.appendChild(h2Info);

  const h3Info = document.createElement('h3');
  h3Info.textContent = `${array[i].position}`;
  divInfo.appendChild(h3Info);

  const pInfo = document.createElement('p');
  pInfo.textContent = `${array[i].info}`;
  divInfo.appendChild(pInfo);
}

const list = document.querySelector('.main-program');

window.addEventListener('load', () => {
  if (typeof (list) !== 'undefined' && list != null) {
    list.after(section);
  }
});

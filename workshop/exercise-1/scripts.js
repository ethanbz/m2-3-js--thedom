// Add your code here!
const main = document.createElement("main");
document.body.appendChild(main);

const title = document.createElement("H1");
main.appendChild(title);
title.innerText = "The best How I Met Your Mother episode (according to fans)"

const p1 = document.createElement("p");
main.appendChild(p1);
p1.innerText="As impossible as it seems to name just 1 of the 208 legendary \
episodes as the “best”, the fans have spoken and the highest rated episode \
is… wait for it…";

const sub = document.createElement("h2");
main.appendChild(sub);
sub.innerText="The Slap Bet (Season 2, Episode 9)";

const p2 = document.createElement("p");
main.appendChild(p2);
p2.innerText="IMDB Rating: 9.5";

const pic = document.createElement("img");
main.appendChild(pic);
const source = document.createAttribute('src');
pic.setAttributeNode(source);
source.value = "images/robin-sparkles.jpg";

const p3 = document.createElement("p");
main.appendChild(p3);
p3.innerText="In this episode, Ted is learning a few secrets about \
Robin, namely that she has an unexplained aversion \
to the mall. Robin refuses to tell Ted and the \
others why she won’t go to the mall, so the gang \
forms their own theories. Marshall believes it’s \
because she got married in a mall and is still \
married. Barney believes it has something to do with \
Robin having performed in a porn video. The two of \
them make a slap bet with each other: whoever is \
right gets to slap the other across the face as hard \
as he can. Lily is named the Slap Bet Commissioner, \
as long as she promises to be unbiased.";

const p4 = document.createElement("p");
main.appendChild(p4);
p4.innerText="In the end, Robin’s big secret was revealed- she was \
a Canadian, teen pop sensation named Robin Sparkles.\
Barney finds the music video for her hit single \
“Lets Go To The Mall”. The slap bet takes a few \
turns throughout the episode, but ends with Marshall \
having the right to slap Barney 5 times- available \
for all of eternity (horrible call Barney).";

const link = document.createElement('a');
main.appendChild(link);
const ref = document.createAttribute('href');
link.setAttributeNode(ref);
ref.value = "https://himym2017.wordpress.com/2017/03/25/the-best-himym-\
episode-according-to-fans/";
link.innerText = "Source";

const style = document.createElement('link');
document.head.appendChild(style);
const ref2 = document.createAttribute('href');
style.setAttributeNode(ref2);
ref2.value = "styles.css";
const ref3 = document.createAttribute('rel');
style.setAttributeNode(ref3);
ref3.value = "stylesheet";


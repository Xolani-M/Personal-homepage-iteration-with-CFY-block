var link, link_names, new_links_array;


link = ['https://github.com/', 'https://www.coursera.org/', 'https://codeyourfuture.io/'];
link_names = ['github', 'coursera', 'CodeYourFuture'];
new_links_array = [];
let element_list = document.getElementById('list');
link.forEach((link) => {
  let new_li = document.createElement('li');
  let new_a = document.createElement('a');
  new_a.setAttribute("href", link);
  new_a.innerText = link_names.shift();
  new_a.style.backgroundColor = '#ffffff';

  new_li.appendChild(new_a);

  element_list.appendChild(new_li);
});

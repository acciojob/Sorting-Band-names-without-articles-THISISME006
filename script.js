//your code here
let bandNames = ['The Beatles', 'Red Hot Chili Peppers', 'Led Zeppelin', 'The Who', 'Pink Floyd'];

// function to remove articles from the beginning of each name
function removeArticles(name) {
  return name.replace(/^(a|an|the)\s+/i, '');
}

// sort the band names in lexicographic order
bandNames.sort((a, b) => removeArticles(a).localeCompare(removeArticles(b)));

// create a list of band names inside a ul element with id="band"
const bandList = document.createElement('ul');
bandList.setAttribute('id', 'band');

for (let i = 0; i < bandNames.length; i++) {
  const bandItem = document.createElement('li');
  bandItem.textContent = bandNames[i];
  bandList.appendChild(bandItem);
}

// add the list to the document body
document.body.appendChild(bandList);

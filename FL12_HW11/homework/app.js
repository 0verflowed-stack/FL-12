const structure = [
    {
      'folder': true,
      'title': 'Films',
      'children': [
        {
          'title': 'Iron Man.avi'
        },
        {
          'folder': true,
          'title': 'Fantasy',
          'children': [
            {
              'title': 'The Lord of the Rings.avi'
            },
            {
              'folder': true,
              'title': 'New folder 1',
              'children': false
            }
          ]
        }
      ]
    },
    {
      'folder': true,
      'title': 'Documents',
      'children': [
        {
          'folder': true,
          'title': 'EPAM Homework answers',
          'children': null
        }
      ]
    }
];

const rootNode = document.getElementById('root');

implementStructure(structure, rootNode);

function implementStructure(items, mainNode) {
  let list = document.createElement('ul');

  for (let elem of items) {
    let ItemNode = document.createElement('li');
    let wrap = document.createElement('div');
    let elementIcon = document.createElement('i');
    
    wrap.setAttribute('class', 'heading');

    wrap.addEventListener('mouseover', function() {
      this.style.cursor = 'pointer';
      this.style.backgroundColor = 'lightgray';
    });

    wrap.addEventListener('mouseout', function() {
      this.style.cursor = 'pointer';
      this.style.backgroundColor = 'white';
    });
    
    elementIcon.setAttribute('class', 'material-icons');

    if (elem.folder) {
      let currentState;

      ItemNode.setAttribute('class', 'folder');
      elementIcon.textContent = 'folder';

      wrap.appendChild(elementIcon);
      wrap.innerHTML += elem.title;

      ItemNode.addEventListener('click', function(event) {
        event.stopPropagation();
        
        if (this.childNodes.length === 1) {
          wrap.firstChild.textContent = 'folder_open';

          if (currentState) {
            this.appendChild(currentState);
          } else if (elem.children) {
            implementStructure(elem.children, this);
          } else {
            let content = document.createElement('i');
            content.textContent = 'Folder is empty';

            content.addEventListener('click', function(event) {
              event.stopPropagation();
            });

            this.appendChild(content);
          } 
        } else {
          wrap.firstChild.textContent = 'folder';

          currentState = this.lastChild;
          this.removeChild(this.lastChild);
        }
      });
    } else {
      ItemNode.setAttribute('class', 'file');
      elementIcon.textContent = 'insert_drive_file';

      wrap.appendChild(elementIcon);
      wrap.innerHTML += elem.title;

      ItemNode.addEventListener('click', function(event) {
        event.stopPropagation();
      });
    }
    ItemNode.appendChild(wrap);
    list.appendChild(ItemNode);
  }
  mainNode.appendChild(list);
}
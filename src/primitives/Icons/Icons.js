const config = [
  {
    name: 'Add',
    id: 'fas fa-plus',
    class: '.fas .fa-plus'
  },
  {
    name: 'Alert',
    id: 'fas fa-exclamation',
    class: '.fas .fa-exclamation'
  },
  {
    name: 'Check',
    id: 'fas fa-check',
    class: '.fas .fa-check'
  },
  {
    name: 'Chevron Down',
    id: 'fas fa-chevron-down',
    class: '.fas .fa-chevron-down'
  },
  {
    name: 'Chevron Left',
    id: 'fas fa-chevron-left',
    class: '.fas .fa-chevron-left'
  },
  {
    name: 'Chevron Right',
    id: 'fas fa-chevron-right',
    class: '.fas .fa-chevron-right'
  },
  {
    name: 'Chevron Up',
    id: 'fas fa-chevron-up',
    class: '.fas .fa-chevron-up'
  },
  {
    name: 'Close',
    id: 'fas fa-times',
    class: '.fas .fa-times'
  },
  {
    name: 'Facebook',
    id: 'fab fa-facebook-f',
    class: '.fab .fa-facebook-f'
  },
  {
    name: 'File',
    id: 'far fa-file-alt',
    class: '.far .fa-file-alt'
  },
  {
    name: 'Globe',
    id: 'fas fa-globe',
    class: '.fas .fa-globe'
  },
  {
    name: 'Grid',
    id: 'fas fa-th-large',
    class: '.fas fa-th-large'
  },
  {
    name: 'Instagram',
    id: 'fab fa-instagram',
    class: '.fab .fa-instagram'
  },
  {
    name: 'LinkedIn',
    id: 'fab fa-linkedin-in',
    class: '.fab .fa-linkedin-in'
  },
  {
    name: 'List',
    id: 'far fa-list-alt',
    class: '.far .fa-list-alt'
  },

  {
    name: 'Minus',
    id: 'fas fa-minus',
    class: '.fas .fa-minus'
  },
  {
    name: 'External Link',
    id: 'fas fa-external-link-alt',
    class: '.fas .fa-external-link-alt'
  },
  {
    name: 'Phone',
    id: 'fas fa-phone',
    class: '.fas .fa-phone'
  },
  {
    name: 'Search',
    id: 'fas fa-search',
    class: '.fas .fa-search'
  },
  {
    name: 'Trash',
    id: 'far fa-trash-alt',
    class: '.far .fa-trash-alt'
  }
];

const icons = list => {
  let response = '<div class="documentation-grid">';

  list.map(item => {
    response += `
    <div class="documentation-spacing--internal documentation-block documentation-grid--item">
    <div class="icon-block">
      <span style="padding:4px">
        <i class="${item.id}"></i>
          <span class="acg-accessibly-hidden">${item.name}</span>
      </span>
    </div>
    <footer>
    <p><strong>${item.name}</strong></p>
    <p><code>${item.class}</code></p>
    </footer>
    </div>`;
  });

  response += '</div>';

  return response;
};

export const all = () => icons(config);

import { select } from '@storybook/addon-knobs';

const colorOptions = {
  none: '',
  blue: 'acg-container--blue',
  gray: 'acg-container--gray',
  purple: 'acg-container--purple',
  'orange slanted': 'acg-container--slant-orange',
  'teal slanted': 'acg-container--slant-teal',
  'yellow slanted': 'acg-container--slant-yellow',
  'purple slanted': 'acg-container--slant-purple',
  'red slanted': 'acg-container--slant-red',
  'aqua slanted': 'acg-container--slant-aqua',
  'green slanted': 'acg-container--slant-green',
  'blue slanted': 'acg-container--slant-blue',
  'beige slanted': 'acg-container--slant-beige'
};

const colorSideOptions = {
  left: '',
  right: 'acg-container--right'
};

const sizeOptions = {
  default: 'acg-wrapper',
  wide: 'acg-wrapper--wide',
  narrow: 'acg-wrapper--narrow'
};

export const All = () => {
  const containerColor = select(
    'Container BG Color',
    colorOptions,
    colorOptions.none
  );

  const colorSide = select(
    'Container BG Slant side',
    colorSideOptions,
    colorSideOptions.left
  );

  const containerSize = select(
    'Container Size',
    sizeOptions,
    sizeOptions.default
  );

  return `
  <div class="acg-container ${containerColor}  ${colorSide}">
    <div class="${containerSize}">
      <p>
        Velit amet elit dolor laborum sunt incididunt mollit labore adipisicing culpa. 
        Do do incididunt cillum aute elit Lorem 
        deserunt duis nulla consequat consectetur. Nisi esse consectetur ullamco 
        ut consequat ipsum anim. Qui minim minim ut do qui incididunt nisi et. 
        Enim nulla pariatur mollit est deserunt dolore aliqua fugiat aliqua fugiat et commodo 
        incididunt anim. Culpa laboris incididunt aliquip laboris adipisicing consectetur. Veniam proident 
        reprehenderit in veniam sit quis excepteur voluptate reprehenderit tempor consequat ad duis.
      </p>
      <p>
        <a href="#">Do officia</a> ex tempor ipsum ut adipisicing ullamco sunt velit sint elit eu eu. 
        Deserunt et incididunt pariatur eiusmod exercitation esse aute elit sit. 
        Occaecat cillum anim sunt dolore labore aliqua. In exercitation consequat
        proident reprehenderit ullamco voluptate ullamco incididunt sunt.
      </p>
    </div>
  </div>
`;
};

export default {
  title: 'Primitives / Containers'
};

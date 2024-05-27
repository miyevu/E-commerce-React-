# Frontend Mentor - Room homepage solution

This is a solution to the [Room homepage challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/room-homepage-BtdBY_ENq). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Getting started](#getting-started)
  - [Development Environment Setup](#development-environment-setup)
  - [Running the Application](#running-the-application)
- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Getting Started

This project was created using `create-react-app` with a TypeScript template:
```
npx create-react-app . --template typescript
```

### Development Environment Setup

Prerequisites: Ensure you have Node.js and npm (or yarn) installed on your system. You can download them from https://nodejs.org/en.

Clone the Project (if applicable): If you obtained this project from a version control system (like Git), clone the repository to your local machine.

Install Dependencies: Navigate to the project directory in your terminal and run:
In the project directory, you can run:

```
npm install
```

### Running the Application

Start the Development Server: Run the following command in your terminal:

```
npm start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Navigate the slider using either their mouse/trackpad or keyboard

### Screenshot

#### Desktop view

![Desktop view for the Room homepage coding challenge](./screenshots/desktop-view-1.jpg)

![Desktop view for hover state for the Room homepage coding challenge](./screenshots/desktop-view-2.jpg)

#### Mobile view

![Mobile view for the Room homepage coding challenge](./screenshots/mobile-view-2.jpg)

![Mobile view for hover state for the Room homepage coding challenge](./screenshots/mobile-view-1.jpg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- [React](https://reactjs.org/) - JS library
- Testing

### What I learned

Working on this project allowed me to solidify my understanding of React and TypeScript integration. This was an opportunity to advance in my journey to becoming a frontend developer. Here are some code snippets that I'm particularly proud of:

#### CSS

```css
.shopnow:hover {
  filter: invert(1) brightness(0.5);
  cursor: pointer;
}
```

#### JavaScript (React)

```jsx
const[currentImage, setCurrentImage] = useState(0);
const previousImage = () => {
    setCurrentImage(prevIndex => (prevIndex === 0 ? imageDescription.length - 1 : prevIndex - 1));
};

const nextImage = () => {
    setCurrentImage(prevIndex => (prevIndex === imageDescription.length - 1 ? 0 : prevIndex + 1));
};

useEffect(() => {
    const detectKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'ArrowLeft') {
            previousImage();
        } else if (e.key === 'ArrowRight') {
            nextImage();
        }
    };
```

### Continued development

In future projects, I aim to delve deeper into:

- Improving performance optimization techniques in React
- Enhancing user experience with animations and transitions using Framer Motion
- writing unit tests for individual components using libraries like Jest and React Testing Library.
- define styles for individual components using template literals. 


### Useful resources

- [Asap Frontend](https://asapfrontend.com/) - This site helped me with my initial learning of react and it made me grasp the basics of certain React Hooks like UseState and UseEffect.
- [React Documentation](https://react.dev/) - The react documentation help with the theoritical aspect of my understanding of the practical knowledge given to me from videos.
- [W3Schools](https://www.w3schools.com/REACT/) - This site provided examples to play with to better my understanding of React.

## Author

- Gmail - [keklemyevu@gmail.com](keklemyevu@gmail.com)
- Frontend Mentor - [@miyevu](https://www.frontendmentor.io/profile/miyevu)
- Twitter - [@kerk_les](https://www.twitter.com/kerk_les)

## Acknowledgments

I would not have been able to finish up this project without the help I got from asapfrontend and youtube videos, not forgeting w3schools and tips from my mates in the frontend development.

---
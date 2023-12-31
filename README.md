# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

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

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"*

### Screenshot

![](./design/desktop-preview.jpg)


### Links

- Solution URL: [link](https://www.frontendmentor.io/solutions/intro-component-with-signup-form-feQk_FkRlZ)
- Live Site URL: [link](https://mysignupformcomponent.netlify.app/)


### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

```css
.form__input:focus {
    outline: 1px solid var(--third);
}
.form__input.error::placeholder {
    color: transparent;
}
```

### Continued development

In the future, I'm excited to master responsive design and create captivating animations to elevate user experiences. Constantly learning and exploring new technologies will be key to my growth as a developer. 

### Useful resources

- [A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) - You struggle with flexbox? Check out this helpful link for mastering flexbox.


## Author

- Frontend Mentor - [@ait-si-ahmad-ayoub](https://www.frontendmentor.io/profile/ait-si-ahmad-ayoub)
- Linkedin - [@ayoub-ait-si-ahmad](https://www.linkedin.com/in/ayoub-ait-si-ahmad/)

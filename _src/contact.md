---
layout: base.njk
subhed: Contact Me
lede: There's a good chance I'd like to hear from you
---

<form name="contact" method="POST" data-netlify="true">
  <p>
    <label>What's your name?<input type="text" name="name" /></label>   
  </p>
  <p>
    <label>What's your email?<input type="email" name="email" /></label>
  </p>
  <p>
    <label>What's on your mind?<textarea name="message"></textarea></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>
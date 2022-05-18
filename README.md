## The Golden Rule: 

🦸 🦸‍♂️ `Stop starting and start finishing.` 🏁

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

## Making a plan

1) **Make a drawing of your app. Simple "wireframes"** 
1) **Look at the drawing and name the HTML elements you'll need to realize your vision**
1) **Look at the drawing and imagine using the app. What _state_ do you need to track?** 
1) **For each HTML element ask: Why do I need this? (i.e., "we need div to display the results in")** 
1) **Once we know _why_ we need each element, think about how to implement the "Why" as a "How" (i.e., `resultsEl.textContent = newResults`)**
1) **Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change? Does any DOM update?**
1) **Think about how to validate each of your features according to a Definition of Done. (Hint: console.log usually helps here.)**
1) **Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.**

Additional considerations:
- Ask: which of your HTML elements need to be hard coded, and which need to be dynamically generated?
- Consider your data model. 
  - What kinds of objects (i.e., Dogs, Friends, Todos, etc) will you need? 
  - What are the key/value pairs? 
  - What arrays might you need? 
  - What needs to live in a persistence layer?
- Is there some state we need to initialize?
- Ask: should any of this work be abstracted into functions? (i.e., is the work complicated? can it be resused?)

Learning Objectives
Add data to a Supabase database using the Javascript library
Load data from a Supabase database using the Javascript library
Register new users on Supabase using the Javascript library
Authenticate existing users on Supabase using the Javascript library
Enable row-level-security and add policies to a Supabase database
Manage protected and unprotected pages by checking if a user is logged in
Use `location` object to redirect users
Description
You are creating an online bulletin board with authentication. Don't forget that you will need to add the link to the supabase library to any HTML that is interacting with the database.

Acceptance Criteria
Users should see a list of posts on the home page
Users should be able to register or login (`/auth` page)
Authenticated users should be able to create new posts (`/create` page)
Row-level-security should be enabled on your Supabase database with policies only allowing logged in users to add new data

Rubric
Task	Points
Deploy Requirements	
Main branch deployed to Netlify	1
Open PR from `dev` branch with Netlify deploy preview	1

Home Page Requirements	
Styled list of posts	3
Header with links (or buttons) to auth and create pages	1
ASYNC: `fetchPosts()` : return array of posts from supabase	2

Auth Page Requirements	
Allows users to login or sign up for the application	4
ASYNC: `signUpUser` - calls supabase signUp method and returns user	1
ASYNC: `signInUser` - calls supabase signIn method and returns user	1

Create Page Requirements	
Displays a form for users to add post details	1
Can only be loaded when logged in, otherwise redirects to the auth page	2
Header with links (or buttons) to home	1
Creates a new row in the database on form submit and redirects back to the home page	1
ASYNC: `createPost()` creates a new row in the database	1




To Do List: 

-draw wireframe

🎁create home page in HTML
✅ navigation div
    ✅ auth button
    ✅ create button
✅ bulletin-board div 
-add event listener to auth button to take user to the auth page

🎁create auth page in HTML 
  ✅using forms for sign IN email input, password input, and submit button
   ✅using forms for sign UP email input, password input, and submit button
 ✅create new table in supabase and link html to supabase table 
 ✅allow the user to sign up, taking them to the auth page
 ✅allow the user to sign in, taking them to the auth page
 ✅allow the user to be redirected to the homepage if tries to go to auth from homepage
 ✅add fetch-utils.js file and add supabase client 
  -signUpUser()
 ✅create app.js file 
   ✅add event listener for 'submit' on sign in 
   ✅VALIDATION: get email and pass in console and log user
 ✅fetch-utils return the response to the user 
VALIDATION: you should see new user stored in supabase 
 ✅fetch-utils: getUser(), redirect to homepage
 ✅add js. file for auth. call redirectIfLoggedIn() 
 ✅VALIDATION: page redirects to home page if already logged in


🎁Auth Button in homepage
 ✅event listener on window load should check to see if  ✅ user if auth
 ✅yes= logout button 
 ✅no= login button

🎁homepage bulletin div
✅create html div and add desired style
✅set up TDD and render function

🎁create post homepage
-to be continued'...

list of emojis


😀 😃 😄 😁 😆 😅 😂 🤣 🥲 ☺️ 😊 😇 🙂 🙃 😉 😌 😍 🥰 😘 😗 😙 😚 😋 😛 😝 😜 🤪 🤨 🧐 🤓 😎 🥸 🤩 🥳 😏 😒 😞 😔 😟 😕 🙁 ☹️ 😣 😖 😫 😩 🥺 😢 😭 😤 😠 😡 🤬 🤯 😳 🥵 🥶 😱 😨 😰 😥 😓 🤗 🤔 🤭 🤫 🤥 😶 😐 😑 😬 🙄 😯 😦 😧 😮 😲 🥱 😴 🤤 😪 😵 🤐 🥴 🤢 🤮 🤧 😷 🤒 🤕 🤑 🤠 😈 👿 👹 👺 🤡 💩 👻 💀 ☠️ 👽 👾 🤖 🎃 😺 😸 😹 😻 😼 😽 🙀 😿 😾
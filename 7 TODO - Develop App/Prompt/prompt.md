@workspace I have empty files for implementing the todo application as per the requirements given in `TodoAgileRequirementsMVP.md`. Please write the logic for both backend and frontend to implement all features, including all necessary code to ensure the feature works. Note that I do not need any email functionality.

### Requirements:

#### User Stories and Tasks:
- Implement all user stories and tasks under this feature.
- Ensure all possible validations are implemented (e.g., the submit button cannot be clicked unless all mandatory form fields are populated).
- Show a nice error popup to the client in case of validation errors.

#### Home Page:
- Create a nice home page with a good navigation bar.
- Implement logic for the header and footer.

#### Login and Registration:
- The login page should have a button for registration.
- No separate button for registration is needed on the header.
- If the user is authenticated, the top banner or header should show "Hi `<username>`!" towards the top right, and the content should show the tasks page.
- If authentication fails, the login page should be displayed.

#### Task Page:
- Show a list of logged-in user's tasks with a checkbox to mark the task as completed.
- There should be a new input text box at the top of the list to add new tasks.
- When the user enters the information and hits enter, a new task should be created and displayed on top of the list.


#### Notification Component:
- Implement a notification component to show error and success notifications to the user.
- Use this notification component where necessary.

#### CORS Issue:
- Ensure that I do not face CORS issues. Make necessary adjustments to handle CORS.


@workspace Also make styling changes based on following inputs.
#### CSS and Styling:
- Make changes in CSS across the application to ensure it looks very professional and best-looking, similar to the Microsoft TODO app.
- The Title, Description, and Add Task button should be in one row, with Title being a short-width input text, Description being a long-width text field, and Add Task being a short-width button labeled "Add".
- The background color of task cards should be transparent green for completed items and white for incomplete tasks.
- Add hover effects: completed tasks should have a non-transparent green background on hover, and incomplete tasks should have an off-white background on hover.
- The task box should occupy 70% of the browser's width.
- Make sure all the css files are imported in respective components/pages. Update the components to use appropriate styles from the imported css.
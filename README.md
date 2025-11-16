Task description<br/>
Launch URL: https://www.saucedemo.com/<br/>
**UC-1** Test Login form with empty credentials:<br/>
Type any credentials into "Username" and "Password" fields.<br/>
Clear the inputs.<br/>
Hit the "Login" button.<br/>
Check the error messages: "Username is required".<br/>
**UC-2** Test Login form with credentials by passing Username:<br/>
Type any credentials in username.<br/>
Enter password.<br/>
Clear the "Password" input.<br/>
Hit the "Login" button.<br/>
Check the error messages: "Password is required".<br/>
**UC-3** Test Login form with credentials by passing Username & Password:<br/>
Type credentials in username which are under Accepted username are sections.<br/>
Enter password as secret sauce.<br/>
Click on Login and validate the title “Swag Labs” in the dashboard.<br/>
Provide parallel execution, add logging for tests and use Data Provider to parametrize tests. Make sure that all tasks are supported by these 3 conditions: UC-1; UC-2; UC-3.<br/>
Please, add task description as README.md into your solution!<br/>
**To perform the task use the various of additional options:**<br/>
Test Automation tool: WebDriverIO;<br/>
Browsers: 1) Edge; 2) Firefox;<br/>
Locators: XPath;<br/>
Patterns: Page Object;<br/>
Assertions: Use from the selected framework;<br/>
**[Optional]** Loggers: Use from the selected framework.<br/>
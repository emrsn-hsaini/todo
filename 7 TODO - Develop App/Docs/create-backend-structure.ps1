# Define the base directories
$frontendBaseDir = "todo-app/src"
$backendBaseDir = "backend/src"

# Define the frontend files to create
$frontendFiles = @(
    "components/Header.js",
    "components/Footer.js",
    "components/TaskList.js",
    "components/TaskItem.js",
    "components/AddTaskForm.js",
    "components/LoginForm.js",
    "components/RegisterForm.js",
    "components/Notification.js",
    "pages/Home.js",
    "pages/Login.js",
    "pages/Register.js",
    "pages/Tasks.js",
    "services/api.js",
    "styles/App.css",
    "styles/Header.css",
    "styles/Footer.css",
    "styles/TaskList.css",
    "styles/TaskItem.css",
    "styles/AddTaskForm.css",
    "styles/LoginForm.css",
    "styles/RegisterForm.css",
    "styles/Notification.css"
)

# Define the backend files to create
$backendFiles = @(
    "controllers/authController.js",
    "controllers/taskController.js",
    "models/User.js",
    "models/Task.js",
    "routes/authRoutes.js",
    "routes/taskRoutes.js",
    "middlewares/authMiddleware.js",
    "middlewares/corsMiddleware.js",
    "config/db.js",
    "utils/sendEmail.js",
    "server.js"
)

# Create frontend files
foreach ($file in $frontendFiles) {
    $filePath = Join-Path $frontendBaseDir $file
    New-Item -ItemType File -Path $filePath -Force
}

# Create backend files
foreach ($file in $backendFiles) {
    $filePath = Join-Path $backendBaseDir $file
    New-Item -ItemType File -Path $filePath -Force
}
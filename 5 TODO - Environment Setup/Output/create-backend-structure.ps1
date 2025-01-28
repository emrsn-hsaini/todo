# Define the base directory
$baseDir = "backend"

# Define the subdirectories to create
$subDirs = @(
    "src",
    "config",
    "routes",
    "controllers",
    "models",
    "middlewares",
    "utils",
    "tests"
)

# Create the base directory
New-Item -ItemType Directory -Path $baseDir -Force

# Create each subdirectory
foreach ($subDir in $subDirs) {
    New-Item -ItemType Directory -Path (Join-Path $baseDir $subDir) -Force
}

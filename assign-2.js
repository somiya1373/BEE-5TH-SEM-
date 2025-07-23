const readline = require('readline');
const fs = require('fs').promises; // Use the promise-based version of fs

const TODO_FILE = './Todo.txt'; // Define a constant for the filename

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Helper function to ask a question and return a Promise
const askQuestion = (question) => {
    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            resolve(answer);
        });
    });
};

// Function to read existing todos from the file
async function readTodosFromFile() {
    try {
        const data = await fs.readFile(TODO_FILE, 'utf-8');
        // If file exists and contains data, parse it.
        // If file is empty or contains invalid JSON, JSON.parse will throw an error.
        return JSON.parse(data);
    } catch (error) {
        // If file doesn't exist or is empty/invalid, return an empty array
        // This is a common pattern for initial file creation
        if (error.code === 'ENOENT' || error instanceof SyntaxError) {
            console.log("No existing todos found or file is empty/corrupt. Starting with an empty list.");
            return [];
        }
        // For other errors, re-throw them
        throw error;
    }
}

// Function to write todos to the file
async function writeTodosToFile(todos) {
    await fs.writeFile(TODO_FILE, JSON.stringify(todos, null, 2)); // Use null, 2 for pretty printing JSON
    console.log("Todos saved successfully.");
}

// Function to add a new todo
async function addTodo() {
    let existingTodos = await readTodosFromFile(); // Get current todos
    const title = await askQuestion("Enter Title: ");
    const description = await askQuestion("Enter Description: ");

    const newTodo = {
        Title: title,
        Description: description
    };

    existingTodos.push(newTodo);
    await writeTodosToFile(existingTodos);
    console.log("Todo added successfully!");
}

// Function to delete a todo by title
async function deleteTodo() {
    let existingTodos = await readTodosFromFile(); // Get current todos
    if (existingTodos.length === 0) {
        console.log("No todos to delete.");
        return;
    }

    console.log("\n--- Current Todos ---");
    existingTodos.forEach((todo, index) => {
        console.log(`${index + 1}. Title: ${todo.Title}, Description: ${todo.Description}`);
    });
    console.log("---------------------\n");

    const titleToDelete = await askQuestion("Enter the Title of the todo to delete: ");

    const initialLength = existingTodos.length;
    const updatedTodos = existingTodos.filter((todo) => todo.Title !== titleToDelete);

    if (updatedTodos.length < initialLength) {
        await writeTodosToFile(updatedTodos);
        console.log(`Todo with title "${titleToDelete}" deleted.`);
    } else {
        console.log(`No todo found with title "${titleToDelete}".`);
    }
}

// Function to show all todos
async function showTodos() {
    const existingTodos = await readTodosFromFile();
    if (existingTodos.length === 0) {
        console.log("No todos found.");
        return;
    }
    console.log("\n--- Your Todos ---");
    existingTodos.forEach((todo, index) => {
        console.log(`${index + 1}. Title: ${todo.Title}`);
        console.log(`   Description: ${todo.Description}`);
        console.log("--------------------");
    });
    console.log("--------------------\n");
}

// Main function to run the CLI application
async function main() {
    try {
        let running = true;
        while (running) {
            console.log("\n--- To-Do List CLI ---");
            console.log("1. Add a new To-Do");
            console.log("2. View all To-Dos");
            console.log("3. Delete a To-Do");
            console.log("4. Exit");
            const choice = await askQuestion("Enter your choice (1-4): ");

            switch (choice.trim()) {
                case '1':
                    await addTodo();
                    break;
                case '2':
                    await showTodos();
                    break;
                case '3':
                    await deleteTodo();
                    break;
                case '4':
                    running = false;
                    console.log("Exiting To-Do List CLI. Goodbye!");
                    break;
                default:
                    console.log("Invalid choice. Please enter a number between 1 and 4.");
            }
        }
    } catch (error) {
        console.error("An error occurred:", error.message);
    } finally {
        rl.close(); // Ensure readline interface is closed when done or on error
    }
}

// Run the main application
main();
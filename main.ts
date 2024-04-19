import inquirer from 'inquirer'
//interfaces    done
//array
//function
//operators

interface TodoItem{
    task:string;
    completed:boolean;
}

//array
let todolist: TodoItem[] = [];

//funstion
async function mainMenu() {
const { action } = await inquirer.prompt({
        type: "list",
        name: "action",
        message: "What would you like to do?",
        choices: ["Add task","View task","Mark as complete","Delete Task","Exit"]
    });

switch (action) {
    case 'Add task':
        await addTask();
        break;
    case 'View task':
        viewTask();
        break;
        case 'Mark as complete':
            await markAsComplete();
            break;
        // case 'Delete Task':
            // break;
            case 'Exit':
                console.log('Exiting...');
                return
};
 mainMenu();
}
let addTask = async () => {
    const { task } = await inquirer.prompt({
        type: "input",
        name: "task",
        message: "What would you like to add?"
    });
    todolist.push({
        task: task,
        completed: false
    });
    console.log("task Added successfully");
};
    let viewTask = () => {
        console.log("***todolist**");
        todolist.forEach((item,index) => {
            console.log(`${index + 1}. [${item.completed ? 'x' : ''}] ${item.task}`);
        });
        console.log("*****");
    }
    let markAsComplete = async () => {
        let { index } = await inquirer.prompt({
            type: "number",
            name: "index",
            message: "Which task would you like to mark as complete?",
        });
        if (index < 1 || index > todolist.length) {
            console.log("invalid task number. please try again.");
            return
        }
    todolist[index - 1].completed = true;
    console.log("task marked as completed");
    }
   
    mainMenu();     
 




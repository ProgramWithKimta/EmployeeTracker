import getDepartments from './getDepartmentQuery.js';
import getEmployees from './getEmployeeQuery.js';
import getRoles from './getRoleQuery.js';
import { addDepartment, addEmployee, addRole, updateEmployeeRole } from './addValuesQuery.js';
import inquirer from 'inquirer';

const landingPage = async () => {
    const answers = await inquirer.prompt([
        {
            type: 'list',
            name: 'action',
            message: 'What would you like to do?',
            choices: [
                'View All Employees',
                'Add Employee',
                'View All Roles',
                'Add Role',
                'View all Departments',
                'Add Department',
                'Update Employee Role',
                'Exit'
            ],
        },
    ]);

    switch (answers.action) {
        case 'View all Employees':
            const viewEmployees = await getEmployees();
            console.table(viewEmployees);
            break;

        case 'Add an employee':
            const addEmpAnswer = await inquirer.prompt([
                {
                    type: 'input',
                    name: 'first_name',
                    message: 'Enter first name of new employee',
                },
                {
                    type: 'input',
                    name: 'last_name',
                    message: 'Enter last name of new employee',
                },
                {
                    type: 'input',
                    name: 'role_id',
                    message: 'Enter role ID of new employee',
                },
                {
                    type: 'input',
                    name: 'manager_id',
                    message: 'Enter manager ID of new employee',
                },
            ]);
            const newEmp = await addEmployee(addEmpAnswer.first_name, addEmpAnswer.last_name, addEmpAnswer.role_id, addEmpAnswer.manager_id);
            console.log("New Employee added");
            break;

        case 'Update Employee Role':
            const updateEmpRole = await inquirer.prompt([
                {
                    type: 'input',
                    name: 'employee_id',
                    message: 'Which Employee role do you want to update?',
                },
                {
                    type: 'input',
                    name: 'role_id',
                    message: 'Which role do you want to assign?',
                },
            ]);
            const editEmployeeRole = await updateEmployeeRole(updateEmpRole.employee_id, updateEmpRole.role_id);
            console.log("Employee Role Updated");
            break;

        case 'View all roles':
            const viewRoles = await getRoles();
            console.table(viewRoles);
            break;

        case 'Add Role':
            const newRoleAnswers = await inquirer.prompt([
                {
                    type: 'input',
                    name: 'title',
                    message: 'Enter title of new role',
                },
                {
                    type: 'input',
                    name: 'salary',
                    message: 'Enter salary of new role',
                },
                {
                    type: 'input',
                    name: 'department_id',
                    message: 'Enter department ID of new role',
                },
            ]);
            const newRole = await addRole(newRoleAnswers.title, newRoleAnswers.salary, newRoleAnswers.department_id);
            console.log("New Role Added");
            break;

        case 'View all Departments':
            const viewDepartments = await getDepartments();
            console.table(viewDepartments);
            break;

        case 'Add Department':
            const newDeptAnswers = await inquirer.prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: 'Enter name of new department',
                },
            ]);
            const newDept = await addDepartment(newDeptAnswers.name);
            console.log("New Department Added");
            break;

        case 'Exit':
            process.exit();
        default:
            await landingPage();
    }

    await landingPage();
};
import { getDepartments } from './Queries/getDepartmentQuery.js';
import { getEmployees } from './Queries/getEmployeeQuery.js';
import { getRoles } from './Queries/getRoleQuery.js';
import { addDepartment, addEmployee, addRole, updateEmployeeRole } from './Queries/addValuesQuery.js';
import inquirer from 'inquirer';
import { default as choices, VIEW_ALL_EMPLOYEES, UPDATE_EMPLOYEE_ROLE, ADD_ROLE, ADD_DEPARTMENT, VIEW_ALL_ROLES, VIEW_ALL_DEPARTMENTS, EXIT, ADD_EMPLOYEE } from './choices.js'

const landingPage = async () => {
    const answers = await inquirer.prompt([
        {
            type: 'list',
            name: 'action',
            message: 'What would you like to do?',
            choices: choices,
        },
    ]);

    switch (answers.action) {
        case VIEW_ALL_EMPLOYEES:
            const viewEmployees = await getEmployees();
            console.table(viewEmployees);
            break;

        case ADD_EMPLOYEE:
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
            console.log(`New Employee added: ${newEmp.first_name} ${newEmp.last_name}`);
            break;

        case UPDATE_EMPLOYEE_ROLE:
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
            console.log(`Employee Role Updated: ${editEmployeeRole.employee_id}`);
            break;

        case VIEW_ALL_ROLES:
            const viewRoles = await getRoles();
            console.table(viewRoles);
            break;

        case ADD_ROLE:
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
            console.log(`New Role Added: ${newRole.title}`);
            break;

        case VIEW_ALL_DEPARTMENTS:
            const viewDepartments = await getDepartments();
            console.table(viewDepartments);
            break;

        case ADD_DEPARTMENT:
            const newDeptAnswers = await inquirer.prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: 'Enter name of new department',
                },
            ]);
            const newDept = await addDepartment(newDeptAnswers.name);
            console.log(`New Department Added: ${newDept.name}`);
            break;

        case EXIT:
            process.exit();
        default:
            await landingPage();
    }

    await landingPage();
};

landingPage();

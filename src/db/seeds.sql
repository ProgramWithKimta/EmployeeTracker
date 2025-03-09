INSERT INTO department (name)
VALUES ('Human Resources'),
       ('Software Development'),
       ('Professional Services'),
       ('Customer Service Support');

INSERT INTO role (title, salary, department_id)
VALUES ('HR Associate', 60000, 1),
       ('HR Manager', 90000, 1),
       ('Sr Software Dev', 100000, 2),
       ('Jr Software Dev', 80000, 2),
       ('Project Manager', 95000, 3),
       ('Project Coordinator', 86000, 3),
       ('Level 1 Support Analyst', 70000, 4),
       ('Level 2 Support Analyst', 82000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Kimta', 'Nguyen', 1, 2),
       ('Matt', 'Dickson', 2, 4),
       ('Kuma', 'Bear', 3, 1),
       ('Kimyen', 'Tu', 4, 1),
       ('Kimmi', 'DeRosa', 5, 3),
       ('Sundy', 'Nguyen', 6, 3),
       ('Rosie', 'Posie', 7, 4),
       ('Daisy', 'Laisy', 8, 2);
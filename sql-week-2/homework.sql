drop table if exists users;
drop table if exists todos;
drop table if exists tags;
create table users (
    user_id int NOT NULL UNIQUE,
    user_name varchar(50) NOT NULL
);
create table todos (
    todo_id int NOT NULL UNIQUE,
    title varchar NOT NULL,
    is_done int NOT NULL,
    date_created date,
    user_id int NOT NULL,
    tag_id int
);
CREATE TABLE tags(
    tag_id int NOT NULL,
    tag_name varchar NOT NULL
);

1- Adam signs up for the TODO APP
insert into users(user_id,user_name)
values(1,'Adam');


2- Adam must go to the dentist

insert into todos(todo_id,title,date_created,is_done,user_id)
values(1,'must go to the dentist',datetime('now'),'not done',1);



3- Adam puts a "health" tag on the dentist todo

insert into tags(tag_id,tag_name)
values(1,'health');

update todos
set tag_id = 1
where tag_id is null;



4- Adam needs to pick up kids from school

insert into todos(todo_id,title,date_created,is_done,user_id)
values(2,'pick up kids from school',datetime('now'),'not done',1);



5- Adam remembers that actually, he needs to pick up the kids from the swimming pool, not the school

update todos
set title = 'pick up from swimming pool'
where todo_id = 2;


6- Adam must walk the dog

insert into todos(todo_id,title,date_created,is_done,user_id)
values(3,'walk the dog',datetime('now'),'not done',1);



7- Beth signs up for the TODO APP

insert into users(user_id,user_name)
values(2,'beth');



8- Beth needs to visit her father, and puts the "family" tag on it

insert into todos(todo_id,title,date_created,is_done,user_id,tag_id)
values(4,'visit her father',datetime('now'),'not done',2,2);

insert into tags(tag_id,tag_name)
values(2,'family');



9- Beth must go to the doctor

insert into todos(todo_id,title,date_created,is_done,user_id,tag_id)
values(5,'must go to the doctor',datetime('now'),'not done',2,3);




10- Beth puts a "health" tag on the doctor todo

insert into tags(tag_id,tag_name)
values(3,'health');



11- Beth needs to brush her teeth and puts a "health" tag on it

insert into todos(todo_id,title,date_created,is_done,user_id,tag_id)
values(6,'must brush her teeth ',datetime('now'),'not done',2,4);

insert into tags(tag_id,tag_name)
values(4,'health');



12- Adam changes the tag of the dentist todo to "urgent"

update tags
set tag_name = 'urgent'
where tag_id = 1;



13- Adam has picked up the kids from school, and has walked the dog

update todos
set is_done = 'done'
where todo_id = 2 or todo_id = 3;



14- Adam deletes all tasks that are marked as done

DELETE FROM todos
WHERE todo_id = 2 or todo_id = 3;




15- Adam decides he doesn't like the app and removes his account
delete FROM todos
WHERE user_id IN (select user_id from users where user_name = 'Adam');
delete from users 
where user_name ='Adam';



16- Beth marks all tasks with a health tag as done
update todos
set is_done = 'done'
where user_id = 2;


17- Beth convinces Adam to sign back up, and to put back his urgent dentist task on it

insert into users(user_id,user_name)
values(3,'adam');

insert into todos(todo_id,title,date_created,is_done,user_id)
values(1,'must go to dentist',datetime('now'),'not done',3);
insert into tags(tag_id,tag_name)
values(1,'urgent');



18- Adam creates a todo which says "Use the todo app more often"

insert into todos(todo_id,title,date_created,is_done,user_id)
values(2,'use the todo app more often',datetime('now'),'not done',3);




19- Finally, Adam and Beth decide to merge their users into one user called "Adam and Beth"
couldn't find the answer.

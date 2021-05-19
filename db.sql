CREATE TABLE account (
	id serial PRIMARY KEY,
  name TEXT NOT NULL,
	email TEXT UNIQUE NOT NULL,
	password TEXT NOT NULL
)

CREATE TABLE todolist (
	id serial PRIMARY KEY,
  	user_id INT NOT NULL,
	description TEXT  NOT NULL,
	due_date DATE NOT NULL
)

ALTER TABLE todolist
ADD CONSTRAINT user_id
FOREIGN KEY(user_id)
REFERENCES account(id)


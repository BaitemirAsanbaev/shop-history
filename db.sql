CREATE TABLE Actions (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(50) UNIQUE NOT NULL
);
CREATE TABLE History(
    "id" SERIAL PRIMARY KEY,
    "inventory_id" UUID NOT NULL REFERENCES Inventory("id"),
    "amount" INT NOT NULL, 
    "action" VARCHAR(60) NOT NULL REFERENCES Actions("name"),
    "date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

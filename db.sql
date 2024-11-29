CREATE TABLE Actions (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(50) UNIQUE NOT NULL
);
CREATE TABLE History(
    "item_plu" UUID NOT NULL REFERENCES Item("plu"),
    "shop_id" INT NOT NULL REFERENCES Shop("id"),
    "action" VARCHAR(60) NOT NULL REFERENCES Actions("name"),
    "date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
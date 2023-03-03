-- DROP SCHEMA ccca;

CREATE SCHEMA ccca AUTHORIZATION postgres;

-- DROP SEQUENCE ccca.item_id_item_seq;

CREATE SEQUENCE ccca.item_id_item_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE ccca.order_id_order_seq;

CREATE SEQUENCE ccca.order_id_order_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;-- ccca.address definition

-- Drop table

-- DROP TABLE ccca.address;

CREATE TABLE ccca.address (
	cep varchar NOT NULL,
	latitude numeric NOT NULL,
	longitude numeric NOT NULL,
	id_address int4 NOT NULL,
	CONSTRAINT address_pkey PRIMARY KEY (id_address)
);


-- ccca.coupon definition

-- Drop table

-- DROP TABLE ccca.coupon;

CREATE TABLE ccca.coupon (
	code text NOT NULL,
	percentage numeric NULL,
	expire_date timestamp NULL,
	CONSTRAINT coupon_pkey PRIMARY KEY (code)
);


-- ccca.item definition

-- Drop table

-- DROP TABLE ccca.item;

CREATE TABLE ccca.item (
	id_item serial4 NOT NULL,
	description text NULL,
	price numeric NULL,
	width int4 NULL,
	height int4 NULL,
	length int4 NULL,
	weight int4 NULL,
	CONSTRAINT item_pkey PRIMARY KEY (id_item)
);


-- ccca."order" definition

-- Drop table

-- DROP TABLE ccca."order";

CREATE TABLE ccca."order" (
	id_order serial4 NOT NULL,
	coupon_code text NULL,
	coupon_percentage numeric NULL,
	code text NULL,
	cpf text NULL,
	issue_date timestamp NULL,
	freight numeric NULL,
	"sequence" int4 NULL,
	total numeric NULL,
	CONSTRAINT order_pkey PRIMARY KEY (id_order)
);


-- ccca.order_item definition

-- Drop table

-- DROP TABLE ccca.order_item;

CREATE TABLE ccca.order_item (
	id_order int4 NOT NULL,
	id_item int4 NOT NULL,
	price numeric NULL,
	quantity int4 NULL,
	CONSTRAINT order_item_pkey PRIMARY KEY (id_order, id_item),
	CONSTRAINT order_item_id_item_fkey FOREIGN KEY (id_item) REFERENCES ccca.item(id_item),
	CONSTRAINT order_item_id_order_fkey FOREIGN KEY (id_order) REFERENCES ccca."order"(id_order)
);

INSERT INTO ccca.item (description,price,width,height,length,weight) VALUES
	 ('Guitarra',1000,100,30,10,3),
	 ('Amplificador',5000,50,50,50,20),
	 ('Cabo',30,10,10,10,1);

INSERT INTO ccca."order" (coupon_code,coupon_percentage,code,cpf,issue_date,freight,"sequence",total) VALUES
	 (NULL,NULL,'202200000001','160.455.710-96','2022-03-01 10:00:00',260,NULL,6350);

INSERT INTO ccca.order_item (id_order,id_item,price,quantity) VALUES
	 (14,1,1000,1),
	 (14,2,5000,1),
	 (14,3,30,3);

INSERT INTO ccca.coupon (code,percentage,expire_date) VALUES
	 ('VALE20',20,'2022-10-10 10:00:00'),
	 ('VALE20_EXPIRED',20,'2020-10-10 10:00:00');

INSERT INTO ccca.address (cep,latitude,longitude,id_address) VALUES
	 ('73320010',-27.5945,-48.5477,1),
	 ('73320011',-22.9129,-43.2003,2);

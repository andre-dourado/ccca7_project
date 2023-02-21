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

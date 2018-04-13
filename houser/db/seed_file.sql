create table houses(
    id serial primary key,
    name varchar(30),
    address varchar(100),
    city varchar(100),
    state varchar(2),
    zip integer
);

insert into houses(name, address, city, state, zip)

values('Ricky', '1 DevMountain', 'Provo', 'UT', 84061);

alter table houses

add column img text,
add column mortgage decimal,
add column rent decimal;


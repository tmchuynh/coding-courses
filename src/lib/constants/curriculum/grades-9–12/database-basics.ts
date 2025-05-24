import { CourseSchedule } from "@/lib/interfaces/courses";

export const databaseBasics: CourseSchedule[] = [
  {
    week: 1,
    title: "Introduction to Data and Databases",
    focus:
      "What is data? Why use databases? Types of databases (Relational vs. NoSQL). Overview of database terminology.",
    outcomes: "Understand data and DB types.",
    project: "Identify Daily Data & DB Use",
    projectDescription:
      "Students will reflect on their daily interactions with digital services and identify five distinct examples of data (e.g., social media posts, online shopping history, game scores). For each, they will hypothesize whether a database is likely used to store and manage it.",
  },
  {
    week: 2,
    title: "Relational Database Concepts",
    focus:
      "Understanding tables, rows, columns, keys (primary, foreign). Relationships (one-to-one, one-to-many, many-to-many). Normalization basics.",
    outcomes: "Grasp relational DB concepts.",
    project: "Library DB Schema Design",
    projectDescription:
      "Students will design a relational database schema for a simplified library system. This involves defining at least three tables (e.g., `Books`, `Authors`, `Borrowers`), specifying columns for each, identifying primary and foreign keys, and illustrating relationships.",
  },
  {
    week: 3,
    title: "Introduction to SQL - Part 1",
    focus:
      "Basic SQL syntax. SELECT statements, WHERE clauses, ORDER BY. Working with a simple relational database (e.g., SQLite).",
    outcomes: "Write basic SQL queries.",
    project: "Basic SQL SELECT Queries",
    projectDescription:
      "Using a provided sample SQLite database (or an online SQL practice tool), students will write various SQL `SELECT` queries. These queries will involve filtering data with `WHERE` clauses and sorting results with `ORDER BY` to retrieve specific information.",
  },
  {
    week: 4,
    title: "Introduction to SQL - Part 2",
    focus:
      "Data Manipulation Language (DML): INSERT, UPDATE, DELETE. Data Definition Language (DDL): CREATE TABLE, ALTER TABLE.",
    outcomes: "Use SQL DML and DDL.",
    project: "SQL DML & DDL Practice",
    projectDescription:
      "Continuing with the sample database, students will practice DML commands by writing SQL statements to `INSERT` new records, `UPDATE` existing records, and `DELETE` records. They will also use DDL to `CREATE` a new simple table.",
  },
  {
    week: 5,
    title: "SQL Joins and Aggregate Functions",
    focus:
      "Combining data from multiple tables using JOINs (INNER, LEFT, RIGHT). Using aggregate functions (COUNT, SUM, AVG, MIN, MAX) and GROUP BY.",
    outcomes: "Use SQL joins and aggregates.",
    project: "SQL Joins & Aggregates",
    projectDescription:
      "Students will write SQL queries that use `JOIN` clauses (e.g., `INNER JOIN`, `LEFT JOIN`) to combine data from at least two related tables in the sample database. They will also use aggregate functions (`COUNT`, `SUM`, `AVG`) with `GROUP BY` to generate summary reports.",
  },
  {
    week: 6,
    title: "Introduction to NoSQL Databases",
    focus:
      "Overview of NoSQL concepts. Document databases (e.g., MongoDB), key-value stores, graph databases. Use cases for NoSQL.",
    outcomes: "Understand NoSQL DB concepts.",
    project: "Compare NoSQL DB Types",
    projectDescription:
      "Students will research two different categories of NoSQL databases (e.g., document stores like MongoDB and key-value stores like Redis). They will prepare a short comparison outlining their data models, strengths, weaknesses, and typical use cases.",
  },
  {
    week: 7,
    title: "Working with a Document Database (e.g., MongoDB)",
    focus:
      "MongoDB basics: collections, documents, BSON. Setting up MongoDB. Basic CRUD operations using MongoDB shell or a GUI tool.",
    outcomes: "Perform MongoDB CRUD.",
    project: "MongoDB CRUD Operations",
    projectDescription:
      "Students will install MongoDB locally or use a cloud-based instance. They will then use the MongoDB shell (or a GUI tool like Compass) to create a collection, insert a few documents, read them, update one, and delete another, practicing basic CRUD operations.",
  },
  {
    week: 8,
    title: "Querying Document Databases",
    focus:
      "Querying data in MongoDB. Filtering, sorting, and projection. Introduction to indexing.",
    outcomes: "Query MongoDB collections.",
    project: "MongoDB Query Practice",
    projectDescription:
      "Using their MongoDB instance and sample collection, students will write various queries to find documents based on specific field values, use comparison operators, project specific fields, and sort the query results.",
  },
  {
    week: 9,
    title: "Data Modeling for Relational Databases",
    focus:
      "Designing database schemas for relational databases. Entity-Relationship Diagrams (ERDs). Applying normalization rules.",
    outcomes: "Model relational DB schemas.",
    project: "Online Store ERD Design",
    projectDescription:
      "Students will design a relational database schema for a simplified online store. This involves identifying entities (Products, Customers, Orders, OrderItems), their attributes, and relationships, and representing this design using an Entity-Relationship Diagram (ERD).",
  },
  {
    week: 10,
    title: "Data Modeling for NoSQL Databases",
    focus:
      "Designing schemas for NoSQL databases, focusing on document databases. Embedding vs. referencing.",
    outcomes: "Model NoSQL DB schemas.",
    project: "Online Store NoSQL Schema",
    projectDescription:
      "Taking the online store scenario from Week 9, students will now design a schema for a NoSQL document database (like MongoDB). They will consider when to embed related data within documents versus using references, and justify their design choices.",
  },
  {
    week: 11,
    title: "Connecting Databases to Applications",
    focus:
      "Introduction to Object-Relational Mappers (ORMs) and Object-Document Mappers (ODMs). Basic integration with a programming language (e.g., Node.js).",
    outcomes: "Connect apps to databases.",
    project: "Node.js DB Connection Script",
    projectDescription:
      "Students will write a basic Node.js script that establishes a connection to either their SQL (e.g., PostgreSQL with `pg` library) or NoSQL (e.g., MongoDB with `mongodb` driver) database. The script will then execute a simple query to fetch and display some data.",
  },
  {
    week: 12,
    title: "Mini-Project: Database Design and Implementation",
    focus:
      "Students design and implement a small database (either SQL or NoSQL) for a given scenario and perform basic operations.",
    outcomes: "Design and implement small DB.",
    project: "Recipe Book DB Project",
    projectDescription:
      "For their final mini-project, students will choose a simple application scenario (e.g., recipe book, personal contact list, simple inventory). They will design the database schema (SQL or NoSQL), implement it, populate it with sample data, and write a few queries to demonstrate its functionality.",
  },
];

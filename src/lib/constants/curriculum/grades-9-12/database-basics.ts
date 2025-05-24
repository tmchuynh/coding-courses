import { CourseSchedule } from "@/lib/interfaces/courses";

export const databaseBasics: CourseSchedule[] = [
  {
    week: 1,
    title: "Introduction to Data and Databases",
    focus:
      "What is data? Why use databases? Types of databases (Relational vs. NoSQL). Overview of database terminology.",
    outcomes: "",
    project:
      "List 5 examples of data you interact with daily and identify which might use a database.",
    projectDescription:
      "Students will reflect on their daily interactions with digital services and identify five distinct examples of data (e.g., social media posts, online shopping history, game scores). For each, they will hypothesize whether a database is likely used to store and manage it.",
  },
  {
    week: 2,
    title: "Relational Database Concepts",
    focus:
      "Understanding tables, rows, columns, keys (primary, foreign). Relationships (one-to-one, one-to-many, many-to-many). Normalization basics.",
    outcomes: "",
    project:
      "Design a simple relational database schema for a library (books, authors, borrowers) with 2-3 tables.",
    projectDescription:
      "Students will design a relational database schema for a simplified library system. This involves defining at least three tables (e.g., `Books`, `Authors`, `Borrowers`), specifying columns for each, identifying primary and foreign keys, and illustrating relationships.",
  },
  {
    week: 3,
    title: "Introduction to SQL - Part 1",
    focus:
      "Basic SQL syntax. SELECT statements, WHERE clauses, ORDER BY. Working with a simple relational database (e.g., SQLite).",
    outcomes: "",
    project:
      "Write SQL SELECT queries to retrieve specific data from a sample database (e.g., all books by a certain author).",
    projectDescription:
      "Using a provided sample SQLite database (or an online SQL practice tool), students will write various SQL `SELECT` queries. These queries will involve filtering data with `WHERE` clauses and sorting results with `ORDER BY` to retrieve specific information.",
  },
  {
    week: 4,
    title: "Introduction to SQL - Part 2",
    focus:
      "Data Manipulation Language (DML): INSERT, UPDATE, DELETE. Data Definition Language (DDL): CREATE TABLE, ALTER TABLE.",
    outcomes: "",
    project:
      "Write SQL INSERT, UPDATE, and DELETE statements to modify data in a sample database.",
    projectDescription:
      "Continuing with the sample database, students will practice DML commands by writing SQL statements to `INSERT` new records, `UPDATE` existing records, and `DELETE` records. They will also use DDL to `CREATE` a new simple table.",
  },
  {
    week: 5,
    title: "SQL Joins and Aggregate Functions",
    focus:
      "Combining data from multiple tables using JOINs (INNER, LEFT, RIGHT). Using aggregate functions (COUNT, SUM, AVG, MIN, MAX) and GROUP BY.",
    outcomes: "",
    project:
      "Write SQL queries using JOINs to combine data from two tables and use aggregate functions to summarize data.",
    projectDescription:
      "Students will write SQL queries that use `JOIN` clauses (e.g., `INNER JOIN`, `LEFT JOIN`) to combine data from at least two related tables in the sample database. They will also use aggregate functions (`COUNT`, `SUM`, `AVG`) with `GROUP BY` to generate summary reports.",
  },
  {
    week: 6,
    title: "Introduction to NoSQL Databases",
    focus:
      "Overview of NoSQL concepts. Document databases (e.g., MongoDB), key-value stores, graph databases. Use cases for NoSQL.",
    outcomes: "",
    project:
      "Research and compare two NoSQL database types (e.g., document vs. key-value) and their use cases.",
    projectDescription:
      "Students will research two different categories of NoSQL databases (e.g., document stores like MongoDB and key-value stores like Redis). They will prepare a short comparison outlining their data models, strengths, weaknesses, and typical use cases.",
  },
  {
    week: 7,
    title: "Working with a Document Database (e.g., MongoDB)",
    focus:
      "MongoDB basics: collections, documents, BSON. Setting up MongoDB. Basic CRUD operations using MongoDB shell or a GUI tool.",
    outcomes: "",
    project:
      "Install MongoDB and perform basic CRUD operations using the MongoDB shell on a sample collection.",
    projectDescription:
      "Students will install MongoDB locally or use a cloud-based instance. They will then use the MongoDB shell (or a GUI tool like Compass) to create a collection, insert a few documents, read them, update one, and delete another, practicing basic CRUD operations.",
  },
  {
    week: 8,
    title: "Querying Document Databases",
    focus:
      "Querying data in MongoDB. Filtering, sorting, and projection. Introduction to indexing.",
    outcomes: "",
    project:
      "Write MongoDB queries to find documents matching specific criteria and sort the results.",
    projectDescription:
      "Using their MongoDB instance and sample collection, students will write various queries to find documents based on specific field values, use comparison operators, project specific fields, and sort the query results.",
  },
  {
    week: 9,
    title: "Data Modeling for Relational Databases",
    focus:
      "Designing database schemas for relational databases. Entity-Relationship Diagrams (ERDs). Applying normalization rules.",
    outcomes: "",
    project:
      "Create an ERD for a small online store (products, customers, orders).",
    projectDescription:
      "Students will design a relational database schema for a simplified online store. This involves identifying entities (Products, Customers, Orders, OrderItems), their attributes, and relationships, and representing this design using an Entity-Relationship Diagram (ERD).",
  },
  {
    week: 10,
    title: "Data Modeling for NoSQL Databases",
    focus:
      "Designing schemas for NoSQL databases, focusing on document databases. Embedding vs. referencing.",
    outcomes: "",
    project:
      "Design a NoSQL (document) schema for the same online store, considering embedding vs. referencing.",
    projectDescription:
      "Taking the online store scenario from Week 9, students will now design a schema for a NoSQL document database (like MongoDB). They will consider when to embed related data within documents versus using references, and justify their design choices.",
  },
  {
    week: 11,
    title: "Connecting Databases to Applications",
    focus:
      "Introduction to Object-Relational Mappers (ORMs) and Object-Document Mappers (ODMs). Basic integration with a programming language (e.g., Node.js).",
    outcomes: "",
    project:
      "Write a simple Node.js script to connect to a database (SQL or NoSQL) and fetch some data.",
    projectDescription:
      "Students will write a basic Node.js script that establishes a connection to either their SQL (e.g., PostgreSQL with `pg` library) or NoSQL (e.g., MongoDB with `mongodb` driver) database. The script will then execute a simple query to fetch and display some data.",
  },
  {
    week: 12,
    title: "Mini-Project: Database Design and Implementation",
    focus:
      "Students design and implement a small database (either SQL or NoSQL) for a given scenario and perform basic operations.",
    outcomes: "",
    project:
      "Design and implement a database for a simple application (e.g., a recipe book) and populate it with sample data.",
    projectDescription:
      "For their final mini-project, students will choose a simple application scenario (e.g., recipe book, personal contact list, simple inventory). They will design the database schema (SQL or NoSQL), implement it, populate it with sample data, and write a few queries to demonstrate its functionality.",
  },
];

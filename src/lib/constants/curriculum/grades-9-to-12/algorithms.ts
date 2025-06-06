import { CourseSchedule } from "@/lib/interfaces/courses";

export const algorithms: CourseSchedule[] = [
  {
    week: 1,
    title: "Introduction to Algorithms and Problem Solving",
    focus:
      "What is an algorithm? Importance of algorithms. Problem-solving strategies. Pseudocode and flowcharts. Introduction to complexity (Big O notation).",
    outcomes: "Understand algorithm basics.",
    project: "Pseudocode & Flowchart Task",
    projectDescription:
      "Students will choose a simple, everyday task (like making a sandwich or sorting laundry) and break it down into a sequence of precise steps. They will then represent this process using both pseudocode and a flowchart, and informally analyze the number of steps involved.",
  },
  {
    week: 2,
    title: "Basic Data Structures - Arrays and Linked Lists",
    focus:
      "Review of arrays. Introduction to linked lists (singly, doubly). Operations, advantages, and disadvantages.",
    outcomes: "Use arrays and linked lists.",
    project: "Implement Linked List Ops",
    projectDescription:
      "Students will implement a basic singly linked list data structure from scratch in their chosen programming language. This will include functions/methods to add an element to the head or tail, and to remove an element from the head or tail.",
  },
  {
    week: 3,
    title: "Stacks and Queues",
    focus:
      "Understanding stack (LIFO) and queue (FIFO) data structures. Implementations using arrays and linked lists. Applications.",
    outcomes: "Use stacks and queues.",
    project: "Implement Stack & Queue",
    projectDescription:
      "Students will implement both a stack (Last-In, First-Out) and a queue (First-In, First-Out) data structure using arrays as the underlying storage. They will write short programs to demonstrate the push/pop operations for the stack and enqueue/dequeue for the queue.",
  },
  {
    week: 4,
    title: "Searching Algorithms",
    focus:
      "Linear search and binary search. Analysis of their time complexity. Applications of searching.",
    outcomes: "Apply search algorithms.",
    project: "Implement Search Algos",
    projectDescription:
      "Students will implement both the linear search and binary search algorithms. They will then test these algorithms on a sorted array of numbers, searching for various elements (present and absent) and informally comparing the number of comparisons each algorithm takes.",
  },
  {
    week: 5,
    title: "Sorting Algorithms - Part 1",
    focus:
      "Basic sorting algorithms: Bubble Sort, Selection Sort, Insertion Sort. Understanding their mechanisms and time complexities.",
    outcomes: "Apply basic sorting algorithms.",
    project: "Implement Basic Sort Algo",
    projectDescription:
      "Students will choose one of the basic O(n^2) sorting algorithms (Bubble Sort, Selection Sort, or Insertion Sort), implement it, and then manually trace or add print statements to visualize how the array elements are rearranged during each pass for a small sample array.",
  },
  {
    week: 6,
    title: "Sorting Algorithms - Part 2",
    focus:
      "Efficient sorting algorithms: Merge Sort, Quick Sort. Understanding their divide-and-conquer approach and average/worst-case complexities.",
    outcomes: "Apply efficient sorting.",
    project: "Implement Efficient Sort Algo",
    projectDescription:
      "Students will implement either Merge Sort or Quick Sort, two efficient divide-and-conquer sorting algorithms. They will then trace the algorithm's execution (including recursive calls and merge/partition steps) on a sample array to understand its operation.",
  },
  {
    week: 7,
    title: "Recursion",
    focus:
      "Understanding recursive thinking and functions. Base cases and recursive steps. Solving problems using recursion (e.g., factorial, Fibonacci).",
    outcomes: "Solve problems with recursion.",
    project: "Recursive Fibonacci Function",
    projectDescription:
      "Students will write a recursive function that calculates the Nth term in the Fibonacci sequence. This will involve identifying the base cases (F(0) and F(1)) and the recursive step (F(n) = F(n-1) + F(n-2)).",
  },
  {
    week: 8,
    title: "Trees - Basic Concepts and Binary Trees",
    focus:
      "Introduction to tree data structures. Terminology (root, node, leaf, height, depth). Binary trees and their properties.",
    outcomes: "Understand binary trees.",
    project: "Implement Binary Tree & Count",
    projectDescription:
      "Students will implement a basic binary tree node structure and create a small binary tree by manually linking nodes. They will then write a function (possibly recursive) to traverse the tree and count the total number of nodes.",
  },
  {
    week: 9,
    title: "Binary Search Trees (BSTs)",
    focus:
      "Properties of BSTs. Operations: insertion, deletion, search. Tree traversal algorithms (in-order, pre-order, post-order).",
    outcomes: "Use Binary Search Trees.",
    project: "Implement BST Ops",
    projectDescription:
      "Students will implement a Binary Search Tree (BST), including a function to insert new values while maintaining the BST property. They will also implement an in-order traversal function, which should print the BST nodes in sorted order.",
  },
  {
    week: 10,
    title: "Introduction to Graphs",
    focus:
      "Graph terminology (vertices, edges, directed, undirected). Representing graphs (adjacency matrix, adjacency list). Basic graph traversal (BFS, DFS).",
    outcomes: "Understand graph basics & BFS.",
    project: "Graph Rep & BFS",
    projectDescription:
      "Students will represent a given simple graph (undirected or directed) using an adjacency list. They will then implement the Breadth-First Search (BFS) algorithm to traverse the graph starting from a specified vertex and print the visited nodes in BFS order.",
  },
  {
    week: 11,
    title: "Hashing and Hash Tables",
    focus:
      "Concept of hashing. Hash functions. Collision resolution techniques. Introduction to hash tables and their applications.",
    outcomes: "Understand hashing & hash tables.",
    project: "Implement Hash Table",
    projectDescription:
      "Students will implement a basic hash table. This includes choosing a simple hash function (e.g., modulo operator) and implementing a collision resolution strategy, such as separate chaining (using linked lists for buckets), to handle hash collisions.",
  },
  {
    week: 12,
    title: "Algorithmic Problem Solving and Review",
    focus:
      "Solving a variety of algorithmic problems (e.g., from platforms like LeetCode, HackerRank). Review of key concepts and preparation for AP CS/college.",
    outcomes: "Practice algorithmic problem-solving.",
    project: "Solve Algorithmic Problems",
    projectDescription:
      "Students will select 2-3 algorithmic problems of easy to medium difficulty from online platforms like LeetCode, HackerRank, or similar. They will work on solving these problems, applying the data structures and algorithms learned throughout the course, and aim to submit correct solutions.",
  },
];

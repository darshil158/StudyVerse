import { SUBJECTS } from './subjects.js';

// Pre-defined unit blueprints covering key computer engineering subjects
const SPECIFIC_SYLLABUS = {
  'sub-3140702': [ // Operating System
    {
      unitNumber: 1,
      title: 'Introduction to Operating Systems & System Structures',
      hours: 6,
      weightage: 15,
      topics: ['What is an Operating System?', 'Computer-System Organization & Architecture', 'Operating-System Operations and Dual-Mode Execution', 'System Calls, Types of System Calls, and System Programs', 'OS Structure: Monolithic, Layered, Microkernel, and Hybrid approaches']
    },
    {
      unitNumber: 2,
      title: 'Processes, Threads & CPU Scheduling',
      hours: 10,
      weightage: 22,
      topics: ['Process Concept, Process Control Block (PCB), Context Switching', 'Operations on Processes (fork, exec, wait, exit)', 'Interprocess Communication (Pipes, Shared Memory, Message Passing)', 'Multithreading Models & Thread Libraries', 'CPU Scheduling Criteria and Algorithms (FCFS, SJF, SRTF, Priority, Round Robin, Multi-level Queue)']
    },
    {
      unitNumber: 3,
      title: 'Synchronization & Deadlocks',
      hours: 10,
      weightage: 22,
      topics: ['The Critical-Section Problem & Peterson’s Solution', 'Synchronization Hardware & Atomic Instructions', 'Mutex Locks, Semaphores (Counting and Binary), and Monitors', 'Classic Problems of Synchronization (Producer-Consumer, Readers-Writers, Dining Philosophers)', 'Deadlock Characterization, Prevention, Avoidance (Banker’s Algorithm), Detection and Recovery']
    },
    {
      unitNumber: 4,
      title: 'Memory Management & Virtual Memory',
      hours: 10,
      weightage: 23,
      topics: ['Logical vs Physical Address Space, Swapping', 'Contiguous Memory Allocation, Fragmentation (Internal & External)', 'Paging Hardware, Page Tables, TLB Translation Lookaside Buffer', 'Segmentation Architecture', 'Demand Paging, Page Fault Handling, Page Replacement Algorithms (FIFO, LRU, Optimal), Thrashing']
    },
    {
      unitNumber: 5,
      title: 'Storage Management, File Systems & I/O Systems',
      hours: 8,
      weightage: 18,
      topics: ['File Concept, Access Methods, Directory Structures', 'File-System Mounting, File Sharing, and Protection', 'File System Implementation, Allocation Methods (Contiguous, Linked, Indexed)', 'Free-Space Management (Bit Vector, Linked List)', 'Disk Structure, Disk Scheduling (FCFS, SSTF, SCAN, C-SCAN), RAID levels']
    }
  ],
  'sub-3150703': [ // Analysis and Design of Algorithms (ADA)
    {
      unitNumber: 1,
      title: 'Algorithm Analysis & Mathematical Foundations',
      hours: 6,
      weightage: 15,
      topics: ['Algorithm Definition and Performance Characteristics', 'Space and Time Complexity Analysis', 'Asymptotic Notations (Big-O, Omega, Theta, Little-o, Little-omega)', 'Solving Recurrence Relations: Substitution, Recursion Tree, and Master Theorem', 'Amortized Analysis Introduction']
    },
    {
      unitNumber: 2,
      title: 'Divide-and-Conquer & Greedy Strategies',
      hours: 10,
      weightage: 22,
      topics: ['Divide and Conquer Design: Binary Search, Merge Sort, Quick Sort analysis', 'Strassen’s Matrix Multiplication Algorithm', 'Greedy Technique Principles and Optimal Substructure', 'Fractional Knapsack Problem, Job Sequencing with Deadlines', 'Minimum Spanning Trees: Kruskal’s and Prim’s Algorithms', 'Huffman Coding for Data Compression']
    },
    {
      unitNumber: 3,
      title: 'Dynamic Programming',
      hours: 10,
      weightage: 25,
      topics: ['Elements of Dynamic Programming: Memoization vs Tabulation', 'Matrix Chain Multiplication Problem', 'Longest Common Subsequence (LCS) and Edit Distance', '0/1 Knapsack Problem and Subset Sum Problem', 'All-Pairs Shortest Paths: Floyd-Warshall Algorithm', 'Bellman-Ford Single Source Shortest Path Algorithm']
    },
    {
      unitNumber: 4,
      title: 'Exploring State Space: Backtracking & Branch and Bound',
      hours: 8,
      weightage: 20,
      topics: ['Backtracking Concept: State Space Tree Traversal', 'The N-Queens Problem (4-Queens & 8-Queens formulation)', 'Sum of Subsets and Graph Coloring Problems', 'Hamiltonian Cycles', 'Branch and Bound Design: FIFO and Least-Cost Branch and Bound', 'Traveling Salesperson Problem (TSP) using LCBB']
    },
    {
      unitNumber: 5,
      title: 'Complexity Classes & String Algorithms',
      hours: 8,
      weightage: 18,
      topics: ['String Matching Algorithms: Naive, Rabin-Karp, and Knuth-Morris-Pratt (KMP)', 'Deterministic vs Non-deterministic polynomial time algorithms', 'P, NP, NP-Hard, and NP-Complete Classes', 'Polynomial Reductions: Satisfiability (SAT) to 3-SAT', 'Cook’s Theorem Overview and NP-Completeness Proofs']
    }
  ],
  'sub-3130702': [ // Data Structures
    {
      unitNumber: 1,
      title: 'Introduction, Stacks & Queues',
      hours: 8,
      weightage: 20,
      topics: ['Data Types, Abstract Data Types (ADT), Big-O basics', 'Stack ADT: Array Implementation, Push, Pop, Peep, Change operations', 'Stack Applications: Infix to Postfix/Prefix conversion, Postfix evaluation', 'Queue ADT: Simple Queue, Circular Queue, and Priority Queue', 'Double Ended Queue (Deque) operations and applications']
    },
    {
      unitNumber: 2,
      title: 'Linked Lists',
      hours: 10,
      weightage: 22,
      topics: ['Dynamic Memory Allocation in C (malloc, calloc, realloc, free)', 'Singly Linked List: Insertion, Deletion, Searching, and Reversal', 'Circular Singly Linked List operations', 'Doubly Linked List and Circular Doubly Linked List', 'Polynomial Representation and Addition using Linked Lists', 'Linked implementation of Stacks and Queues']
    },
    {
      unitNumber: 3,
      title: 'Trees & Binary Search Trees',
      hours: 10,
      weightage: 22,
      topics: ['Tree Terminology: Root, Node, Degree, Height, Depth', 'Binary Trees: Full, Complete, and Extended Binary Trees', 'Binary Tree Traversals: Inorder, Preorder, Postorder, and Level Order', 'Binary Search Tree (BST): Creation, Search, Insertion, and Deletion', 'AVL Trees: Rotations (LL, RR, LR, RL) and Balance Factors', 'Threaded Binary Trees and B-Trees overview']
    },
    {
      unitNumber: 4,
      title: 'Graphs & Hashing',
      hours: 8,
      weightage: 18,
      topics: ['Graph Definitions: Directed, Undirected, Weighted graphs, Cycles', 'Graph Representations: Adjacency Matrix and Adjacency Lists', 'Graph Traversals: Breadth First Search (BFS) and Depth First Search (DFS)', 'Hashing: Hash Functions, Division, Mid-square, Folding methods', 'Collision Resolution Strategies: Linear Probing, Quadratic Probing, Double Hashing, Chaining']
    },
    {
      unitNumber: 5,
      title: 'Searching & Sorting Techniques',
      hours: 8,
      weightage: 18,
      topics: ['Linear Search and Binary Search with complexity comparison', 'Bubble Sort, Selection Sort, and Insertion Sort', 'Shell Sort and Radix Sort', 'Quick Sort and Merge Sort recursive procedures', 'Heap Sort using Max Heap and Min Heap building']
    }
  ],
  'sub-3130703': [ // Database Management Systems
    {
      unitNumber: 1,
      title: 'Database Architecture & ER Modeling',
      hours: 8,
      weightage: 20,
      topics: ['Purpose of Database Systems vs File Systems', 'View of Data: Data Abstraction, Instances and Schemas', 'Three-Schema Architecture and Data Independence', 'Data Models: Relational, Network, Hierarchical, Object-Oriented', 'Entity-Relationship (ER) Modeling: Entities, Attributes, Relationships, Keys', 'Extended ER (EER) Features: Specialization, Generalization, Aggregation']
    },
    {
      unitNumber: 2,
      title: 'Relational Model, Formal Languages & SQL',
      hours: 10,
      weightage: 24,
      topics: ['Relational Model Concepts: Domains, Tuples, Relations, Integrity Constraints', 'Relational Algebra: Select, Project, Rename, Cartesian Product, Join, Division', 'Tuple Relational Calculus and Domain Relational Calculus', 'SQL DDL, DML, DCL, and TCL commands', 'Complex SQL Queries: Nested Subqueries, Correlated Queries, Aggregate Functions', 'Views, Triggers, Assertions, and Stored Procedures in SQL']
    },
    {
      unitNumber: 3,
      title: 'Relational Database Design & Normalization',
      hours: 10,
      weightage: 24,
      topics: ['Informal Design Guidelines for Relation Schemas', 'Functional Dependencies (FDs): Definition, Trivial vs Non-trivial', 'Armstrong’s Axioms and Closure of Attribute Sets', 'Lossless-Join Decomposition and Dependency Preservation', 'Normal Forms based on Primary Keys: 1NF, 2NF, 3NF', 'Boyce-Codd Normal Form (BCNF) and multi-valued dependencies (4NF)']
    },
    {
      unitNumber: 4,
      title: 'Transaction Processing & Concurrency Control',
      hours: 10,
      weightage: 20,
      topics: ['Transaction Concept and ACID Properties', 'Transaction States and Concurrent Executions', 'Serializability: Conflict Serializability and View Serializability', 'Testing for Serializability: Precedence Graphs', 'Concurrency Control Protocols: Lock-Based Protocols, Two-Phase Locking (2PL)', 'Deadlock Handling: Wait-Die, Wound-Wait, Detection and Recovery']
    },
    {
      unitNumber: 5,
      title: 'Storage, Indexing & Query Processing',
      hours: 6,
      weightage: 12,
      topics: ['File Organization: Heap, Sorted, Hashed file organizations', 'Indexing Concepts: Dense, Sparse, Primary, Secondary, Clustering Indexes', 'Tree-Structured Indexing: B-Trees and B+ Trees structures and search', 'Query Processing Steps: Parsing, Optimization, and Evaluation', 'Database Recovery Techniques: Immediate and Deferred update']
    }
  ],
  'sub-3150710': [ // Computer Networks
    {
      unitNumber: 1,
      title: 'Physical & Data Link Layers',
      hours: 8,
      weightage: 20,
      topics: ['Network hardware, topologies, OSI and TCP/IP reference models', 'Transmission media: Guided and unguided media characteristics', 'Framing methods, Error detection and correction (Parity, CRC, Hamming code)', 'Elementary data link protocols: Simplex, Stop-and-Wait', 'Sliding window protocols: Go-Back-N, Selective Repeat']
    },
    {
      unitNumber: 2,
      title: 'Medium Access Sublayer & Local Area Networks',
      hours: 8,
      weightage: 20,
      topics: ['Channel allocation problem, Multiple access protocols: ALOHA, CSMA, CSMA/CD', 'Collision-free protocols and limited contention protocols', 'Ethernet: Standard Ethernet, Fast Ethernet, Gigabit Ethernet cabling', 'Wireless LANs: IEEE 802.11 architecture, MAC sublayer, frame structure', 'Data link layer switching: Bridges, Spanning Tree Protocol, VLANs']
    },
    {
      unitNumber: 3,
      title: 'Network Layer & Routing Protocols',
      hours: 10,
      weightage: 25,
      topics: ['Network layer design issues, Virtual circuits and Datagram subnets', 'Routing algorithms: Shortest Path, Flooding, Distance Vector (RIP), Link State (OSPF)', 'Congestion control algorithms: Token Bucket and Leaky Bucket algorithms', 'IPv4 Addressing, Subnetting, Supernetting, CIDR prefix matching', 'Internet Protocol IPv4 header format, IPv6 advantages and format, NAT']
    },
    {
      unitNumber: 4,
      title: 'Transport Layer Protocols & Congestion Management',
      hours: 10,
      weightage: 23,
      topics: ['Transport service primitives, Sockets and port numbers', 'User Datagram Protocol (UDP): Segment structure and applications', 'Transmission Control Protocol (TCP): Connection establishment (3-way handshake)', 'TCP Connection release, TCP transmission policy, TCP timer management', 'TCP Congestion Control: AIMD, Slow Start, Congestion Avoidance, Fast Retransmit']
    },
    {
      unitNumber: 5,
      title: 'Application Layer Services & Network Security',
      hours: 6,
      weightage: 12,
      topics: ['Domain Name System (DNS): Hierarchical namespace, Resource records, Resolvers', 'Hypertext Transfer Protocol: HTTP/1.1 vs HTTP/2, Persistent connections, Cookies', 'Electronic Mail: SMTP, POP3, IMAP, MIME message format', 'File Transfer Protocol (FTP) control and data connections', 'Network Security basics: Firewalls, Symmetric vs Asymmetric cryptography, SSL/TLS']
    }
  ],
  'sub-3160704': [ // Theory of Computation
    {
      unitNumber: 1,
      title: 'Automata Theory & Regular Languages',
      hours: 8,
      weightage: 22,
      topics: ['Alphabets, strings, languages, operations on languages', 'Deterministic Finite Automata (DFA): Formal definition, transition graphs', 'Non-Deterministic Finite Automata (NFA), NFA with epsilon transitions', 'Equivalence of NFA and DFA, Subset construction algorithm', 'Minimization of DFA: Table-filling algorithm and equivalence partitioning']
    },
    {
      unitNumber: 2,
      title: 'Regular Expressions & Pumping Lemma',
      hours: 8,
      weightage: 20,
      topics: ['Regular expressions operators and identities, Arden’s Theorem', 'Equivalence of regular expressions and finite automata', 'Pumping Lemma for regular languages and proof of non-regularity', 'Closure properties of regular languages (Union, Intersection, Complement)', 'Decision properties of regular languages']
    },
    {
      unitNumber: 3,
      title: 'Context-Free Grammars & Pushdown Automata',
      hours: 10,
      weightage: 24,
      topics: ['Context-Free Grammars (CFG) definition, derivations, parse trees', 'Ambiguity in grammars and elimination of ambiguity', 'Simplification of CFG: Eliminating useless symbols, unit, and null productions', 'Normal Forms: Chomsky Normal Form (CNF) and Greibach Normal Form (GNF)', 'Pushdown Automata (PDA): Formal definition, acceptance by final state and empty stack', 'Equivalence of PDA and CFG, Deterministic Pushdown Automata (DPDA)']
    },
    {
      unitNumber: 4,
      title: 'Context-Free Languages & Turing Machines',
      hours: 10,
      weightage: 22,
      topics: ['Pumping Lemma for Context-Free Languages and applications', 'Closure properties of context-free languages', 'Turing Machine (TM) model, formal definition, instantaneous descriptions', 'Design of Turing Machines for language recognition and function computation', 'Modifications of Turing Machines: Multi-tape, Non-deterministic TM']
    },
    {
      unitNumber: 5,
      title: 'Chomsky Hierarchy & Computability',
      hours: 6,
      weightage: 12,
      topics: ['Chomsky Hierarchy: Regular, CFL, Context-Sensitive, and Recursively Enumerable', 'Universal Turing Machine concept', 'Decidability and Undecidability: Halting Problem of Turing Machines', 'Post Correspondence Problem (PCP)', 'Reducibility and Rice’s Theorem overview']
    }
  ]
};

export const SYLLABUS_UNITS = SUBJECTS.flatMap((subject) => {
  if (SPECIFIC_SYLLABUS[subject.id]) {
    return SPECIFIC_SYLLABUS[subject.id].map((unit) => ({
      id: `syl-${subject.code}-${unit.unitNumber}`,
      subjectId: subject.id,
      unitNumber: unit.unitNumber,
      title: unit.title,
      hours: unit.hours,
      weightage: unit.weightage,
      topics: unit.topics
    }));
  }

  // Synthesize realistic GTU academic units
  const unitsData = [
    {
      unitNumber: 1,
      title: `Introduction to ${subject.name} & Theoretical Principles`,
      hours: 8,
      weightage: 20,
      topics: [
        `Fundamental concepts, history, and scope of ${subject.name}`,
        'Core architectural definitions and terminology',
        'Mathematical and empirical foundations',
        'Industry standards and operational models',
        'Initial tools, environments, and setup procedures'
      ]
    },
    {
      unitNumber: 2,
      title: `Core Methodologies & Architecture of ${subject.shortName}`,
      hours: 10,
      weightage: 25,
      topics: [
        'Detailed structural design and component decomposition',
        'Key operational workflows and data flow pipelines',
        'Control mechanisms, optimization strategies, and standard algorithms',
        'Comparative trade-offs in modern computing environments',
        'Safety, reliability, and precision criteria'
      ]
    },
    {
      unitNumber: 3,
      title: `Analytical Algorithms & Implementation Models`,
      hours: 10,
      weightage: 25,
      topics: [
        'Advanced state analysis, models, and transformations',
        'Algorithm formulation and computational efficiency',
        'Integration with system peripherals and secondary modules',
        'Edge cases, fault tolerance, and error handling regimes',
        'Practical coding and simulation exercises'
      ]
    },
    {
      unitNumber: 4,
      title: `Applied Frameworks, Protocols & Security`,
      hours: 8,
      weightage: 18,
      topics: [
        'Enterprise frameworks and contemporary tooling ecosystems',
        'Security considerations, vulnerability vectors, and mitigation',
        'Real-time processing constraints and latency optimization',
        'Interoperability with distributed software frameworks',
        'Evaluation benchmarks and testing methodologies'
      ]
    },
    {
      unitNumber: 5,
      title: `Advanced Frontiers & Emerging Applications`,
      hours: 6,
      weightage: 12,
      topics: [
        'Recent innovations, industry case studies, and modern standards',
        'Scalability challenges in hyper-scale architectures',
        'Research trends and open research challenges',
        'Capstone implementation guidelines for GTU laboratories'
      ]
    }
  ];

  return unitsData.map((unit) => ({
    id: `syl-${subject.code}-${unit.unitNumber}`,
    subjectId: subject.id,
    unitNumber: unit.unitNumber,
    title: unit.title,
    hours: unit.hours,
    weightage: unit.weightage,
    topics: unit.topics
  }));
});

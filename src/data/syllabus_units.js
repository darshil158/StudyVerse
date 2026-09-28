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
  'sub-3140701': [ // Design and Analysis of Algorithms
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
      weightage: 18,
      topics: ['Database System vs File System, Data Independence', 'Three-Schema Architecture and Data Models', 'Entity, Attributes, Entity Sets, Relationship Sets, Degree and Cardinality', 'Entity-Relationship (ER) Diagrams and Enhanced ER (EER) modeling', 'Mapping ER Diagrams to Relational Tables']
    },
    {
      unitNumber: 2,
      title: 'Relational Model & Relational Algebra',
      hours: 8,
      weightage: 18,
      topics: ['Relational Model Concepts, Keys (Primary, Candidate, Foreign, Super Key)', 'Integrity Constraints: Domain, Entity Integrity, Referential Integrity', 'Fundamental Relational Algebra Operations: Select, Project, Union, Set Difference, Cartesian Product, Rename', 'Additional Operations: Set Intersection, Natural Join, Outer Joins, Division', 'Tuple Relational Calculus and Domain Relational Calculus']
    },
    {
      unitNumber: 3,
      title: 'Structured Query Language (SQL)',
      hours: 10,
      weightage: 24,
      topics: ['Data Definition Language (DDL): CREATE, ALTER, DROP, TRUNCATE', 'Data Manipulation Language (DML): INSERT, UPDATE, DELETE, SELECT', 'Aggregate Functions (COUNT, SUM, AVG, MIN, MAX) and GROUP BY / HAVING', 'Complex Joins (INNER, LEFT, RIGHT, FULL OUTER, CROSS)', 'Nested Subqueries and Correlated Subqueries', 'Views, Indexes, Sequences, and SQL Triggers']
    },
    {
      unitNumber: 4,
      title: 'Relational Database Design & Normalization',
      hours: 10,
      weightage: 22,
      topics: ['Pitfalls in Relational Database Design and Redundancy', 'Functional Dependencies (FD), Closure of FDs and Attribute Closure', 'Armstrong’s Axioms for Functional Dependencies', 'Canonical Cover and Minimal Cover of FDs', 'Normal Forms: First Normal Form (1NF), 2NF, 3NF, and Boyce-Codd Normal Form (BCNF)', 'Lossless-Join Decomposition and Dependency Preservation']
    },
    {
      unitNumber: 5,
      title: 'Transactions, Concurrency Control & Recovery',
      hours: 8,
      weightage: 18,
      topics: ['Transaction Concept, State Diagram, and ACID Properties', 'Concurrent Executions and Serializability (Conflict & View Serializability)', 'Recoverability: Recoverable and Cascadeless Schedules', 'Concurrency Control Protocols: Lock-Based Protocols (2-Phase Locking Protocol)', 'Deadlock Handling: Wait-Die, Wound-Wait, Detection & Recovery', 'Log-Based Recovery: Immediate and Deferred Database Modification, Checkpoints']
    }
  ],
  'sub-3150710': [ // Computer Networks
    {
      unitNumber: 1,
      title: 'Physical Layer & Network Models',
      hours: 8,
      weightage: 18,
      topics: ['Data Communication Components, Topologies (Mesh, Star, Bus, Ring)', 'Transmission Media: Twisted Pair, Coaxial Cable, Fiber Optics, Wireless', 'OSI Reference Model (7 Layers) and Functions of Each Layer', 'TCP/IP Protocol Suite (4 Layers) and Comparison with OSI', 'Physical Layer Switching: Packet Switching vs Circuit Switching']
    },
    {
      unitNumber: 2,
      title: 'Data Link Layer & MAC Sublayer',
      hours: 10,
      weightage: 22,
      topics: ['Data Link Layer Design Issues, Framing Methods (Character/Bit Stuffing)', 'Error Detection and Correction: Parity, Checksum, and Cyclic Redundancy Check (CRC)', 'Elementary Data Link Protocols: Simplex, Stop-and-Wait', 'Sliding Window Protocols: Go-Back-N and Selective Repeat ARQ', 'Medium Access Control (MAC): Pure ALOHA, Slotted ALOHA, CSMA, CSMA/CD, CSMA/CA', 'IEEE 802.3 Ethernet Standards and Frame Format']
    },
    {
      unitNumber: 3,
      title: 'Network Layer & Routing Protocols',
      hours: 10,
      weightage: 24,
      topics: ['IPv4 Addressing: Classful Addressing and Classless Inter-Domain Routing (CIDR)', 'Subnetting, Supernetting, and Subnet Mask Calculations', 'IPv4 Header Format, Fragmentation, and Reassembly', 'Address Resolution Protocol (ARP) and Dynamic Host Configuration Protocol (DHCP)', 'Routing Algorithms: Distance Vector (Bellman-Ford) and Count-to-Infinity Problem', 'Link State Routing (Dijkstra) and OSPF, BGP routing concepts', 'IPv6 Addressing, Header format, and Transition from IPv4']
    },
    {
      unitNumber: 4,
      title: 'Transport Layer Protocols',
      hours: 8,
      weightage: 20,
      topics: ['Transport Layer Services, Port Numbers, Socket Addressing', 'User Datagram Protocol (UDP): Datagram format and applications', 'Transmission Control Protocol (TCP): Segment Header and Connection Management (3-Way Handshake)', 'TCP Reliable Data Transfer, Sequence & Acknowledgment numbering', 'TCP Flow Control (Sliding Window) and Silly Window Syndrome', 'TCP Congestion Control: Slow Start, Congestion Avoidance, Fast Retransmit, Fast Recovery']
    },
    {
      unitNumber: 5,
      title: 'Application Layer & Network Security',
      hours: 6,
      weightage: 16,
      topics: ['Domain Name System (DNS): Hierarchical Name Space, DNS Records, and Resolution', 'Hypertext Transfer Protocol: HTTP/1.1, HTTP/2, Persistent Connections, and HTTPS', 'File Transfer Protocol (FTP) and Email Protocols (SMTP, POP3, IMAP)', 'Basics of Cryptography: Symmetric vs Asymmetric encryption', 'Firewalls: Packet Filters, Stateful Inspection, and Application Gateways']
    }
  ]
};

// Generate standard rich 4-5 units for all 48 subjects
export const SYLLABUS_UNITS = SUBJECTS.flatMap((subject) => {
  if (SPECIFIC_SYLLABUS[subject.id]) {
    return SPECIFIC_SYLLABUS[subject.id].map((unit, idx) => ({
      id: `syl-${subject.code}-${idx + 1}`,
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

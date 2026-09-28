export const SUBJECTS = [
  // ==========================================
  // SEMESTER 1 (6 subjects)
  // ==========================================
  {
    id: 'sub-3110014',
    code: '3110014',
    name: 'Mathematics - I',
    shortName: 'Maths-1',
    semesterId: 1,
    categoryId: 'cat-bs',
    credits: 4,
    description: 'Differential calculus, indeterminate forms, improper integrals, matrices, rank of matrix, and eigenvalues.',
    importantTopics: [
      'Rolle’s Theorem, Cauchy and Lagrange Mean Value Theorems',
      'Indeterminate forms and L’Hospital’s Rule',
      'Matrices: Rank, Echelon form, and Cayley-Hamilton Theorem',
      'Eigenvalues and Eigenvectors with diagonalisation',
      'Beta and Gamma functions with evaluation of integrals',
      'Fourier Series for periodic waveforms'
    ],
    relatedSubjectIds: ['sub-3110015', 'sub-3130006']
  },
  {
    id: 'sub-3110018',
    code: '3110018',
    name: 'Physics',
    shortName: 'Physics',
    semesterId: 1,
    categoryId: 'cat-bs',
    credits: 4,
    description: 'Optics, interference, diffraction, lasers, fiber optics, quantum mechanics, and magnetic materials.',
    importantTopics: [
      'Interference in thin films and Newton’s rings apparatus',
      'Fraunhofer diffraction at single and double slits',
      'Laser principles: Population inversion, Ruby & He-Ne lasers',
      'Fiber optics: Numerical aperture and acceptance angle',
      'De-Broglie wavelength & Schrodinger’s wave equation',
      'Superconductivity and Meissner effect'
    ],
    relatedSubjectIds: ['sub-3110016', 'sub-3130704']
  },
  {
    id: 'sub-3110005',
    code: '3110005',
    name: 'Basic Electrical Engineering',
    shortName: 'BEE',
    semesterId: 1,
    categoryId: 'cat-es',
    credits: 4,
    description: 'DC circuits analysis, AC circuits, magnetic circuits, single-phase transformers, and electrical safety.',
    importantTopics: [
      'Mesh and Nodal analysis with Kirchhoff laws',
      'Thevenin, Norton, and Superposition theorems',
      'AC series and parallel RLC resonance circuits',
      'Three-phase balanced star and delta connections',
      'Transformer equivalent circuit, losses, and efficiency',
      'Earthing methods and MCB working principles'
    ],
    relatedSubjectIds: ['sub-3110016', 'sub-3130704']
  },
  {
    id: 'sub-3110003',
    code: '3110003',
    name: 'Programming for Problem Solving',
    shortName: 'PPS',
    semesterId: 1,
    categoryId: 'cat-es',
    credits: 4,
    description: 'Foundational programming in C: control structures, arrays, pointers, functions, structures, and file I/O.',
    importantTopics: [
      'Algorithms, flowcharts, and operator precedence',
      'Control statements (nested if-else, switch-case, while, for loops)',
      '1D and 2D arrays, string manipulation functions',
      'Recursion and call by value vs call by reference',
      'Pointer arithmetic, dynamic memory allocation (malloc, calloc, free)',
      'Structures, unions, and file pointers with fread/fwrite'
    ],
    relatedSubjectIds: ['sub-3130702', 'sub-3130705', 'sub-3140705']
  },
  {
    id: 'sub-3110013',
    code: '3110013',
    name: 'Engineering Graphics & Design',
    shortName: 'EGD',
    semesterId: 1,
    categoryId: 'cat-es',
    credits: 3,
    description: 'Engineering curves, projection of points, lines, planes, solids, section of solids, isometric drawings, and CAD.',
    importantTopics: [
      'Conic sections: Ellipse, Parabola, and Involutes of polygons',
      'Projection of straight lines inclined to both reference planes',
      'Projections of planes (polygons, circles) with auxiliary planes',
      'Projections of regular solids (prisms, pyramids, cones, cylinders)',
      'Orthographic to Isometric view conversions',
      'Computer-Aided Drafting (CAD) primitive commands'
    ],
    relatedSubjectIds: ['sub-3110006', 'sub-3110012']
  },
  {
    id: 'sub-3110007',
    code: '3110007',
    name: 'Environmental Science',
    shortName: 'ES',
    semesterId: 1,
    categoryId: 'cat-hss',
    credits: 2,
    description: 'Ecology, ecosystems, renewable and non-renewable energy, environmental pollution, solid waste, and green engineering.',
    importantTopics: [
      'Ecosystem structure, food chains, webs, and ecological pyramids',
      'Air and water pollution: Causes, parameters (BOD, COD), control',
      'Solid waste management and recycling techniques',
      'Global warming, greenhouse gases, and ozone depletion',
      'Renewable energy sources: Solar photovoltaics and wind turbines',
      'Environmental Protection Acts and green auditing'
    ],
    relatedSubjectIds: ['sub-3140709', 'sub-3150005']
  },

  // ==========================================
  // SEMESTER 2 (6 subjects)
  // ==========================================
  {
    id: 'sub-3110015',
    code: '3110015',
    name: 'Mathematics - II',
    shortName: 'Maths-2',
    semesterId: 2,
    categoryId: 'cat-bs',
    credits: 4,
    description: 'Vector calculus, gradient, divergence, curl, multiple integrals, Green and Stokes theorems, first and higher order ODEs.',
    importantTopics: [
      'Directional derivative, gradient vector, divergence, and curl',
      'Double and triple integrals with change of variables to polar',
      'Green’s, Stokes’, and Gauss Divergence theorems',
      'First order ODE: Exact equations and integrating factors',
      'Higher order linear differential equations with constant coefficients',
      'Method of variation of parameters for 2nd order ODEs'
    ],
    relatedSubjectIds: ['sub-3110014', 'sub-3130006', 'sub-3140708']
  },
  {
    id: 'sub-3110006',
    code: '3110006',
    name: 'Basic Mechanical Engineering',
    shortName: 'BME',
    semesterId: 2,
    categoryId: 'cat-es',
    credits: 4,
    description: 'Thermodynamics laws, steam generation, internal combustion engines, pumps, compressors, and power transmission.',
    importantTopics: [
      'Zeroth, First, and Second laws of thermodynamics with Carnot cycle',
      'Steam boilers: Cochran, Babcock & Wilcox construction',
      'Otto and Diesel thermodynamic cycles with PV and TS diagrams',
      '2-stroke and 4-stroke petrol and diesel engine comparisons',
      'Centrifugal and reciprocating pumps and air compressors',
      'Belt drives, gear trains, and clutch mechanisms'
    ],
    relatedSubjectIds: ['sub-3110013', 'sub-3110012']
  },
  {
    id: 'sub-3110016',
    code: '3110016',
    name: 'Basic Electronics',
    shortName: 'BE',
    semesterId: 2,
    categoryId: 'cat-es',
    credits: 4,
    description: 'Semiconductor diodes, rectifiers, BJT biasing and configurations, operational amplifiers, and boolean logic gates.',
    importantTopics: [
      'PN junction diode characteristics and Zener diode voltage regulation',
      'Half-wave and full-wave bridge rectifiers with capacitor filters',
      'BJT CB, CE, and CC transistor characteristics and load line',
      'Operational Amplifier (Op-Amp 741) inverting and non-inverting configs',
      'Op-Amp applications: Adder, subtractor, integrator, differentiator',
      'Basic and universal logic gates (NAND, NOR implementation)'
    ],
    relatedSubjectIds: ['sub-3110005', 'sub-3130704', 'sub-3140707']
  },
  {
    id: 'sub-3110002',
    code: '3110002',
    name: 'English for Communication',
    shortName: 'English',
    semesterId: 2,
    categoryId: 'cat-hss',
    credits: 2,
    description: 'Vocabulary enrichment, technical reporting, formal business correspondence, presentation skills, and phonetics.',
    importantTopics: [
      'Grammar mechanics, subject-verb agreement, and active/passive voice',
      'Technical report writing structure and feasibility reports',
      'Formal email etiquette and business resume writing',
      'Group discussions (GD) dynamics and interview strategies',
      'Presentation delivery, kinesics, and body language',
      'Reading comprehension and précis composition'
    ],
    relatedSubjectIds: ['sub-3130004', 'sub-3150005']
  },
  {
    id: 'sub-3110012',
    code: '3110012',
    name: 'Workshop / Manufacturing Practices',
    shortName: 'WMP',
    semesterId: 2,
    categoryId: 'cat-es',
    credits: 3,
    description: 'Fitting shop, carpentry, tin smithy, arc and gas welding, machining operations, and safety standards.',
    importantTopics: [
      'Carpentry tools, timber seasoning, and mortise & tenon joints',
      'Fitting tools, hacksaw, files, and V-groove fitting jobs',
      'Arc welding equipment, electrodes, and safety precautions',
      'Sheet metal forming, folding, and soldering seams',
      'Lathe machine anatomy, turning, facing, and knurling operations',
      'Additive manufacturing and 3D printing introduction'
    ],
    relatedSubjectIds: ['sub-3110013', 'sub-3110006']
  },
  {
    id: 'sub-3110001',
    code: '3110001',
    name: 'Applied Chemistry',
    shortName: 'Chem',
    semesterId: 2,
    categoryId: 'cat-bs',
    credits: 4,
    description: 'Water technology, polymers, fuels, combustion, corrosion mechanisms, and nanomaterials for engineering.',
    importantTopics: [
      'Water hardness estimation by EDTA method, zeolite and demineralisation',
      'Polymer synthesis: Thermosets vs thermoplastics, bakelite, nylon',
      'Proximate and ultimate analysis of coal fuels',
      'Electrochemical corrosion theory, pitting, and cathodic protection',
      'Battery technologies: Lithium-ion and fuel cells',
      'Carbon nanotubes (CNTs) and quantum dots synthesis'
    ],
    relatedSubjectIds: ['sub-3110007', 'sub-3110018']
  },

  // ==========================================
  // SEMESTER 3 (6 subjects)
  // ==========================================
  {
    id: 'sub-3130006',
    code: '3130006',
    name: 'Probability and Statistics',
    shortName: 'P&S',
    semesterId: 3,
    categoryId: 'cat-bs',
    credits: 4,
    description: 'Random variables, probability distributions, sampling theory, hypothesis testing, ANOVA, and linear regression.',
    importantTopics: [
      'Conditional probability and Bayes Theorem applications',
      'Discrete distributions: Binomial and Poisson distributions',
      'Continuous distributions: Normal, Exponential, and Uniform',
      'Hypothesis testing: Large sample z-tests and Student’s t-test',
      'Chi-Square goodness of fit test and contingency tables',
      'Linear regression, Pearson correlation, and ANOVA F-tests'
    ],
    relatedSubjectIds: ['sub-3140708', 'sub-3170716', 'sub-3180701']
  },
  {
    id: 'sub-3130702',
    code: '3130702',
    name: 'Data Structures',
    shortName: 'DS',
    semesterId: 3,
    categoryId: 'cat-core',
    credits: 4,
    description: 'Arrays, stacks, queues, linked lists, binary trees, AVL trees, graphs, sorting, searching, and hashing algorithms.',
    importantTopics: [
      'Stack applications: Infix to Postfix conversion and evaluation',
      'Circular queue and Double Ended Queue (Deque) implementations',
      'Singly, doubly, and circular linked lists with pointer manipulation',
      'Binary Search Trees (BST) insertion, deletion, and tree traversals',
      'AVL tree balancing rotations (LL, RR, LR, RL)',
      'Graph representations: Adjacency matrix, BFS, and DFS',
      'Sorting: Quick sort, Merge sort, Heap sort, and Collision hashing'
    ],
    relatedSubjectIds: ['sub-3110003', 'sub-3140701', 'sub-3160707']
  },
  {
    id: 'sub-3130704',
    code: '3130704',
    name: 'Digital Electronics & Logic Design',
    shortName: 'DELD',
    semesterId: 3,
    categoryId: 'cat-core',
    credits: 4,
    description: 'K-map minimization, combinational circuits, multiplexers, sequential circuits, flip-flops, registers, and counters.',
    importantTopics: [
      'Boolean algebra theorems and 4-variable Karnaugh Maps (K-maps)',
      'Design of Adders, Subtractors, and Look-Ahead Carry generators',
      'Multiplexers, Demultiplexers, Decoders, and Priority Encoders',
      'Flip-Flops: SR, JK, Master-Slave JK, D, and T flip-flop excitation tables',
      'Synchronous and Asynchronous up/down modulo counters',
      'Shift Registers (SISO, SIPO, PISO, PIPO) and State Machine minimization'
    ],
    relatedSubjectIds: ['sub-3110016', 'sub-3140707']
  },
  {
    id: 'sub-3130703',
    code: '3130703',
    name: 'Database Management Systems',
    shortName: 'DBMS',
    semesterId: 3,
    categoryId: 'cat-core',
    credits: 4,
    description: 'ER modeling, relational algebra, SQL DDL/DML, normalization (1NF to BCNF), transaction ACID properties, and indexing.',
    importantTopics: [
      'Entity-Relationship (ER) model and Extended ER diagrams',
      'Relational Algebra operations: Selection, Projection, Cartesian, Joins',
      'SQL Complex Queries: Subqueries, Joins, Group By, Having, and Triggers',
      'Functional dependencies and Normalization (1NF, 2NF, 3NF, BCNF)',
      'Transaction processing and ACID properties enforcement',
      'Concurrency control: 2-Phase Locking (2PL), Deadlocks, and Serializability',
      'B-Tree and B+ Tree indexing structures'
    ],
    relatedSubjectIds: ['sub-3130702', 'sub-3150709', 'sub-3170719']
  },
  {
    id: 'sub-3130705',
    code: '3130705',
    name: 'Object Oriented Programming with C++',
    shortName: 'OOP-C++',
    semesterId: 3,
    categoryId: 'cat-core',
    credits: 4,
    description: 'Classes, objects, constructors, destructors, operator overloading, inheritance, virtual functions, and templates.',
    importantTopics: [
      'Encapsulation, data abstraction, and static class members',
      'Parameterized constructors, copy constructors, and destructors',
      'Operator overloading for unary and binary operators via friend functions',
      'Inheritance models: Single, Multiple, Multilevel, and Virtual Base Class',
      'Runtime polymorphism, virtual functions, and pure virtual abstract classes',
      'C++ Standard Template Library (STL): Vectors, Maps, and Exception Handling'
    ],
    relatedSubjectIds: ['sub-3110003', 'sub-3130702', 'sub-3150703']
  },
  {
    id: 'sub-3130004',
    code: '3130004',
    name: 'Effective Technical Communication',
    shortName: 'ETC',
    semesterId: 3,
    categoryId: 'cat-hss',
    credits: 2,
    description: 'Technical proposals, project presentations, interpersonal dynamics, business ethics, and corporate negotiations.',
    importantTopics: [
      'Technical proposal design and Request For Proposal (RFP) response',
      'Engineers’ cross-cultural communication challenges',
      'Technical seminar presentation mechanics and executive summaries',
      'Negotiation dynamics and conflict resolution tactics in IT teams',
      'Corporate email communication etiquette and minutes of meetings (MoM)',
      'Professional engineering documentation formatting'
    ],
    relatedSubjectIds: ['sub-3110002', 'sub-3150005']
  },

  // ==========================================
  // SEMESTER 4 (6 subjects)
  // ==========================================
  {
    id: 'sub-3140708',
    code: '3140708',
    name: 'Discrete Mathematics & Graph Theory',
    shortName: 'DMGT',
    semesterId: 4,
    categoryId: 'cat-bs',
    credits: 4,
    description: 'Propositional logic, set relations, lattice theory, algebraic structures, groups, planar graphs, and graph coloring.',
    importantTopics: [
      'Propositional logic, truth tables, and predicate calculus quantifiers',
      'Equivalence relations, partial orders, Hasse diagrams, and lattices',
      'Algebraic systems: Semigroups, monoids, groups, and cyclic groups',
      'Recurrence relations: Characteristic roots and generating functions',
      'Graph isomorphism, Eulerian graphs, and Hamiltonian circuits',
      'Planar graphs, Euler’s formula, chromatic numbers, and tree traversals'
    ],
    relatedSubjectIds: ['sub-3130006', 'sub-3140701', 'sub-3150711']
  },
  {
    id: 'sub-3140702',
    code: '3140702',
    name: 'Operating System',
    shortName: 'OS',
    semesterId: 4,
    categoryId: 'cat-core',
    credits: 4,
    description: 'Process management, CPU scheduling, semaphores, deadlock detection/avoidance, virtual memory paging, and file systems.',
    importantTopics: [
      'Process states, PCB structure, context switching, and fork/exec system calls',
      'CPU Scheduling: FCFS, SJF, Round Robin, and Multi-level Queue algorithms',
      'Process synchronization: Critical Section Problem, Peterson’s solution, Semaphores',
      'Deadlock conditions, Resource Allocation Graphs, and Banker’s algorithm',
      'Virtual memory: Demand paging, Page replacement (FIFO, LRU, Optimal)',
      'Disk scheduling algorithms: FCFS, SSTF, SCAN, C-SCAN, and inode file architecture'
    ],
    relatedSubjectIds: ['sub-3130702', 'sub-3140707', 'sub-3150710']
  },
  {
    id: 'sub-3140707',
    code: '3140707',
    name: 'Computer Organization & Architecture',
    shortName: 'COA',
    semesterId: 4,
    categoryId: 'cat-core',
    credits: 4,
    description: 'Instruction sets, addressing modes, ALU design, Booth multiplication, pipeline hazards, cache mapping, and interrupt I/O.',
    importantTopics: [
      'Von Neumann vs Harvard architecture and bus arbitration',
      'Instruction cycle, addressing modes, and register transfer language (RTL)',
      'Booth’s multiplication algorithm and Restoring/Non-Restoring division',
      'Pipelining: Instruction pipeline throughput, structural, data & branch hazards',
      'Memory hierarchy: Direct, Associative, and Set-Associative cache mappings',
      'Programmed I/O, Interrupt-driven I/O, and Direct Memory Access (DMA) controllers'
    ],
    relatedSubjectIds: ['sub-3130704', 'sub-3140702', 'sub-3150710']
  },
  {
    id: 'sub-3140709',
    code: '3140709',
    name: 'Principles of Economics & Management',
    shortName: 'PEM',
    semesterId: 4,
    categoryId: 'cat-hss',
    credits: 3,
    description: 'Demand and supply elasticity, cost analysis, market structures, break-even analysis, financial statements, and planning.',
    importantTopics: [
      'Law of demand, elasticity of demand, and demand forecasting techniques',
      'Cost concepts: Fixed, variable, marginal cost curves, and Break-Even Analysis',
      'Market structures: Perfect competition, Monopoly, and Monopolistic competition',
      'Basics of Financial Accounting: Balance Sheet and Profit & Loss statements',
      'Functions of management: Planning, organizing, staffing, directing, controlling',
      'Corporate social responsibility and modern enterprise organization'
    ],
    relatedSubjectIds: ['sub-3110007', 'sub-3130004', 'sub-3150005']
  },
  {
    id: 'sub-3140701',
    code: '3140701',
    name: 'Design and Analysis of Algorithms',
    shortName: 'DAA',
    semesterId: 4,
    categoryId: 'cat-core',
    credits: 4,
    description: 'Asymptotic notations, divide and conquer, greedy methods, dynamic programming, backtracking, branch & bound, and NP-completeness.',
    importantTopics: [
      'Asymptotic notations (Big-O, Omega, Theta) and Master Theorem solving',
      'Divide & Conquer: Strassen’s matrix multiplication and Quick sort analysis',
      'Greedy Method: Fractional Knapsack, Huffman coding, Kruskal and Prim MST',
      'Dynamic Programming: 0/1 Knapsack, Matrix Chain Multiplication, LCS, Floyd-Warshall',
      'Backtracking: N-Queens problem, Graph Coloring, and Hamiltonian cycles',
      'Branch & Bound: 15-Puzzle and Traveling Salesperson Problem (TSP)',
      'P, NP, NP-Hard, and NP-Complete classes with reductions'
    ],
    relatedSubjectIds: ['sub-3130702', 'sub-3140708', 'sub-3150711', 'sub-3160707']
  },
  {
    id: 'sub-3140705',
    code: '3140705',
    name: 'Python Programming',
    shortName: 'Python',
    semesterId: 4,
    categoryId: 'cat-core',
    credits: 4,
    description: 'Data structures, list comprehensions, lambda functions, OOP in Python, file operations, NumPy, Pandas, and regular expressions.',
    importantTopics: [
      'Python data types: Lists, Tuples, Sets, and Dictionaries operations',
      'List comprehensions, generator expressions, and lambda functions',
      'Object Oriented Python: Classes, inheritance, magic methods (__init__, __str__)',
      'Exception handling, custom exceptions, and context managers (with block)',
      'Regular expressions using re module for pattern validation',
      'NumPy ndarray operations and Pandas DataFrame data cleaning & analysis'
    ],
    relatedSubjectIds: ['sub-3110003', 'sub-3160714', 'sub-3170716']
  },

  // ==========================================
  // SEMESTER 5 (6 subjects)
  // ==========================================
  {
    id: 'sub-3150710',
    code: '3150710',
    name: 'Computer Networks',
    shortName: 'CN',
    semesterId: 5,
    categoryId: 'cat-core',
    credits: 4,
    description: 'OSI and TCP/IP models, framing, flow control, subnetting, IPv4/IPv6, routing protocols (OSPF, BGP), and TCP flow/congestion.',
    importantTopics: [
      'OSI 7-layer vs TCP/IP 4-layer architectures and protocol suites',
      'Data Link Layer: Framing, CRC error detection, Stop & Wait, Go-Back-N, Selective Repeat',
      'MAC Layer: Pure & Slotted ALOHA, CSMA/CD, and IEEE 802.3 Ethernet standard',
      'Network Layer: IPv4 addressing, Classless Subnetting (CIDR), and NAT',
      'Routing algorithms: Distance Vector (Bellman-Ford) and Link State (Dijkstra/OSPF)',
      'Transport Layer: TCP 3-way handshake, TCP vs UDP, and Congestion Control mechanisms',
      'Application protocols: DNS, HTTP/HTTPS, DHCP, and SMTP'
    ],
    relatedSubjectIds: ['sub-3140702', 'sub-3150713', 'sub-3160716', 'sub-3170717']
  },
  {
    id: 'sub-3150711',
    code: '3150711',
    name: 'Theory of Computation',
    shortName: 'TOC',
    semesterId: 5,
    categoryId: 'cat-core',
    credits: 4,
    description: 'Deterministic and NFA, regular expressions, pumping lemma, context-free grammars, pushdown automata, and Turing machines.',
    importantTopics: [
      'DFA, NFA state transitions and conversion from NFA to DFA',
      'Regular expressions, Arden’s theorem, and state minimization of DFA',
      'Pumping Lemma for regular languages and closure properties',
      'Context-Free Grammars (CFG), Derivation trees, and Ambiguity removal',
      'Chomsky Normal Form (CNF) and Greibach Normal Form (GNF)',
      'Pushdown Automata (PDA): Acceptance by final state vs empty stack',
      'Turing Machines (TM) design, Church-Turing thesis, and Halting Problem'
    ],
    relatedSubjectIds: ['sub-3140708', 'sub-3140701', 'sub-3160704']
  },
  {
    id: 'sub-3150709',
    code: '3150709',
    name: 'Software Engineering',
    shortName: 'SE',
    semesterId: 5,
    categoryId: 'cat-core',
    credits: 4,
    description: 'Software process models, Agile Scrum, SRS documentation, UML design, architectural patterns, black/white box testing, and maintenance.',
    importantTopics: [
      'SDLC models: Waterfall, Spiral, V-Model, and Agile Scrum methodology',
      'Software Requirements Specification (SRS) according to IEEE standards',
      'UML Modeling: Use Case diagrams, Class diagrams, and Sequence diagrams',
      'Software Architecture: Layered, Client-Server, and Microservices design',
      'Software Metrics: Function Point (FP) and COCOMO cost estimation models',
      'Testing: Boundary Value Analysis, Equivalence Partitioning, Cyclomatic Complexity, Unit/Integration testing'
    ],
    relatedSubjectIds: ['sub-3130703', 'sub-3160713', 'sub-3180704']
  },
  {
    id: 'sub-3150703',
    code: '3150703',
    name: 'Advanced Java Programming',
    shortName: 'Adv-Java',
    semesterId: 5,
    categoryId: 'cat-elec',
    credits: 4,
    description: 'JDBC, servlets, JSP, JavaBeans, Spring core fundamentals, Hibernate ORM, and RESTful web service integrations.',
    importantTopics: [
      'Java Database Connectivity (JDBC): DriverManager, Statement, PreparedStatement',
      'Servlet lifecycle, HTTP request handling, session tracking (Cookies & HttpSession)',
      'JSP scriptlets, directives, actions, and Expression Language (EL)',
      'MVC Architecture implementation with Servlets and JSP',
      'Hibernate ORM: Configuration, entity mapping, and HQL queries',
      'Spring Framework: Dependency Injection (DI) and Inversion of Control (IoC)',
      'Building RESTful APIs with JAX-RS and JSON serialization'
    ],
    relatedSubjectIds: ['sub-3130705', 'sub-3160713', 'sub-3170717']
  },
  {
    id: 'sub-3150713',
    code: '3150713',
    name: 'Cyber Security & Laws',
    shortName: 'CSL',
    semesterId: 5,
    categoryId: 'cat-core',
    credits: 3,
    description: 'Vulnerabilities, malware taxonomy, OWASP Top 10, penetration testing, digital forensics, and Indian IT Act 2000.',
    importantTopics: [
      'Threat taxonomy: Worms, Trojans, Ransomware, Phishing, and Man-In-The-Middle attacks',
      'OWASP Top 10 web vulnerabilities (SQL Injection, XSS, CSRF, IDOR)',
      'Penetration testing methodology and reconnaissance scanning (Nmap)',
      'Digital forensics chain of custody, evidence acquisition, and log auditing',
      'Information Technology Act (IT Act 2000) and Cyber Crime amendments',
      'Identity access management, zero-trust architecture, and VPN tunnels'
    ],
    relatedSubjectIds: ['sub-3150710', 'sub-3160716', 'sub-3180702']
  },
  {
    id: 'sub-3150005',
    code: '3150005',
    name: 'Professional Ethics & Values',
    shortName: 'PEV',
    semesterId: 5,
    categoryId: 'cat-hss',
    credits: 2,
    description: 'Human values, moral dilemmas, codes of ethics (IEEE/ACM), engineering responsibility, whistleblower protection, and safety.',
    importantTopics: [
      'Human values: Integrity, work ethics, honesty, and courage',
      'Engineering ethics: Kohlberg and Gilligan’s moral development theories',
      'IEEE and ACM Code of Professional Conduct and Ethics',
      'Risk assessment, safety criteria, and Chernobyl / Bhopal case studies',
      'Intellectual Property Rights (IPR), patents, copyrights, and trade secrets',
      'Whistleblowing procedures, corporate governance, and environmental stewardship'
    ],
    relatedSubjectIds: ['sub-3110007', 'sub-3140709', 'sub-3150709']
  },

  // ==========================================
  // SEMESTER 6 (6 subjects)
  // ==========================================
  {
    id: 'sub-3160714',
    code: '3160714',
    name: 'Artificial Intelligence',
    shortName: 'AI',
    semesterId: 6,
    categoryId: 'cat-core',
    credits: 4,
    description: 'State space search, heuristics, A* algorithm, game playing (Minimax, Alpha-Beta pruning), knowledge representation, and expert systems.',
    importantTopics: [
      'State-space search representation and uninformed search (BFS, DFS, Iterative Deepening)',
      'Informed heuristic search: Best First Search, A* algorithm, and AO* search',
      'Adversarial search: Minimax algorithm and Alpha-Beta pruning in games',
      'Knowledge representation: First-Order Logic (FOL), resolution, and semantic nets',
      'Uncertainty modeling: Bayesian belief networks and probability inference',
      'Expert systems architecture, forward/backward chaining, and rule engines'
    ],
    relatedSubjectIds: ['sub-3140701', 'sub-3140705', 'sub-3170716', 'sub-3180701']
  },
  {
    id: 'sub-3160713',
    code: '3160713',
    name: 'Web Technology & Full-Stack',
    shortName: 'WebTech',
    semesterId: 6,
    categoryId: 'cat-core',
    credits: 4,
    description: 'HTML5 semantic standards, CSS3 flexbox/grid, JavaScript ES6+, DOM APIs, Node.js, Express, MongoDB, and modern React concepts.',
    importantTopics: [
      'HTML5 semantic elements, accessibility, and modern responsive layouts',
      'JavaScript ES6+: Promises, async/await, closures, and fetch API',
      'Document Object Model (DOM) events manipulation and AJAX asynchronous calls',
      'Node.js runtime, event loop, and Express REST server routing',
      'MongoDB NoSQL database design, Mongoose schemas, and aggregations',
      'React frontend: Components, hooks (useState, useEffect), and state flow'
    ],
    relatedSubjectIds: ['sub-3130703', 'sub-3150709', 'sub-3170720']
  },
  {
    id: 'sub-3160707',
    code: '3160707',
    name: 'Advanced Algorithm Design',
    shortName: 'AAD',
    semesterId: 6,
    categoryId: 'cat-elec',
    credits: 4,
    description: 'Amortized analysis, binomial heaps, Fibonacci heaps, randomized algorithms, string matching (KMP, Rabin-Karp), and network flows.',
    importantTopics: [
      'Amortized analysis techniques: Aggregate, Accounting, and Potential methods',
      'Advanced data structures: Binomial heaps and Fibonacci heaps amortized bounds',
      'Disjoint set union-find with path compression and rank heuristics',
      'String matching algorithms: Naive, Rabin-Karp hash, and Knuth-Morris-Pratt (KMP)',
      'Maximum flow problem: Ford-Fulkerson method and Edmonds-Karp algorithm',
      'Randomized algorithms: Randomized QuickSort and Monte Carlo vs Las Vegas'
    ],
    relatedSubjectIds: ['sub-3130702', 'sub-3140701', 'sub-3150711']
  },
  {
    id: 'sub-3160704',
    code: '3160704',
    name: 'Compiler Design',
    shortName: 'CD',
    semesterId: 6,
    categoryId: 'cat-core',
    credits: 4,
    description: 'Lexical analysis, Lex/Flex, parsing techniques (LL, LR, LALR), syntax-directed translation, three-address code, and code optimization.',
    importantTopics: [
      'Phases of a compiler, frontend vs backend, and compiler passes',
      'Lexical analyzer design: Regular expressions to DFA and Lex/Flex tools',
      'Top-Down parsing: Recursive descent and LL(1) parse tables with First/Follow',
      'Bottom-Up parsing: Shift-Reduce, LR(0), SLR(1), and LALR(1) parsers',
      'Syntax Directed Translation (SDT) schemes and syntax trees',
      'Intermediate code generation: Three-Address Code (TAC), quadruples, triples',
      'Code optimization: Dead code elimination, loop invariant code motion, register allocation'
    ],
    relatedSubjectIds: ['sub-3140707', 'sub-3150711']
  },
  {
    id: 'sub-3160716',
    code: '3160716',
    name: 'Cryptography & Network Security',
    shortName: 'CNS',
    semesterId: 6,
    categoryId: 'cat-core',
    credits: 4,
    description: 'Symmetric ciphers (DES, AES), asymmetric crypto (RSA, ECC), hash functions (SHA-256), digital signatures, SSL/TLS, and firewalls.',
    importantTopics: [
      'Classical ciphers and modern cipher principles (Substitution, Permutation)',
      'Data Encryption Standard (DES) and Advanced Encryption Standard (AES) rounds',
      'Public key cryptography: Diffie-Hellman Key Exchange and RSA algorithm',
      'Cryptographic hash functions: MD5, SHA-256, and HMAC validation',
      'Digital signature standards and Public Key Infrastructure (PKI) certificates',
      'Network security protocols: IPsec ESP/AH, SSL/TLS handshake, and Firewalls'
    ],
    relatedSubjectIds: ['sub-3140708', 'sub-3150710', 'sub-3150713', 'sub-3180702']
  },
  {
    id: 'sub-3160717',
    code: '3160717',
    name: 'Internet of Things (IoT)',
    shortName: 'IoT',
    semesterId: 6,
    categoryId: 'cat-elec',
    credits: 3,
    description: 'IoT architecture, embedded sensing, Arduino/Raspberry Pi, communication protocols (MQTT, CoAP), cloud platforms, and smart cities.',
    importantTopics: [
      'IoT architectural reference model and functional blocks',
      'Sensors and actuators: Temperature, ultrasonic, PIR, and relay modules',
      'Embedded prototyping: Arduino GPIO programming and Raspberry Pi Python scripts',
      'IoT transport protocols: MQTT publish/subscribe, CoAP, and HTTP REST comparison',
      'Wireless connectivity: Zigbee, Bluetooth Low Energy (BLE), LoRaWAN, and Wi-Fi',
      'IoT security challenges and smart agriculture / smart healthcare case studies'
    ],
    relatedSubjectIds: ['sub-3110016', 'sub-3150710', 'sub-3170717']
  },

  // ==========================================
  // SEMESTER 7 (6 subjects)
  // ==========================================
  {
    id: 'sub-3170716',
    code: '3170716',
    name: 'Machine Learning',
    shortName: 'ML',
    semesterId: 7,
    categoryId: 'cat-core',
    credits: 4,
    description: 'Supervised learning, linear/logistic regression, decision trees, SVM, ensemble methods (Random Forest, XGBoost), and unsupervised clustering.',
    importantTopics: [
      'Supervised vs Unsupervised vs Reinforcement learning paradigms',
      'Linear regression with gradient descent, cost functions, and regularization (L1/L2)',
      'Logistic regression, binary classification, and ROC/AUC performance metrics',
      'Decision Trees (ID3, C4.5, Gini index) and pruning techniques',
      'Support Vector Machines (SVM): Hyperplane margins and Kernel trick',
      'Ensemble methods: Bagging, Random Forest, AdaBoost, and Gradient Boosting',
      'Unsupervised learning: K-Means clustering, Hierarchical clustering, and PCA dimensionality reduction'
    ],
    relatedSubjectIds: ['sub-3130006', 'sub-3140705', 'sub-3160714', 'sub-3180701']
  },
  {
    id: 'sub-3170717',
    code: '3170717',
    name: 'Cloud Computing',
    shortName: 'Cloud',
    semesterId: 7,
    categoryId: 'cat-core',
    credits: 4,
    description: 'NIST cloud characteristics, IaaS/PaaS/SaaS models, hypervisors, Docker containers, Kubernetes orchestration, and AWS/Azure architectures.',
    importantTopics: [
      'NIST Cloud definition, essential characteristics, and deployment models (Public, Private, Hybrid)',
      'Service models: Infrastructure as a Service (IaaS), PaaS, and Software as a Service (SaaS)',
      'Virtualization: Type-1 and Type-2 hypervisors, KVM, and hardware virtualization',
      'Containerization: Docker engine, image layers, Dockerfile, and Docker Compose',
      'Kubernetes orchestration: Pods, Services, Deployments, and Ingress routing',
      'Cloud storage and scalability: Auto-scaling, Load balancers, and AWS S3/EC2 concepts'
    ],
    relatedSubjectIds: ['sub-3140702', 'sub-3150710', 'sub-3180704']
  },
  {
    id: 'sub-3170719',
    code: '3170719',
    name: 'Big Data Analytics',
    shortName: 'BigData',
    semesterId: 7,
    categoryId: 'cat-elec',
    credits: 4,
    description: 'The 5 Vs of Big Data, Hadoop Distributed File System (HDFS), MapReduce programming, Apache Spark RDDs, and NoSQL databases.',
    importantTopics: [
      'Big Data characteristics: Volume, Velocity, Variety, Veracity, and Value',
      'Hadoop architecture: HDFS NameNode, DataNodes, block replication, and secondary NameNode',
      'MapReduce programming paradigm: Map phase, shuffle & sort, and reduce phase',
      'YARN (Yet Another Resource Negotiator) architecture and resource managers',
      'Apache Spark: In-memory computing, Resilient Distributed Datasets (RDDs), and transformations',
      'NoSQL family: Key-Value, Column-family (Cassandra), Document, and Graph databases'
    ],
    relatedSubjectIds: ['sub-3130703', 'sub-3170716', 'sub-3170717']
  },
  {
    id: 'sub-3170720',
    code: '3170720',
    name: 'Mobile Application Development',
    shortName: 'MAD',
    semesterId: 7,
    categoryId: 'cat-elec',
    credits: 4,
    description: 'Android application architecture, activities, fragments, intents, Jetpack layouts, SQLite/Room database, and Flutter cross-platform basics.',
    importantTopics: [
      'Android operating architecture: Linux kernel, ART/Dalvik runtime, application framework',
      'Activity lifecycle states, configuration changes, and Fragment management',
      'Explicit and Implicit Intents, Intent filters, and passing data via Bundles',
      'Modern UI: ConstraintLayout, RecyclerView with ViewHolders, and Material Design',
      'Local persistence: SharedPreferences, SQLite databases, and Room ORM architecture',
      'Background processing: WorkManager, Coroutines, and REST API consumption with Retrofit'
    ],
    relatedSubjectIds: ['sub-3150703', 'sub-3160713']
  },
  {
    id: 'sub-3170721',
    code: '3170721',
    name: 'Information & Retrieval Systems',
    shortName: 'IRS',
    semesterId: 7,
    categoryId: 'cat-elec',
    credits: 3,
    description: 'Boolean retrieval models, vector space models, TF-IDF term weighting, inverted indexing, web crawling, and PageRank algorithms.',
    importantTopics: [
      'Information retrieval basics, inverted index construction, and tokenization',
      'Boolean retrieval model and posting list intersection algorithms',
      'Vector Space Model, Cosine similarity, and TF-IDF term weighting',
      'Evaluation metrics: Precision, Recall, F-measure, and Mean Average Precision (MAP)',
      'Web search architecture: Distributed web crawlers, robots.txt, and duplicate detection',
      'Link analysis: Google PageRank algorithm and HITS authority/hub calculation'
    ],
    relatedSubjectIds: ['sub-3130702', 'sub-3160714', 'sub-3170716']
  },
  {
    id: 'sub-3170001',
    code: '3170001',
    name: 'Project Phase - I',
    shortName: 'Proj-1',
    semesterId: 7,
    categoryId: 'cat-proj',
    credits: 2,
    description: 'Literature survey, problem identification, SRS documentation, system architecture design, and initial proof-of-concept prototype.',
    importantTopics: [
      'Problem identification, literature survey, and feasibility analysis',
      'Formulation of project scope, objectives, and engineering requirements',
      'System design, architectural block diagrams, and database entity schemas',
      'Selection of technology stack, frameworks, and APIs',
      'Creation of initial prototype / proof of concept demonstration',
      'Preparation of Project Phase-1 documentation and presentation to evaluation jury'
    ],
    relatedSubjectIds: ['sub-3150709', 'sub-3180001']
  },

  // ==========================================
  // SEMESTER 8 (6 subjects)
  // ==========================================
  {
    id: 'sub-3180701',
    code: '3180701',
    name: 'Deep Learning & Neural Networks',
    shortName: 'DL',
    semesterId: 8,
    categoryId: 'cat-core',
    credits: 4,
    description: 'Perceptrons, backpropagation, CNNs, RNNs, LSTMs, attention mechanisms, Transformer architectures, and GANs.',
    importantTopics: [
      'Biological vs Artificial neurons, activation functions (ReLU, Sigmoid, Softmax)',
      'Multilayer Perceptrons (MLP), forward pass, and backpropagation gradient descent',
      'Convolutional Neural Networks (CNN): Convolution kernels, pooling, and ResNet architectures',
      'Recurrent Neural Networks (RNN) and Long Short-Term Memory (LSTM) cells',
      'Transformer architecture: Self-attention, multi-head attention, and positional encoding',
      'Generative Adversarial Networks (GANs): Generator vs Discriminator minimax training'
    ],
    relatedSubjectIds: ['sub-3160714', 'sub-3170716', 'sub-3180703']
  },
  {
    id: 'sub-3180702',
    code: '3180702',
    name: 'Blockchain Technology',
    shortName: 'Blockchain',
    semesterId: 8,
    categoryId: 'cat-elec',
    credits: 4,
    description: 'Decentralized ledgers, SHA-256 proof of work, proof of stake, Ethereum smart contracts, Solidity, and decentralized apps (dApps).',
    importantTopics: [
      'Centralized vs Decentralized architectures, Merkle trees, and cryptographic hashing',
      'Bitcoin protocol: UTXO model, mining mechanism, and Proof of Work (PoW) consensus',
      'Alternative consensus: Proof of Stake (PoS), Delegated PoS, and Byzantine Fault Tolerance (BFT)',
      'Ethereum Virtual Machine (EVM), gas mechanics, and account state storage',
      'Smart contract development using Solidity, security vulnerabilities (reentrancy)',
      'Decentralized Applications (dApps), web3.js integration, and IPFS decentralized storage'
    ],
    relatedSubjectIds: ['sub-3160716', 'sub-3150713']
  },
  {
    id: 'sub-3180703',
    code: '3180703',
    name: 'Natural Language Processing',
    shortName: 'NLP',
    semesterId: 8,
    categoryId: 'cat-elec',
    credits: 4,
    description: 'Morphology, N-gram language models, word embeddings (Word2Vec, GloVe), seq2seq models, BERT, and generative LLMs.',
    importantTopics: [
      'Text pre-processing: Stemming (Porter stemmer), Lemmatization, and Stop words removal',
      'N-gram language models, perplexity calculation, and Laplace smoothing techniques',
      'Word embeddings: Word2Vec (Skip-gram and CBOW) and GloVe vector representations',
      'Sequence tagging: Part-of-Speech (POS) tagging and Named Entity Recognition (NER)',
      'Sequence to Sequence (Seq2Seq) encoder-decoder models and machine translation',
      'Modern NLP: BERT bidirectional encoders, GPT generative transformers, and fine-tuning'
    ],
    relatedSubjectIds: ['sub-3170716', 'sub-3170721', 'sub-3180701']
  },
  {
    id: 'sub-3180704',
    code: '3180704',
    name: 'DevOps & Cloud Native Architecture',
    shortName: 'DevOps',
    semesterId: 8,
    categoryId: 'cat-elec',
    credits: 3,
    description: 'CI/CD pipelines, GitOps, Infrastructure as Code (Terraform), Ansible configuration, Prometheus monitoring, and microservices.',
    importantTopics: [
      'DevOps lifecycle principles, cultural mindset, and CALMS framework',
      'Version control branching strategies (GitFlow) and pull request workflows',
      'Continuous Integration / Continuous Deployment (CI/CD) pipelines with GitHub Actions and Jenkins',
      'Infrastructure as Code (IaC) provisioning using Terraform declarative syntax',
      'Configuration management and server automation with Ansible playbooks',
      'Observability: Metrics monitoring with Prometheus, dashboards with Grafana, and ELK stack'
    ],
    relatedSubjectIds: ['sub-3150709', 'sub-3170717']
  },
  {
    id: 'sub-3180705',
    code: '3180705',
    name: 'Quantum Computing Foundations',
    shortName: 'Quantum',
    semesterId: 8,
    categoryId: 'cat-elec',
    credits: 3,
    description: 'Qubits, superposition, quantum entanglement, quantum gates (Hadamard, CNOT), Deutsch-Jozsa algorithm, and Shor’s algorithm.',
    importantTopics: [
      'Classical bits vs Quantum bits (Qubits) and Bloch Sphere geometric representation',
      'Quantum principles: Superposition, Entanglement, and Quantum measurement postulates',
      'Single-qubit quantum gates: Pauli X, Y, Z gates, Phase gate, and Hadamard gate',
      'Multi-qubit gates: Controlled-NOT (CNOT), Toffoli gate, and Bell states preparation',
      'Quantum algorithms: Deutsch-Jozsa algorithm and Simon’s problem',
      'Grover’s quantum database search and Shor’s prime factorisation theorem implications'
    ],
    relatedSubjectIds: ['sub-3110014', 'sub-3140708', 'sub-3160716']
  },
  {
    id: 'sub-3180001',
    code: '3180001',
    name: 'Major Project & Industry Internship',
    shortName: 'Capstone',
    semesterId: 8,
    categoryId: 'cat-proj',
    credits: 6,
    description: 'Full-semester industry internship or comprehensive capstone product development, cloud deployment, and final GTU thesis defense.',
    importantTopics: [
      'End-to-end full stack / embedded / AI system engineering implementation',
      'Continuous integration, automated test suites, and production cloud deployment',
      'User acceptance testing, feedback incorporation, and performance benchmarking',
      'Technical dissertation drafting matching GTU postgraduate/undergraduate guidelines',
      'Research paper submission to peer-reviewed conference or journal',
      'Final comprehensive project viva-voce and industrial review presentation'
    ],
    relatedSubjectIds: ['sub-3170001', 'sub-3150709', 'sub-3180704']
  }
];

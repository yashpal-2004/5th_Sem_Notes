const mcqs = [
  {
    id: "l1-q1",
    lecture: "Lecture 1",
    topic: "Cloud Definition & Global Infrastructure",
    question: "What best describes the cloud according to the lecture?",
    options: [
      "A single powerful computer owned by the user",
      "A massive interconnected network of physical servers in data centers",
      "A wireless network used only by smartphones",
      "A software package installed on local PCs"
    ],
    correctAnswer: "A massive interconnected network of physical servers in data centers",
    explanation: "The lecture defines the cloud as a massive interconnected network of physical computers, mainly servers, distributed across data centers worldwide.",
    difficulty: "easy"
  },
  {
    id: "l1-q2",
    lecture: "Lecture 1",
    topic: "Cloud Service Network Cards",
    question: "Why do large cloud providers use specialized high-speed NICs?",
    options: [
      "To replace all CPUs in the data center",
      "To provide local Wi-Fi to employees",
      "To efficiently interconnect GPUs and handle complex workloads",
      "To encrypt every application manually"
    ],
    correctAnswer: "To efficiently interconnect GPUs and handle complex workloads",
    explanation: "Cloud providers use high-speed Network Interface Cards to move massive amounts of data efficiently and interconnect GPUs for demanding workloads.",
    difficulty: "medium"
  },
  {
    id: "l1-q3",
    lecture: "Lecture 1",
    topic: "Network Classification",
    question: "Which network type is designed for a very short range of a few meters, such as Bluetooth devices?",
    options: [
      "LAN",
      "MAN",
      "WAN",
      "PAN"
    ],
    correctAnswer: "PAN",
    explanation: "A Personal Area Network (PAN) is intended for very short-range connections such as smartphones, smartwatches, and Bluetooth accessories.",
    difficulty: "easy"
  },
  {
    id: "l1-q4",
    lecture: "Lecture 1",
    topic: "Network Classification",
    question: "Which network type typically spans a city or large campus and can link multiple LANs?",
    options: [
      "PAN",
      "LAN",
      "MAN",
      "WAN"
    ],
    correctAnswer: "MAN",
    explanation: "A Metropolitan Area Network (MAN) covers a city or large campus and can connect multiple LANs.",
    difficulty: "easy"
  },
  {
    id: "l1-q5",
    lecture: "Lecture 1",
    topic: "WAN and Internet Backbone",
    question: "Why is a WAN described as the backbone of the Internet in the lecture?",
    options: [
      "It only connects devices inside one room",
      "It links branch offices and networks across countries and continents",
      "It is limited to Bluetooth connections",
      "It is used only for database storage"
    ],
    correctAnswer: "It links branch offices and networks across countries and continents",
    explanation: "WANs operate over very large geographic areas, linking networks across countries and continents, which makes them fundamental to the Internet.",
    difficulty: "easy"
  },
  {
    id: "l1-q6",
    lecture: "Lecture 1",
    topic: "Undersea Cable Infrastructure",
    question: "How does most intercontinental Internet traffic physically travel according to the lecture?",
    options: [
      "Only through satellites",
      "Through optical-fiber submarine cables",
      "Through Bluetooth relays",
      "Through local Ethernet switches"
    ],
    correctAnswer: "Through optical-fiber submarine cables",
    explanation: "The lecture emphasizes that the Internet depends on physical infrastructure, including submarine optical-fiber cables laid on the seabed.",
    difficulty: "easy"
  },
  {
    id: "l1-q7",
    lecture: "Lecture 1",
    topic: "Undersea Cable Security Hazards",
    question: "What is identified as a major cause of transatlantic submarine cable damage?",
    options: [
      "Bluetooth interference",
      "Fishing anchors dragging on the seabed",
      "Smartphone battery failures",
      "Web browser bugs"
    ],
    correctAnswer: "Fishing anchors dragging on the seabed",
    explanation: "Fishing anchors can snag and rupture submarine fiber lines and are highlighted as a major cable hazard.",
    difficulty: "easy"
  },
  {
    id: "l1-q8",
    lecture: "Lecture 1",
    topic: "Top-Down Layered Approach",
    question: "Why does the course recommend a top-down approach to networking?",
    options: [
      "It begins with physical cables and ignores applications",
      "It starts with application requirements and then studies how lower layers satisfy them",
      "It eliminates the need for protocols",
      "It studies only network hardware"
    ],
    correctAnswer: "It starts with application requirements and then studies how lower layers satisfy them",
    explanation: "The top-down approach starts from what users see and the application's requirements before studying the mechanisms and lower layers that provide those requirements.",
    difficulty: "medium"
  },
  {
    id: "l1-q9",
    lecture: "Lecture 1",
    topic: "Five-Layer TCP/IP Model",
    question: "Which layer is responsible for logical addressing and routing across multiple networks in the five-layer model?",
    options: [
      "Physical",
      "Link",
      "Network",
      "Transport"
    ],
    correctAnswer: "Network",
    explanation: "The Network layer handles logical addressing and routing, using protocols such as IP.",
    difficulty: "easy"
  },
  {
    id: "l2-q1",
    lecture: "Lecture 2",
    topic: "Global Infrastructure Recap",
    question: "Why are submarine cables important to global infrastructure?",
    options: [
      "They carry large amounts of data between continents",
      "They replace all local routers",
      "They provide CPU power to data centers",
      "They eliminate the need for IP addresses"
    ],
    correctAnswer: "They carry large amounts of data between continents",
    explanation: "Submarine cables form a critical physical layer of global Internet connectivity and route large volumes of traffic between continents.",
    difficulty: "easy"
  },
  {
    id: "l2-q2",
    lecture: "Lecture 2",
    topic: "AI Network Requirements",
    question: "Why do modern AI training systems require specialized high-bandwidth interconnects?",
    options: [
      "GPUs rarely exchange data during training",
      "AI training may involve thousands of GPUs communicating rapidly",
      "Only storage devices communicate during AI training",
      "High latency improves GPU utilization"
    ],
    correctAnswer: "AI training may involve thousands of GPUs communicating rapidly",
    explanation: "Large AI models can require thousands of GPUs and frequent GPU-to-GPU communication, so ordinary networks can become bottlenecks.",
    difficulty: "medium"
  },
  {
    id: "l2-q3",
    lecture: "Lecture 2",
    topic: "Circuit Switching",
    question: "What is the defining characteristic of circuit switching?",
    options: [
      "Capacity is allocated dynamically for every packet",
      "A dedicated end-to-end path is reserved before communication",
      "There is never any path reservation",
      "Packets always take different routes"
    ],
    correctAnswer: "A dedicated end-to-end path is reserved before communication",
    explanation: "Circuit switching establishes and reserves a dedicated path between source and destination before data transfer begins.",
    difficulty: "easy"
  },
  {
    id: "l2-q4",
    lecture: "Lecture 2",
    topic: "Packet Switching",
    question: "What happens to capacity during an idle period in packet switching?",
    options: [
      "It remains permanently reserved",
      "It is released and can be used by other traffic",
      "It is converted into circuit-switched capacity",
      "It is discarded from the network"
    ],
    correctAnswer: "It is released and can be used by other traffic",
    explanation: "Packet switching allocates resources on demand, so idle users do not permanently consume link capacity.",
    difficulty: "easy"
  },
  {
    id: "l2-q5",
    lecture: "Lecture 2",
    topic: "Packets and Store-and-Forward",
    question: "What does store-and-forward mean at a packet-switching router?",
    options: [
      "The router forwards the first bit immediately",
      "The router must receive and store the packet before forwarding it",
      "The router never examines the packet",
      "The packet is stored permanently"
    ],
    correctAnswer: "The router must receive and store the packet before forwarding it",
    explanation: "A store-and-forward router receives the complete packet, allowing checks such as header verification, before transmitting it to the next hop.",
    difficulty: "medium"
  },
  {
    id: "l2-q6",
    lecture: "Lecture 2",
    topic: "Statistical Multiplexing and Best-Effort Delivery",
    question: "What is a major benefit of statistical multiplexing?",
    options: [
      "Each user receives a permanent reserved path",
      "Bursty users can dynamically share the same link",
      "Every packet gets a guaranteed delay",
      "It eliminates all congestion"
    ],
    correctAnswer: "Bursty users can dynamically share the same link",
    explanation: "Statistical multiplexing allows active users to dynamically share capacity, improving link utilization when traffic is bursty.",
    difficulty: "medium"
  },
  {
    id: "l2-q7",
    lecture: "Lecture 2",
    topic: "Network Delay",
    question: "Which delay depends directly on packet length L and link transmission rate R?",
    options: [
      "Propagation delay",
      "Transmission delay",
      "Queuing delay",
      "Processing delay"
    ],
    correctAnswer: "Transmission delay",
    explanation: "Transmission delay is the time required to push all L bits onto the link and is given by L/R.",
    difficulty: "easy"
  },
  {
    id: "l2-q8",
    lecture: "Lecture 2",
    topic: "Propagation Delay",
    question: "Which formula represents propagation delay?",
    options: [
      "L/R",
      "R/L",
      "d/s",
      "RTT/L"
    ],
    correctAnswer: "d/s",
    explanation: "Propagation delay is the physical travel time of a signal across the link, given by distance d divided by propagation speed s.",
    difficulty: "easy"
  },
  {
    id: "l2-q9",
    lecture: "Lecture 2",
    topic: "Throughput and Bottleneck Links",
    question: "A path has links of 10 Mbps, 2 Mbps, and 5 Mbps. What is the maximum end-to-end throughput?",
    options: [
      "2 Mbps",
      "5 Mbps",
      "10 Mbps",
      "17 Mbps"
    ],
    correctAnswer: "2 Mbps",
    explanation: "End-to-end throughput is constrained by the slowest link, so the bottleneck of 2 Mbps determines the maximum throughput.",
    difficulty: "medium"
  },
  {
    id: "l3-q1",
    lecture: "Lecture 3",
    topic: "Idea Behind Layering",
    question: "What is a key advantage of network layering?",
    options: [
      "Every layer must understand all other layers",
      "Each layer can focus on one specific job",
      "Layers eliminate the need for interfaces",
      "Layers force hardware and software to be identical"
    ],
    correctAnswer: "Each layer can focus on one specific job",
    explanation: "Layering isolates responsibilities, making systems easier to design, troubleshoot, replace, and evolve.",
    difficulty: "easy"
  },
  {
    id: "l3-q2",
    lecture: "Lecture 3",
    topic: "Layering Benefits",
    question: "Which example best demonstrates modularity in network layering?",
    options: [
      "Replacing Wi-Fi with Ethernet without changing applications",
      "Changing every application when changing cables",
      "Rewriting TCP whenever HTTP changes",
      "Removing all layer interfaces"
    ],
    correctAnswer: "Replacing Wi-Fi with Ethernet without changing applications",
    explanation: "A major purpose of layering is allowing one layer to change implementation while higher layers continue using the same interface.",
    difficulty: "medium"
  },
  {
    id: "l3-q3",
    lecture: "Lecture 3",
    topic: "Encapsulation and Decapsulation",
    question: "During encapsulation, what does a lower layer generally add to data from an upper layer?",
    options: [
      "A new application process",
      "Its own control information, typically a header",
      "A CPU register",
      "A physical monitor"
    ],
    correctAnswer: "Its own control information, typically a header",
    explanation: "As data moves downward, each layer adds its own protocol header, creating nested protocol data units.",
    difficulty: "easy"
  },
  {
    id: "l3-q4",
    lecture: "Lecture 3",
    topic: "Encapsulation and Decapsulation",
    question: "At the receiver, what is the reverse of encapsulation?",
    options: [
      "Multiplexing",
      "Routing",
      "Decapsulation",
      "Fragmentation"
    ],
    correctAnswer: "Decapsulation",
    explanation: "Decapsulation removes headers in reverse order as data moves upward through the receiver's protocol stack.",
    difficulty: "easy"
  },
  {
    id: "l3-q5",
    lecture: "Lecture 3",
    topic: "OSI Seven-Layer Model",
    question: "Which layer of the OSI model provides end-to-end delivery, segmentation, flow control, and error control?",
    options: [
      "Network",
      "Transport",
      "Session",
      "Data Link"
    ],
    correctAnswer: "Transport",
    explanation: "The OSI Transport layer provides end-to-end process communication and includes segmentation, flow control, and error control.",
    difficulty: "medium"
  },
  {
    id: "l3-q6",
    lecture: "Lecture 3",
    topic: "OSI Seven-Layer Model",
    question: "Which mnemonic correctly lists the OSI layers from Layer 7 down to Layer 1?",
    options: [
      "All People Seem To Need Data Processing",
      "Please Do Not Throw Sausage Pizza Away",
      "Processing Data Need To Seem People All",
      "All Devices Need Data To Send Packets"
    ],
    correctAnswer: "Please Do Not Throw Sausage Pizza Away",
    explanation: "The lecture gives “Please Do Not Throw Sausage Pizza Away” as a top-down memory aid for Application through Physical.",
    difficulty: "easy"
  },
  {
    id: "l3-q7",
    lecture: "Lecture 3",
    topic: "TCP/IP Model",
    question: "How many layers are shown in the TCP/IP model discussed in the lecture?",
    options: [
      "3",
      "4",
      "5",
      "7"
    ],
    correctAnswer: "4",
    explanation: "The lecture presents TCP/IP as a four-layer stack: Application, Transport, Internet, and Network Access.",
    difficulty: "easy"
  },
  {
    id: "l3-q8",
    lecture: "Lecture 3",
    topic: "OSI vs TCP/IP Comparison",
    question: "Which statement correctly compares OSI and TCP/IP in the lecture?",
    options: [
      "OSI has 4 layers and TCP/IP has 7",
      "OSI is conceptual/reference-oriented while TCP/IP is an implemented protocol stack",
      "Both have exactly the same layer boundaries",
      "TCP/IP was developed as a purely theoretical model by ISO"
    ],
    correctAnswer: "OSI is conceptual/reference-oriented while TCP/IP is an implemented protocol stack",
    explanation: "The lecture presents OSI as a conceptual reference model and TCP/IP as a practical protocol suite used in real networks.",
    difficulty: "medium"
  },
  {
    id: "l4-q1",
    lecture: "Lecture 4",
    topic: "Network Devices and Scaling",
    question: "How many direct point-to-point cables are needed to connect n devices?",
    options: [
      "n",
      "n - 1",
      "n(n - 1)/2",
      "n^2"
    ],
    correctAnswer: "n(n - 1)/2",
    explanation: "Connecting every pair of devices requires one cable for every pair, giving n(n-1)/2 cables.",
    difficulty: "medium"
  },
  {
    id: "l4-q2",
    lecture: "Lecture 4",
    topic: "Hub",
    question: "What does a Layer 1 hub do when it receives a signal?",
    options: [
      "Forwards only to the destination port using IP",
      "Replicates the signal to all ports",
      "Routes the packet between networks",
      "Terminates TLS connections"
    ],
    correctAnswer: "Replicates the signal to all ports",
    explanation: "A hub operates at Layer 1 and repeats incoming signals to all ports without understanding MAC or IP addresses.",
    difficulty: "easy"
  },
  {
    id: "l4-q3",
    lecture: "Lecture 4",
    topic: "Switch",
    question: "What address does a Layer 2 switch primarily use for forwarding?",
    options: [
      "IP address",
      "Port number",
      "MAC address",
      "Domain name"
    ],
    correctAnswer: "MAC address",
    explanation: "A switch learns MAC-address-to-port mappings and forwards frames toward the appropriate destination port.",
    difficulty: "easy"
  },
  {
    id: "l4-q4",
    lecture: "Lecture 4",
    topic: "Router",
    question: "What is the primary function of a Layer 3 router?",
    options: [
      "Repeat electrical signals",
      "Forward traffic between different networks using IP addresses",
      "Assign MAC addresses",
      "Encrypt all HTTP traffic"
    ],
    correctAnswer: "Forward traffic between different networks using IP addresses",
    explanation: "Routers connect different networks and make forwarding decisions using IP addresses.",
    difficulty: "easy"
  },
  {
    id: "l4-q5",
    lecture: "Lecture 4",
    topic: "Firewall and Load Balancer",
    question: "Which device/function can inspect Layer 3 and Layer 4 information and allow or block traffic according to rules?",
    options: [
      "Hub",
      "Firewall",
      "Repeater",
      "DNS resolver"
    ],
    correctAnswer: "Firewall",
    explanation: "The lecture describes firewalls as security devices that can inspect IPs and ports and apply allow/block rules.",
    difficulty: "easy"
  },
  {
    id: "l4-q6",
    lecture: "Lecture 4",
    topic: "Network Topologies",
    question: "Which topology connects all devices to a central switch or hub?",
    options: [
      "Mesh",
      "Star",
      "Ring",
      "Bus"
    ],
    correctAnswer: "Star",
    explanation: "In a star topology, all devices connect to a central device, making installation and maintenance comparatively easy.",
    difficulty: "easy"
  },
  {
    id: "l4-q7",
    lecture: "Lecture 4",
    topic: "Network Topologies",
    question: "Why does a full mesh topology provide high fault tolerance?",
    options: [
      "It uses only one cable",
      "Every device has direct connections to every other device",
      "It removes all routers",
      "It prevents wireless communication"
    ],
    correctAnswer: "Every device has direct connections to every other device",
    explanation: "Full mesh provides multiple direct paths, so failure of one connection does not necessarily isolate devices.",
    difficulty: "medium"
  },
  {
    id: "l4-q8",
    lecture: "Lecture 4",
    topic: "Software-Defined Cloud Networks",
    question: "What is the main evolutionary shift described in software-defined cloud networking?",
    options: [
      "Replacing all protocols with manual wiring",
      "Moving networking concepts from physical boxes and cables into software and APIs",
      "Removing virtualization from cloud systems",
      "Making cloud regions physically smaller"
    ],
    correctAnswer: "Moving networking concepts from physical boxes and cables into software and APIs",
    explanation: "The lecture shows physical boxes becoming virtual instances, cables becoming virtual overlays, and manual wiring becoming API and console operations.",
    difficulty: "medium"
  },
  {
    id: "l4-q9",
    lecture: "Lecture 4",
    topic: "AWS Regions, Edge Locations and Availability Zones",
    question: "Why are edge locations useful in cloud networks?",
    options: [
      "They increase physical distance from users",
      "They cache or serve content closer to users to reduce latency",
      "They replace all availability zones",
      "They eliminate the need for DNS"
    ],
    correctAnswer: "They cache or serve content closer to users to reduce latency",
    explanation: "Edge locations place services such as CDN caches closer to users, reducing propagation and access delay.",
    difficulty: "medium"
  },
  {
    id: "l4-q10",
    lecture: "Lecture 4",
    topic: "Availability Zones",
    question: "Why would a cloud application deploy across multiple Availability Zones?",
    options: [
      "To intentionally create a single point of failure",
      "To survive failures affecting one isolated zone",
      "To eliminate all network traffic",
      "To force all servers onto one machine"
    ],
    correctAnswer: "To survive failures affecting one isolated zone",
    explanation: "Multiple isolated Availability Zones with redundant infrastructure improve availability during localized failures.",
    difficulty: "easy"
  },
  {
    id: "l4-q11",
    lecture: "Lecture 4",
    topic: "VPC and Subnets",
    question: "What is a VPC in the lecture?",
    options: [
      "A public DNS server",
      "A private logically isolated network in the cloud",
      "A physical undersea cable",
      "A Layer 1 hub"
    ],
    correctAnswer: "A private logically isolated network in the cloud",
    explanation: "A Virtual Private Cloud provides an isolated cloud networking environment with routing, IP address space, and security controls.",
    difficulty: "easy"
  },
  {
    id: "l4-q12",
    lecture: "Lecture 4",
    topic: "CIDR in Cloud Networks",
    question: "What does a /24 IPv4 prefix represent in the lecture's CIDR cheat sheet?",
    options: [
      "24 total IP addresses",
      "256 IP addresses",
      "1024 IP addresses",
      "16 IP addresses"
    ],
    correctAnswer: "256 IP addresses",
    explanation: "A /24 network contains 2^(32-24) = 256 IPv4 addresses.",
    difficulty: "easy"
  },
  {
    id: "l5-q1",
    lecture: "Lecture 5",
    topic: "Client-Server Model",
    question: "In a traditional client-server architecture, how do clients normally communicate?",
    options: [
      "Every client communicates directly with every other client",
      "Clients send requests through a centralized server",
      "Clients never contact servers",
      "Only servers initiate all network traffic"
    ],
    correctAnswer: "Clients send requests through a centralized server",
    explanation: "The server stores data and processes requests, while clients communicate with it instead of directly coordinating with each other.",
    difficulty: "easy"
  },
  {
    id: "l5-q2",
    lecture: "Lecture 5",
    topic: "Peer-to-Peer Model",
    question: "What distinguishes the peer-to-peer model from the client-server model?",
    options: [
      "P2P requires one centralized server",
      "Each peer can act as both a client and a server",
      "Peers cannot communicate directly",
      "P2P has no network protocols"
    ],
    correctAnswer: "Each peer can act as both a client and a server",
    explanation: "In a P2P architecture, devices have more equal roles and can provide services as well as consume them.",
    difficulty: "easy"
  },
  {
    id: "l5-q3",
    lecture: "Lecture 5",
    topic: "Application Layer Protocols",
    question: "Which protocol is specifically used for name resolution?",
    options: [
      "HTTP",
      "SMTP",
      "DNS",
      "FTP"
    ],
    correctAnswer: "DNS",
    explanation: "DNS is the application-layer protocol listed for converting domain names into address information.",
    difficulty: "easy"
  },
  {
    id: "l5-q4",
    lecture: "Lecture 5",
    topic: "HTTP Statelessness",
    question: "What does it mean that HTTP is stateless?",
    options: [
      "HTTP cannot carry data",
      "The server does not inherently remember previous requests between independent requests",
      "HTTP has no headers",
      "HTTP never uses TCP"
    ],
    correctAnswer: "The server does not inherently remember previous requests between independent requests",
    explanation: "HTTP treats each request independently, so extra mechanisms such as cookies and sessions are used when application state must be maintained.",
    difficulty: "easy"
  },
  {
    id: "l5-q5",
    lecture: "Lecture 5",
    topic: "HTTP Messages",
    question: "Which part of an HTTP request contains metadata such as Host and User-Agent?",
    options: [
      "Request line",
      "Headers",
      "Body only",
      "Status line"
    ],
    correctAnswer: "Headers",
    explanation: "HTTP headers carry metadata such as Host, User-Agent, Content-Type, and other control information.",
    difficulty: "easy"
  },
  {
    id: "l5-q6",
    lecture: "Lecture 5",
    topic: "HTTP Status Codes",
    question: "Which HTTP status code means that the requested resource was not found?",
    options: [
      "200",
      "301",
      "404",
      "500"
    ],
    correctAnswer: "404",
    explanation: "HTTP 404 indicates that the requested resource could not be found.",
    difficulty: "easy"
  },
  {
    id: "l5-q7",
    lecture: "Lecture 5",
    topic: "HTTP Generations",
    question: "Which HTTP version introduced binary framing and multiplexing over a single TCP connection?",
    options: [
      "HTTP/1.0",
      "HTTP/1.1",
      "HTTP/2",
      "HTTP/3"
    ],
    correctAnswer: "HTTP/2",
    explanation: "HTTP/2 introduced binary framing and multiplexing of multiple streams over one TCP connection, along with server push.",
    difficulty: "easy"
  },
  {
    id: "l5-q8",
    lecture: "Lecture 5",
    topic: "HTTP/3",
    question: "What transport technology does HTTP/3 use according to the lecture?",
    options: [
      "TCP",
      "UDP only with no additional protocol",
      "QUIC over UDP",
      "SMTP over IP"
    ],
    correctAnswer: "QUIC over UDP",
    explanation: "HTTP/3 uses QUIC over UDP, enabling independent multiplexed streams and avoiding TCP-level head-of-line blocking.",
    difficulty: "medium"
  },
  {
    id: "l5-q9",
    lecture: "Lecture 5",
    topic: "REST APIs",
    question: "Which HTTP method is used in REST to retrieve a resource?",
    options: [
      "GET",
      "POST",
      "PUT",
      "DELETE"
    ],
    correctAnswer: "GET",
    explanation: "GET retrieves a resource in RESTful API conventions.",
    difficulty: "easy"
  },
  {
    id: "l5-q10",
    lecture: "Lecture 5",
    topic: "REST APIs",
    question: "Which HTTP method is intended for a partial update to an existing resource?",
    options: [
      "GET",
      "POST",
      "PATCH",
      "DELETE"
    ],
    correctAnswer: "PATCH",
    explanation: "PATCH is used for partial updates, whereas PUT is commonly used for replacing or updating an entire resource representation.",
    difficulty: "medium"
  },
  {
    id: "l5-q11",
    lecture: "Lecture 5",
    topic: "OpenAPI",
    question: "What is OpenAPI primarily used for?",
    options: [
      "Encrypting network packets",
      "Describing, documenting, designing, and testing REST APIs",
      "Replacing HTTP",
      "Routing IP packets"
    ],
    correctAnswer: "Describing, documenting, designing, and testing REST APIs",
    explanation: "OpenAPI is an open specification that supports human-readable API documentation, machine-readable tooling, code generation, and validation.",
    difficulty: "medium"
  },
  {
    id: "l6-q1",
    lecture: "Lecture 6",
    topic: "Plaintext HTTP Vulnerability",
    question: "What is a major risk of using HTTP over an untrusted network?",
    options: [
      "The traffic is automatically authenticated",
      "Attackers who capture traffic may read plaintext credentials and messages",
      "HTTP automatically encrypts all packets",
      "HTTP prevents packet capture"
    ],
    correctAnswer: "Attackers who capture traffic may read plaintext credentials and messages",
    explanation: "Plain HTTP exposes application data in readable form, making eavesdropping possible on untrusted paths.",
    difficulty: "easy"
  },
  {
    id: "l6-q2",
    lecture: "Lecture 6",
    topic: "HTTPS Definition",
    question: "Which equation best represents HTTPS in the lecture?",
    options: [
      "HTTPS = HTTP + DNS",
      "HTTPS = HTTP + TLS",
      "HTTPS = HTTP + UDP",
      "HTTPS = HTTP + SMTP"
    ],
    correctAnswer: "HTTPS = HTTP + TLS",
    explanation: "HTTPS is HTTP carried through a TLS-secured transport connection.",
    difficulty: "easy"
  },
  {
    id: "l6-q3",
    lecture: "Lecture 6",
    topic: "CIA Security Goals",
    question: "Which security property ensures that data cannot be read by unauthorized parties?",
    options: [
      "Integrity",
      "Availability",
      "Confidentiality",
      "Compression"
    ],
    correctAnswer: "Confidentiality",
    explanation: "Confidentiality protects information from unauthorized disclosure.",
    difficulty: "easy"
  },
  {
    id: "l6-q4",
    lecture: "Lecture 6",
    topic: "Symmetric Encryption",
    question: "What is the main characteristic of symmetric encryption?",
    options: [
      "It uses one shared secret key for encryption and decryption",
      "It always uses two unrelated keys",
      "It uses only public keys",
      "It cannot encrypt application data"
    ],
    correctAnswer: "It uses one shared secret key for encryption and decryption",
    explanation: "Symmetric encryption uses the same shared secret key, which makes secure key distribution the main challenge.",
    difficulty: "easy"
  },
  {
    id: "l6-q5",
    lecture: "Lecture 6",
    topic: "Asymmetric Encryption",
    question: "Which key can anyone use to encrypt data intended for the owner in a public-key system?",
    options: [
      "Private key",
      "Public key",
      "Session key only",
      "MAC key only"
    ],
    correctAnswer: "Public key",
    explanation: "Anyone can use the public key to encrypt information, while only the corresponding private key can decrypt it.",
    difficulty: "easy"
  },
  {
    id: "l6-q6",
    lecture: "Lecture 6",
    topic: "TLS Hybrid Encryption",
    question: "Why does TLS combine asymmetric and symmetric cryptography?",
    options: [
      "Asymmetric encryption is always faster than symmetric encryption",
      "Asymmetric methods securely establish key material, while symmetric encryption efficiently protects bulk data",
      "Symmetric encryption cannot encrypt data",
      "TLS avoids key exchange entirely"
    ],
    correctAnswer: "Asymmetric methods securely establish key material, while symmetric encryption efficiently protects bulk data",
    explanation: "TLS uses asymmetric cryptography during secure negotiation and then uses symmetric encryption for efficient application-data transfer.",
    difficulty: "medium"
  },
  {
    id: "l6-q7",
    lecture: "Lecture 6",
    topic: "TLS Handshake",
    question: "Which message begins the TLS handshake from the client?",
    options: [
      "ServerHello",
      "Certificate",
      "ClientHello",
      "Finished"
    ],
    correctAnswer: "ClientHello",
    explanation: "The client starts the handshake with ClientHello, offering supported protocol versions, cipher suites, a random nonce, and extensions.",
    difficulty: "easy"
  },
  {
    id: "l6-q8",
    lecture: "Lecture 6",
    topic: "Certificate Validation",
    question: "How does certificate validation help prevent a man-in-the-middle attack?",
    options: [
      "It removes all encryption",
      "The client verifies the server certificate through a trusted certificate chain",
      "It disables DNS",
      "It sends passwords in plaintext"
    ],
    correctAnswer: "The client verifies the server certificate through a trusted certificate chain",
    explanation: "The client checks whether the server certificate chains to a trusted Certificate Authority, establishing confidence in the server's identity.",
    difficulty: "medium"
  },
  {
    id: "l6-q9",
    lecture: "Lecture 6",
    topic: "Certificate Authorities and Trust Chains",
    question: "Which certificate is at the top of a typical trust chain?",
    options: [
      "Server certificate",
      "Intermediate certificate",
      "Root CA certificate",
      "Client cookie"
    ],
    correctAnswer: "Root CA certificate",
    explanation: "The trust chain begins at a trusted Root CA and proceeds through intermediate certificates to the server certificate.",
    difficulty: "easy"
  },
  {
    id: "l6-q10",
    lecture: "Lecture 6",
    topic: "AWS Certificate Manager",
    question: "What does AWS Certificate Manager automate for certificates?",
    options: [
      "Only IP routing",
      "Certificate issuance and renewal",
      "Packet fragmentation",
      "Database replication"
    ],
    correctAnswer: "Certificate issuance and renewal",
    explanation: "AWS Certificate Manager automates certificate lifecycle tasks such as issuance, validation, and renewal.",
    difficulty: "easy"
  },
  {
    id: "l7-q1",
    lecture: "Lecture 7",
    topic: "Email Architecture",
    question: "What is the primary role of a User Agent in an email system?",
    options: [
      "Routing IP packets",
      "Composing, reading, replying to, and forwarding email",
      "Managing DNS zones only",
      "Encrypting submarine cables"
    ],
    correctAnswer: "Composing, reading, replying to, and forwarding email",
    explanation: "The User Agent is the client-side email application used by a person to interact with messages.",
    difficulty: "easy"
  },
  {
    id: "l7-q2",
    lecture: "Lecture 7",
    topic: "Email Architecture",
    question: "What happens when the recipient's mail server is temporarily down?",
    options: [
      "The message is always deleted",
      "The message is stored in a queue and retried later",
      "The sender's computer becomes the recipient server",
      "DNS is disabled"
    ],
    correctAnswer: "The message is stored in a queue and retried later",
    explanation: "Mail servers use queues to temporarily store messages and retry delivery when the destination server becomes available.",
    difficulty: "easy"
  },
  {
    id: "l7-q3",
    lecture: "Lecture 7",
    topic: "SMTP",
    question: "What is SMTP primarily used for?",
    options: [
      "Retrieving web pages",
      "Transferring email messages between mail systems",
      "Resolving domain names",
      "Assigning IP addresses"
    ],
    correctAnswer: "Transferring email messages between mail systems",
    explanation: "SMTP is the email transfer protocol used to push messages between clients and mail servers or between mail servers.",
    difficulty: "easy"
  },
  {
    id: "l7-q4",
    lecture: "Lecture 7",
    topic: "SMTP Ports",
    question: "Which SMTP port is commonly used for server-to-server email transfer?",
    options: [
      "25",
      "53",
      "110",
      "143"
    ],
    correctAnswer: "25",
    explanation: "Port 25 is the traditional SMTP port used for mail-server-to-mail-server communication.",
    difficulty: "easy"
  },
  {
    id: "l7-q5",
    lecture: "Lecture 7",
    topic: "SMTP Command Sequence",
    question: "Which SMTP command starts the actual mail content transfer?",
    options: [
      "HELO",
      "MAIL FROM",
      "DATA",
      "QUIT"
    ],
    correctAnswer: "DATA",
    explanation: "After identifying the sender and recipients, the DATA command begins transmission of the message content.",
    difficulty: "easy"
  },
  {
    id: "l7-q6",
    lecture: "Lecture 7",
    topic: "POP3 vs IMAP",
    question: "Which protocol maintains mailbox state on the server and supports synchronized folders across devices?",
    options: [
      "POP3",
      "IMAP",
      "SMTP",
      "MIME"
    ],
    correctAnswer: "IMAP",
    explanation: "IMAP maintains server-side mailbox state, supports folders, flags, and multi-device synchronization.",
    difficulty: "easy"
  },
  {
    id: "l7-q7",
    lecture: "Lecture 7",
    topic: "POP3 vs IMAP",
    question: "Which protocol is generally described as simpler and commonly associated with downloading messages from the server?",
    options: [
      "POP3",
      "IMAP",
      "DNS",
      "DKIM"
    ],
    correctAnswer: "POP3",
    explanation: "POP3 is simpler and commonly uses download-oriented behavior, unlike IMAP's server-side synchronization model.",
    difficulty: "easy"
  },
  {
    id: "l7-q8",
    lecture: "Lecture 7",
    topic: "MIME",
    question: "Why is MIME needed in email systems?",
    options: [
      "SMTP originally handled arbitrary binary attachments directly",
      "MIME extends email to support non-ASCII content and binary attachments",
      "MIME replaces DNS",
      "MIME removes email headers"
    ],
    correctAnswer: "MIME extends email to support non-ASCII content and binary attachments",
    explanation: "MIME adds content-type and encoding information so email can safely carry text in various forms and binary attachments.",
    difficulty: "medium"
  },
  {
    id: "l7-q9",
    lecture: "Lecture 7",
    topic: "Base64 Encoding",
    question: "What is the main purpose of Base64 in email?",
    options: [
      "Reduce all messages to half their size",
      "Represent binary data using ASCII characters",
      "Encrypt email permanently",
      "Resolve mail domains"
    ],
    correctAnswer: "Represent binary data using ASCII characters",
    explanation: "Base64 converts binary data into a text representation suitable for systems that originally expected ASCII-safe content.",
    difficulty: "easy"
  },
  {
    id: "l7-q10",
    lecture: "Lecture 7",
    topic: "DNS MX Records",
    question: "What does an MX record identify?",
    options: [
      "The sender's MAC address",
      "The mail server responsible for receiving email for a domain",
      "A browser cookie",
      "A TLS cipher suite"
    ],
    correctAnswer: "The mail server responsible for receiving email for a domain",
    explanation: "MX records tell sending mail systems which mail servers accept mail for a recipient domain.",
    difficulty: "medium"
  },
  {
    id: "l7-q11",
    lecture: "Lecture 7",
    topic: "SPF DKIM DMARC",
    question: "What is a key purpose of SPF?",
    options: [
      "Specify authorized sending servers for a domain",
      "Encrypt the email body",
      "Download messages from a mailbox",
      "Replace DNS MX records"
    ],
    correctAnswer: "Specify authorized sending servers for a domain",
    explanation: "SPF allows a domain owner to publish which mail servers are authorized to send mail on behalf of that domain.",
    difficulty: "medium"
  },
  {
    id: "l7-q12",
    lecture: "Lecture 7",
    topic: "SPF DKIM DMARC",
    question: "What additional capability does DKIM provide?",
    options: [
      "A cryptographic signature on outgoing mail",
      "A TCP connection to port 110",
      "A replacement for SMTP",
      "A local IP address assignment"
    ],
    correctAnswer: "A cryptographic signature on outgoing mail",
    explanation: "DKIM adds a cryptographic signature to email headers, which recipients can verify using a public key published in DNS.",
    difficulty: "medium"
  },
  {
    id: "l7-q13",
    lecture: "Lecture 7",
    topic: "SPF DKIM DMARC",
    question: "What is DMARC primarily used for?",
    options: [
      "Defining policy for handling messages that fail authentication checks",
      "Encoding attachments as Base64",
      "Routing packets at Layer 3",
      "Creating TCP connections"
    ],
    correctAnswer: "Defining policy for handling messages that fail authentication checks",
    explanation: "DMARC combines authentication results such as SPF and DKIM and lets domain owners specify policies such as none, quarantine, or reject.",
    difficulty: "medium"
  },
  {
    id: "l8-q1",
    lecture: "Lecture 8",
    topic: "Socket Abstraction",
    question: "What does a socket represent in network programming?",
    options: [
      "A physical Ethernet cable",
      "An OS abstraction representing an endpoint for application communication",
      "A database table",
      "A routing protocol"
    ],
    correctAnswer: "An OS abstraction representing an endpoint for application communication",
    explanation: "A socket is an operating-system abstraction through which an application communicates with the network protocol stack.",
    difficulty: "easy"
  },
  {
    id: "l8-q2",
    lecture: "Lecture 8",
    topic: "File Descriptor Model",
    question: "In a Unix-like OS, what is typically returned when a socket is created?",
    options: [
      "A DNS record",
      "An integer file descriptor",
      "An IP packet",
      "A TLS certificate"
    ],
    correctAnswer: "An integer file descriptor",
    explanation: "Unix-like systems treat sockets similarly to files and assign each created socket an integer file descriptor.",
    difficulty: "easy"
  },
  {
    id: "l8-q3",
    lecture: "Lecture 8",
    topic: "Socket Address",
    question: "What two values make up the socket address emphasized in the lecture?",
    options: [
      "MAC address and DNS name",
      "IP address and port number",
      "Subnet mask and TTL",
      "Protocol and checksum"
    ],
    correctAnswer: "IP address and port number",
    explanation: "A socket endpoint is identified using an IP address and a port number.",
    difficulty: "easy"
  },
  {
    id: "l8-q4",
    lecture: "Lecture 8",
    topic: "IPv4 sockaddr_in",
    question: "What does the sin_port field store in sockaddr_in?",
    options: [
      "The 32-bit IP address",
      "The 16-bit port number in network byte order",
      "The process ID",
      "The TCP sequence number"
    ],
    correctAnswer: "The 16-bit port number in network byte order",
    explanation: "The sockaddr_in structure contains sin_port for the 16-bit network-order port number.",
    difficulty: "medium"
  },
  {
    id: "l8-q5",
    lecture: "Lecture 8",
    topic: "Byte Ordering",
    question: "Which byte-order convention is used as the standard network byte order?",
    options: [
      "Little-endian",
      "Big-endian",
      "Mixed-endian",
      "Host-dependent only"
    ],
    correctAnswer: "Big-endian",
    explanation: "Internet protocols use big-endian, commonly called network byte order, for multi-byte numeric fields.",
    difficulty: "easy"
  },
  {
    id: "l8-q6",
    lecture: "Lecture 8",
    topic: "Byte Ordering Conversion Functions",
    question: "What does htons() perform?",
    options: [
      "Host-to-network conversion for a 16-bit value",
      "Network-to-host conversion for a 32-bit value",
      "Host-to-network conversion for a string",
      "Network-to-host conversion for an IP packet"
    ],
    correctAnswer: "Host-to-network conversion for a 16-bit value",
    explanation: "htons stands for host-to-network-short and converts a 16-bit value into network byte order.",
    difficulty: "easy"
  },
  {
    id: "l8-q7",
    lecture: "Lecture 8",
    topic: "TCP Socket Lifecycle",
    question: "Which system call binds a TCP server socket to a local IP address and port?",
    options: [
      "listen()",
      "bind()",
      "accept()",
      "recv()"
    ],
    correctAnswer: "bind()",
    explanation: "bind() associates the socket with a local IP address and port.",
    difficulty: "easy"
  },
  {
    id: "l8-q8",
    lecture: "Lecture 8",
    topic: "TCP Socket Lifecycle",
    question: "What does accept() do on a listening TCP server socket?",
    options: [
      "Starts DNS resolution",
      "Returns a new connected socket for a completed client connection",
      "Changes UDP to TCP",
      "Closes the listening socket"
    ],
    correctAnswer: "Returns a new connected socket for a completed client connection",
    explanation: "accept() blocks until a connection is established and then returns a separate connected descriptor for that client.",
    difficulty: "medium"
  },
  {
    id: "l8-q9",
    lecture: "Lecture 8",
    topic: "TCP Connection Workflow",
    question: "Which sequence correctly represents the TCP three-way handshake?",
    options: [
      "ACK → FIN → SYN",
      "SYN → SYN-ACK → ACK",
      "SYN → FIN → ACK",
      "ACK → SYN → SYN-ACK"
    ],
    correctAnswer: "SYN → SYN-ACK → ACK",
    explanation: "TCP establishes a connection using SYN, SYN-ACK, and ACK.",
    difficulty: "easy"
  },
  {
    id: "l8-q10",
    lecture: "Lecture 8",
    topic: "UDP Sockets",
    question: "Which call creates an IPv4 UDP socket?",
    options: [
      "socket(AF_INET, SOCK_STREAM, 0)",
      "socket(AF_INET, SOCK_DGRAM, 0)",
      "socket(AF_INET, SOCK_RAW, 0)",
      "socket(AF_INET, SOCK_FILE, 0)"
    ],
    correctAnswer: "socket(AF_INET, SOCK_DGRAM, 0)",
    explanation: "SOCK_DGRAM is used to create a UDP datagram socket.",
    difficulty: "easy"
  },
  {
    id: "l8-q11",
    lecture: "Lecture 8",
    topic: "UDP Datagram Functions",
    question: "Which function is used to send an individual UDP datagram to a destination address?",
    options: [
      "sendto()",
      "listen()",
      "accept()",
      "bindto()"
    ],
    correctAnswer: "sendto()",
    explanation: "sendto() transmits a UDP datagram while explicitly providing the destination address.",
    difficulty: "easy"
  },
  {
    id: "l8-q12",
    lecture: "Lecture 8",
    topic: "I/O Multiplexing and C10K",
    question: "Why are event-driven mechanisms such as epoll useful for highly concurrent servers?",
    options: [
      "They require one blocking thread per connection",
      "They allow efficient monitoring of many file descriptors",
      "They eliminate sockets",
      "They convert TCP into UDP"
    ],
    correctAnswer: "They allow efficient monitoring of many file descriptors",
    explanation: "I/O multiplexing allows one process or a small number of threads to monitor many sockets efficiently, helping address the C10K scalability problem.",
    difficulty: "medium"
  },
  {
    id: "l9-q1",
    lecture: "Lecture 9",
    topic: "Transport Layer Basics",
    question: "What kind of communication does the transport layer provide?",
    options: [
      "Host-to-host communication only",
      "Process-to-process logical communication",
      "Physical signal transmission",
      "DNS-to-DNS communication"
    ],
    correctAnswer: "Process-to-process logical communication",
    explanation: "The network layer provides host-to-host delivery, while the transport layer provides process-to-process communication using ports.",
    difficulty: "easy"
  },
  {
    id: "l9-q2",
    lecture: "Lecture 9",
    topic: "Multiplexing and Demultiplexing",
    question: "What does transport-layer multiplexing do at the sender?",
    options: [
      "Combines data from multiple application processes into transport segments",
      "Combines all routers into one device",
      "Converts TCP into HTTP",
      "Assigns MAC addresses"
    ],
    correctAnswer: "Combines data from multiple application processes into transport segments",
    explanation: "The sender-side transport layer accepts data from multiple applications and identifies the processes using port numbers.",
    difficulty: "medium"
  },
  {
    id: "l9-q3",
    lecture: "Lecture 9",
    topic: "UDP Characteristics",
    question: "Which statement is true of UDP?",
    options: [
      "It requires a three-way handshake",
      "It guarantees in-order delivery",
      "It is connectionless and provides best-effort service",
      "It automatically retransmits lost datagrams"
    ],
    correctAnswer: "It is connectionless and provides best-effort service",
    explanation: "UDP is connectionless, has no handshake, provides no delivery or ordering guarantee, and offers minimal overhead.",
    difficulty: "easy"
  },
  {
    id: "l9-q4",
    lecture: "Lecture 9",
    topic: "UDP Header Format",
    question: "How large is the UDP header?",
    options: [
      "4 bytes",
      "8 bytes",
      "16 bytes",
      "20 bytes"
    ],
    correctAnswer: "8 bytes",
    explanation: "The UDP header contains source port, destination port, length, and checksum fields totaling 8 bytes.",
    difficulty: "easy"
  },
  {
    id: "l9-q5",
    lecture: "Lecture 9",
    topic: "UDP Header Fields",
    question: "What does the UDP Length field represent?",
    options: [
      "Only the application payload",
      "The UDP header plus UDP data",
      "Only the IP header",
      "Only the port numbers"
    ],
    correctAnswer: "The UDP header plus UDP data",
    explanation: "UDP Length records the total size of the UDP header and payload in bytes.",
    difficulty: "medium"
  },
  {
    id: "l9-q6",
    lecture: "Lecture 9",
    topic: "UDP Checksum",
    question: "What technique is used in UDP checksum calculation?",
    options: [
      "Two's complement multiplication",
      "One's complement summation followed by taking the one's complement",
      "CRC only with no addition",
      "Public-key encryption"
    ],
    correctAnswer: "One's complement summation followed by taking the one's complement",
    explanation: "The lecture describes building a pseudo-header, combining it with UDP header and data, performing one's-complement addition, and complementing the result.",
    difficulty: "medium"
  },
  {
    id: "l9-q7",
    lecture: "Lecture 9",
    topic: "UDP Use Cases",
    question: "Why is UDP well suited to many real-time applications?",
    options: [
      "It guarantees retransmission",
      "It avoids connection setup overhead and has low latency",
      "It enforces strict ordering",
      "It requires a large connection state"
    ],
    correctAnswer: "It avoids connection setup overhead and has low latency",
    explanation: "UDP minimizes protocol overhead and connection setup, making it attractive for latency-sensitive workloads such as streaming and gaming.",
    difficulty: "easy"
  },
  {
    id: "l9-q8",
    lecture: "Lecture 9",
    topic: "UDP vs TCP",
    question: "Which feature belongs to TCP rather than UDP?",
    options: [
      "8-byte header",
      "No connection state",
      "Reliable ordered byte-stream delivery",
      "No congestion control"
    ],
    correctAnswer: "Reliable ordered byte-stream delivery",
    explanation: "TCP provides connection-oriented, reliable, ordered byte-stream delivery using acknowledgments and retransmissions.",
    difficulty: "easy"
  },
  {
    id: "l9-q9",
    lecture: "Lecture 9",
    topic: "Transport Layer Position",
    question: "Where is the transport layer located in the five-layer Internet stack?",
    options: [
      "Above the application layer",
      "Between application and network layers",
      "Below the physical layer",
      "Between link and physical layers"
    ],
    correctAnswer: "Between application and network layers",
    explanation: "The transport layer sits below the application layer and above the network layer.",
    difficulty: "easy"
  },
  {
    id: "l10-q1",
    lecture: "Lecture 10",
    topic: "RDT Problem Framework",
    question: "What problem does the reliable data transfer framework address?",
    options: [
      "Providing unreliable data over a reliable channel",
      "Providing reliable delivery over an unreliable network channel",
      "Replacing all routing protocols",
      "Eliminating transport protocols"
    ],
    correctAnswer: "Providing reliable delivery over an unreliable network channel",
    explanation: "The lecture models an unreliable IP channel that may drop, corrupt, duplicate, or reorder packets and builds reliability above it.",
    difficulty: "easy"
  },
  {
    id: "l10-q2",
    lecture: "Lecture 10",
    topic: "RDT Interface Primitives",
    question: "Which primitive is called by the application layer to pass data downward to reliable data transfer?",
    options: [
      "rdt_send()",
      "rdt_rcv()",
      "deliver_data()",
      "udp_send()"
    ],
    correctAnswer: "rdt_send()",
    explanation: "rdt_send() is the application-to-RDT interface used to pass data downward.",
    difficulty: "easy"
  },
  {
    id: "l10-q3",
    lecture: "Lecture 10",
    topic: "RDT 1.0",
    question: "What assumption does rdt 1.0 make?",
    options: [
      "The channel loses every packet",
      "The channel is completely reliable",
      "The channel reorders all packets",
      "The receiver never responds"
    ],
    correctAnswer: "The channel is completely reliable",
    explanation: "RDT 1.0 assumes no bit errors and no packet loss, so no reliability mechanisms are required.",
    difficulty: "easy"
  },
  {
    id: "l10-q4",
    lecture: "Lecture 10",
    topic: "RDT 2.0",
    question: "What major problem is rdt 2.0 designed to handle?",
    options: [
      "Only packet reordering",
      "Bit corruption",
      "Only congestion",
      "DNS failure"
    ],
    correctAnswer: "Bit corruption",
    explanation: "RDT 2.0 introduces checksums and ACK/NAK feedback to handle corrupted packets.",
    difficulty: "easy"
  },
  {
    id: "l10-q5",
    lecture: "Lecture 10",
    topic: "RDT 2.1",
    question: "Why does rdt 2.1 add sequence numbers?",
    options: [
      "To encrypt packets",
      "To detect duplicate packets caused by retransmissions",
      "To increase IP address size",
      "To perform DNS resolution"
    ],
    correctAnswer: "To detect duplicate packets caused by retransmissions",
    explanation: "A 1-bit sequence number lets the receiver distinguish a new packet from a retransmitted duplicate.",
    difficulty: "medium"
  },
  {
    id: "l10-q6",
    lecture: "Lecture 10",
    topic: "RDT 2.2",
    question: "What key change is introduced in rdt 2.2?",
    options: [
      "NAKs are removed and duplicate ACKs are used",
      "Timers are removed",
      "Sequence numbers are removed",
      "Checksums are removed"
    ],
    correctAnswer: "NAKs are removed and duplicate ACKs are used",
    explanation: "RDT 2.2 achieves the same purpose as negative acknowledgments by sending duplicate ACKs for correctly received earlier packets.",
    difficulty: "medium"
  },
  {
    id: "l10-q7",
    lecture: "Lecture 10",
    topic: "RDT 3.0 and Timers",
    question: "What mechanism does rdt 3.0 add to detect packet loss?",
    options: [
      "DNS lookup",
      "A sender-side countdown timer",
      "A larger IP address",
      "A second checksum"
    ],
    correctAnswer: "A sender-side countdown timer",
    explanation: "RDT 3.0 starts a timer after transmission and retransmits when an expected ACK does not arrive before timeout.",
    difficulty: "easy"
  },
  {
    id: "l10-q8",
    lecture: "Lecture 10",
    topic: "Stop-and-Wait Protocol",
    question: "What is the key limitation of stop-and-wait?",
    options: [
      "The sender can transmit unlimited packets",
      "The sender waits for an ACK after each packet, often leaving the link idle",
      "It never waits for feedback",
      "It requires no acknowledgments"
    ],
    correctAnswer: "The sender waits for an ACK after each packet, often leaving the link idle",
    explanation: "Stop-and-wait serializes transmission and acknowledgment, which can make channel utilization extremely low on high-delay paths.",
    difficulty: "easy"
  },
  {
    id: "l10-q9",
    lecture: "Lecture 10",
    topic: "Stop-and-Wait Utilization",
    question: "What happens to stop-and-wait utilization when RTT is much larger than transmission time?",
    options: [
      "Utilization approaches 100%",
      "Utilization becomes very small",
      "Utilization becomes independent of RTT",
      "The protocol sends infinite packets"
    ],
    correctAnswer: "Utilization becomes very small",
    explanation: "The lecture gives utilization as t_trans/(RTT + t_trans), so a large RTT dramatically lowers utilization.",
    difficulty: "medium"
  },
  {
    id: "l10-q10",
    lecture: "Lecture 10",
    topic: "Go-Back-N",
    question: "What happens after a timeout in Go-Back-N?",
    options: [
      "Only the newest packet is retransmitted",
      "All unacknowledged packets in the current window are retransmitted",
      "The connection closes permanently",
      "The receiver discards all future packets"
    ],
    correctAnswer: "All unacknowledged packets in the current window are retransmitted",
    explanation: "Go-Back-N uses cumulative ACKs and typically retransmits all packets that remain unacknowledged after a timeout.",
    difficulty: "medium"
  },
  {
    id: "l10-q11",
    lecture: "Lecture 10",
    topic: "Selective Repeat",
    question: "How does Selective Repeat improve upon Go-Back-N?",
    options: [
      "It retransmits every packet after any loss",
      "It individually acknowledges correctly received packets and retransmits only missing ones",
      "It removes sequence numbers",
      "It removes receiver buffering"
    ],
    correctAnswer: "It individually acknowledges correctly received packets and retransmits only missing ones",
    explanation: "Selective Repeat keeps out-of-order packets and acknowledges them individually, avoiding unnecessary retransmissions.",
    difficulty: "medium"
  },
  {
    id: "l10-q12",
    lecture: "Lecture 10",
    topic: "Selective Repeat Sequence Number Rule",
    question: "For a k-bit sequence number space, what is the window constraint shown for Selective Repeat?",
    options: [
      "N >= 2^k",
      "N = 2^k + 1",
      "N <= 2^(k-1)",
      "N > 2^k"
    ],
    correctAnswer: "N <= 2^(k-1)",
    explanation: "The lecture states that the combined sender and receiver windows must fit within half the sequence number space to avoid ambiguity.",
    difficulty: "hard"
  },
  {
    id: "l11-q1",
    lecture: "Lecture 11",
    topic: "Network Congestion",
    question: "What causes network congestion?",
    options: [
      "Traffic arriving faster than routers and links can process",
      "Only low traffic loads",
      "Using IP addresses",
      "Using UDP headers"
    ],
    correctAnswer: "Traffic arriving faster than routers and links can process",
    explanation: "Congestion occurs when too many sources inject traffic faster than network resources can process and buffer it.",
    difficulty: "easy"
  },
  {
    id: "l11-q2",
    lecture: "Lecture 11",
    topic: "Costs of Congestion",
    question: "Which is a direct cost of congestion mentioned in the lecture?",
    options: [
      "Lower queuing delay",
      "Higher queuing delay and packet drops",
      "Automatic bandwidth expansion",
      "Fewer retransmissions"
    ],
    correctAnswer: "Higher queuing delay and packet drops",
    explanation: "Congestion can increase queuing delay, overflow buffers, cause packet drops, trigger retransmissions, and waste capacity.",
    difficulty: "easy"
  },
  {
    id: "l11-q3",
    lecture: "Lecture 11",
    topic: "TCP Flow Control",
    question: "What problem does TCP flow control solve?",
    options: [
      "Preventing a fast sender from overwhelming a slow receiver's buffer",
      "Selecting DNS servers",
      "Determining the shortest Internet path",
      "Encrypting application data"
    ],
    correctAnswer: "Preventing a fast sender from overwhelming a slow receiver's buffer",
    explanation: "Flow control is an end-to-end mechanism that limits sender transmission according to receiver buffer availability.",
    difficulty: "easy"
  },
  {
    id: "l11-q4",
    lecture: "Lecture 11",
    topic: "TCP Receive Window",
    question: "Which formula represents the TCP receive window in the lecture?",
    options: [
      "rwnd = RcvBuffer + LastByteRcvd",
      "rwnd = RcvBuffer - (LastByteRcvd - LastByteRead)",
      "rwnd = cwnd - RTT",
      "rwnd = RTT / RcvBuffer"
    ],
    correctAnswer: "rwnd = RcvBuffer - (LastByteRcvd - LastByteRead)",
    explanation: "The receive window equals total receiver buffer space minus the bytes received but not yet read by the application.",
    difficulty: "medium"
  },
  {
    id: "l11-q5",
    lecture: "Lecture 11",
    topic: "Flow Control vs Congestion Control",
    question: "Which statement correctly distinguishes flow control from congestion control?",
    options: [
      "Flow control protects the network; congestion control protects only the receiver",
      "Flow control is receiver-oriented and end-to-end; congestion control responds to network-wide conditions",
      "They are identical mechanisms",
      "Congestion control only changes application payload size"
    ],
    correctAnswer: "Flow control is receiver-oriented and end-to-end; congestion control responds to network-wide conditions",
    explanation: "Flow control prevents receiver-buffer overflow, while congestion control regulates sending according to network capacity and congestion.",
    difficulty: "medium"
  },
  {
    id: "l11-q6",
    lecture: "Lecture 11",
    topic: "TCP Congestion Window",
    question: "What does cwnd limit?",
    options: [
      "The amount of unacknowledged data the sender may keep in flight due to congestion control",
      "The receiver's physical memory only",
      "The number of DNS records",
      "The size of Ethernet frames"
    ],
    correctAnswer: "The amount of unacknowledged data the sender may keep in flight due to congestion control",
    explanation: "The congestion window controls how much data TCP allows to remain unacknowledged based on perceived network conditions.",
    difficulty: "easy"
  },
  {
    id: "l11-q7",
    lecture: "Lecture 11",
    topic: "TCP Congestion Control State Machine",
    question: "What happens to cwnd after a timeout according to the lecture's simplified TCP state machine?",
    options: [
      "cwnd becomes very large",
      "cwnd is reset to 1 MSS and TCP enters Slow Start",
      "cwnd remains unchanged forever",
      "TCP enters Fast Recovery directly"
    ],
    correctAnswer: "cwnd is reset to 1 MSS and TCP enters Slow Start",
    explanation: "The lecture shows timeout causing a drastic reduction of cwnd to 1 MSS and a return to Slow Start.",
    difficulty: "medium"
  },
  {
    id: "l11-q8",
    lecture: "Lecture 11",
    topic: "AIMD",
    question: "What does the additive-increase part of AIMD do?",
    options: [
      "Halves cwnd after every RTT",
      "Increases cwnd gradually, typically by about 1 MSS per RTT without loss",
      "Sets cwnd to zero",
      "Doubles cwnd forever"
    ],
    correctAnswer: "Increases cwnd gradually, typically by about 1 MSS per RTT without loss",
    explanation: "TCP probes for more available capacity by gradually increasing cwnd until loss occurs.",
    difficulty: "easy"
  },
  {
    id: "l11-q9",
    lecture: "Lecture 11",
    topic: "AIMD",
    question: "What does multiplicative decrease do after loss detected through three duplicate ACKs in the lecture?",
    options: [
      "Doubles cwnd",
      "Halves cwnd",
      "Sets cwnd equal to RTT",
      "Leaves cwnd unchanged"
    ],
    correctAnswer: "Halves cwnd",
    explanation: "The lecture illustrates additive increase and multiplicative decrease, with cwnd reduced to about half after loss signaled by three duplicate ACKs.",
    difficulty: "easy"
  },
  {
    id: "l11-q10",
    lecture: "Lecture 11",
    topic: "TCP Tahoe vs Reno",
    question: "How does TCP Reno differ from TCP Tahoe for loss detected by three duplicate ACKs?",
    options: [
      "Reno enters Fast Recovery while Tahoe returns to Slow Start",
      "Tahoe enters Fast Recovery while Reno closes the connection",
      "Both always reset to zero",
      "Reno ignores duplicate ACKs"
    ],
    correctAnswer: "Reno enters Fast Recovery while Tahoe returns to Slow Start",
    explanation: "The lecture shows Reno reducing cwnd and entering Fast Recovery for triple duplicate ACKs, whereas Tahoe returns to Slow Start.",
    difficulty: "medium"
  },
  {
    id: "l11-q11",
    lecture: "Lecture 11",
    topic: "Fast Retransmit",
    question: "What triggers TCP Fast Retransmit?",
    options: [
      "One ACK",
      "Three duplicate ACKs indicating a likely missing segment",
      "A DNS timeout",
      "A new connection"
    ],
    correctAnswer: "Three duplicate ACKs indicating a likely missing segment",
    explanation: "Three duplicate ACKs indicate that later data arrived while a segment is missing, allowing TCP to retransmit without waiting for the retransmission timer.",
    difficulty: "easy"
  },
  {
    id: "l12-q1",
    lecture: "Lecture 12",
    topic: "Load Balancing Fundamentals",
    question: "What is the primary role of a load balancer in a server pool?",
    options: [
      "Distribute incoming application traffic across multiple backend servers",
      "Replace all DNS servers",
      "Store every user file",
      "Physically connect continents"
    ],
    correctAnswer: "Distribute incoming application traffic across multiple backend servers",
    explanation: "A load balancer sits in front of backend instances and distributes requests, supporting high availability and horizontal scaling.",
    difficulty: "easy"
  },
  {
    id: "l12-q2",
    lecture: "Lecture 12",
    topic: "Virtual IP Abstraction",
    question: "What does a public Virtual IP provide to clients?",
    options: [
      "A single stable destination while the load balancer forwards requests to private backend IPs",
      "A direct physical connection to every backend server",
      "A replacement for transport-layer ports",
      "A unique MAC address for every client"
    ],
    correctAnswer: "A single stable destination while the load balancer forwards requests to private backend IPs",
    explanation: "Clients connect to one public VIP, while the load balancer proxies or forwards requests internally to backend private IPs.",
    difficulty: "medium"
  },
  {
    id: "l12-q3",
    lecture: "Lecture 12",
    topic: "L4 vs L7 Load Balancing",
    question: "What kind of information can an L7 load balancer inspect that an L4 load balancer generally does not?",
    options: [
      "Only electrical voltages",
      "HTTP headers, URLs, cookies, and application payload information",
      "Only MAC addresses",
      "Only physical cable length"
    ],
    correctAnswer: "HTTP headers, URLs, cookies, and application payload information",
    explanation: "L7 load balancing operates at the application layer and can make routing decisions using HTTP-level information.",
    difficulty: "medium"
  },
  {
    id: "l12-q4",
    lecture: "Lecture 12",
    topic: "L4 vs L7 Load Balancing",
    question: "Which is a typical advantage of L4 load balancing?",
    options: [
      "Inspecting every application field",
      "High throughput and low latency",
      "Understanding every URL path",
      "Performing user-specific content rendering"
    ],
    correctAnswer: "High throughput and low latency",
    explanation: "L4 load balancing operates on TCP/UDP information without parsing application payloads, allowing efficient forwarding.",
    difficulty: "easy"
  },
  {
    id: "l12-q5",
    lecture: "Lecture 12",
    topic: "Load Balancing Scheduling",
    question: "What does Round Robin do?",
    options: [
      "Always sends traffic to the least busy server",
      "Distributes requests sequentially across servers",
      "Uses only server weights",
      "Maps users to a hash ring"
    ],
    correctAnswer: "Distributes requests sequentially across servers",
    explanation: "Round Robin cycles through backend servers in sequence, which works well when servers have similar capacity.",
    difficulty: "easy"
  },
  {
    id: "l12-q6",
    lecture: "Lecture 12",
    topic: "Weighted Round Robin",
    question: "Why would a load balancer use Weighted Round Robin?",
    options: [
      "To give more traffic to more powerful servers",
      "To force equal traffic to unequal servers",
      "To eliminate health checks",
      "To disable backend servers"
    ],
    correctAnswer: "To give more traffic to more powerful servers",
    explanation: "Weighted Round Robin assigns larger weights to stronger servers so they receive a higher proportion of traffic.",
    difficulty: "easy"
  },
  {
    id: "l12-q7",
    lecture: "Lecture 12",
    topic: "Least Connections",
    question: "When is Least Connections particularly useful?",
    options: [
      "For long-lived sessions such as streaming or WebSockets",
      "Only for static images",
      "Only when all servers are offline",
      "Only for DNS root servers"
    ],
    correctAnswer: "For long-lived sessions such as streaming or WebSockets",
    explanation: "Least Connections sends new requests to servers with fewer active connections, which is useful when connection durations vary.",
    difficulty: "medium"
  },
  {
    id: "l12-q8",
    lecture: "Lecture 12",
    topic: "Consistent Hashing",
    question: "What problem does consistent hashing reduce compared with ordinary modulo hashing?",
    options: [
      "It eliminates IP addresses",
      "It greatly reduces the number of keys remapped when servers are added or removed",
      "It guarantees no cache misses",
      "It removes all load balancing"
    ],
    correctAnswer: "It greatly reduces the number of keys remapped when servers are added or removed",
    explanation: "With consistent hashing, adding or removing one server remaps only a fraction of the keys instead of nearly all keys.",
    difficulty: "medium"
  },
  {
    id: "l12-q9",
    lecture: "Lecture 12",
    topic: "Global Server Load Balancing",
    question: "What is the purpose of GSLB?",
    options: [
      "Route users across geographically distributed data centers",
      "Encrypt TCP packets",
      "Assign MAC addresses",
      "Replace all backend servers with one machine"
    ],
    correctAnswer: "Route users across geographically distributed data centers",
    explanation: "Global Server Load Balancing directs users to suitable data centers across regions for availability, latency, and disaster recovery.",
    difficulty: "easy"
  },
  {
    id: "l12-q10",
    lecture: "Lecture 12",
    topic: "Anycast BGP Routing",
    question: "What is the key idea behind Anycast as presented in the lecture?",
    options: [
      "Different locations announce the same IP address and routing directs traffic toward a topologically close site",
      "Every location must use a unique IP address",
      "All traffic must travel through one central data center",
      "Anycast works only inside a single LAN"
    ],
    correctAnswer: "Different locations announce the same IP address and routing directs traffic toward a topologically close site",
    explanation: "In Anycast, multiple sites advertise the same address, and Internet routing typically sends users toward an appropriate topologically close location.",
    difficulty: "medium"
  },
  {
    id: "l13-q1",
    lecture: "Lecture 13",
    topic: "Network Layer Role",
    question: "What is the difference between forwarding and routing?",
    options: [
      "Forwarding is network-wide while routing is local",
      "Forwarding is the local act of moving a packet to the correct outgoing link, while routing determines paths",
      "Both terms mean physical transmission",
      "Routing only happens at hosts"
    ],
    correctAnswer: "Forwarding is the local act of moving a packet to the correct outgoing link, while routing determines paths",
    explanation: "Forwarding is a router's local data-plane action, while routing protocols determine the broader packet path through the network.",
    difficulty: "medium"
  },
  {
    id: "l13-q2",
    lecture: "Lecture 13",
    topic: "IPv4 Datagram Structure",
    question: "What is the minimum IPv4 header size shown in the lecture?",
    options: [
      "8 bytes",
      "20 bytes",
      "24 bytes",
      "40 bytes"
    ],
    correctAnswer: "20 bytes",
    explanation: "The basic IPv4 header is 20 bytes when no optional fields are present.",
    difficulty: "easy"
  },
  {
    id: "l13-q3",
    lecture: "Lecture 13",
    topic: "IPv4 Datagram Structure",
    question: "Which IPv4 field identifies the upper-layer protocol carried by the datagram?",
    options: [
      "TTL",
      "Protocol",
      "Flags",
      "Identification"
    ],
    correctAnswer: "Protocol",
    explanation: "The IPv4 Protocol field identifies the encapsulated upper-layer protocol, such as TCP or UDP.",
    difficulty: "easy"
  },
  {
    id: "l13-q4",
    lecture: "Lecture 13",
    topic: "IPv4 Addressing Fundamentals",
    question: "How many bits are in an IPv4 address?",
    options: [
      "16",
      "32",
      "64",
      "128"
    ],
    correctAnswer: "32",
    explanation: "IPv4 addresses are 32-bit values represented as four 8-bit octets.",
    difficulty: "easy"
  },
  {
    id: "l13-q5",
    lecture: "Lecture 13",
    topic: "IPv4 Addressing Fundamentals",
    question: "Which is a valid dotted-decimal IPv4 address?",
    options: [
      "192.168.1.1",
      "192.168.1.999",
      "300.10.1.1",
      "10.2.3"
    ],
    correctAnswer: "192.168.1.1",
    explanation: "Each IPv4 octet must be an 8-bit value from 0 through 255, and the address must contain four octets.",
    difficulty: "easy"
  },
  {
    id: "l13-q6",
    lecture: "Lecture 13",
    topic: "Classful Addressing",
    question: "Which class uses a first-octet range of 192–223?",
    options: [
      "Class A",
      "Class B",
      "Class C",
      "Class D"
    ],
    correctAnswer: "Class C",
    explanation: "Class C addresses begin with first-octet values from 192 through 223.",
    difficulty: "easy"
  },
  {
    id: "l13-q7",
    lecture: "Lecture 13",
    topic: "Classful Addressing",
    question: "Which class was intended for multicast rather than network/host division?",
    options: [
      "Class A",
      "Class B",
      "Class C",
      "Class D"
    ],
    correctAnswer: "Class D",
    explanation: "Class D, with first-octet values 224–239, is used for multicast addressing.",
    difficulty: "easy"
  },
  {
    id: "l13-q8",
    lecture: "Lecture 13",
    topic: "CIDR",
    question: "What does the /24 in 192.168.1.0/24 indicate?",
    options: [
      "24 host bits",
      "24 network-prefix bits",
      "24 total addresses",
      "24 routers"
    ],
    correctAnswer: "24 network-prefix bits",
    explanation: "CIDR /24 means that the first 24 of the 32 IPv4 bits belong to the network prefix.",
    difficulty: "easy"
  },
  {
    id: "l13-q9",
    lecture: "Lecture 13",
    topic: "CIDR Subnet Mask",
    question: "Which subnet mask corresponds to /30?",
    options: [
      "255.255.0.0",
      "255.255.255.0",
      "255.255.255.252",
      "255.255.255.255"
    ],
    correctAnswer: "255.255.255.252",
    explanation: "A /30 prefix contains 30 network bits and 2 host bits, giving the mask 255.255.255.252.",
    difficulty: "medium"
  },
  {
    id: "l13-q10",
    lecture: "Lecture 13",
    topic: "Longest Prefix Match",
    question: "A routing table contains both 192.168.0.0/16 and 192.168.1.0/24. Which route is selected for 192.168.1.10?",
    options: [
      "192.168.0.0/16",
      "192.168.1.0/24",
      "Both equally",
      "Neither"
    ],
    correctAnswer: "192.168.1.0/24",
    explanation: "Longest prefix match chooses the most specific matching prefix, so /24 wins over /16.",
    difficulty: "easy"
  },
  {
    id: "l13-q11",
    lecture: "Lecture 13",
    topic: "Private IPv4 Ranges",
    question: "Which range is one of the RFC 1918 private IPv4 blocks?",
    options: [
      "10.0.0.0/8",
      "11.0.0.0/8",
      "100.0.0.0/8",
      "224.0.0.0/4"
    ],
    correctAnswer: "10.0.0.0/8",
    explanation: "RFC 1918 defines 10.0.0.0/8, 172.16.0.0/12, and 192.168.0.0/16 as private address ranges.",
    difficulty: "easy"
  },
  {
    id: "l13-q12",
    lecture: "Lecture 13",
    topic: "Special IPv4 Address Ranges",
    question: "What is 127.0.0.0/8 commonly used for?",
    options: [
      "Multicast",
      "Loopback",
      "Private LAN addressing",
      "Limited broadcast"
    ],
    correctAnswer: "Loopback",
    explanation: "The 127.0.0.0/8 range is reserved for loopback purposes, such as 127.0.0.1.",
    difficulty: "easy"
  },
  {
    id: "l14-q1",
    lecture: "Lecture 14",
    topic: "IP Addressing Recap",
    question: "How many usable host addresses does a conventional IPv4 subnet with h host bits provide, according to the lecture?",
    options: [
      "2^h",
      "2^h - 1",
      "2^h - 2",
      "h^2"
    ],
    correctAnswer: "2^h - 2",
    explanation: "Two addresses are reserved for the subnet's network ID and broadcast address, leaving 2^h - 2 usable host addresses.",
    difficulty: "easy"
  },
  {
    id: "l14-q2",
    lecture: "Lecture 14",
    topic: "Subnetting Mathematics",
    question: "If b host bits are borrowed to create subnets, how many subnets are produced?",
    options: [
      "b",
      "2b",
      "2^b",
      "b^2"
    ],
    correctAnswer: "2^b",
    explanation: "Borrowing b bits increases the number of possible subnet prefixes to 2^b.",
    difficulty: "easy"
  },
  {
    id: "l14-q3",
    lecture: "Lecture 14",
    topic: "Subnetting Example",
    question: "When 192.168.1.0/24 is divided into 4 equal subnets, what new prefix length is used?",
    options: [
      "/25",
      "/26",
      "/27",
      "/28"
    ],
    correctAnswer: "/26",
    explanation: "Four subnets require borrowing 2 bits, so the original /24 becomes /26.",
    difficulty: "easy"
  },
  {
    id: "l14-q4",
    lecture: "Lecture 14",
    topic: "Subnetting Example",
    question: "How many usable host addresses are in each /26 subnet in the lecture's example?",
    options: [
      "30",
      "62",
      "64",
      "126"
    ],
    correctAnswer: "62",
    explanation: "A /26 network has 6 host bits, giving 64 total addresses and 62 usable host addresses after excluding network and broadcast.",
    difficulty: "easy"
  },
  {
    id: "l14-q5",
    lecture: "Lecture 14",
    topic: "VLSM",
    question: "What is the main advantage of Variable Length Subnet Masking (VLSM)?",
    options: [
      "All subnets must have identical sizes",
      "Subnets can have different sizes according to host requirements",
      "It eliminates subnet masks",
      "It changes IPv4 addresses to MAC addresses"
    ],
    correctAnswer: "Subnets can have different sizes according to host requirements",
    explanation: "VLSM allocates subnet sizes according to the actual number of hosts needed by different departments or network segments.",
    difficulty: "easy"
  },
  {
    id: "l14-q6",
    lecture: "Lecture 14",
    topic: "VLSM Example",
    question: "In the lecture's VLSM example, which department receives the largest subnet?",
    options: [
      "HR with 25 hosts",
      "R&D with 10 hosts",
      "Admin with 50 hosts",
      "Sales with 5 hosts"
    ],
    correctAnswer: "Admin with 50 hosts",
    explanation: "The Admin department has the largest host requirement, so it receives the largest /26 subnet.",
    difficulty: "medium"
  },
  {
    id: "l14-q7",
    lecture: "Lecture 14",
    topic: "DHCP",
    question: "What does DHCP automatically provide to hosts?",
    options: [
      "Only a MAC address",
      "IP configuration such as IP address, subnet mask, gateway, and DNS information",
      "Only a TCP port",
      "Only an SMTP server"
    ],
    correctAnswer: "IP configuration such as IP address, subnet mask, gateway, and DNS information",
    explanation: "DHCP automates assignment of essential network configuration to hosts.",
    difficulty: "easy"
  },
  {
    id: "l14-q8",
    lecture: "Lecture 14",
    topic: "DHCP DORA Exchange",
    question: "What is the first message in the DHCP DORA process?",
    options: [
      "DHCPOFFER",
      "DHCPREQUEST",
      "DHCPACK",
      "DHCPDISCOVER"
    ],
    correctAnswer: "DHCPDISCOVER",
    explanation: "The client begins the DORA exchange by broadcasting DHCPDISCOVER to locate DHCP servers.",
    difficulty: "easy"
  },
  {
    id: "l14-q9",
    lecture: "Lecture 14",
    topic: "DHCP DORA Exchange",
    question: "Which DHCP message confirms the offered configuration and completes the basic exchange?",
    options: [
      "DHCPDISCOVER",
      "DHCPOFFER",
      "DHCPACK",
      "DHCPREQUEST"
    ],
    correctAnswer: "DHCPACK",
    explanation: "The server sends DHCPACK to confirm the lease and allow the client to use the assigned configuration.",
    difficulty: "easy"
  },
  {
    id: "l14-q10",
    lecture: "Lecture 14",
    topic: "NAT Fundamentals",
    question: "Why is NAT useful in IPv4 networks?",
    options: [
      "It allows many private hosts to share a public IPv4 address",
      "It eliminates private addresses",
      "It increases IPv4 from 32 to 128 bits",
      "It replaces routing"
    ],
    correctAnswer: "It allows many private hosts to share a public IPv4 address",
    explanation: "NAT allows multiple internal private addresses to communicate through a smaller set, often one, of public addresses.",
    difficulty: "easy"
  },
  {
    id: "l14-q11",
    lecture: "Lecture 14",
    topic: "NAT Types",
    question: "Which NAT type maps many private IP/port combinations to one public IP using different public ports?",
    options: [
      "Static NAT",
      "Dynamic NAT",
      "PAT (NAPT)",
      "Loopback NAT"
    ],
    correctAnswer: "PAT (NAPT)",
    explanation: "Port Address Translation, or NAPT/PAT, allows many private hosts to share one public IPv4 address by differentiating connections with port numbers.",
    difficulty: "medium"
  },
  {
    id: "l14-q12",
    lecture: "Lecture 14",
    topic: "NAT Types",
    question: "Which NAT type provides a one-to-one mapping between a private and public IP address?",
    options: [
      "Static NAT",
      "Dynamic NAT",
      "PAT",
      "Anycast NAT"
    ],
    correctAnswer: "Static NAT",
    explanation: "Static NAT uses a fixed one-to-one mapping between a private address and a public address.",
    difficulty: "easy"
  },
  {
    id: "l14-q13",
    lecture: "Lecture 14",
    topic: "IPv6 Addressing",
    question: "How many bits are in an IPv6 address?",
    options: [
      "32",
      "64",
      "96",
      "128"
    ],
    correctAnswer: "128",
    explanation: "IPv6 uses 128-bit addresses, providing a vastly larger address space than IPv4.",
    difficulty: "easy"
  },
  {
    id: "l14-q14",
    lecture: "Lecture 14",
    topic: "IPv6 Transition",
    question: "Which of the following is listed as an IPv6 transition strategy?",
    options: [
      "Dual Stack",
      "Static ARP",
      "Circuit Switching",
      "Token Ring"
    ],
    correctAnswer: "Dual Stack",
    explanation: "The lecture lists Dual Stack, tunneling, and NAT64/DNS64 among IPv6 transition strategies.",
    difficulty: "easy"
  }
];
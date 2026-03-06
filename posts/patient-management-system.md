---
title: "Building a Patient Management System in C: Security Meets Simplicity"
category: "Programming"
date: "January 2025"
readTime: "6 min read"
---

Every CS student eventually faces the challenge of building something *real* — not just another "Hello World" or sorting algorithm exercise. For me, that project was a **Patient Management System** built entirely in C.

## The Problem

Small clinics and healthcare setups need a way to manage patient records — names, ages, blood groups, disease history, consulting doctors. But most solutions are either expensive enterprise software or overly complex web applications. I wanted something **simple, secure, and offline**.

## Architecture & Design

The system runs entirely in the command line. Here's what makes it interesting:

```c
// Core data structure
struct Patient {
    char name[50];
    int age;
    char gender[10];
    char bloodGroup[5];
    char contact[15];  // Used as unique ID
    char disease[100];
    char doctor[50];
};
```

### Security First

Before accessing any records, users must authenticate through a login system. Multiple valid passwords support different access levels — doctors, admins, and staff each have their own credentials.

### Intelligent Search

The search system supports multiple parameters:
- **By Name** — fuzzy matching for quick lookups
- **By Contact** — exact match using the unique identifier
- **By Disease** — useful for research and pattern analysis
- **By Blood Group** — critical for emergency donor matching

## Data Persistence

All records are stored in `patients.txt` using structured file I/O. The `savePatientsToFile()` function runs automatically after every modification, ensuring zero data loss even during unexpected termination.

## Key Functions

| Function | Purpose |
|---|---|
| `loginSystem()` | Multi-password authentication |
| `addPatient()` | Full profile creation with validation |
| `searchPatient()` | Multi-parameter search engine |
| `updatePatient()` | Safe updates via contact-based identification |

## Lessons Learned

1. **File I/O in C is powerful** but requires careful handling of buffer overflows and string termination
2. **Data integrity matters** — using contact numbers as unique identifiers prevents accidental overwrites
3. **User experience in CLI** can still be good with clear menus and formatted output

## What's Next

Future improvements include encryption for stored data, role-based access control, and potentially a GUI version using C++ or Python. The foundation is solid — it just needs a prettier face.

The full source code is available on my [GitHub](https://github.com/itzRatul/Patient-management-system).

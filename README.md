

Student Course Management System
C++ Console Application

Version 2.0  —  April 2026

C++17	OOP	File I/O	ANSI Colors	v2.0	Open Source

Developed by: [Your Name]
GitHub: github.com/[your-username]/student-course-manager


1. Project Overview
Student Course Management System is a C++ console application built using Object-Oriented Programming principles. It allows managing student records, enrolling them in courses, and performing various operations with a colorful and intuitive terminal interface.

The project has been developed in two major versions:
•	Version 1.0  —  Initial implementation with basic CRUD and file persistence
•	Version 2.0  —  Expanded features, bug fixes, and a redesigned CMD interface

Project Structure
File	Role
Person.h / Person.cpp	Base class — stores name & email, virtual display()
Student.h / Student.cpp	Inherits Person — adds ID, GPA, courses set, display with ANSI colors
CourseManager.h / .cpp	Core logic — map<int,Student>, all operations, file I/O
Menu.h / Menu.cpp	User interface — colored box menu, input handling
main.cpp	Entry point — creates Menu and calls run()
records.txt	Auto-generated data file (replaces old database.txt)

2. What Changed: v1.0  →  v2.0
The following table shows the key differences between the original version and the updated version:

⛔  Version 1.0  (Old)	✅  Version 2.0  (New)
9 menu options (1-10 with gap)	13 menu options (0-12, clean numbering)
Plain = borders in terminal	Unicode box-drawing ╔══╗ frame with ANSI colors
No color in output	Full ANSI color scheme: Cyan, Green, Yellow, Red
Student display uses ---- dividers	Student card with +-----+ border & GPA label badge
No Update feature	Option [4]: Update Name, Email, or GPA interactively
No Drop Course feature	Option [7]: Remove a specific course from student
No statistics	Option [10]: Total students, avg/top/lowest GPA report
database.txt  (could duplicate data)	records.txt  (single save, no append bug)
Exit is option 10	Exit is option 0 (standard convention)
Error messages plain text	Errors use [!] red prefix, success uses [✓] green
appendStudentToFile() causes duplicates	Removed — only saveToFile() is called on any write

3. Bugs Fixed from v1.0
Three bugs were identified and fixed in the original code:

🐛  Bug: Duplicate Data on Add
Problem: AddStudent() called both saveToFile() (which rewrites everything) and appendStudentToFile() (which appends again). Every new student got written twice to database.txt. This was clearly visible in the original database.txt file.
Fix: Removed appendStudentToFile() entirely. AddStudent() now calls only saveToFile() once.
🐛  Bug: Dead Code After return in searchStudent()
Problem: There was an ifstream block placed after a return statement — it was unreachable and never executed.
Fix: Removed the dead code block. The function now returns cleanly.
🐛  Bug: Wrong Logic in appendStudentToFile()
Problem: The guard condition was (students.count(id) > 1) which is never true for a map (keys are unique). The check was supposed to prevent duplicates but did nothing.
Fix: Made irrelevant by removing the function entirely — the root cause was the dual-write design.

4. Complete Feature List

#	Feature	Description	Status
1	Add Student	Enter ID, Name, GPA (0.0–4.0), Email — saved immediately to records.txt	v1.0
2	Remove Student	Delete a student by ID — file is updated automatically	v1.0
3	Search Student	Find a student by ID and display their full card	v1.0
4	Update Student	Choose to update Name, Email, or GPA for an existing student	NEW
5	Display All Students	Print all students with total count header	v1.0
6	Enroll in Course	Add a course to student's set (duplicates ignored automatically)	v1.0
7	Drop a Course	Remove a specific course from a student's enrollment	NEW
8	Show Student Courses	List all enrolled courses for a student by ID	v1.0
9	Sort by GPA	Display all students ranked highest GPA first with rank number	v1.0
10	Statistics	Total students, average GPA, highest & lowest GPA with names, enrollment count	NEW
11	Save to File	Manually save all data to records.txt	v1.0
12	Load from File	Load data from records.txt into memory	v1.0
0	Exit	Quit the program cleanly	v1.0

5. New Features — Detailed
5.1  Update Student  [4]
Allows editing an existing student's data without removing and re-adding them. After entering the student ID, the user picks what to change:
•	Name — enter new full name
•	Email — enter new email address
•	GPA — enter new value; validated to be in range 0.0–4.0
Changes are saved to records.txt immediately after the update.

5.2  Drop Course  [7]
Removes a specific course from a student's course set. If the student or course is not found, an error message is shown. The data file is updated after a successful drop.

5.3  Statistics  [10]
Displays a statistics panel with the following information:
•	Total number of registered students
•	Average GPA across all students
•	Highest GPA — with the student's name
•	Lowest GPA — with the student's name
•	Number of students currently enrolled in at least one course

6. CMD Interface Redesign
The terminal interface was completely redesigned to look different from the original version:

Main Menu — Old vs New
v1.0 Style	v2.0 Style
 ================================================
    Student Course Management System
 ================================================
   1)  Add Student
   2)  Remove Student
   3)  Search Student
   ...
   10) Exit
 ================================================
   Choice: _	 ╔═══════════════════════════════╗
 ║  STUDENT COURSE MANAGER v2.0  ║
 ╠═══════════════════════════════╣
 ║  [1] Add Student             ║
 ║  [4] Update Student   NEW    ║
 ║  [7] Drop a Course    NEW    ║
 ║  [10] Statistics      NEW    ║
 ╠═══════════════════════════════╣
 ║  [0] Exit                    ║
 ╚═══════════════════════════════╝
 >> Choice: _

Color scheme used in v2.0:
•	Cyan (\033[96m)  — borders, section headers
•	Yellow (\033[93m)  — title, student IDs, rank numbers
•	Green (\033[92m)  — success messages [✓], Excellent GPA badge
•	Red (\033[91m)  — error messages [!], Poor GPA badge
•	Magenta (\033[95m)  — course names in student card
•	ANSI Reset (\033[0m)  — applied after every colored segment

7. How to Compile and Run
Windows — Visual Studio
1.	Open the .vcxproj file or create a new Console App project
2.	Add all .h and .cpp files to the project
3.	Enable ANSI color support: go to Project Properties → Linker → System → SubSystem → Console
4.	Build and run with Ctrl+F5

Linux / macOS — GCC
Compile all files together with g++:

g++ -std=c++17 -o StudentSys main.cpp Person.cpp Student.cpp CourseManager.cpp Menu.cpp

./StudentSys


Note: ANSI colors work automatically in any modern Linux/macOS terminal. On older Windows CMD, enable virtual terminal processing or use Windows Terminal / WSL.

8. Class Architecture
The project uses a simple inheritance chain with a composition relationship:

         +------------------+
         |     Person       |   (Base Class)
         |  - m_name        |
         |  - m_email       |
         |  + display()     |   virtual
         +--------+---------+
                  |  inherits
         +--------+---------+
         |     Student      |
         |  - m_id          |
         |  - m_GPA         |
         |  - courses (set) |
         |  + display()     |   override + ANSI colors
         |  + DropCourse()  |   NEW in v2.0
         +--------+---------+
                  |  stored in map<int, Student>
         +--------+---------+
         |  CourseManager   |   (Business Logic)
         |  + AddStudent()  |
         |  + updateStudent()|  NEW in v2.0
         |  + dropCourse()  |  NEW in v2.0
         |  + showStatistics()|  NEW in v2.0
         |  + saveToFile()  |
         +--------+---------+
                  |  used by
         +--------+---------+
         |      Menu        |   (UI Layer)
         |  + showMenu()    |   Unicode box + ANSI
         |  + handleInput() |
         +------------------+

9. Data File Format  (records.txt)
Each line represents one student in pipe-delimited format:


ID|Name|Email|GPA|course1,course2,course3

Example:
101|Mohamed Ali|m.ali@uni.edu|3.8|Math,Physics,CS101
102|Sara Ahmed|sara@uni.edu|2.5|

If a student has no courses, the courses field is left empty after the last pipe. The file is updated automatically after every add, remove, update, enroll, or drop operation.

10. Possible Future Improvements
•	Search by Name (partial match with string::find)
•	Filter students by GPA range
•	Export report to a formatted .txt file
•	Add credit hours per course
•	Add a Course class with max capacity
•	Login system with Admin / Student roles
•	GUI frontend using Qt or a web API wrapper

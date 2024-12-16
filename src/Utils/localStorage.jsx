

const employees = [
  {
    "id": 1,
    "firstName": "Aarav",
    "email": "e@e.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Update Documentation",
        "taskDescription": "Update the user manual for the new software release.",
        "taskDate": "2024-12-10",
        "category": "Documentation"
      },
      {
        "active": true,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Fix Bugs",
        "taskDescription": "Resolve critical bugs reported by QA team.",
        "taskDate": "2024-12-09",
        "category": "Development"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Implement Feature X",
        "taskDescription": "Implement the new feature for the user dashboard.",
        "taskDate": "2024-12-08",
        "category": "Development"
      }
    ],
    "taskCount": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 1
    }
  },
  {
    "id": 2,
    "firstName": "Priya",
    "email": "employee2@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Design UI Mockups",
        "taskDescription": "Create the UI designs for the upcoming project.",
        "taskDate": "2024-12-12",
        "category": "Design"
      },
      {
        "active": true,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Refactor Codebase",
        "taskDescription": "Refactor the existing code to improve readability and performance.",
        "taskDate": "2024-12-06",
        "category": "Development"
      }
    ],
    "taskCount": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 3,
    "firstName": "Ravi",
    "email": "employee3@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Test New Feature",
        "taskDescription": "Perform user testing on the newly implemented feature.",
        "taskDate": "2024-12-13",
        "category": "Testing"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Fix Login Issue",
        "taskDescription": "Fix the intermittent login issue that users are facing.",
        "taskDate": "2024-12-11",
        "category": "Bug Fix"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Create Test Plan",
        "taskDescription": "Write a comprehensive test plan for the new features.",
        "taskDate": "2024-12-05",
        "category": "Testing"
      }
    ],
    "taskCount": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 4,
    "firstName": "Sanya",
    "email": "employee4@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Prepare Presentation",
        "taskDescription": "Prepare a presentation for the client meeting next week.",
        "taskDate": "2024-12-15",
        "category": "Marketing"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Coordinate Team Meeting",
        "taskDescription": "Schedule and organize the weekly team meeting.",
        "taskDate": "2024-12-07",
        "category": "Management"
      }
    ],
    "taskCount": {
      "active": 2,
      "newTask": 1,
      "completed": 0,
      "failed": 0
    }
  },
  {
    "id": 5,
    "firstName": "Ishaan",
    "email": "employee5@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Set Up Server",
        "taskDescription": "Set up the new server for the upcoming project.",
        "taskDate": "2024-12-14",
        "category": "Infrastructure"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Deploy to Production",
        "taskDescription": "Deploy the new release to the production server.",
        "taskDate": "2024-12-03",
        "category": "Operations"
      }
    ],
    "taskCount": {
      "active": 1,
      "newTask": 1,
      "completed": 0,
      "failed": 1
    }
  }
];

  
  const admin = [{
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
  }];
  

  export const setLocalStorage = ()=>{
       localStorage.setItem('employees', JSON.stringify(employees))
       localStorage.setItem('admin', JSON.stringify(admin))
    }

  export const getLocalStorage = ()=>{
   const employee = JSON.parse(localStorage.getItem('employees'))
   const admin = JSON.parse(localStorage.getItem('admin'))
   
   return {employees, admin}
   
  }
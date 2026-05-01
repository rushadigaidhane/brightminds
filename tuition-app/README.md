# 🎓 BrightMinds Tuition — Full Stack Web App

A complete tuition institute website with:
- **Backend**: Spring Boot 3 (MVC, REST API, Spring Data JPA, H2 DB, Lombok)
- **Frontend**: React 18 (Vite, React Router, Axios)

---

## 📁 Project Structure

```
tuition-app/
├── backend/                        ← Spring Boot project
│   ├── pom.xml
│   └── src/main/java/com/brightminds/
│       ├── BrightMindsApplication.java
│       ├── config/WebConfig.java   ← CORS config
│       ├── controller/             ← REST controllers
│       ├── model/                  ← JPA entities
│       ├── repository/             ← Spring Data repos
│       └── service/                ← Business logic + seed data
│
└── frontend/                       ← React (Vite) project
    ├── index.html
    ├── vite.config.js              ← Proxy /api → localhost:8080
    ├── package.json
    └── src/
        ├── main.jsx
        ├── App.jsx                 ← Routes
        ├── index.css               ← Global styles & CSS variables
        ├── services/api.js         ← Axios API calls
        ├── components/             ← Navbar, Footer, CourseCard, Toast
        └── pages/                  ← Home, Courses, Register, Timetable, Notes, About, Contact
```

---

## 🚀 How to Run

### Step 1 — Start the Backend

**Requirements**: Java 17+, Maven 3.8+

```bash
cd backend
mvn spring-boot:run
```

Backend starts at **http://localhost:8080**

**H2 Console** (dev DB browser):
👉 http://localhost:8080/h2-console
- JDBC URL: `jdbc:h2:mem:brightmindsdb`
- Username: `sa` | Password: *(empty)*

---

### Step 2 — Start the Frontend

**Requirements**: Node.js 18+

```bash
cd frontend
npm install
npm run dev
```

Frontend starts at **http://localhost:3000**

> The Vite proxy automatically forwards `/api/*` calls to `http://localhost:8080`

---

## 🔌 REST API Endpoints

| Method | Endpoint                        | Description                  |
|--------|---------------------------------|------------------------------|
| GET    | `/api/courses`                  | Get all courses               |
| GET    | `/api/courses?category=jee`     | Filter by category            |
| GET    | `/api/courses/{id}`             | Get course by ID              |
| POST   | `/api/registrations`            | Submit enrollment form        |
| GET    | `/api/registrations`            | List all registrations        |
| GET    | `/api/testimonials`             | Get all testimonials          |
| GET    | `/api/timetable`                | Get weekly timetable slots    |

### Sample Registration POST body:
```json
{
  "studentName": "Rahul Sharma",
  "parentName": "Rajesh Sharma",
  "phone": "9876543210",
  "email": "rahul@example.com",
  "studentClass": "Class 12",
  "board": "CBSE",
  "course": "JEE Mains Prep",
  "batchTime": "Morning 6am–8am"
}
```

---

## 🎨 Color Palette

| Color      | Hex       | Usage         |
|------------|-----------|---------------|
| Primary    | `#4F46E5` | Buttons, links, headings |
| Secondary  | `#22C55E` | Success, growth highlights |
| Accent     | `#F59E0B` | CTA buttons, attention |
| Background | `#F9FAFB` | Page background |
| Text       | `#111827` | Body text |

---

## 📦 Tech Stack

### Backend
- Spring Boot 3.2
- Spring MVC (REST)
- Spring Data JPA + Hibernate
- H2 In-Memory Database
- Lombok
- Bean Validation (jakarta.validation)

### Frontend
- React 18
- React Router DOM v6
- Axios (HTTP client)
- Vite (build tool)
- CSS Modules (component-level CSS)

---

## 🔧 Customization

- **Brand name**: Search and replace `BrightMinds` across files
- **Phone number**: Update `919876543210` in `Navbar.jsx`, `Contact.jsx`, `App.jsx`
- **Seed data**: Edit `CourseService.java`, `TestimonialService.java`, `TimetableService.java`
- **Database**: Replace H2 with MySQL/PostgreSQL by updating `pom.xml` and `application.properties`

---

## 🗄️ Switch to MySQL (Production)

In `pom.xml`, replace H2 with:
```xml
<dependency>
  <groupId>com.mysql</groupId>
  <artifactId>mysql-connector-j</artifactId>
  <scope>runtime</scope>
</dependency>
```

In `application.properties`:
```properties
spring.datasource.url=jdbc:mysql://localhost:3306/brightminds
spring.datasource.username=root
spring.datasource.password=yourpassword
spring.jpa.hibernate.ddl-auto=update
```

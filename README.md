# Personal Portfolio Backend

![Cover Image of Portfolio. ](https://adminv2.emmanuelolivo.com/uploads/Screenshot_2024_07_08_at_11_17_56_AM_e439c5ac3b.png)

This is the backend for my personal portfolio, built with Strapi CMS. It uses a SQLite database to manage content and includes webhooks to revalidate the cache on the front end, ensuring the latest content is always displayed.

## Front End

You can take a look at the [front end repo here](https://github.com/emmanuelolivo1002/portfolio-frontend)

## Features

### Content Management

- Easily manage and deliver content for projects, experience, about me, and contact sections.
- User-friendly interface for adding, editing, and deleting content.

### SQLite Database

- Lightweight, file-based database for storing content.

### Webhooks

- Webhooks set up to revalidate the cache on the front end whenever content is updated.
- Ensures that the most recent updates are immediately reflected on the website.

## Technologies Used

- **Strapi CMS:** Headless CMS to manage and deliver content.
- **SQLite:** File-based database system.
- **Node.js:** JavaScript runtime environment.
- **Webhooks:** Used to trigger cache revalidation on the front end.
